$(function(){

	// 设置右边部分高度等于浏览器高度
	$(".container,.r").css("minHeight",$(".l").height());
	$(window).resize(function() {
		$(".container,.r").css("minHeight",$(".l").height());
	});


})
