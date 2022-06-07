let http = require('http'); 
let fs = require('fs');
let path = require('path');
let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon'
    };

http.createServer((request, response) => {
    let pathnamee, extname, mimeType;;
        console.log("Request: " + request.url);
        if (request.url === '/') pathname = 'site/index.html';
        else {
            pathname = 'site' + request.url;
            extname = path.extname(pathname);
            mimeType = mimeTypes[extname];
        }
        
        if (extname === ".jpg" || extname === ".gif" || extname === ".ico") {
            try {
                let img = fs.readFileSync(pathname);
                console.log(`The file ${pathname} is read and sent to the client\n`);
                response.writeHead(200, {'Content-Type': mimeType});
                response.end(img);
            } catch (e) {
                console.log('Could not find or open file for reading\n');
                response.statusCode = 404;
                response.end();
            }
        } else {
            fs.readFile(pathname, 'utf8', (err, data) => {
                if (err) {
                    console.log('Could not find or open file for reading\n');
                    response.statusCode = 404;
                    response.end();
                } else {
                    console.log(`The file ${pathname} is read and sent to the client\n`);
                    response.writeHead(200, {'Content-Type': 'mimeType'});
                    response.end(data);
                }
            });
        }
}).listen(8080, ()=>{
    console.log("HTTP server works in 8080 port!\n");
});