myApp.controller("matchCtrl", ['$http', '$location', '$routeParams', function ($http, $location, $routeParams) {


		var main = this;


		this.Id1 = $routeParams.id1;
		this.Id2 = $routeParams.id2;
		this.myDate = $routeParams.matchdate;

		this.team1;
		this.team2;
		this.score1;
		this.score2;
		this.code1;
		this.code2;
		this.winner;
		this.date;
		this.matchDay;
		this.rounds1 = [];

		this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
		this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";

		this.navigateBack = function () {


			$location.path("/first-view");
		}

		this.matchStats = function (data) {

			main.rounds1 = data.rounds;


			for (var a in main.rounds1) {


				for (var b in main.rounds1[a].matches) {

					// loop with routeParams ID 

					if (main.rounds1[a].matches[b].team1.code == main.Id1 && main.rounds1[a].matches[b].team2.code == main.Id2 && main.rounds1[a].matches[b].date == main.myDate) {


						main.matchDay = main.rounds1[a].name;
						main.date = main.rounds1[a].matches[b].date;
						main.team1 = main.rounds1[a].matches[b].team1.name;
						main.team2 = main.rounds1[a].matches[b].team2.name;
						main.score1 = main.rounds1[a].matches[b].score1;
						main.score2 = main.rounds1[a].matches[b].score2;
						main.code1 = main.rounds1[a].matches[b].team1.code;
						main.code2 = main.rounds1[a].matches[b].team2.code;


						if (main.score1 > main.score2) {
							main.winner = "" + main.team1 + " Won";
						} else if (main.score1 < main.score2) {
							main.winner = "" + main.team2 + " Won";
						} else {
							main.winner = "Match Drawn";

						}
					}
				}
			}
		}

		this.year1516 = function () {

			$http({
				method: "GET",
				url: main.baseUrl1
			}).then(function successCallback(response) {

				main.matchStats(response.data);
			}, function errorCallback(reason) {
				alert("Some error occurred. Check the console.");
			})
		}

		this.year1516() // Calls loadYear1 method

		this.year1617 = function () {

			$http({
				method: "GET",
				url: main.baseUrl2
			}).then(function successCallback(response) {

				main.matchStats(response.data);
			}, function errorCallback(reason) {
				alert("Some error occurred. Check the console.");
			})
		}

		this.year1617(); // Calls loadYear2 method
	}


]); // controller ends