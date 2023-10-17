const { ctrlWrapper } = require('../../helpers');

const getDeal = require('./getDeals');
const getDealById = require('./getDealById');

module.exports = {
  getDeal: ctrlWrapper(getDeal),
  getDealById: ctrlWrapper(getDealById),
};
