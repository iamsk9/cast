myapp.controller("repoController", function($scope, $http, $location, $routeParams, ProjectService){
  function getRepos(){
    console.log($routeParams.languageName);
  }
  getRepos();
});
