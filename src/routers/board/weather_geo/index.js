const express = require('express');
const router = express.Router();
const controller = require('./weather_geo.controller');

/* GET users weather_geo. */
router.get('/board/weather_geo', controller.weather_geo);

module.exports = router;