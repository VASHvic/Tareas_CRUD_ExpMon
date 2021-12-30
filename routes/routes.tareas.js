const express = require("express");
const router = express.Router();
const Tarea = require(__dirname + "/../models/Tareas.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/tareas");

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

router.get("/", async (req, res) => {
  const tareas = await Tarea.find().lean();
  res.render("lista_tareas", { tareas: tareas, prioridades: prioridades });
});
router.get("/prioridad", async (req, res) => {
  const tareas = await Tarea.find().sort({ prioridad: 1 });
  res.render("lista_tareas", { tareas: tareas, prioridades: prioridades });
});
router.get("/fecha", async (req, res) => {
  const tareas = await Tarea.find().sort({ fecha: 1 });
  res.render("lista_tareas", { tareas: tareas, prioridades: prioridades });
});
router.get("/:id", async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id).lean();
    res.render("ficha_tarea", { tarea, prioridades: prioridades });
  } catch {
    res.render("ficha_tarea", { tarea: null });
  }
});

router.post("/", (req, res) => {
  let nuevaTarea = new Tarea({
    titulo: req.body.titulo,
    fecha: req.body.fecha,
    prioridad: req.body.prioridad,
  });
  nuevaTarea
    .save()
    .then((resultado) => {
      if (resultado) res.send({ error: false });
      else res.send({ error: true });
    })
    .catch((error) => {
      res.send({ error: true });
    });
});

router.delete("/:id", (req, res) => {
  Tarea.findByIdAndRemove(req.params.id)
    .then((resultado) => {
      res.send({ error: false });
    })
    .catch((error) => {
      res.render({ error: true });
    });
});

module.exports = router;
