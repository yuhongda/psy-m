$(function () {
    window.mask = null;
    $('#filter').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        window.mask = new Util.Mask({ opacity: 0.5, bgColor: 'rgba(0,0,0,0.5)' });
        window.mask.show();

        $('.popup-filter').addClass('popup-filter-show');


    });
    $('.popup-filter').click(function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        $('.popup-filter').removeClass('popup-filter-show');
        window.mask.close();

    });
});