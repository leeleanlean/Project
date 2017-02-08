var app = angular.module('app', ['ngRoute']);

// ngRoute
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when("/questionnaire",{
		templateUrl: "questionnaire.html"
	})
	.when("/notices",{
		templateUrl: "notices.html"
	})
	.when("/result",{
		templateUrl: "result.html"
	})
	.when("/resultDetail",{
		templateUrl: "resultDetail.html"
	})
	.otherwise({
		redirectTo: "notices"
	});
}]);