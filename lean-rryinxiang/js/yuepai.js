$(function(){

    tab(".boxTab>li",".boxTabContent>.tab1");
	function tab(oTab,oNeirong){
		$(oTab).mouseover(function(){
			$(this).addClass("on");
			$(this).siblings().removeClass("on");
			$(oNeirong).hide();
			$(oNeirong).eq($(this).index()).show();
		})
	}

})