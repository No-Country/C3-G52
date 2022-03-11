const bcrypt = require("bcrypt");
const Company = require("../models/Company");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    if (!req.hasOwnProperty("isCompany")) return next();
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const company = new Company({
      name,
      email,
      password: hashedPassword,
    });

    await company.save();

    res.status(201).json(company);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    if (!req.hasOwnProperty("isCompany")) return next();
    const { email, password } = req.body;
    const company = await Company.findOne({ email });
    const passCorrect = !company
      ? null
      : await bcrypt.compare(password, company.password);

    if (!passCorrect) throw next(new Error("email or password invalid"));

    const objForToken = {
      name: company.name,
      id: company._id,
    };

    const token = jwt.sign(objForToken, process.env.SECRET);

    res.status(200).json({
      company,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const updateInfoCompany = async (req, res, next) => {
  try {
    const { id_company: id } = req.params;
    const { name, email, location, pic_url, website } = req.body;
    const company = await Company.findByIdAndUpdate(
      id,
      { name, email, location, pic_url, website },
      { new: true }
    );

    console.log(company);
    if (!company) throw { name: "company not found", number: 404 };

    res.status(201).json(company);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  register,
  updateInfoCompany,
};
