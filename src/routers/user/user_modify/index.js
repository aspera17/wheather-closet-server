const express = require('express');
const router = express.Router();
const controller = require('./user_modify.controller');

/* PATCH users register. */
router.get('/user/user_modify', controller.user_modify);

module.exports = router;