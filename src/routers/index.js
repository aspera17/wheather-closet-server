const express = require('express');
const router = express.Router();

const board = require('./board/index.js');
const user = require('./user/index.js')
const banner_youtube = require("./banner_youtube/index.js");


router.use('/board', board);
router.use('/user', user);
router.use('/banner_youtube', banner_youtube);


module.exports = router;