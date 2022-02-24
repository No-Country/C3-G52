const routerServices = require("express").Router();
const {
  addService,
  getAllServices,
  getServiceForId,
  getServiceOfCompany,
} = require("../controllers/services.controller");
const Service = require("../models/Service");

routerServices.post("/company/:id_company", addService);

routerServices.get("/all", getAllServices);

routerServices.get("/service/:id", getServiceForId);

routerServices.get("/company/:id_company", getServiceOfCompany);

module.exports = routerServices;
