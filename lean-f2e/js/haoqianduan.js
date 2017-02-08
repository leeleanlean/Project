$(function(){

	var hqd = {
		// fixNav
		fixNav:function(){

			var $nav = $(".nav-fixed a");
			for(var i=0; i<$nav.length; i++){
				var scroll_top = $(".nav-box").eq(i).offset().top;
				$nav.eq(i).attr("scroll_top",scroll_top);
			}

			$nav.click(function(){
				var scroll_top = $(this).attr("scroll_top");
				var text = $(this).attr("text");
				var floor = $(this).attr("floor");
				$('body,html').animate({scrollTop:scroll_top-15},300);
				$(this).addClass("selected").siblings().removeClass("selected");
			})
		},
		// toTop
		toTop:function(){
			var $back_top = $(".back_top");
			$(window).scroll(function(){
				if($(window).scrollTop()>180){
					$back_top.removeClass("hide");
				}else{
					$back_top.addClass("hide");
				}
			});
			$back_top.click(function(){
				$('body,html').animate({scrollTop:0},300);
			})
		}
	}
	hqd.fixNav();
	hqd.toTop();
})