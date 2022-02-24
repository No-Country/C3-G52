module.exports = (req, res, next) => {
  const { isCompany } = req.body;
  console.log(typeof isCompany);
  if (isCompany) req.isCompany = true;
  next();
};
