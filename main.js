var app = angular.module("madLibs", []);
app.controller("libController", function($scope) {
  $scope.boyName = '';
  $scope.adj = '';
  $scope.pNoun1 = '';
  $scope.pNoun2 = '';
  $scope.insect = '';
  $scope.pNoun3 = '';
  $scope.verb = '';
});
