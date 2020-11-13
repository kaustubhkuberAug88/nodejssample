const controller = require('./user.controller');
const express = require('express');
const router = express.Router();

router.get('/getusers', controller.getUsers);

module.exports = router;