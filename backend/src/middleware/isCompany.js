module.exports = (req, res, next) => {
  const { isCompany } = req.body;
  if (isCompany) req.isCompany = true;
  next();
};
