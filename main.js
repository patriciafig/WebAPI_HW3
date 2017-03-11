/*
 Created by Patricia Figueroa on 2/27/17.
 Application set up and configuration */


//import required directive to load http module and store the returned HTTP instance into an http variable
var http = require("http");
fs= require ('fs');   //gets file system modules
// creates a server using http module
http.createServer(function (request, response) {
    //Sends the HTTP header
    //HTP status: 200 :OK
    //Content Type: plain text
    //sets the configuration for the response
    response.writeHead (200, {
        'Content-Type': 'text/html' ,
        'Access-Control-Allow-Origin' : '*'
    });

    //takes index.html file using fs
    var readStream = fs.createReadStream(__dirname + '/index.html');

    // sends file to the user
    readStream.pipe(response);
//Sends the response body 'Hello World'
// response.end ('Hello World\n');

}) .listen(8081);
//Console print
console. log ('Server running at http://127.0.0.1:8081/');
