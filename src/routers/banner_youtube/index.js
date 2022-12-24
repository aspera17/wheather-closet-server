const express = require('express');
const router = express.Router();
const controller = require('./banner_youtube.controller');

/* GET banner page. 배너,유튜브 온도값 받기 */
router.get('/', controller.banner_youtube);

module.exports = router;