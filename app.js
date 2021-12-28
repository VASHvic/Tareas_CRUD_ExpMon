const express = require("express");
const app = express();
const tareasRouter = require("./routes/routes.tareas");
const indexRouter = require("./routes/routes.index");
const path = require("path");

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/tareas", tareasRouter);

app.listen(8080, console.log("Listening on port 8080"));
