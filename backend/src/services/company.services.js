const CompanyDAO = require('../middleware/CompanyDAO');
const bcrypt = require('bcrypt');

module.exports = class CompanyService {
  async register(_conpany) {
    try {
      const companies = await new CompanyDAO();
      return companies.createCompany(_conpany);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};
