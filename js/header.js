jQuery.noConflict();
var $j341 = jQuery.noConflict();
let gnb_menu = $('.header-gnb');
  $('.header__category-item').mouseenter(function () {
    let tab_idx = $(this).index();

    if ($(this).hasClass('header__gnb-item')) {
      tab_idx += 1;
      $(this).find('.header__category-title-arrow').addClass('header__category-title-arrow--active');
    }

    $(this).find('.header__category-title').removeClass('header__category-title--active');
    $(this).find('.header__category-title').addClass('header__category-title--active');
    $(this).siblings().find('.header__category-title').removeClass('header__category-title--active');
    gnb_menu.eq(tab_idx).show(500); 

    $.each($('.header-gnb__sub'), function (idx, value) {

      let item = $(value).find('.header-gnb__sub-item');

    //   if (item.length > 0) {
    //     let lastWidth = item.last().offset().left;
    //     let newWidth = lastWidth - $(value).offset().left;
    //     $(value).css('width', 101 + newWidth + 'px');
    //   } // issue-113

    });
  }); 

  $('.header__category-item').mouseleave(function () {
    let tab_idx = $(this).index();

    if ($(this).hasClass('header__gnb-item')) {
      tab_idx += 1;
      $(this).find('.header__category-title-arrow').removeClass('header__category-title-arrow--active');
    }

    gnb_menu.eq(tab_idx).hide(200);
    $(this).find('.header__category-title').removeClass('header__category-title--active');
  });
  
