const express = require('express');
const router = express.Router();
const controller = require('./content_search.controller');

/* GET users content. */
router.get('/board/content_search', controller.content_search);

module.exports = router;