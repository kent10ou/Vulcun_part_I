"use strict";

var express = require('express');
var app = express();
var port = process.env.PORT || '3000';
// var session = require('express-session'); //requiring session
var db = require('./db.js');



//========================================================//
//   Calling the server                                   //
//========================================================//
var server = app.listen(port, function() {
  var host = server.address().address;
  console.log('listening at http://%s:%s -- %s', host, port);
});
