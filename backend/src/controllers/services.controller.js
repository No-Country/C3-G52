const addService = async (req, res, next) => {
  try {
    const { title, description, type, price, location, pics, idCompany } =
      req.body;

    const newService = new Service({
      title,
      description,
      type,
      price,
      location,
      pics,
      company: idCompany,
    });

    //Falta añadir servicio a un modelo Company

    const serviceSaved = await newService.save();

    res.status(201).json(serviceSaved);
  } catch (error) {
    next(error);
  }
};

const getAllServices = async (req, res, next) => {
  try {
    const allService = await Service.find({}).populate("companies");
    res.status(200).json(allService);
  } catch (error) {
    next(error);
  }
};

const getServiceForId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await service.findOne({ id });
    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addService,
  getAllServices,
  getServiceForId,
};
