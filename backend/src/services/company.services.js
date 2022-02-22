const CompanyDAO = require('../middleware/CompanyDAO');
const bcrypt = require('bcrypt');

module.exports = class CompanyService {
  async registerCompany(_company) {
    try {
      const companies = await new CompanyDAO();
      return companies.createCompany(_company);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllCompanies() {
    try {
      const companies = await new CompanyDAO().readAll();
      if (companies === undefined) return null;
      else return companies;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getOneCompany(_id) {
    try {
      const company = await new CompanyDAO().read(_id);
      if (company === undefined) return null;
      else return company;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getCompanyByEmail(_email) {
    try {
      const company = await new CompanyDAO().getByEmail(_email);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateCompany(_newData) {
    try {
      const company = new CompanyDAO();
      const data = {
        id: _newData._id,
        stock: _newData.stock,
        description: _newData.description,
        price: _newData.price,
        active: _newData.active,
        password: _newData.password,
      };
      return company.update(data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteCompany(_id) {
    try {
      return new CompanyDAO().delete(_id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};
