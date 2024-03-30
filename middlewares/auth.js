// Authenticates if the x-api-key header matches the environment variable stored
const verifyAuth = (req, res, next) => {
  const headers = req.headers;
  if (headers["x-api-key"] !== process.env.X_API_KEY)
    return res.status(403).send({ message: "Unauthorised Access" });
  next();
};

module.exports = { verifyAuth };
