// JavaScript Document

$(function () {
	
	/***** 选项卡 *****/
	tab(".sankeTab>li",".sankeCon>.sankeList");
	tab(".duliTab>li",".duliCon>.duliList");
	function tab(oTab,oNeirong){
		$(oTab).mouseover(function(){
			$(this).addClass("on");
			$(this).siblings().removeClass("on");
			$(oNeirong).hide();
			$(oNeirong).eq($(this).index()).show();
		})
	}
	
	/***** 浮动返回顶部QQ *****/
	$(".back_top").hide();
	$(".qq").hide();
	$(window).scroll(function(){
		if ($(window).scrollTop()>150){
			$(".back_top,.qq").fadeIn(500);
		}
		else
		{
			$(".back_top,.qq").fadeOut(500);
		}
	});

	$(".back_top").click(function(){
	$('body,html').animate({scrollTop:0},600);
	return false;
	});
	$(".qq").click(function(){
		window.open("http://www.baidu.com","_blank")
	})
	
	$(".list-m dl:last").css("border-bottom","none");
	
});
