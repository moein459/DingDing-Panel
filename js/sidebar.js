$(document).ready(function () {

    var smallScreenSize = 1100;

    function isSmallScreen() {
        return $(window).width() < smallScreenSize;
    }

    function isMobile() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }

    $('.sidebar-toggle').click(function () {
        $('#sidebar').toggleClass('sidebar-show');
        if (isSmallScreen()) {
            $('.back-drop').fadeToggle();
        } else {
            $('.app-body').toggleClass('show-menu');
            $('.sidebar-ctrl').toggleClass('sidebar-ctrl-show-menu');
        }
    });

    $('.back-drop').click(function () {
        $('.back-drop').fadeToggle();
        $('#sidebar').toggleClass('sidebar-show');
    });

    $('.sidebar-item').click(function () {
        if (isSmallScreen()) {
            $('#sidebar').removeClass('sidebar-show');
            $('.app-body').removeClass('show-menu');
        }
        var backDropState = $('.back-drop').css("display");
        if (backDropState == 'block') {
            $('.back-drop').fadeToggle();
        }
    });

    onResize = function () {
        if (isSmallScreen()) {
            $('#sidebar').removeClass('sidebar-show');
            $('.app-body').removeClass('show-menu');
            $('.sidebar-ctrl').removeClass('sidebar-ctrl-show-menu');
        } else {
            $('#sidebar').addClass('sidebar-show');
            $('.app-body').addClass('show-menu');
            $('.sidebar-ctrl').addClass('sidebar-ctrl-show-menu');
        }
        var backDropState = $('.back-drop').css("display");
        if (backDropState == 'block') {
            $('.back-drop').fadeToggle();
        }
    };
	
    swipeSupport();
    onResize();
    $(window).resize(onResize);

    function swipeSupport() {
        if (isMobile()) {
            $('body').swipe({
                swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                    var isSwipeNeed = fingerData[0].start.x > ($(window).width() - ($(window).width() * 15 / 100));
                    if (isSwipeNeed && direction == 'left') {
                        $('#sidebar').addClass('sidebar-show');
                        $('.back-drop').fadeIn();
                    }

                    if (direction == 'right' && $('#sidebar').hasClass('sidebar-show')) {
                        $('.back-drop').fadeOut();
                        $('#sidebar').removeClass('sidebar-show');
                    }
                }
            }, {passive: false});
        } else {
            $('body').off();
        }
        // console.log($._data( $(document.body)[0], "events" ));
    }
});
