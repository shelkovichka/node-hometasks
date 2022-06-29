'use strict';

const mymodule = require('./my-module.js');

mymodule(process.argv[2], process.argv[3], function(err, files) {
    if (err) return console.log(err);

    files.forEach((file) => console.log(file));
});