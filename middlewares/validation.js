const Joi = require("joi");

const postValid = (req, res, next) => {
  const postSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
  });

  const result = postSchema.validate(req.body);

  if (result.error) {
    return res.status(400).json({ status: result.error.details });
  }

  next();
};

const putValid = (req, res, next) => {
  const patchSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
  });

  const result = patchSchema.validate(req.body);

  if (result.error) {
    return res.status(400).json({ status: result.error.details });
  }
  next();
};

module.exports = { postValid, putValid };
