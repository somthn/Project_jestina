const $jb = jQuery.noConflict();
$jb('.all_menu .fa-solid').click(function(){
  $jb('.header__bottom-inner').stop().fadeToggle(500);
});

$jb('.header__category-item').mouseenter(function(){
  $jb(this).find('.header-gnb').stop().fadeIn(500);
}).mouseleave(function(){
  $jb(this).find('.header-gnb').stop().fadeOut(800);
})

$jb('.header-gnb__item').mouseenter(function(){
  $jb(this).find('.header-gnb__sub').stop().fadeIn(500);
}).mouseleave(function(){
  $jb(this).find('.header-gnb__sub').stop().fadeOut(800);

  // if($jb(this).hasClass('header-gnb__sub') === false){
  //   $jb(this).find('.header-gnb__sub').stop();
  // }
});
