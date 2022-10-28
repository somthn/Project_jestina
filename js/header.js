
// const $jb = JQuery.default;
const $jb = jQuery.noConflict();
let gnb_menu = $jb('.header-gnb');
  $jb('.header__category-item').mouseenter(function () {
    let tab_idx = $jb(this).index();

    if ($jb(this).hasClass('header__gnb-item')) {
      tab_idx += 1;
      $jb(this).find('.header__category-title-arrow').addClass('header__category-title-arrow--active');
    }

    $jb(this).find('.header__category-title').removeClass('header__category-title--active');
    $jb(this).find('.header__category-title').addClass('header__category-title--active');
    $jb(this).siblings().find('.header__category-title').removeClass('header__category-title--active');
    gnb_menu.eq(tab_idx).show(500); 

    $jb.each($jb('.header-gnb__sub'), function (idx, value) {

      let item = $jb(value).find('.header-gnb__sub-item');

    //   if (item.length > 0) {
    //     let lastWidth = item.last().offset().left;
    //     let newWidth = lastWidth - $jb(value).offset().left;
    //     $jb(value).css('width', 101 + newWidth + 'px');
    //   } // issue-113

    });
  }); 

  $jb('.header__category-item').mouseleave(function () {
    let tab_idx = $jb(this).index();

    if ($jb(this).hasClass('header__gnb-item')) {
      tab_idx += 1;
      $jb(this).find('.header__category-title-arrow').removeClass('header__category-title-arrow--active');
    }

    gnb_menu.eq(tab_idx).hide(200);
    $jb(this).find('.header__category-title').removeClass('header__category-title--active');
  });
  