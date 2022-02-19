const mongoose = require('mongoose');
const companies = require('../models/Company');

module.exports = class Company {
  async createCompany(_company) {
    try {
      const companyToCreate = new companies(_company);
      return await companyToCreate.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async readAll() {
    try {
      return await companies.find({});
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async read(_id) {
    try {
      return await companies.find({ _id: id });
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
      const result = Promise.resolve(
        companies.findOneAndUpdate(filter, update)
      );
      await result;
      return companies.findOne(filter);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  delete(_id) {
    try {
      return companies.findIdAndDelete({ _id: _id });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getByEmail(email) {
    try {
      return companies.findOne({ email });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};
