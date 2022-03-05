const { Router } = require("express");
const routerCompany = Router();
const CompanyController = require("../controllers/company.controller");

routerCompany.put("/:id_company", CompanyController.updateInfoCompany);

module.exports = routerCompany;
