// JavaScript Document

$(function(){
	
	/*屏蔽IE6*/
	if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
	$("body").html("<div style='font-size:22px; color:#fff; position:relative; top:50%; height:500px;'><center>您目前的浏览器版本为IE6，建议升级浏览器后在访问我们的网站。<p></p></center></div>");
	}
	
	/*Logo*/
	$(".top .l img").hover(function(){
		$(this).attr("src","images/logo_hover.png");
	},function(){
		$(this).attr("src","images/logo.png");
	})
	
	/*guide*/
	$(".guide dl").css("marginLeft","");
	
	/*about*/
	$(".about dl").each(function(){
		$(this).hover(function(){
			$(this).find("img").css("opacity","1");	
		},function(){
			$(this).find("img").css("opacity","0.7");
		})	
	})
	
	/*case*/
	$(".case dl").each(function(){
		$(this).hover(function(){
			$(this).find("dt").css("background","#eee").animate({opacity:"1"},100);
			$(this).find("dd").animate({opacity:"1"},100);	
		},function(){
			$(this).find("dt").css("background","#fff").animate({opacity:"0.8"},150);	
			$(this).find("dd").animate({opacity:"0.8"},150);		
		})	
	})
	
	/*back_top*/
	$(window).scroll(function(){
		if ($(window).scrollTop()>200){
		$(".back_top").fadeIn(500);
		}
		else{
		$(".back_top").fadeOut(800);
		}
	});

	$(".back_top").click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	});
	
	/*图片自动切换*/
	$(".main-box1").hover(function(){
		clearInterval(ban_time);	
	},function(){
		ban_time = setInterval(function(){
			$(".main-ban li:first").hide().appendTo(".main-ban").fadeIn();
		},2000)
	}).trigger("mouseleave");
	
	/*合作影楼*/
	
	$(".yl-box li").css("opacity","0.9");
	$(".yl-box li").hover(function(){
		$(this).css("opacity","1");	
	},function(){
		$(this).css("opacity","0.9");
	})
	
	/*左边边框高度*/
	if($(".main .r").height() < $(".main .l").height()){
		$(".main .r").height($(".main .l").height())
	}else{
		
	}
	
})