const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
    specialty: String,
    licenseNumber: String,
    phone: String,
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
