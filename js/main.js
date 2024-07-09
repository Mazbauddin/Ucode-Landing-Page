(function ($) {
    "use strict";

    /////////preloader-active//////////
    
    $(window).load(function () {
        setTimeout(function () {
            $('.spinner').fadeOut("slow");

            setTimeout(function () {
                $('.loading').fadeOut("slow");
                setTimeout(function () {
                    $('.content-block').addClass('animated fadeInDown').fadeIn("slow");
                    $('#footer').fadeIn('slow');
                }, 1000);
            }, 1000);
        }, 1000);
    });
    
    
    

     /////////mobile-menu-active//////////

    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767",
    });
    
    
//    color-picker
    
    $('.spin-box').click(function(){
        $('.box').toggleClass('open');
    });
    
    $('.color-1').click(function(){
        $('body').addClass('picker-1').removeClass('picker-2 picker-3 picker-4 picker-5 picker-6 picker-7 picker-8');
    });
    
      $('.color-2').click(function(){
        $('body').addClass('picker-2').removeClass('picker-1 picker-3 picker-4 picker-5 picker-6 picker-7 picker-8');
    });
    
      $('.color-3').click(function(){
        $('body').addClass('picker-3').removeClass('picker-1 picker-2 picker-4 picker-5 picker-6 picker-7 picker-8');
    });
    
      $('.color-4').click(function(){
        $('body').addClass('picker-4').removeClass('picker-1 picker-2 picker-3 picker-5 picker-6 picker-7 picker-8');
    });
    
      $('.color-5').click(function(){
        $('body').addClass('picker-5').removeClass('picker-1 picker-2 picker-3 picker-4 picker-6 picker-7 picker-8');
    });

      $('.color-6').click(function(){
        $('body').addClass('picker-6').removeClass('picker-1 picker-2 picker-3 picker-4 picker-5 picker-7 picker-8');
    });
  $('.color-7').click(function(){
        $('body').addClass('picker-7').removeClass('picker-1 picker-2 picker-3 picker-4 picker-5 picker-6 picker-8');
    });
  $('.color-8').click(function(){
        $('body').addClass('picker-8').removeClass('picker-1 picker-2 picker-3 picker-4 picker-5 picker-6 picker-7');
    });

    
    
    /////////scrollIt-active//////////
    
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 1500, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -60 // offste (in px) for fixed top navigation
    });



        /////////sticky-menu-active//////////
    
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 200) {
                $(".main-menu").removeClass("sticky");
            } else {
                $(".main-menu").addClass("sticky");
            }
        });





    /////////wow animation-active//////////
    
    new WOW().init();

    
    /////////video-active//////////
    
    $('.venobox').venobox();


    
    /////////counter-active//////////
    
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });



    /////////screenshot-active//////////
    
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: '.swiper-pagination'
        },
        autoplay: {
            dilay: 2500,
            disableOnInteraction: false
        }
    });
    
    
    

    /////////testimonial-active//////////
    
    $('.testimonial-active').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    
    

   /////////brand active//////////
    
    $('.brand-active').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
               {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    

    /////////back to top active//////////
    
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var back2top = $(".back-to-top")
        if (scrolling > 100) {
            back2top.fadeIn(500);
        } else {
            back2top.fadeOut(500);
        }
    });
    

})(jQuery);
