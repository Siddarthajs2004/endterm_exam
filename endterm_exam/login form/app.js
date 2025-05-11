var app = angular.module('loginApp', []);

app.controller('LoginController', function($scope) {
  $scope.user = {};

  $scope.login = function() {
    if ($scope.loginForm.$valid) {
      alert("Login successful for user: " + $scope.user.username);
    }
  };
});
