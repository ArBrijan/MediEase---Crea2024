const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    name: String,
    date: String,
    location: String,
    status: String, 
    userId : { type: mongoose.Schema.Types.ObjectId, ref:'users'}
});

const Appointment = mongoose.model('Appointment', appointmentSchema);


module.exports = Appointment;