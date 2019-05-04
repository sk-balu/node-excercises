// HTTP Module
const http = require("http");
var url = require('url');

// File System Module
const fs = require('fs');

/* 
  Server Creation
    Reading File
      Setting Headers
      Writing Response
      Response Sent Back.
*/
http.createServer(( req, res )=>{
  if (req.url != '/favicon.ico') {
    let filename, isHTML = url.parse(req.url, true).query.html;
    filename = (isHTML == 'true') ? "demo.html" : "demo.json";
    fs.readFile(filename, ( err, data )=>{
      res.writeHead( 200, { "Content-Type": "application/json"});
      res.write( data );
      res.end();
    });
  }
}).listen(3000);
