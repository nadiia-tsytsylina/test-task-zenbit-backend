const bcrypt = require('bcrypt');
const { Auth } = require('../../models/auth');
const { HttpError } = require('../../helpers');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const auth = await Auth.findOne({ email });

  if (!auth) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const comparePassword = await bcrypt.compare(password, auth.password);
  if (!comparePassword) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const payload = {
    id: auth._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' });
  await Auth.findByIdAndUpdate(auth._id, { token });

  res.status(200).json({
    token,
    user: { email: auth.email, name: auth.name },
  });
};

module.exports = login;
