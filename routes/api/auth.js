const express = require('express');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/auth');
const ctrl = require('../../controllers/auth');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.post('/forgot-password', ctrl.resetPassword);

module.exports = router;
