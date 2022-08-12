const Joi = require('joi');

module.exports = Joi.object({
  productId: Joi.number().required().strict().messages({
    'any.required': '400|"productId" is required',
  }),
  quantity: Joi.number().required().positive().min(0)
  .strict()
  .messages({
    'any.required': '400|"quantity" is required',
    'number.min': '422|"quantity" must be greater than or equal to 1',
    'number.positive': '422|"quantity" must be greater than or equal to 1',
  }),
});
