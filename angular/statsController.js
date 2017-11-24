myApp.controller("teamList", ['$http', '$location', '$routeParams', function ($http, $location, $routeParams) {


	var main = this;


	this.code1 = $routeParams.code1;

	this.rounds = [];


	this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
	this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";

	this.Back = function () {


		$location.path("/teams");
	}

	var matchesPlayed = 0;
	var matchesPlayed1 = 0;
	var wins = 0;
	var wins1 = 0;
	var loss = 0;
	var loss1 = 0;
	var draw = 0;
	var draw1 = 0;
	var score = 0;
	var scorea = 0;
	//FOR 2016-2017
	this.matchesPlayed = function (data) {

		main.rounds = data.rounds;


		for (var y in main.rounds) {

			for (var x in main.rounds[y].matches) {

				// loop with routeParams ID

				if (main.rounds[y].matches[x].team1.code === main.code1) {
					matchesPlayed++;
					score += main.rounds[y].matches[x].score1;
					main.name1 = main.rounds[y].matches[x].team1.name;
					if (main.rounds[y].matches[x].score1 > main.rounds[y].matches[x].score2) {
						wins++;


					} else if (main.rounds[y].matches[x].score1 < main.rounds[y].matches[x].score2) {
						loss++;


					} else if (main.rounds[y].matches[x].score1 == main.rounds[y].matches[x].score2) {
						draw++;

					}


				} else if (main.rounds[y].matches[x].team2.code == main.code1) {

					main.name1 = main.rounds[y].matches[x].team2.name;

					matchesPlayed++;
					score += main.rounds[y].matches[x].score2;


					if (main.rounds[y].matches[x].score1 > main.rounds[y].matches[x].score2) {
						loss++;

					} else if (main.rounds[y].matches[x].score1 < main.rounds[y].matches[x].score2) {
						wins++;

					} else if (main.rounds[y].matches[x].score1 == main.rounds[y].matches[x].score2) {
						draw++;

					}


				}
				main.matches = matchesPlayed;
				main.wins = wins;
				main.loss = loss;
				main.draw = draw;
				main.score = score;


			}
		}
	};
	// For 2015-2016
	this.matchesPlayed1 = function (data) {

		main.rounds = data.rounds;


		for (var y in main.rounds) {

			for (var x in main.rounds[y].matches) {

				// loop with routeParams ID

				if (main.rounds[y].matches[x].team1.code === main.code1) {
					matchesPlayed1++;
					scorea += main.rounds[y].matches[x].score1;
					main.name2 = main.rounds[y].matches[x].team1.name;
					if (main.rounds[y].matches[x].score1 > main.rounds[y].matches[x].score2) {
						wins1++;

					} else if (main.rounds[y].matches[x].score1 < main.rounds[y].matches[x].score2) {
						loss1++;

					} else if (main.rounds[y].matches[x].score1 == main.rounds[y].matches[x].score2) {
						draw1++;

					}


				} else if (main.rounds[y].matches[x].team2.code == main.code1) {

					main.name2 = main.rounds[y].matches[x].team2.name;

					matchesPlayed1++;
					scorea += main.rounds[y].matches[x].score2;


					if (main.rounds[y].matches[x].score1 > main.rounds[y].matches[x].score2) {
						loss1++;

					} else if (main.rounds[y].matches[x].score1 < main.rounds[y].matches[x].score2) {
						wins1++;

					} else if (main.rounds[y].matches[x].score1 == main.rounds[y].matches[x].score2) {
						draw1++;

					}


				}
				main.matches1 = matchesPlayed1;
				main.wins1 = wins1;
				main.loss1 = loss1;
				main.draw1 = draw1;
				main.scorea = scorea;


			}
		}
	};


	this.year1617 = function () {

		$http({
			method: "GET",
			url: main.baseUrl1
		}).then(function successCallback(response) {
			console.log(response.data.rounds)

			main.matchesPlayed(response.data);
		}, function errorCallback(reason) {
			alert("Some error occurred. Check the console.");
		})
	}

	this.year1617();
	this.year1516 = function () {

		$http({
			method: "GET",
			url: main.baseUrl2
		}).then(function successCallback(response) {
			console.log(response.data.rounds)

			main.matchesPlayed1(response.data);
		}, function errorCallback(reason) {
			alert("Some error occurred. Check the console.");
		})
	}

	this.year1516();

}]);