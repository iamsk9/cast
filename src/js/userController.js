myapp.controller("userController", function($scope, $location, $http, $routeParams,$filter, ProjectService){
  $scope.repos = [];
  $scope.currentPage = 0;
  $scope.pageSize = 6;

  $scope.getData = function () {
    return $filter('filter')($scope.repos, $scope.q)
  }

  $scope.numberOfPages=function(){
    return Math.ceil($scope.getData().length/$scope.pageSize);
  }

  function getUserDetails(){
    var url = "https://api.github.com/search/users?q=" + $routeParams.userName;
    $http.get(url)
		.then(function (response){
      $scope.userDetails = response.data.items[0];
      console.log($scope.userDetails);
      getRepos($scope.userDetails);
		}).catch(function(response) {
		  console.error('Error occurred:', response.status, response.data);
		}).finally(function() {
		});
  }

  function getRepos(data){
    $http.get(data.repos_url)
		.then(function (response){
      $scope.repos = response.data;
      getFollowers(data);
		}).catch(function(response) {
		  console.error('Error occurred:', response.status, response.data);
		}).finally(function() {
		});
  }

  function getFollowers(data){
    $http.get(data.followers_url)
		.then(function (response){
      $scope.followers = response.data.length;
      getFollowing(data)
		}).catch(function(response) {
		  console.error('Error occurred:', response.status, response.data);
		}).finally(function() {
		});
  }
  
  function getFollowing(data){
    var url = "https://api.github.com/users/" + $routeParams.userName + "/following";
    $http.get(url)
		.then(function (response){
      console.log(response.data.length);
      $scope.following = response.data.length;
		}).catch(function(response) {
		  console.error('Error occurred:', response.status, response.data);
		}).finally(function() {
		});
  }
  getUserDetails();
});
