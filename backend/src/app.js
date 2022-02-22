require("dotenv").config();
require("./database");
const express = require("express");
const app = express();
const cors = require("cors");
const errorsController = require("./controllers/error.controller");
const servicesRoutes = require("./routes/services.routes");

app.use(
  cors({
    origin: ["http://127.0.0.1", "http://localhost", "192.168.2.206", "*"],
  })
);
app.use(express.json());

app.use("services", servicesRoutes);
app.use(errorsController);

module.exports = app;
