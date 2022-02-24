const bcrypt = require("bcrypt");
const CompanyService = require("../services/company.services");
const Company = new CompanyService();
const modelCompany = require("../models/Company");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    if (!req.hasOwnProperty("isCompany")) return next();
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const company = new modelCompany({
      name,
      email,
      password: hashedPassword,
    });

    await company.save();

    res.status(201).json({
      name: company.name,
      password,
      email: company.email,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    if (!req.hasOwnProperty("isCompany")) return next();
    const { email, password } = req.body;
    const company = await modelCompany.findOne({ email });
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

exports.create = async (req, res, next) => {
  try {
    if (!req.hasOwnProperty("isCompany")) return next();
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(
      password,
      bcrypt.genSaltSync(10),
      null
    );
    const newCompany = {
      email: email,
      password: hashedPassword,
    };

    const checkExist = await Company.getCompanyByEmail(email);
    if (checkExist)
      return res.status(500).json({
        ok: false,
        msg: "Company already registered",
      });

    const result = await Company.registerCompany(newCompany);

    if (result.level === "error") {
      res.status(500).json({
        msg: "Company not created",
      });
    } else {
      res.status(200).json({
        ok: true,
        company: newCompany,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Something went wrong",
    });
  }
};
