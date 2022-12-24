const express = require('express');
const router = express.Router();
const controller = require('./user_delete.controller');

/* DELETE users DELELE. */
router.get('/user/user_delete', controller.user_delete);

module.exports = router;