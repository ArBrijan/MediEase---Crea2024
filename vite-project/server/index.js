const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require('./models/Users');
const AppointmentModel = require('./models/Appointments');
const DoctorModel = require('./models/Doctors');
const bcrypt = require('bcryptjs');

const app = express();  
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mediEase");

// Ruta para el login de usuario
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email y contraseña son requeridos" });
        }

        const user = await UsersModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        res.json({ message: "Success", userId: user._id.toString() });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error });
    }
});

// Ruta para el login del doctor
app.post('/doctor-login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email y contraseña son requeridos" });
        }

        const doctor = await DoctorModel.findOne({ email });
        if (!doctor) {
            return res.status(400).json({ message: "Doctor no encontrado" });
        }

        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        res.json({ message: "Success", doctorId: doctor._id.toString() });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error });
    }
});

// Ruta para el registro de usuario
app.post('/register', async (req, res) => {
    try {
        const { name, email, password, age, telefono } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new UsersModel({
            name,
            email,
            password: hashedPassword,
            age,
            telefono
        });
        
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Bad Request", message: err.message });
    }
});

// Ruta para crear una cita
app.post('/appointments', async (req, res) => {
    try {
        const { name, date, location, status, userId } = req.body;

        const newAppointment = new AppointmentModel({
            name,
            date,
            location,
            status,
            userId,
        });
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(400).json({ error: 'Error al crear la cita' });
    }
});

// Ruta para borrar una cita por ID
app.delete('/appointments/:id', async (req, res) => {
    try {
        await AppointmentModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Cita borrada con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al borrar la cita", error });
    }
});

// Ruta para obtener todas las citas de un usuario
app.get('/appointments', async (req, res) => {
    const { userId } = req.query;

    if (userId) {
        try {
            const appointments = await AppointmentModel.find({ userId });
            res.json(appointments);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener las citas", error });
        }
    } else {
        // Si no hay userId, se obtienen todas las citas
        try {
            const appointments = await AppointmentModel.find();
            res.json(appointments);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener las citas", error });
        }
    }
});

// Ruta para actualizar una cita por ID
app.put('/appointments/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
  
      console.log("Datos recibidos para actualizar:", updatedData);
  
      const updatedAppointment = await AppointmentModel.findByIdAndUpdate(id, updatedData, { new: true });
  
      if (!updatedAppointment) {
        return res.status(404).send({ message: "Cita no encontrada" });
      }
  
      res.send(updatedAppointment);
    } catch (error) {
      console.error("Error al actualizar la cita:", error);
      res.status(500).send({ message: "Error al actualizar la cita", error });
    }
});

// Ruta para crear un doctor
app.post('/doctors', async (req, res) => {
    try {
        const { name, email, password, specialty, licenseNumber, phone } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newDoctor = new DoctorModel({
            name,
            email,
            password: hashedPassword,
            specialty,
            licenseNumber,
            phone,
        });

        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (err) {
        res.status(400).json({ error: "Error al crear el doctor", message: err.message });
    }
});

// Ruta para obtener todos los doctores
app.get('/doctors', async (req, res) => {
    try {
        const doctors = await DoctorModel.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los doctores", error });
    }
});

// Ruta para obtener un doctor por ID
app.get('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = await DoctorModel.findById(id);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor no encontrado" });
        }
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el doctor", error });
    }
});

// Ruta para actualizar un doctor por ID
app.put('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedDoctor = await DoctorModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedDoctor) {
            return res.status(404).json({ message: "Doctor no encontrado" });
        }
        res.json(updatedDoctor);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el doctor", error });
    }
});

// Ruta para eliminar un doctor por ID
app.delete('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedDoctor = await DoctorModel.findByIdAndDelete(id);
        if (!deletedDoctor) {
            return res.status(404).json({ message: "Doctor no encontrado" });
        }
        res.json({ message: "Doctor eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ message  : "Error al eliminar el doctor", error });
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
