jQuery.noConflict();
var $j341 = jQuery.noConflict();
/* header 검색 버튼 */
$(document).ready(function(){
  $(".header__right>.header__search>.header__search-btn").click(function(){
      $("#searchForm").stop().toggle(0);
  });
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
