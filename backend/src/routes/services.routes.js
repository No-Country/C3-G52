const routerServices = require("express").Router();
const servicesControllers = require("../controllers/services.controller");

routerServices.post("/company/:id_company", servicesControllers.addService);

routerServices.get("/all", servicesControllers.getAllServices);

routerServices.get("/service/:id", servicesControllers.getServiceForId);

routerServices.get(
  "/company/:id_company",
  servicesControllers.getServiceOfCompany
);

routerServices.put("/service/:id", servicesControllers.updateService);

// routerServices.delete("/service/")

module.exports = routerServices;
