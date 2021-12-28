const mongoose = require("mongoose");

let tareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    minlength: 1,
    required: true,
    trim: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
    required: true,
  },
  prioridad: {
    type: Number,
    required: true,
    min: 1,
    max: 3,
  },
});

const Tarea = mongoose.model("Tarea", tareaSchema);

module.exports = Tarea;
