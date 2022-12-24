const express = require('express');
const router = express.Router();
const controller = require('./tag_list.controller');

/* GET users tag_list. */
router.get('/board/tag_list', controller.tag_list);

module.exports = router;