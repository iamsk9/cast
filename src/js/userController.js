myapp.controller("userController", function($scope, $location, $http, $routeParams,$filter, ProjectService){
  function getUserDetails(){

		var data = {};
    var url = "https://api.github.com/search/users?q=" + $routeParams.userName;
    console.log("userController");
    $http.get(url)
		.then(function (response){
      console.log(response);
      $scope.userDetails = response.data;
      console.log($scope.userDetails);
		}).catch(function(response) {
		  console.error('Error occurred:', response.status, response.data);
		}).finally(function() {
		});
  }
  getUserDetails();
});
