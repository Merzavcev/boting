var express = require('express'),
    app = express(),
    menuItems = [
        {
            title: 'ГЛАВНАЯ',
            href: '/'
        },
        {
            title: 'СДЕЛАЕМ',
            href: '/work'
        },
        {
            title: 'НАУЧИМ',
            href: '/teach'
        },
        {
            title: 'КОНТАКТЫ',
            href: '/contact'
        }
    ],
    setActive = function(path, items) {
        items.forEach(function(item){
            item.active = item.href === path;
        });
        return items
    },
    port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index.jade', {
        pageTitle: 'Boting.pro',
        menuItems: setActive(req.url, menuItems)
    });
})

app.get('/work', function (req, res) {
    res.render('index.jade', {
        pageTitle: 'Сделаем',
        menuItems: setActive(req.url, menuItems)
    });
})

app.get('/teach', function (req, res) {
    res.render('index.jade', {
        pageTitle: 'Научим',
        menuItems: setActive(req.url, menuItems)
    });
})

app.get('/contact', function (req, res) {
    res.render('index.jade', {
        pageTitle: 'Контакты',
        menuItems: setActive(req.url, menuItems)
    });
})

app.listen(port, function () {
    console.log('Listening on port ', port)
})
