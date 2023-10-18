const { ctrlWrapper } = require('../../helpers');

const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const resetPassword = require('./reset-password');

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  resetPassword: ctrlWrapper(resetPassword),
};
