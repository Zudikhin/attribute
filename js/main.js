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
      slidesToShow: 10,
      slidesToScroll: 1,
      asNavFor: '.product_main_sliders_for',
      dots: false,
      focusOnSelect: true
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
        fade: false,
        arrows: true,
        prevArrow: $('.sale_block_arrows_prev'),
        nextArrow: $('.sale_block_arrows_next'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                fade: false
              }
            },
            {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  fade: true
                }
              }
          ]
    });

    $('.popular_block_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      fade: false,
      arrows: false,
      autoplay: true,
      speed: 500,
      prevArrow: $('.popular_block_arrows_prev'),
      nextArrow: $('.popular_block_arrows_next'),
      responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              fade: false,
              arrows: true,
              autoplay: false
            }
          },
          {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                arrows: true,
                autoplay: false
              }
            }
        ]
    });

    $(".header_drop_item").click(function() {
      $(this).toggleClass("drop");
    });

    $(".sidebar_content_menu_drop").click(function() {
      $(this).toggleClass("drop");
    });

    // $(".cart__main .cart__list .item .general .counter .count_input .quantity").on("change", ".qty", function () {
    //   $("#update_cart").prop("disabled", false);
    //   $("#update_cart").trigger("click");
    // });
  
    $(".cart_main_list_item_general_counter_prev").click(function (e) {
      e.preventDefault();
      var defaultNumber = $(this).parent().find("input").val() - 1;
      if (defaultNumber != 0) {
        $(this).parent().find("input").val(defaultNumber);
      } else {
        return false;
      }
      // $("#update_cart").prop("disabled", false);
      // $("#update_cart").trigger("click");
    });
  
    $(".cart_main_list_item_general_counter_next").click(function (e) {
      e.preventDefault();
      var defaultNumber = $(this).parent().find("input").val();
      var numberDefaultNumber = parseInt(defaultNumber);
      var finalDefaultNumber = numberDefaultNumber + 1;
      if (numberDefaultNumber <= 99) {
        $(this).parent().find("input").val(finalDefaultNumber);
      } else {
        return false;
      }
      // $("#update_cart").prop("disabled", false);
      // $("#update_cart").trigger("click");
    });

    $(".sidebar_content_colors_title").click(function() {
      $(this).parent().toggleClass("drop");
    });

    if($(document).width() > 1199) {
      $(document).ready(function(){
        $('.product_main_sliders_for_item').zoom();
      });
    }   

});