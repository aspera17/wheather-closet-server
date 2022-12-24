const express = require('express');
const router = express.Router();
const controller = require('./board.controller');

const content = require('./content/index.js');
const content_delete = require('./content_delete/index.js');
const content_search = require('./content_search/index.js');
const like = require('./like/index.js');
const unlike = require('./unlike/index.js');
const tag_list = require('./tag_list/index.js');
const weather_geo = require('./weather_geo/index.js');

router.use('/board/content', content);
router.use('/board/content_delete', content_delete);
router.use('/board/content_search', content_search);
router.use('/board/like', like);
router.use('/board/unlike', unlike);
router.use('/board/tag_list', tag_list);
router.use('/board/weather_geo', weather_geo);


/* GET home page. */
router.get('/', controller.board);

module.exports = router;