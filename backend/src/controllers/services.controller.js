const Company = require("../models/Company");
const Service = require("../models/Service");
const Client = require("../models/Client");

async function fieldsAreEmpty(fields) {
  let isOneEmpty = false;

  await fields.forEach((field) => {
    if (typeof field === "string" || typeof field === "object") {
      if (!field.length) {
        isOneEmpty = true;
        return isOneEmpty;
      }
    } else if (typeof field === "number") {
      if (!field && field !== 0) {
        isOneEmpty = true;
        return isOneEmpty;
      }
    }
  });
  return isOneEmpty;
}

const addService = async (req, res, next) => {
  try {
    const isOneEmpty = await fieldsAreEmpty(Object.values(req.body));

    if (isOneEmpty) throw { name: "required fields is empty", number: 400 };

    const {
      title,
      description,
      type,
      price,
      location_locality,
      location_departament,
      location_country,
      location_coordinates,
      pics,
    } = req.body;
    const { id_company } = req.params;

    const newService = new Service({
      title,
      description,
      type,
      price,
      location: {
        departament: location_departament,
        country: location_country,
        locality: location_locality,
        coordinates: location_coordinates,
      },
      pics: [...pics],
      company: id_company,
    });

    const addServiceToCompany = await Company.findByIdAndUpdate(
      id_company,
      { $push: { services: newService } },
      { new: true }
    );

    if (!addServiceToCompany) throw { name: "Company not found", number: 404 };

    const serviceSaved = await newService.save();

    res.status(201).json(serviceSaved);
  } catch (error) {
    next(error);
  }
};

const updateService = async (req, res, next) => {
  try {
    const {
      title,
      description,
      type,
      price,
      location_departament,
      location_locality,
      location_country,
      location_coordinates,
      pics,
    } = req.body;
    const { id } = req.params;

    const service = await Service.findByIdAndUpdate(
      id,
      {
        title,
        description,
        type,
        price,
        location: {
          departament: location_departament,
          locality: location_locality,
          country: location_country,
          coordinates: location_coordinates,
        },
        pics,
      },
      { new: true }
    );

    if (!service) throw { name: "service not found", number: 404 };

    res.status(201).json(service);
  } catch (error) {
    next(error);
  }
};

const deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );

    if (!service) throw { name: "service not found", number: 404 };

    res.status(200).end();
  } catch (error) {
    next(error);
  }
};

const getAllServices = async (req, res, next) => {
  try {
    const allService = await Service.find({}).populate("company");
    res.status(200).json(allService);
  } catch (error) {
    next(error);
  }
};

const getServiceForId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await Service.findOne({ _id: id });
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

const clientPayService = async (req, res, next) => {
  try {
    const { id_client, id_service } = req.body;
    const addToClient = await Client.findByIdAndUpdate(
      id_client,
      { $push: { services_hired: id_service } },
      { new: true }
    );
    const addToService = await Service.findByIdAndUpdate(
      id_service,
      { $push: { clients: id_client } },
      { new: true }
    );

    if (!addToClient || !addToService)
      throw { name: "client or service invalid", number: 404 };

    res.status(200).json(addToClient);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getServiceOfCompany,
  addService,
  getAllServices,
  getServiceForId,
  updateService,
  deleteService,
  clientPayService,
};
