const express = require('express');
const controller = require('../../controllers/userController');

const router = express.Router();

router.get('/user', controller.index);


module.exports = router;