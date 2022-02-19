const mongoose = require('mongoose');
const company = require('../models/Company');

module.exports = class Company {
  async createCompany(_company) {
    try {
      const companyToCreate = new company(_company);
      return await companyToCreate.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async readAll() {
    try {
      return await company.find({});
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async read(_id) {
    try {
      return await company.find({ _id: id });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async update(_newData) {
    try {
      const { _id, stock, description, price, active, password } = _newData;
      const filter = { _id: _id };
      const update = {
        stock,
        description,
        price,
        active,
        password,
      };
      const result = Promise.resolve(company.findOneAndUpdate(filter, update));
      await result;
      return company.findOne(filter);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  delete(_id) {
    try {
      return company.findIdAndDelete({ _id: _id });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getByEmail(email) {
    try {
      return company.findOne({ email });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};
