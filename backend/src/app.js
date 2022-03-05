require("dotenv").config();
require("./database");
const express = require("express");
const app = express();
const cors = require("cors");
const errorsController = require("./controllers/error.controller");
const routerServices = require("./routes/services.routes");
const routerSign = require("./routes/sign.routes");
const indexRouter = require("./routes/index.routes");
const routerCompany = require("./routes/company.routes");
const reviewRouter = require("./routes/review.routes");
const routerPayments = require("./routes/payments.routes");

app.use(
  cors({
    origin: [
      "http://127.0.0.1",
      "http://localhost",
      "http://localhost:3000",
      "192.168.2.206",
      "*",
    ],
  })
);
app.use(express.json());

app.use("/", indexRouter);
app.use("/services", routerServices);
app.use("/", routerSign);
app.use("/companies/", routerCompany);
app.use("/reviews", reviewRouter);
app.use("/payments", routerPayments);
app.use(errorsController);

module.exports = app;
