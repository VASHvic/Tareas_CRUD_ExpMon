const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("tareas index");
});

module.exports = router;
