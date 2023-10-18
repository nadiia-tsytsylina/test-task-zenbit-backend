const express = require('express');

const ctrl = require('../../controllers/deals');

const router = express.Router();

router.get('/', ctrl.getDeal);

module.exports = router;
