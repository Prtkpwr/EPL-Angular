myApp.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/first-view", {
			templateUrl: "views/first-view.html",
			controller: "mainController",
			controllerAs: "epl"
		})
		.when("/match/:id1/:id2/:matchdate", {
			templateUrl: "views/second.html",
			controller: "matchCtrl",
			controllerAs: "mCtrl"
		})
		.when("/teams", {
			templateUrl: 'views/last.html',
			controller: 'matchCtrl',
			controllerAs: 'mCtrl'
		})
		.when('/teams/:code1', {
			templateUrl: 'views/teams.html',
			controller: 'teamList',
			controllerAs: 'team'
		})

		.otherwise({
			redirectTo: '/'

		});
}]);
//for "%2F" to "/"
myApp.config(['$locationProvider', function ($locationProvider) {
	$locationProvider.hashPrefix('');
}]);