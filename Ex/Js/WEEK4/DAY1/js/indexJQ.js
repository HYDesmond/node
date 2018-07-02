$('.tabBox').each(function () {
    $(this).find('.tab li').click(function () {
        var index = $(this).index();
        $(this).addClass('select').siblings().removeClass('select').parent().nextAll('div').eq(index).addClass('select').siblings().removeClass('select');
    });
});