const express = require('express');
const router = express.Router();
const controller = require('../../controllers/authController');


router.post('/auth', controller.index);
router.post('/register', controller.register);

module.exports = router;