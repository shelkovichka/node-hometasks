'use strict';

const http = require('http'),
    url = process.argv.slice(2), 
    concatStream = require('concat-stream');

let result = [],
    count = 0;

url.forEach((u, i)=>{
	http.get(u, (res)=>{
		res.setEncoding('utf-8');
		res.pipe(concatStream((data)=>{
			result[i] = data;
			count++;
			if (count === url.length){
				result.forEach((res)=>{
					console.log(res);
				})
			}
		}))
	})
});