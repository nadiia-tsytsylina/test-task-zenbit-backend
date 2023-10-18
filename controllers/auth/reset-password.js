const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { Auth } = require('../../models/auth');
const { sendNewPasswordByEmail, HttpError } = require('../../helpers');

const resetPassword = async (req, res) => {
  const { email } = req.body;

  const auth = await Auth.findOne({ email });

  if (!auth) {
    throw HttpError(404, 'User not found (email not registered)');
  }

  const newPassword = crypto.randomBytes(8).toString('hex');

  const unhashedPassword = newPassword;
  const hashPassword = await bcrypt.hash(newPassword, 10);
  auth.password = hashPassword;

  auth.save();

  const emailAuth = auth.email;
  await sendNewPasswordByEmail(emailAuth, unhashedPassword);

  res.status(200).json({
    message: 'Password reset email sent successfully',
  });

  //   return res
  //     .status(200)
  //     .json({ message: 'Password reset email sent successfully' });
};

module.exports = resetPassword;
