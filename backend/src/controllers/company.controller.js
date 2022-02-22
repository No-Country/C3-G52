const bcrypt = require('bcrypt');
const CompanyService = require('../services/company.services');
const Company = new CompanyService();

exports.create = async (req, res) => {
  try {
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
        msg: 'Company already registered',
      });

    const result = await Company.registerCompany(newCompany);

    if (result.level === 'error') {
      res.status(500).json({
        msg: 'Company not created',
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
      msg: 'Something went wrong',
    });
  }
};
