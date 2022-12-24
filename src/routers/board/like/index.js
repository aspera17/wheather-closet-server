const express = require('express');
const router = express.Router();
const controller = require('./like.controller');

/* POST users like. */
router.get('/board/like', controller.like);

module.exports = router;