module.exports = (err, req, res, next) => {
  if (err.name === "CastError") {
    console.log(err);
    res.status(400).end();
  } else if (err.name === "SyntaxError") {
    res.status(400).end();
  } else if (err.name === "TypeErorr") {
    res.status(400).end();
  } else if (err.name === "JsonWebTokenError") {
    res.status(401).end();
  } else {
    console.log(err.name);
    console.log(err);
    res.status(503).end();
  }
};
