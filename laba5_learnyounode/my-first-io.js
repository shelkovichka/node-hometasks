'use strict';

const fs = require('fs');
let buffer = fs.readFileSync(process.argv[2]),
    string = buffer.toString().split('\n');

console.log(string.length - 1);


