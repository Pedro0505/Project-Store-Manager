const SalesPostValidate = require('../schemas/SalesPostValidate');

const SalesMiddleware = (req, res, next) => {
  const array = [];
  req.body.forEach(({ productId, quantity }) => {
    const { error } = SalesPostValidate.validate({ productId, quantity });

    if (error) {
      const [code, message] = error.message.split('|');
      array.push({ code, message });
    }
  });

  if (array.length !== 0) return res.status(array[0].code).json({ message: array[0].message });

  next();
};

module.exports = SalesMiddleware;
