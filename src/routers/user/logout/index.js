const express = require('express');
const router = express.Router();
const controller = require('./logout.controller');

/* POST users logout. */
router.get('/user/logout', controller.logout);

module.exports = router;