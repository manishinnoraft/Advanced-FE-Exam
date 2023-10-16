(function ($, Drupal) {
    Drupal.behaviors.mySlickSlider = {
      attach: function (context, settings) {
        // Initialize Slick Slider on the wrapper element.
        $('.view-display-id-block_1 .view-content').slick({
          dots: true,
          infinite: false,
          speed: 300,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          adaptiveHeight: true,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
        
          
        });
      }
    };
   
  })(jQuery, Drupal);
  