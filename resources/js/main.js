$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,

responsive: [

   {
     breakpoint: 1150,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1
     }
   },

   {
     breakpoint: 800,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false
     }
   }

   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
});
