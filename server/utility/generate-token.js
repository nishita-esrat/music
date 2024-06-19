// set up jwt
const jwt = require("jsonwebtoken");

// generate token function
const generateToken = (email) => {
  const token = jwt.sign(
    {
      email,
    },
    process.env.jwt,
    { expiresIn: " 2 days" }
  );
  return token;
};

export default generateToken;
