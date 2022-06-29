'use strict';

const fs = require('fs'),
    path = require('path'),
    pathToFiles = process.argv[2],
    ext = '.' + process.argv[3];

fs.readdir(pathToFiles, function (err, list) {
      if (err) throw error
      list.forEach(function (f) {
        if (path.extname(f) === ext) {
          console.log(f)
        }
    })
});