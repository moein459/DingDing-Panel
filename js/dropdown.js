$(document).ready(function () {
    $('.dropdown-btn').click(function () {
        $(this).toggleClass('dropdown-active');
        $(this).next().slideToggle();
    });
});
