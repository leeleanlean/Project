$(function(){
	
	// activitybox
	$(".activitybox li").each(function(){
		$(this).hover(function(){
			$(this).find(".hideActivity").fadeIn(400);
			$(this).find(".Activity_bg").animate({opacity:"0"},350);
		},function(){
			$(this).find(".hideActivity").hide(0);
			$(this).find(".Activity_bg").animate({opacity:"0.4"},0);
		})
	})

	// case
	$(".case li").each(function(){
		$(this).hover(function(){
			$(this).find(".hideCaseBg,.hideCaseCon").fadeIn(300);
		},function(){
			$(this).find(".hideCaseBg,.hideCaseCon").fadeOut(120);
		})
	})

	// back_top
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

	// 
	$(".hideScreen:eq(0)").css("display","block");
	$(".screen li").each(function(){
		$(this).hover(function(){
			$(this).find(".hideScreen").show();
			$(this).siblings().find(".hideScreen").hide();
		})
	})


	// 外景展示页面
	var aSlidePage = $('#slide .slide-nav-box a');
	var aSlideCon = $('#slide .slide-box li');
	var iSize = aSlideCon.size();
	var iNow = 0;
	var timer = null;
	aSlidePage.each(function(index){
		$(this).mouseover(function(){
			iNow = index;
			slideRun()
		})
	})
	function slideRun(){
		aSlidePage.removeClass('active');
		aSlidePage.eq(iNow).addClass('active');
		aSlideCon.stop();
		aSlideCon.find('b').stop();
		aSlideCon.eq(iNow).siblings().animate({
			opacity:0
		},600).find('b').animate({
			opacity:0,
			top:-40
		},600);
		aSlideCon.eq(iNow).animate({
			opacity:1
		},600).find('b').animate({
			opacity:1,
			top:-10
		},600);
	}
	autoRun();
	function autoRun(){
		timer = setInterval(function(){
			iNow++;
			if(iNow>iSize-1) iNow=0;
			slideRun();
		},2000)
	};
	$('#slide').hover(function(){
		clearInterval(timer);
	},function(){
		autoRun();
	})


})