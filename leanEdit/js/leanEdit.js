$(function(){
	var leanEditer = {
		textareaBlur:function(){

			//textarea blur
			var $typeCode = $("#code");
			$typeCode.blur(function(){
				var typeCode = $typeCode.val(),
					$viewCode = $(".view");

				//view
				$viewCode.html(typeCode);

			})

		},
		closeWindow:function(){
			$(window).bind('beforeunload',function(){return '关闭页面内容不会被保存';});
		}
	}
	leanEditer.textareaBlur();
	leanEditer.closeWindow();
})