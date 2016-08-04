$(function(){

	$(".user_albums:first,.user_albums:eq(5)").css("marginLeft","0");
	
	$(".user_albums").each(function(){
		$(this).hover(function(){
			$(this).find(".user_albums_bg").show;
		})
	})

	// back_top
	$(window).scroll(function(){
		if ($(window).scrollTop()>250){
			$(".back_top").fadeIn(500);
		}
		else
		{
			$(".back_top").fadeOut(500);
		}
	});

	$(".back_top").click(function(){
		$('body,html').animate({scrollTop:0},400);
		return false;
	});


	$(window).scroll(function(){
		if ($(window).scrollTop()>38){
			$(".fix_header").addClass("fix");
		}
		else
		{
			$(".fix_header").removeClass("fix");
		}
	});

	$(".back_top").click(function(){
		$('body,html').animate({scrollTop:0},400);
		return false;
	});



	$(".close_fix_bottom").click(function(){
		$(".fix_bottom").hide();
		$(".copyright").css("height",80);
	})

})