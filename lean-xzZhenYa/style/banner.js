$(function(){
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