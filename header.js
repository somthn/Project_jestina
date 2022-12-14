//https://lnsideout.tistory.com/entry/jQuery%EC%A0%9C%EC%9D%B4%EC%BF%BC%EB%A6%AC-fadeIn-fadeOut-%EC%9D%B4%ED%8E%99%ED%8A%B8-%ED%9A%A8%EA%B3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
// const $jb = JQuery.default;
const $jb = jQuery.noConflict();
$jb('.all_menu .fa-solid').click(function () {
  $jb('.header__bottom-inner').stop().fadeToggle(500);
  console.log("??")
});

$jb('.header__category-item').mouseenter(function () {
  $jb(this).find('.header-gnb').stop().fadeIn(500);
}).mouseleave(function () {
  $jb(this).find('.header-gnb').stop().fadeOut(800);
})

$jb('.header-gnb__item').mouseenter(function () {
  $jb(this).find('.header-gnb__sub').stop().fadeIn(500);
}).mouseleave(function () {
  $jb(this).find('.header-gnb__sub').stop().fadeOut(800);

  if ($(this).hasClass('header-gnb__sub') === false) {
    $jb(this).find('.header-gnb__sub').stop();
  }
});

// let gnb_menu = $jb('.header-gnb');
//   $jb('.header__category-item').mouseenter(function () {
//     let tab_idx = $jb(this).index(); //.header__category-item의 인덱스 값을 변수에 담음

//     // if ($jb(this).hasClass('header__gnb-item')) {
//     //   tab_idx += 1;
//     //   $jb(this).find('.header__category-title-arrow').addClass('header__category-title-arrow--active');
//     // } //필요없는코드?

//     $jb(this).find('.header__category-title').removeClass('header__category-title--active');
//     $jb(this).find('.header__category-title').addClass('header__category-title--active');
//     $jb(this).siblings().find('.header__category-title').removeClass('header__category-title--active');
//     gnb_menu.eq(tab_idx).fadeIn(500);

//     $jb.each($jb('.header-gnb__sub'), function (idx, value) {

//       let item = $jb(value).find('.header-gnb__sub-item');

//     //   if (item.length > 0) {
//     //     let lastWidth = item.last().offset().left;
//     //     let newWidth = lastWidth - $jb(value).offset().left;
//     //     $jb(value).css('width', 101 + newWidth + 'px');
//     //   } // issue-113

//     });
//   });

//   $jb('.header__category-item').mouseleave(function () {
//     let tab_idx = $jb(this).index();

//     // if ($jb(this).hasClass('header__gnb-item')) {
//     //   tab_idx += 1;
//     //   $jb(this).find('.header__category-title-arrow').removeClass('header__category-title-arrow--active');
//     // }

//     gnb_menu.eq(tab_idx).fadeOut(200);
//     $jb(this).find('.header__category-title').removeClass('header__category-title--active');
//   });
