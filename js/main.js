$(document).ready(function () {
    "use strict";

    $(".header_content_btn").click(function() {
        $(this).toggleClass('active');
        $(".header_drop").toggleClass("active");
        $(".fakeblock").toggleClass("active");
    });

    $('.main_slider_content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true
    });

    $('.home_categories_block_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true
    });

    $('.sale_block_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.sale_block_arrows_prev'),
        nextArrow: $('.sale_block_arrows_next'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
    });

});