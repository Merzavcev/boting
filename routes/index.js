var data = require('./data.js'),
    menuItems = data.menuItems;

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('home.jade', {
            pageTitle: 'Boting.pro',
            menuItems: menuItems(req.url),
            carousel: data.carousel
        });
    })

    app.get('/work', function (req, res) {
        res.render('work/dm.jade', {
            pageTitle: 'Сделаем',
            menuItems: menuItems(req.url)
        });
    })

    app.get('/work/:subject', function (req, res) {

        var tmpl;

        switch (req.params.subject) {
            case 'dm' : tmpl = 'dm.jade';
                break;
            case 'tmm' : tmpl = 'tmm.jade';
                break;
            default :
                tmpl = '../404.jade';
        }

        res.render('work/' + tmpl, {
            pageTitle: 'Сделаем',
            menuItems: menuItems(req.url)
        });
    })

    app.get('/teach', function (req, res) {
        res.render('teach.jade', {
            pageTitle: 'Научим',
            menuItems: menuItems(req.url)
        });
    })

    app.get('/contact', function (req, res) {
        res.render('contact.jade', {
            pageTitle: 'Контакты',
            menuItems: menuItems(req.url)
        });
    })

    app.get('*', function (req, res) {
        res.render('404.jade', {
            pageTitle: '404',
            menuItems: menuItems(req.url)
        });
    })    
};