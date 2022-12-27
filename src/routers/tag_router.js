const express = require('express');
const tagRouter = express.Router();


const {loginRequired} = require("../middlewares");
const {getTags} = require("../service/tag_service");

/* GET home page. 배너,유튜브 온도값 받기 */
tagRouter.get('/', loginRequired, async function (req, res, next) {
        try {

            const tags = await getTags();
            res.json({"tags": tags});

        } catch (err) {

            next(err);

        }
    }
);


module.exports = tagRouter;