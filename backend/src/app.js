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
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "public/imgs/",
  filename: (req, file, cb) => {
    const filename = `${Date.now()}` + file.originalname;
    req.filename = filename;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

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

app.use(express.static("public"));
app.post("/upload", upload.single("file"), async (req, res, next) => {
  try {
    const { filename } = req;
    const path = `https://backend-c3.herokuapp.com/imgs/${filename}`;
    res.status(201).json({ path });
  } catch (error) {
    next(error);
  }
});
app.use("/", indexRouter);
app.use("/services", routerServices);
app.use("/", routerSign);
app.use("/companies/", routerCompany);
app.use("/reviews", reviewRouter);
app.use("/payments", routerPayments);
app.use(errorsController);

module.exports = app;
