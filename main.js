/*
 Created by Patricia Figueroa on 2/27/17.
 Application set up and configuration */


//import required directive to load http module and store the returned HTTP instance into an http variable
var app = express();
var localPort = 9000;
// a call to the Base route for github
app.get('/', function (req, res) {
    console.log("Ping to Home");
    //GET to the base url 
    var GithubAPI = require("github");  
    var github = new GithubAPI({
        version: "3.0.0"
    });

    var token =  "The location of the token is "; //don't store on github
    github.authenticate({
        type: "oauth",
        token: token
    });

    //Uses github module to throw an error or return my username 
    github.user.get({ user: 'patriciafig'} , function(err, res) {
        console.log("Error Thrown", err);
        console.log("Good Response.", res);
        res.send(res);
    });
})

//for server communication
var server = app.listen(localPort, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("We are on: ", host, port)
}) 
