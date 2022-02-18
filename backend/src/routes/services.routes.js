const servicesRoutes = require("express").Router();
const {
  addService,
  getAllServices,
  getServiceForId,
} = require("../controllers/services.controller");
const Service = require("../models/Service");

servicesRoutes.post("/", addService);

servicesRoutes.get("/all", getAllServices);

servicesRoutes.get("/:id", getServiceForId);

module.exports = servicesRoutes;
