const ProductsPostValidate = require('../schemas/ProductsPostValidate');

const ProductMiddleware = (req, res, next) => {
  const { error } = ProductsPostValidate.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  next();
};

module.exports = ProductMiddleware;
