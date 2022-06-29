'use strict';

const http = require('http'),
    url = process.argv[2],    
    concatStream = require('concat-stream');

http.get(url, (res)=>{
	res.setEncoding('utf8');
	res.pipe(concatStream((data)=>{
        console.log(data.length);
		console.log(data);
    }));
});