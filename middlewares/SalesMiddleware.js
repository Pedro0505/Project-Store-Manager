const SalesPostValidate = require('../schemas/SalesPostValidate');

const SalesMiddleware = (req, res, next) => {
  const [body] = req.body;
  const { error } = SalesPostValidate.validate(body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  next();
};

module.exports = SalesMiddleware;
