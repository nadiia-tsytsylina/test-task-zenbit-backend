const express = require('express');

const { isValidId } = require('../../middlewares');
const ctrl = require('../../controllers/deals');

const router = express.Router();

router.get('/', ctrl.getDeal);

router.get('/:dealId', isValidId, ctrl.getDealById);

// router.post('/', authenticate, validateBody(addSchema), ctrl.addContact);

// router.put(
//   '/:contactId',
//   authenticate,
//   isValidId,
//   validateBody(addSchema),
//   ctrl.updateContact
// );

// router.patch(
//   '/:contactId/favorite',
//   authenticate,
//   isValidId,
//   validateBody(updateFavoriteSchema),
//   ctrl.updateStatusContact
// );

// router.delete('/:contactId', authenticate, isValidId, ctrl.removeContact);

module.exports = router;
