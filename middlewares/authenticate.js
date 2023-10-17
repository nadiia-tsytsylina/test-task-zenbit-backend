const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;
const { HttpError } = require('../helpers');
const { Auth } = require('../models/auth');

const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer' || !token) {
    next(HttpError(401, 'Not authorized'));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const auth = await Auth.findById(id);

    if (!auth || !auth.token || auth.token !== token) {
      next(HttpError(401, 'Not authorized'));
    }

    req.auth = auth;
    next();
  } catch {
    next(HttpError(401, 'Not authorized'));
  }
};

module.exports = authenticate;
