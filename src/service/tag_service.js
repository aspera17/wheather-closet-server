const {models} = require('../db/index');

const getTags = () => {
    return models.tag.findAll();
}


module.exports = {getTags};