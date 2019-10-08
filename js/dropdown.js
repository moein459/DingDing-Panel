$(document).ready(function () {
    $('.dropdown-btn').click(function () {
        $(this).toggleClass('dropdown-active');
        $(this).next().slideToggle();
    });

    let fileName = location.href.substring(location.href.lastIndexOf('/') + 1, location.href.length);
    $(`a.sidebar-item[href~="${fileName}"]`).addClass('active').parent().slideDown(0).prev().addClass('dropdown-active');
});
