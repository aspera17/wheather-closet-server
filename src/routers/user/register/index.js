const express = require('express');
const router = express.Router();
const controller = require('./register.controller');

/* POST users register. */
router.get('/user/register', controller.register);

module.exports = router;