var basepath = "./../";

var myapp = angular.module('myapp', ['ngMaterial', 'ngRoute']);
	myapp.config(function($routeProvider){
		$routeProvider
			.when('/technologies',{
				templateUrl : basepath + '/main.html',
	    	controller :'mainController'
			})
	   .when('/repo/:languageName',{
	     	templateUrl : basepath + '/repos.html',
				controller :'repoController'
	    })
	    .when('/users/:userName',{
	      templateUrl : basepath + '/user.html',
	      controller : 'userController'
	    })
			.otherwise('/technologies');
		});
