const { Deal } = require('../../models/deal');

const getDeals = async (req, res) => {
  const result = await Deal.find();
  res.json(result);
};

module.exports = getDeals;
