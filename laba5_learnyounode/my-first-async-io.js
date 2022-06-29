'use strict';

const fs = require('fs');

let buffer = fs.readFile(process.argv[2], 'utf-8', function(err, data){
    if (err) throw error
    let string = data.split('\n');
    console.log(string.length - 1);
});


