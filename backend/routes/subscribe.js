const express = require('express');
const router = express.Router();
const { handleSubscribe } = require('../controllers/subscribe_controller');

router.post('/', handleSubscribe);

module.exports = router;
