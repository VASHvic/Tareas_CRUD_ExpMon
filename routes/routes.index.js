const express = require("express");
const mongoose = require("mongoose");
const Tarea = require(__dirname + "/../models/Tareas.js");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/tareas");

const router = express.Router();

router.get("/", async (req, res) => {
  const tareas = await Tarea.find(); //anyadir lean después()?
  res.render("index", { tareas });
});
router.get("/nueva_tarea", (req, res) => {
  res.render("nueva_tarea");
});

module.exports = router;
