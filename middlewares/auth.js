const User = require("../models/user.model.js");

// Authenticates if the x-api-key header matches the environment variable stored.
const verifyAuth = (req, res, next) => {
  const headers = req.headers;
  if (headers["x-api-key"] !== process.env.X_API_KEY)
    return res.status(403).send({ message: "Unauthorised Access" });
  next();
};
// Verifies if the id and author name matches to be a part of the same document.
const verifyAuthor = (action) => {
  return async (req, res, next) => {
    try {
      id = req.params.id;
      author = req.body.author;
      const resp = await User.findById(id);
      //console.log(resp);
      if (!resp)
        return res.status(404).send({ message: "Discussion not found" });
      if (action === "delete" && resp.author !== author)
        return res.status(403).send({ message: "Unauthorized Access" });
      next();
    } catch (error) {
      return res.status(500).send({ message: "Unable to verify author" });
    }
  };
};

module.exports = { verifyAuth, verifyAuthor };
