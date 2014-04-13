module.exports = function(path) {
    menuItems.forEach(function(item){
        item.active = item.href === path;
    });
    return menuItems;
};

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