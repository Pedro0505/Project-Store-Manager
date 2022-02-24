const SalesPostValidate = require('../schemas/SalesPostValidate');

const SalesMiddleware = (req, res, next) => {
  req.body.forEach(({ productId, quantity }) => {
    const { error } = SalesPostValidate.validate({ productId, quantity });

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
  });

  next();
};

module.exports = SalesMiddleware;
