var express = require('express');
var app = express();
var logger = require('morgan');

app.use(logger('dev'));

app.get('/', function(req, res){
    res.status(200).send("Hello World!");
});

app.listen(3000);


module.exports = app;
