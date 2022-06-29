'use strict';

const fs = require('fs'),
    path = require('path');

module.exports = function (pathToDir, fileFilter, callback) {
    fs.readdir(pathToDir, function (err, list) {
        if (err) return callback(err);
        let filtered = [];
        let ext = '.' + fileFilter;
        list.forEach((file) => {
            if (path.extname(file) === ext) {
                filtered.push(file);
            }
        });
        return callback(null, filtered);
    })
}