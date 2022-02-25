const { Router } = require("express");
const ClientController = require("../controllers/client.controller");
const CompanyController = require("../controllers/company.controller");
const isCompany = require("../middleware/isCompany");
const routerSign = Router();

routerSign.post(
  "/signin",
  isCompany,
  CompanyController.login,
  ClientController.loginClient
);
routerSign.post(
  "/signup",
  isCompany,
  CompanyController.register,
  ClientController.AddClient
);

module.exports = routerSign;
