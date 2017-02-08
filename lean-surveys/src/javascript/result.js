// result
app.controller('result', ['$scope','$location', function($scope,$location) {
    
    // 判断url中是否有score分数
    if($location.hash().split("=")[1]){
    	// 如果url中有score分数设置参数
    	$scope.score = $location.hash().split("=")[1];
    }else{
    	// 如果url中没有score分数请求获取分数
    	$scope.score = "需要ajax获取！";
    }

}]);
