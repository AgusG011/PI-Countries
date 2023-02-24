const { Router } = require('express');
const { postActivity, ActivtyDelete } = require('../controllers/Activity.controller');
const router = Router();

router.delete('/', ActivtyDelete)
router.post('/', postActivity)

module.exports = router