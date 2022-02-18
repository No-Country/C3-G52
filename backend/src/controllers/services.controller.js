const addService = (req, res) => {
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
};

const getAllServices = (req, res) => {
  const allService = await Service.find({}).populate("company");
  res.status(200).json(allService);
};

const getServiceForId = (req, res) => {
  const { id } = req.params;
  const service = await service.findOne({ id });
  res.status(200).json(service);
};

module.exports = {
  addService,
  getAllServices,
  getServiceForId,
};
