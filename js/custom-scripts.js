$(document).ready(function () {


    $('.item-header').click(function () {
        if (!$(this).parent().hasClass('active')) {
            $(this).parent().siblings('.accordion .active').find('.item-content').animate({height: 'hide', marginTop: 0}, 600);
            $(this).siblings('.item-content').animate({height: 'show', marginTop: 20}, 600);
            $(this).parent().siblings('.accordion .active').removeClass('active');
            $(this).parent().addClass('active');
        } else {
            $(this).siblings('.item-content').animate({height: 'hide', marginTop: 0}, 600);
            $(this).parent().removeClass('active');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > ($(window).height()) / 5) {
            $('.header').stop().animate({top: 0}, 300);
        } else {
            $('.header').stop().animate({top: -60}, 300);
        }
    });

    $('.marker-scroll').click(function(){
        $('html, body').stop().animate({scrollTop: $('.for-scroll').offset().top}, 800);
    });

    $(window).load(function(){
        $(".block-wrap").mCustomScrollbar();
    });

});