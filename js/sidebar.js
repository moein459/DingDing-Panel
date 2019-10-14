$(document).ready(function () {

    const WINDOW = $(window);
    const SMALL_SCREEN_SIZE = 1100;
    const SIDEBAR = $('#sidebar');
    const SIDEBAR_TOGGLE = $('.sidebar-toggle');
    const SIDEBAR_ITEM = $('.sidebar-item');
    const SIDEBAR_CTRL = $('.sidebar-ctrl');
    const APP_BODY = $('.app-body');
    const BACK_DROP = $('.back-drop');

    function isSmallScreen() {
        return WINDOW.width() < SMALL_SCREEN_SIZE;
    }

    SIDEBAR_TOGGLE.click(function () {
        SIDEBAR.toggleClass('sidebar-show');
        if (isSmallScreen()) {
            BACK_DROP.fadeToggle();
        } else {
            APP_BODY.toggleClass('show-menu');
            SIDEBAR_CTRL.toggleClass('sidebar-ctrl-show-menu');
        }
    });

    BACK_DROP.click(function () {
        BACK_DROP.fadeToggle();
        SIDEBAR.toggleClass('sidebar-show');
    });

    SIDEBAR_ITEM.click(function () {
        if (isSmallScreen()) {
            SIDEBAR.removeClass('sidebar-show');
            APP_BODY.removeClass('show-menu');
        }
        let backDropState = BACK_DROP.css("display");
        if (backDropState === 'block') {
            BACK_DROP.fadeToggle();
        }
    });

    let onResize = function () {
        if (isSmallScreen()) {
            SIDEBAR.removeClass('sidebar-show');
            APP_BODY.removeClass('show-menu');
            SIDEBAR_CTRL.removeClass('sidebar-ctrl-show-menu');
        } else {
            SIDEBAR.addClass('sidebar-show');
            APP_BODY.addClass('show-menu');
            SIDEBAR_CTRL.addClass('sidebar-ctrl-show-menu');
        }
        let backDropState = BACK_DROP.css("display");
        if (backDropState === 'block') {
            BACK_DROP.fadeToggle();
        }
    };

    onResize();
    $(window).resize(onResize);

    let swipeSupport = function () {
        $('body').swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                var isSwipeNeed = fingerData[0].start.x > ($(window).width() - ($(window).width() * 15 / 100));
                if (isSwipeNeed && direction === 'left') {
                    SIDEBAR.addClass('sidebar-show');
                    BACK_DROP.fadeIn();
                }

                if (direction === 'right' && $('#sidebar').hasClass('sidebar-show')) {
                    SIDEBAR.removeClass('sidebar-show');
                    BACK_DROP.fadeOut();
                }
            }
        }, {passive: false});
        // console.log($._data( $(document.body)[0], "events" ));
    };

    try {
        document.createEvent("TouchEvent");
        swipeSupport();
    } catch (e) {
    }
});
