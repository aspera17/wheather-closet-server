const express = require('express');
const router = express.Router();
const controller = require('./content.controller');

/* POST users content. */
router.get('/board/content', controller.content);

module.exports = router;