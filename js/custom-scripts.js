$(document).ready(function () {


    $('.accordion li').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).siblings('.accordion .active').find('.item-content').animate({height: 'hide', marginTop: 0}, 600);
            $(this).find('.item-content').animate({height: 'show', marginTop: 20}, 600);
            $(this).siblings('.accordion .active').removeClass('active');
            $(this).addClass('active');
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
        $('html, body').stop().animate({scrollTop: $('.our-services').offset().top}, 800);
    });

});