myapp.controller("repoController", function($scope, $location, $http, $routeParams,$filter, ProjectService){
  $scope.repos = [];
  $scope.currentPage = 0;
  $scope.pageSize = 9;
  $scope.q = '';

  $scope.getData = function () {
    return $filter('filter')($scope.repos, $scope.q)
  }

  $scope.numberOfPages=function(){
    return Math.ceil($scope.getData().length/$scope.pageSize);
  }

  function getRepos(){
    var url = "https://api.github.com/search/repositories?q=" + $routeParams.languageName;
    $http.get(url)
		.then(function (response){
      $scope.repoDetails = response.data;
      $scope.repos = response.data.items;
		}).catch(function(response) {
		  console.error('Error occurred:', response.status, response.data);
		}).finally(function() {
		});
  }
  getRepos();
  $scope.getUser = function(repo){
    var url = "https://api.github.com/repos/" + repo.owner.login + "/" + $routeParams.languageName + "/contributors";
    $http.get(url)
		.then(function (response){
      $location.path('/users/' + response.data[0].login);
		}).catch(function(response) {
		  console.error('Error occurred:', response.status, response.data);
		}).finally(function() {

		});
  };
});
myapp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
