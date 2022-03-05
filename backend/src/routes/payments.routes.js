const routerPayments = require("express").Router();
const servicesControllers = require("../controllers/services.controller");

routerPayments.post("/", servicesControllers.clientPayService);

module.exports = routerPayments;
