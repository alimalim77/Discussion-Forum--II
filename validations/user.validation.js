const Joi = require("joi");

const schema = Joi.object({
  title: Joi.string().required().max(150),
  author: Joi.string().required(),
  content: Joi.string().default(""),
});

const validator = (req, res, next) => {
  const data = req.body;
  const result = schema.validate(data);
  if (result.error) return res.status(422).send(result);
  next();
};

module.exports = { validator };
