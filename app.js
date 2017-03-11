//using swagger

'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app;                             // used for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }
                                                //middleware
  swaggerExpress.register(app);
                                               //makes the server be able to accept a parameter from the environment what port to listen on
  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/github']) {
    console.log('try this:\ncurl http://localhost:' + port + '/github');
  }
});


