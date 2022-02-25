const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const auth = req.get("authorization");
    let token = null;
    if (auth && auth.toLocaleLowerCase().startsWith("bearer")) {
      token = auth.substring(7);
    }

    decodedToken = jwt.verify(token, process.env.SECRET);

    if (!token || !decodedToken) throw new Error("token invalid");

    req.user = {
      userId: decodedToken.id,
      userName: decodedToken.name,
    };
    next();
  } catch (error) {
    next(error);
  }
};
