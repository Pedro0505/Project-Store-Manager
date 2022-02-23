const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().min(5).required().messages({
    'any.required': '400|"name" is required',
    'string.min': '422|"name" length must be at least 5 characters long',
  }),
  quantity: Joi.number().integer().required().positive()
  .min(0)
  .strict()
  .messages({
    'any.required': '400|"quantity" is required',
    'number.min': '422|"quantity" must be greater than or equal to 1',
    'number.positive': '422|"quantity" must be greater than or equal to 1',
  }),
});
