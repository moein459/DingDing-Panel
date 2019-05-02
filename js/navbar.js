$(document).ready(function () {

    $(window).scroll(function () {
        if (window.scrollY > 15) {
            $('#nav-bar').addClass('scrolled-down');
        } else {
            $('#nav-bar').removeClass('scrolled-down');
        }
    });
});
