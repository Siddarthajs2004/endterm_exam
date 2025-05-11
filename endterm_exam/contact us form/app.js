var app = angular.module('contactApp', []);

app.controller('ContactController', function($scope) {
  $scope.user = {};

  $scope.submitForm = function() {
    if ($scope.contactForm.$valid) {
      alert("Message sent! Thank you, " + $scope.user.name + ".");
      $scope.user = {}; // Reset form
      $scope.contactForm.$setPristine();
      $scope.contactForm.$setUntouched();
    }
  };
});
