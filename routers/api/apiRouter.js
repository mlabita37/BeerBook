console.log('...apiRouter loaded');

var express = require('express');
var apiRouter = express.Router();

var User = require('../../models/user');

apiRouter.get('/', function(req, res){
  User.find({}, function(err, databaseUsers){
    res.json( {users: databaseUsers} );
  });

});

apiRouter.post('/', function(req, res){
  console.log('User info', req.body);
  var newUser = new User( req.body.user );
  newUser.save(function(err, dbUser){
  res.json( dbUser );
  });
});

module.exports = apiRouter;
