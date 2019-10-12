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
