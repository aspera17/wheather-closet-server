const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

const login = require('./login/index.js');
const logout = require('./logout/index.js');
const register = require('./register/index.js');
const user_delete = require('./user_delete/index.js');
const user_modify = require('./user_modify/index.js');
const user_search = require('./user_search/index.js');

router.use('/user/login', login);
router.use('/user/logout', logout);
router.use('/user/register', register);
router.use('/user/user_delete', user_delete);
router.use('/user/user_modify', user_modify);
router.use('/user/user_search', user_search);


/* GET users listing. */
router.get('/', controller.user);


module.exports = router;