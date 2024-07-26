import $ from 'jquery';

$(document).ready(function () {
    $(".carousel").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      dots: false,
      draggable: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  });
  