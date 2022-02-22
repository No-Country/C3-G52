const { Router } = require("express");
// const { login } = require("../controllers/client.controller");
const CompanyController = require("../controllers/company.controller");
const isCompany = require("../middleware/isCompany");
const routerSign = Router();

// routerSign.post("/signin", login);
routerSign.post("/signup", isCompany, CompanyController.create);

module.exports = routerSign;
