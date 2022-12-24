const express = require('express');
const router = express.Router();
const controller = require('./user_search.controller');

/* GET users register. */
router.get('/user/user_search', controller.user_search);

module.exports = router;