const express = require('express');
const router = express.Router();
const controller = require('./content_delete.controller');

/* DELETE users content. */
router.get('/board/content_delete', controller.content_delete);

module.exports = router;