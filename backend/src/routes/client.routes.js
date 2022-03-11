const { Router } = require("express");
const routerClient = Router();
const clientController = require("../controllers/client.controller");

routerClient.get("/:id", clientController.getClientById);
routerClient.put("/:id", clientController.updateClient);
routerClient.delete("/:id", clientController.deleteClient);
routerClient.get("/services-hired/:id", clientController.getServicesHired);

module.exports = routerClient;
