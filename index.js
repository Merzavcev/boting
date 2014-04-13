var express = require('express'),
    menuItems = require('./routes/menu.js'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

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

app.get('/', function (req, res) {
    res.render('layout.jade', {
        pageTitle: 'Boting.pro',
        menuItems: menuItems(req.url)
    });
})

app.get('/work', function (req, res) {
    res.render('layout.jade', {
        pageTitle: 'Сделаем',
        menuItems: menuItems(req.url)
    });
})

app.get('/teach', function (req, res) {
    res.render('layout.jade', {
        pageTitle: 'Научим',
        menuItems: menuItems(req.url)
    });
})

app.get('/contact', function (req, res) {
    res.render('layout.jade', {
        pageTitle: 'Контакты',
        menuItems: menuItems(req.url)
    });
})

app.listen(port, function () {
    console.log('Listening on port ', port)
})
