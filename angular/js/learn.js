/**
* angular Module
*
* Description
*/
var app = angular.module("app",[]);

// 移动端点击显示导航
app.controller('showNav', function($scope){
	$scope.showNav = function(){
		angular.element(document.querySelector('#isMobile').style.display = "block");
	}

	
})

// 引用nav模板文件
.directive("nav",function(){
	return {
		restrict:"A",
		replace:true,
		templateUrl:"template/nav.html"
	}
})

// 引用reward模板文件
.directive("reward",function(){
	return {
		restrict:"A",
		replace:true,
		templateUrl:"template/reward.html"
	}
})