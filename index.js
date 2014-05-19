var express = require('express');
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

app.get('/:userID/:trackID', function(req, res){
  console.log(req.params.userID + ":" + req.params.trackID);
  res.send(req.params.userID + ":" + req.params.trackID);
});

app.listen(1337);