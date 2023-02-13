const $jb = jQuery.noConflict();
// $jb('.all_menu .fa-solid').click(function(){
//   $jb('.header__bottom-inner').stop().fadeToggle(500);
// });

// $jb('.header__category-item').mouseenter(function(){
//   $jb(this).find('.header-gnb').stop().fadeIn(500);
// }).mouseleave(function(){
//   $jb(this).find('.header-gnb').stop().fadeOut(800);
// })

// $jb('.header-gnb__item').mouseenter(function(){
//   $jb(this).find('.header-gnb__sub').stop().fadeIn(500);
// }).mouseleave(function(){
//   $jb(this).find('.header-gnb__sub').stop().fadeOut(800);

//   // if($jb(this).hasClass('header-gnb__sub') === false){
//   //   $jb(this).find('.header-gnb__sub').stop();
//   // }
// });

(function($jb) { // Begin jQuery
  $jb(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $jb('nav ul li a:not(:only-child)').click(function(e) {
      $jb(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $jb('.nav-dropdown').not($jb(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $jb('html').click(function() {
      $jb('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $jb('#nav-toggle').click(function() {
      $jb('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $jb('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

