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
	    .when('/signin',{
	      templateUrl : basepath + '/signin.html',
	      controller : 'authController'
	    })
	    .when('/signup',{
	      templateUrl : basepath + '/signup.html',
	      controller : 'authController'
	    })
			.otherwise('/technologies');
		});
/*
  Caweb.constant('Tabs', {
      'admin' : [	'', ''],
      'branch manager' : [ 'Dashboard','Clients','Documents','Manage Users','Assign Task','Tasks','Reports'],
      'employee' : ['Clients','Documents','Tasks'],
      'CLIENT' : ['Documents'],
      'clerk' : ['Clients','Documents']
  })
  .constant('workStatus', [
  	'Pending',
      'Done',
      'Response',
  	'Completed'
  ]);*/
