const express = require('express');
const router = express.Router();
const controller = require('./login.controller');

/* POST users login. */
router.get('/user/login', controller.login);

module.exports = router;