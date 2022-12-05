//section3 - tabmenu
const $ja = jQuery.noConflict();
$ja(document).ready(function(){
        
    // 이중탭
    $ja(".tabonoff > .cont-wrap").children().css("display", "none"); 
    $ja(".tabonoff > .cont-wrap div:first-child").css("display", "block");
    $ja(".tabonoff > .jq_tab li:first-child").addClass("on"); 

    $ja(".tabonoff").find(".jq_tab > li").on("click", function() { 
        
        var index = $ja(this).parent().children().index(this);
		
        $ja(this).siblings().removeClass();
        $ja(this).addClass("on");
       // console.log($ja(this).parent().children());
        $ja(this).parent().next(".cont-wrap").children().hide().eq(index).show();
        $ja('.card_slider').slick('setPosition'); 
    });
    

     // 설치/미설치 탭메뉴 이미지교체 
    //  $ja("#tabMenu > li").click(function(){
    //     var $jathis = $ja(this);
    //     $ja("#tabMenu > li").each(function(idx){
    //         var $jali = $ja(this);
    //         $jali.find("img").attr("src", $ja(this).find("img").attr("src").replace("_on","_off"));
    //     });
    //     $jathis.find("img").attr("src", $jathis.find("img").attr("src").replace("_off","_on"));
    // });   

	// 서브_탭메뉴 > Dot Indicator 연결
	// $ja(".jq_stabMenu li > a").on("click", function() {
	// 	var index = $ja(this).parent().index();
	// 	$ja(this).closest(".tabonoff").find(".dots > a").removeClass("on");
	// 	$ja(this).closest(".tabonoff").find(".dots > a").eq(index).addClass("on");
	// });
   
    // //  Dot Indicator > 서브_탭메뉴 연결
    // $ja(".dots > a").click(function(){
    //     var dotIndex = $ja(this).parent().children().index(this); 
    //     $ja(this).siblings().removeClass();
    //     $ja(this).addClass("on");
    //     // console.log(dotIndex); 
    //     $ja(this).closest(".tabonoff").find("li").eq(dotIndex).trigger("click");	
    // });

});

//tabmenu 내부 slider
// jQuery.noConflict();
// var $j341 = jQuery.noConflict();

// jQuery('.card-slider').slick({
//     centerMode: true,
//     slidesToShow:3,
//     autoplay: true,
//     slidesToScroll:1,
//     dots: true,
//     responsive:[
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ],
//     customPaging:function(slick,index) {
//       var targetImage = slick.$slides.eq(index).find('img').attr('src');
//       return '<img src=" ' + targetImage + ' "/>';}
//   });
 