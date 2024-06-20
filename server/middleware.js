// set up jwt
const jwt = require("jsonwebtoken");
// verify user function
exports.authenticated = async (req, res, next) => {
  try {
    const { token } = req.headers['authorization'];
    if (!token) {
      res.status(401).json({
        error: "please login first",
      });
    } else {
      const verify = await jwt.verify(token, process.env.jwt);
      req.authenticated_user = verify;
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error: error.message,
    });
  }
};
