	var app=angular.module('feedTest', [
		'ngSanitize',
		'ngAnimate',
		'ngRoute',
		'appCon',
		'feedService',
		'appResize']);

		app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/',{
			templateUrl:'pages/display_frame.html',
			controller:'feedCtrl'
		}).
		when('/instructions',{
			templateUrl:'pages/instructions.html',
			controller:'feedCtrl'
		}).
		otherwise({
			redirectTo:'/'
		});

	}]);