const { Router } = require("express");
const routerSign = Router();
const clientController = require("../controllers/client.controller");
const companyController = require("../controllers/company.controller");
const isCompany = require("../middleware/isCompany");

routerSign.post(
  "/signin",
  isCompany,
  companyController.login,
  clientController.loginClient
);
routerSign.post(
  "/signup",
  isCompany,
  companyController.register,
  clientController.AddClient
);

module.exports = routerSign;
