$(document).ready(function () {
    const MIN_HEIGHT = 15;
    const NAV_BAR = $('#nav-bar');
    $(window).scroll(function () {
        if (window.scrollY > MIN_HEIGHT) {
            NAV_BAR.addClass('scrolled-down');
        } else {
            NAV_BAR.removeClass('scrolled-down');
        }
    });
});
