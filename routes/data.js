exports.menuItems = function(path) {
    menuItems.forEach(function(item){
        if (item.href === path || item.href !== '/' && path.indexOf(item.href) === 0) {
            item.active = true;
        } else {
            item.active = false;
        }
    });
    return menuItems;
};

exports.carousel = [
    {
        'title' : 'КУРСОВЫЕ ПО ДЕТАЛЯМ МАШИН',
        'text':
            '<p>Детальное объяснение</p>' +
            '<p>Оплата после зачтения</p>' +
            '<p>Индивидуальное выполнение</p>' +
            '<p>Подготовка к защите</p>',
        'img' : '/images/gears.jpg',
        'href' : '/work/dm'
    },
    {
        'title' : 'КУРСОВЫЕ ПО ТММ',
        'text':
            '<p>Детальное объяснение</p>' +
            '<p>Доработка придирок преподавателя</p>' +
            '<p>Оплата после зачтения</p>' +
            '<p>Индивидуальное выполнение под преподавателя</p>' +
            '<p>Подготовка к защите</p>' +
            '<p>Гибкие схемы выполнения</p>',
        'img' : '/images/kshm.jpg',
        'href' : '/work/tmm'
    }
];

var menuItems = [
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
];