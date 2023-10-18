const { ctrlWrapper } = require('../../helpers');

const getDeal = require('./getDeals');

module.exports = {
  getDeal: ctrlWrapper(getDeal),
};
