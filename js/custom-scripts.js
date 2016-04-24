$(document).ready(function () {


    $('.item-header').click(function () {
        //if (!$(this).parent().hasClass('active')) {
            //$(this).parent().siblings('.accordion .active').find('.item-content').animate({height: 'hide', marginTop: 0}, 600);
            $(this).parent().siblings('.active').find('.item-content').slideUp();
            $(this).parent().siblings('.active').removeClass('active');
            //$(this).siblings('.item-content').animate({height: 'show', marginTop: 20}, 600);
            $(this).siblings('.item-content').slideToggle();

            $(this).parent().toggleClass('active');
        /*} else {
            $(this).siblings('.item-content').animate({height: 'hide', marginTop: 0}, 600);
            $(this).parent().removeClass('active');
        }*/
    });

    $('.marker-scroll').click(function(){
        $('html, body').stop().animate({scrollTop: $('.for-scroll').offset().top}, 800);
    });

    $('.marker-menu').click(function() {
        $(this).toggleClass('marker-menu-active');
        $('nav').slideToggle();
    });

    /**** animation scripts *****
    $('.animated').onScreen({
        doIn: function() {
            var currentLeft = -30;
            var elements = $('.animated li');
            var index = 0;
            var timerId = setTimeout(function showItem() {
                elements.eq(index++).stop().animate({
                    left: currentLeft+= 30
                }, 1000);
                if(index < elements.length) {
                    timerId = setTimeout(showItem, 600);
                }
            }, 0);
        }
    });
    /** end of animation scripts **/

});