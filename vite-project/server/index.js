const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require('./models/Users');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mediEase");

// Ruta para el login
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

        // Compara la contraseña cifrada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        res.json({ message: "Success", userId: user._id });
    } catch (error) {
        res.status(500).json({ message: "Error del servidor", error });
    }
});

// Ruta para el registro
app.post('/register', async (req, res) => {
    try {
        const { name, email, password, age, telefono } = req.body;
        
        // Cifra la contraseña
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

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
