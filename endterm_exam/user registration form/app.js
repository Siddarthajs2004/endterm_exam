var app = angular.module('registrationApp', []);

app.controller('RegistrationController', function($scope) {
  $scope.user = {};

  $scope.registerUser = function() {
    if ($scope.registrationForm.$valid) {
      alert("Registration successful for " + $scope.user.name + "!");
      $scope.user = {};
      $scope.registrationForm.$setPristine();
      $scope.registrationForm.$setUntouched();
    }
  };
});
