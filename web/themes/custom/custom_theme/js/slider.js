(function ($, Drupal) {
  Drupal.behaviors.mySlickSlider = {
    attach: function (context, settings) {
      // Initialize Slick Slider on the wrapper element.
      $(".view-display-id-block_1 .view-content").slick({
        dots: true,
        infinite: false,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow:
          '<span class="Slick-Prev arrow"><i class="fa-solid fa-chevron-left"></i></span>',
        nextArrow:
          '<span class="Slick-Next arrow"><i class="fa-solid fa-chevron-right"></i></span>',
      }),
      $('.match_details--name:contains("India"), .match_details--name:contains("IND")').each(function() {
        $(this).closest('.carousel_div').find('.hashtag').css('display', 'block');
      });
      
    },
  };
})(jQuery, Drupal);
