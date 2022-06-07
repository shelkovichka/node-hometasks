'use strict';

const http = require('http');
const fs = require('fs'); 

const header = 'header.html';
const body = 'body.html';
const footer = 'footer.html';

http.createServer((request, response) => {
    let promise = createPromise(header);

    let result = '';
    promise.then((data)=>{
        result += data;
        return createPromise(body);
    }).then((data)=>{
        result += data;
        return createPromise(footer);
    }).then((data)=>{
        result += data;
        response.writeHead(200, {
            'Context-Type': 'text/html'
        });
        response.write(result);
        response.end();
    }).catch(()=>{
        response.statusCode = 500;
        response.end();
    });
}).listen(8080);

function createPromise(fileName){
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, 'utf-8', (err, data)=>{
            if(err) reject(err);
            else resolve(data);
        });
    });
};