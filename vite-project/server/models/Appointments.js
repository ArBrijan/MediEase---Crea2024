const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    name: String,
    date: String,
    location: String,
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    visibleToDoctors: {
        type: Boolean,
        default: true  // Puedes cambiarlo a false si quieres que la visibilidad sea opcional.
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);


module.exports = Appointment;