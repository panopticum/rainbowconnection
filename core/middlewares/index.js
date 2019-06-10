'use strict';

const fs = require('fs');

module.exports = app => {
  fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
    .forEach(file => require(`./${file}`)(app));
};
