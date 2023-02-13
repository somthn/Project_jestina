const $jc = jQuery.noConflict();
/* header_right toggle */
$jc('.header_right').click(function(){
  $jc('.header__right').stop().slideToggle();
  $jc('.header__search').stop().hide();
  //$jc('.header_right').html('<i class="fa-solid fa-chevron-up"></i>');

});

/* header 검색 버튼 */
$jc('.fa-magnifying-glass').click(function(){
  $jc('.header__search').stop().fadeIn();
});

$jc('.search_close').click(function(){
  $jc('.header__search').stop().fadeOut();
});

/* main section1 carousel*/
let carousel = document.getElementById("carousel"),
  slides = carousel.getElementsByTagName("li"),
  counter = 0,
  liList = Array.prototype.slice.call(slides);

setInterval(function () {
  slides[counter].style.opacity = 0; // Hide the previous image
  counter = (counter + 1) % slides.length; // Increment counter
  slides[counter].style.opacity = 1; // Show the next image
}, 5000); // setInterval

// 화면 크기 변경 시 캐러셀 이미지 변경
$jc(function(){
  $jc(window).resize(function(){
    let width = window.innerWidth; //2
    if(width > 1200){
      $jc('.main-slide__item-img:first').attr('src','image/main_section2/holiday_iu_main_1.png');
      $jc('.main-slide__item-img:nth-last-child(1)').attr('src','image/main_section2/2022romanson_main_1.png');
      $jc('.main-slide__item-img:last').attr('src','image/main_section2/jestina_bag1.png');
    }
    else if(width > 768 && width < 1201){
      $jc('.main-slide__item-img:first').attr('src','image/main_section2/holiday_iu_main.png');
      $jc('.main-slide__item-img:nth-last-child(1)').attr('src','image/main_section2/2022romanson_main5.png');
      $jc('.main-slide__item-img:last').attr('src','image/main_section2/jestina_bag2.png');
    } else if(width <= 768){
      $jc('.main-slide__item-img:first').attr('src','image/main_section2/holiday_iu_main_p.png');
      $jc('.main-slide__item-img:nth-last-child(1)').attr('src','image/main_section2/2022romanson_main4.png');
      $jc('.main-slide__item-img:last').attr('src','image/main_section2/jestina_bag3.png');
    }
  }).resize(); //1
}); 
/* 1. resize로 화면 크기 변경 체크. 
      선언하자마자 바로 불러와 계속해서 체크할 수 있도록 함
   2. 현재 화면의 크기를 변수에 저장.
   3. 원하는 화면 사이즈마다 이미지의 주소를 변경
*/

/* moveTop Button */
/* 클릭 시 최상단으로 이동 */
const topBtn = $jc('.moveTopBtn');
$jc(topBtn).click(function(){
  window.scrollTo({top:0, behavior:"smooth"});
}
);

$jc(document).ready(function(){
  //스크롤 전에는 hide
  $jc(topBtn).hide();
  //스크롤하면 fadeIn
  $jc(window).scroll(function(){
    let thisHeight = $jc('#header').innerHeight();
    console.log(thisHeight);
    if($jc(this).scrollTop() > thisHeight){
      $jc(topBtn).fadeIn();
    } else {
      $jc(topBtn).fadeOut();
    }
  })
})