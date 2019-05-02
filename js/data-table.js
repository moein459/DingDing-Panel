$(document).ready(function () {
    $('.btn-search').click(function () {
        var searchContainer = $(this).parentsUntil('.data-table').find('.search');
        searchContainer.slideToggle(function () {
		    searchContainer.find('.form-control').val('').focus();
        });
    });
    $('.btn-filter').click(function () {
        $(this).parentsUntil('.data-table').find('.filter').slideToggle();
    });
});
