var app = angular.module("broken",[]);

app.controller('MainController', function($scope) {
  $scope.view = {};
  $scope.view.number = 42;
});

app.controller('CountController', function($scope) {
  $scope.number = 5;
  $scope.pickRandomNumber = function() {
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };
});

app.controller('ReverseController', function($scope) {
  $scope.word = 'Mike';
  $scope.reverseWord = function(word) {
    $scope.word = word.split('').reverse().join('');
  };
});

app.controller('PongController', function($scope) {
  var serveCount = 0;
  $scope.updateScore = function(player) {
    $scope.score[player]++;
    serveCount++;
    if (serveCount % 2 === 0) {
      $scope.player1Server = !$scope.player1Server;
    }
    $scope.checkWinner();
  };
  $scope.reset = function() {
    $scope.score = {};
    $scope.score[1] = 0;
    $scope.score[2] = 0;
    serveCount = 0;
    $scope.player1Server = true;
    $scope.winner = 0;
  };
  $scope.reset();
  $scope.checkWinner = function() {
    for (var i = 1; i <= 2; i++) {
      if ($scope.score[i] === 11) {
        $scope.winner = i;
        break;
      }
    }
  };
});
