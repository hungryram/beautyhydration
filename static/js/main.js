$(document).ready(function () {

    // NAVBAR
    $('.nav-menu').click(function(){
        $('.nav').toggleClass('nav-open');
      });
});

$('.home-slide').slick({
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  dots: false,
});


// LIGHTBOX
$('.slider-for').slickLightbox();

// PRODUCTS
$('.product-slide').slick({
  infinite: true,
  dots: true,
  adaptiveHeight: true,
  speed: 1000,
  });

$('.responsive-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 3,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


      //   var cookie = setTimeout(function(){ 
      //       $(".modal").addClass("is-active");
      //   }, 3000);
      
      // $(".delete").click(function() {
      //   $("html").removeClass("is-clipped");
      //   $('.modal').removeClass("is-active");
      //   clearTimeout(cookie)
      //       });