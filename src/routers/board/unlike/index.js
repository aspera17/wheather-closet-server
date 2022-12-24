const express = require('express');
const router = express.Router();
const controller = require('./unlike.controller');

/* POST users unlike. */
router.get('/board/unlike', controller.unlike);

module.exports = router;