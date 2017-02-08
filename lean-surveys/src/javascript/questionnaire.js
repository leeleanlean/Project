// questionnaire
app.controller('questionnaire', ['$scope','$http','$location', function($scope,$http,$location) {
    $http({
    	url:"./json/questions.json"
    }).success(function(data){

    	// 创建一个数组，用于保存回答的问题
    	var score = [];

    	// 获取总问题数
    	$scope.questionsLength = data.questions.length;

    	// 默认显示第一条问题
		$scope.questions = data.questions[0];
		$scope.list = data.questions[0].list;
		$scope.progress_width = {
			"width":100/$scope.questionsLength+"%"
		};

		// 上一题 下一题问题切换
		$scope.changeQues = function(index){
			$scope.questions = data.questions[index];
			$scope.list = data.questions[index].list;
		};

		// 上一个问题
    	$scope.preQues = function(index){
    		if(index===0){
    			alert("当前为第一题");
    		}else{
    			$scope.changeQues(index-1);
    			$scope.progress_width = {
    				"width":100/$scope.questionsLength*index+"%"
    			};
    		}
    	};

    	// 下一个问题
    	$scope.nxtQues = function(index,e){

    		// 获取选择项的值
    		var ev = e.target;
			var _this = angular.element(ev);
			var optionVal = _this.attr("data-value");

			// 判断是否为最后一题
    		if(index===$scope.questionsLength+1){

    			// 如果为最后一题
    			score[$scope.questionsLength] = optionVal;
    			var scoreVal = eval(score.join('+'));

                // 回答完最后一个问题，将分数传递给后端
    			$http({
    				url:"json/aaa.text"
    			}).success(function(data){
                    // 分数传递后端成功之后，页面跳转到结果页面
    				$location.hash('score='+scoreVal);
    				$location.path('/result');
    			});
    			
    		}else{

    			// 如果不是最后一题
    			$scope.changeQues(index-1);
    			$scope.progress_width = {
    				"width":100/$scope.questionsLength*index+"%"
    			};
    			score[index-1] = optionVal;
    		}
    	};

    });
}]);