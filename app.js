const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const tareasRouter = require("./routes/routes.tareas");
const indexRouter = require("./routes/routes.index");

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/tareas", tareasRouter);

app.listen(8080, console.log("Listening on port 8080"));
