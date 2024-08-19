const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    telefono: { type: Number, required: true }
  });
  

const UsersModel = mongoose.model("users", UsersSchema)
module.exports = UsersModel