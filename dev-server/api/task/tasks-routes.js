// import express from 'express';
const controller = require('../../controllers/taskController');

const express = require('express');
const router = express.Router();

router.post('/task', controller.create);
router.get('/task', controller.index);
router.get('/task/:id', controller.show);
router.put('/task', controller.update);
router.delete('/task', controller.delete);

module.exports = router;