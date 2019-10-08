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

$(function () {
    $('[data-toggle="popover"]').popover()
});

$('.popover-dismiss').popover({
    trigger: 'focus'
});

$(document).ready(() => {
    $('.example-container .code pre code').addClass('language-markup');
    Prism.highlightAll();
});
