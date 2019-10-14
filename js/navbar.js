$(document).ready(function () {
    const MIN_HEIGHT = 15;
    const NAV_BAR = $('#nav-bar');
    const SCROLL_TO_TOP = $('.scroll-to-top');
    $(window).scroll(function () {
        if (window.scrollY > MIN_HEIGHT) {
            NAV_BAR.addClass('scrolled-down');
            SCROLL_TO_TOP.addClass('scrolled-down');
        } else {
            NAV_BAR.removeClass('scrolled-down');
            SCROLL_TO_TOP.removeClass('scrolled-down');
        }
    });
});
