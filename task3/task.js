'use strict';

const fs = require('fs'); 

fs.readFile('data.txt', 'utf8', function (error, data) {
    if (error) throw error
    else {
        let file = data.split(' ');
        let file1 = [];
            for (let f of file) {
                if (f % 2 == 0) file1.push(f)
            }
        
        let file2 = [];
            for (let f of file){
                file2.push(f ** 3);
            }

        fs.writeFile('out-1.txt', file1.toString(), (err) => {
            if (error) throw error
        });
        fs.writeFile('out-2.txt', file2.toString(), (err) => {
            if (error) throw error
        });
}});