var imported = document.createElement('script');
imported.src = '../js/sidebar.js';
document.head.appendChild(imported);

imported = document.createElement('script');
imported.src = '../js/navbar.js';
document.head.appendChild(imported);

imported = document.createElement('script');
imported.src = '../js/dropdown.js';
document.head.appendChild(imported);

imported = document.createElement('script');
imported.src = '../js/data-table.js';
document.head.appendChild(imported);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
