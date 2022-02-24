const Company = require("../models/Company");
const Service = require("../models/Service");

const addService = async (req, res, next) => {
  try {
    const { title, description, type, price, location, pics } = req.body;
    const { id_company } = req.params;

    const newService = new Service({
      title,
      description,
      type,
      price,
      location,
      pics: [...pics],
      company: id_company,
    });

    const addServiceToCompany = await Company.findByIdAndUpdate(
      id_company,
      { $push: { services: newService } },
      { safe: true, upsert: true, new: true }
    );

    const serviceSaved = await newService.save();

    res.status(201).json(serviceSaved);
  } catch (error) {
    next(error);
  }
};

const getAllServices = async (req, res, next) => {
  try {
    const allService = await Service.find({}).populate("Company");
    res.status(200).json(allService);
  } catch (error) {
    next(error);
  }
};

const getServiceForId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await Service.findOne({ id });
    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
};

const getServiceOfCompany = async (req, res, next) => {
  try {
    const { id_company } = req.params;
    const { services } = await Company.findOne({ _id: id_company }).populate(
      "services"
    );

    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getServiceOfCompany,
  addService,
  getAllServices,
  getServiceForId,
};
