const Client = require("../models/Client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getClientById = async (req, res) => {
  const { id } = req.params;
  const client = await Client.findById(id);

  if (!client) {
    return res.status(400).json({ msg: `No existe usuario con el ID ${id}` });
  }

  res.status(200).json(client);
};

const AddClient = async (req, res) => {
  const { name, email, password } = req.body;
  const client = new Client({ name, email, password });

  // Encriptar la contraseña
  const salt = bcrypt.genSaltSync(10);
  client.password = bcrypt.hashSync(password, salt);

  // Guardar en BD
  await client.save();

  res.status(201).json(client);
};

const updateClient = async (req, res) => {
  const { id } = req.params;
  const { password, ...resto } = req.body;

  // TODO validar contra BD
  if (password) {
    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    resto.password = bcrypt.hashSync(password, salt);
  }

  const client = await Client.findByIdAndUpdate(id, resto, { new: true });
  res.status(200).json(client);
};

const changePasswordClient = async (req, res) => {
  const { id } = req.params;
  const { currentPassword, newPassword } = req.body;

  const client = await Client.findById(id);
  if (!client) {
    return res.status(400).json({
      msg: "No existe usuario con ese ID",
    });
  }

  // Verificar la contraseña
  const validPassword = await bcrypt.compare(currentPassword, client.password);
  if (!validPassword) {
    return res.status(400).json({
      msg: "Contraseña actual incorrecta",
    });
  }
  // Encriptar la contraseña
  const salt = bcrypt.genSaltSync(10);
  const password2 = bcrypt.hashSync(newPassword, salt);

  const updatePassword = await Client.findByIdAndUpdate(
    id,
    { password: password2 },
    { new: true }
  );

  res.status(200).json(updatePassword);
};

const deleteClient = async (req, res) => {
  const { id } = req.params;

  // Eliminacion física
  const client = await Client.findByIdAndDelete(id);

  res.json(client);
};

const loginClient = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const client = await Client.findOne({ email: email }).populate(
      "services_hired"
    );
    const passCorrect = !client
      ? null
      : await bcrypt.compare(password, client.password);

    if (!passCorrect)
      throw { name: "Password or email incorrect", number: 401 };

    const objForToken = {
      id: client._id,
      email: client.email,
    };

    const token = jwt.sign(objForToken, process.env.SECRET);

    res.status(200).json({
      client,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const getServicesHired = async (req, res, next) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id).populate("services_hired");

    if (!client) throw { message: "Client not found", number: 404 };

    res.status(200).json(client.services_hired);
  } catch (error) {
    next(error);
  }
};

const deleteServicesOfClient = async (req, res, next) => {};

module.exports = {
  loginClient,
  getClientById,
  AddClient,
  updateClient,
  changePasswordClient,
  deleteClient,
  getServicesHired,
};
