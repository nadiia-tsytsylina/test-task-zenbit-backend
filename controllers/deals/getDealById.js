const { HttpError } = require('../../helpers');
const { Deal } = require('../../models/deal');

const getDealById = async (req, res) => {
  const { dealId } = req.params;
  const result = await Deal.findById(dealId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

module.exports = getDealById;
