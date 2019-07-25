var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    errorhandler = require('errorhandler');

const {port} = require('./config');

var isProduction = process.env.NODE_ENV === 'production';

// create global object 
var app = express();

// Normal express config defaults
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if (!isProduction) {
    // do something
}

if(isProduction) {
    // do something
}

app.use("/api", require('./routes')); // Mount api routes

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err)
});

// development error handler
// will print stacktrace
if(!isProduction) {
    app.use(function(err,req,res,next) {
        console.log(err.stack);

        res.status(err.status || 500);

        res.json({'errors':{
            message: err.message,
            error: err
        }});
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err,req,res,next) {
    res.status(err.status || 500);
    res.json({'error': {
        message: err.message,
        error: {}
    }});
});

// finally, let's start our server
var server = app.listen(port || 8080, function() {
    console.log('Listening on port ' + server.address().port);
})