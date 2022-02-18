require("dotenv").config();
require("./database");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: ["http://127.0.0.1", "http://localhost", "192.168.2.206", "*"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("funciona");
});

module.exports = app;
