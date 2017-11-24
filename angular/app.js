var myApp = angular.module('sportsApp', ['ngRoute']);


myApp.controller('mainController', ['$http', function ($http) {

	//create a context
	var main = this;
	this.name1;
	this.name2;
	this.rounds1 = [];
	this.rounds2 = [];
	this.matches1 = [];

	this.pageHeading = 'English premier league';
	this.pageSubHeading = 'English premier league club matches 2015-2016';

	this.baseUrl02 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
	this.baseUrl01 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';

	this.loadData1 = function () {

		$http({
			method: 'GET',
			url: main.baseUrl01
		}).then(function successCallback(response) {
			// this callback will be called asynchronously
			// when the response is available
			//console.log(response);
			main.name1 = response.data.name;
			console.log(main.name1);
			main.rounds1 = response.data.rounds;
			console.log(main.rounds1);
			main.matches1 = response.data.rounds[0].matches;

		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			alert("some error occurred. Check the console.");
			console.log(response);

		});

	} // end loadData1

	this.loadData1();

	this.loadData2 = function () {

		$http({
			method: 'GET',
			url: main.baseUrl02
		}).then(function successCallback(response) {
			// this callback will be called asynchronously
			// when the response is available
			//console.log(response);
			main.name2 = response.data.name;
			console.log(main.name2);
			main.rounds2 = response.data.rounds;
			console.log(main.rounds2);

		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			alert("some error occurred. Check the console.");
			console.log(response);

		});

	} // end loadData2

	this.loadData2();

}]);

//controller