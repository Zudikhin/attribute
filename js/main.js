$(document).ready(function () {
    "use strict";

    $(".header_content_btn").click(function() {
        $(this).toggleClass('active');
        $(".header_drop").toggleClass("active");
        $("body").toggleClass("drop");
    });

    $(document).mouseup(function (e){
      var divListItem = $('.header_drop');
      var divHeader = $(".header");
      if (!divListItem.is(e.target) && !divHeader.is(e.target) && divListItem.has(e.target).length === 0 && divHeader.has(e.target).length === 0 ) {
          $('.header_drop').removeClass("active");
          $("body").removeClass("drop");
          $(".header_content_btn").removeClass("active");
      }
    });

    $('.main_slider_content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        dots: true,
        arrows: false,
        fade: true
    });

    $('.product_main_sliders_for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      fade: true,
      asNavFor: '.product_main_sliders_nav'
    });

    $('.product_main_sliders_nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.product_main_sliders_for',
      dots: false,
    });

    $('.product_main_sliders_for').on('afterChange', function(event, slick, currentSlide, nextSlide){
      var slide = $(this).find(`[data-slick-index='${currentSlide}']`);
      var detectVideo = slide.children().children().children();
      if(detectVideo.is('video')) {
        detectVideo.trigger('play');
      } else {
        var video = $(this).find('video');
        video.trigger('pause');
      }
    });

    $('.home_categories_block_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
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

    $(".header_drop ul li img").click(function() {
      $(this).parent().toggleClass("drop");
    });

    $(".sidebar_content_menu li img").click(function() {
      $(this).parent().toggleClass("drop");
    });

    $(".sidebar_content_colors_title").click(function() {
      $(this).parent().toggleClass("drop");
    });

});