const getCurrent = async (req, res) => {
  const { email, name } = req.auth;
  res.status(200).json({ email, name });
};

module.exports = getCurrent;
