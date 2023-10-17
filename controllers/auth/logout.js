const { Auth } = require('../../models/auth');

const logout = async (req, res) => {
  const { _id } = req.auth;
  await Auth.findByIdAndUpdate(_id, { token: null });
  res.status(204).json({ message: 'Logout success' });
};

module.exports = logout;
