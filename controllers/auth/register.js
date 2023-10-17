const bcrypt = require('bcrypt');
const { Auth } = require('../../models/auth');
const { HttpError } = require('../../helpers');

const register = async (req, res) => {
  const { email, password } = req.body;
  const auth = await Auth.findOne({ email });
  if (auth) {
    throw HttpError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newAuth = await Auth.create({
    ...req.body,
    password: hashPassword,
  });

  res.status(201).json({
    message: {
      email: newAuth.email,
      name: newAuth.name,
    },
  });
};

module.exports = register;
