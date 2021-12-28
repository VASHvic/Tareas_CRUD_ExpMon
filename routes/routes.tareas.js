const express = require("express");
const router = express.Router();
const Tarea = require(__dirname + "/../models/Tareas.js");

const prioridades = ["ALTA", "NORMAL", "BAJA"];
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

router.get("/", (req, res) => {
  res.send("tareas index");
});

module.exports = router;
