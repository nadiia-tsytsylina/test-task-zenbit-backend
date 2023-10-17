const { isValidObjectId } = require('mongoose');
const { HttpError } = require('../helpers');

const isValidId = (req, res, next) => {
  const { dealId } = req.params;
  if (!isValidObjectId(dealId)) {
    next(HttpError(400, `${dealId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
