// set up jwt
const jwt = require("jsonwebtoken");

// generate token function
exports.generateToken = (email) => {
  const token = jwt.sign(
    {
      email,
    },
    process.env.jwt,
    { expiresIn: "2d" }
  );
  return token;
};

