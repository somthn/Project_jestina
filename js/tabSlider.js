jQuery.noConflict();
jQuery('.card-slider').slick({
    centerMode: true,
    slidesToShow:3,
    autoplay: true,
    slidesToScroll:1,
    dots: true,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    customPaging:function(slick,index) {
      var targetImage = slick.$slides.eq(index).find('img').attr('src');
      return '<img src=" ' + targetImage + ' "/>';}
  });