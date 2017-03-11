/**
 * Created by patricia figueroa on 2/28/17.
 */


'use strict';

var util = require('util');

module.exports = {
    getGithub: GithubTest
};

function GithubTest(req,response) {

    var GithubApi = require("Github");

    var Github = new GithubApi({
                                                    //required
        version:    '3.0.0'
    });

    //Using apigee  vault for the node js
    var vault = require('avault').createVault(__dirname);

    //Getting the stored token from avault and authenticating the github account
    vault.get('signedad', function (profileString) {
        var token = JSON.parse(profileString);
        console.log(token);
        github.authenticate({
            type: "oauth",
            token: token.token
        });
    });

 // Github Response
    github.users.get({} , function(error, resp) {
        console.log("Received Error ?", error);
        console.log("Received Response ?", resp);

        github.repos.getAll({}, function (error, resp) {
            console.log("Received Error... ?", error);
            console.log("Received Response... ? ", resp);
            response.send(resp);
        });
    });
}
