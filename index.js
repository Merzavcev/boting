var express = require('express'),
    app = express(),
    routes = require('./routes'),
    port = process.env.PORT || 3000;

app.locals.phone = '+7 916 674-41-91';
app.use(express.static(__dirname + '/public'));

routes(app);
// seams it was working in express 3.0, not 4.0
//app.configure('development', function() {
//    app.use(express.errorHandler({
//        dumpExceptions : true,
//        showStack : true
//    }));
//});
//
//app.configure('production', function() {
//    app.use(express.errorHandler());
//});

app.use(function(err, req, res, next){
    // console.error(err.stack);
    res.send(500, 'Server error! ');
});

app.listen(port, function () {
    console.log('Listening on port ', port)
})
