const express = require('express');
const router = express.Router();
const { handleContactForm } = require('../controllers/contact_controller');

router.post('/', handleContactForm);

module.exports = router;
