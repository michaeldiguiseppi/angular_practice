var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope) {
  $scope.name = 'Mike DiGuiseppi';
});

app.controller("ExercisesController", function($scope) {
  $scope.FavColor = 'blue';
  $scope.secondsInACentury = (60 * 60 * 24 * 365 * 100);
  $scope.rightNow = new Date();
});
