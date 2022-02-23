require("dotenv").config();
require("./database");
const express = require("express");
const app = express();
const cors = require("cors");
const errorsController = require("./controllers/error.controller");
const routerServices = require("./routes/services.routes");
const routerSign = require("./routes/sign.routes");
const indexRouter = require("./routes/index.routes");
app.use(
  cors({
    origin: ["http://127.0.0.1", "http://localhost", "192.168.2.206", "*"],
  })
);
app.use(express.json());

app.use("/", indexRouter);
app.use("/services", routerServices);
app.use("/", routerSign);
app.use(errorsController);

module.exports = app;
