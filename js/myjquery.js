
$(window).scroll(function(){
    var scroll_top=$(this).scrollTop();

    if (scroll_top>200){
        $("#to_top").animate({right:"10px"},50);
		$("nav").addClass("sticky");
    }
    else{
        $("#to_top").animate({right:"-100px"},50);
		$("nav").removeClass("sticky");
    }
});


$(document).ready(function(){
    $("#to_top").click(function(){
        $("html").animate({scrollTop:0},400);
    });
	

 
});



$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 230) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });



  