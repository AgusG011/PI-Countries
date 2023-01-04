const { Router } = require('express');
const { postActivity } = require('../controllers/Activity.controller');
const router = Router();

router.post('/', postActivity)

module.exports = router