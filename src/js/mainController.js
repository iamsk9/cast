myapp.controller("mainController", function($scope, $http, $location, ProjectService){

  $scope.groupOne = [
    {"name":"Javascript","source":"/../img/js.jpg", "alt":"Javascript"},
    {"name":"Java","source":"/../img/java.jpg", "alt": "Java"},
    {"name":"Python","source":"/../img/python.jpg", "alt": "Python"}
  ];
  $scope.groupTwo = [
    {"name":"PHP","source":"/../img/php.jpg", "alt":"PHP"},
    {"name":"Ruby","source":"/../img/ruby.jpg", "alt": "Ruby"}
  ];
  $scope.clickedLanguage = function(language){
    $location.path('/repo/' + language.name);
  };
});
