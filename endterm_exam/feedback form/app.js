var app = angular.module('feedbackApp', []);

app.controller('FeedbackController', function($scope) {
  $scope.feedback = {};

  $scope.submitFeedback = function() {
    if ($scope.feedbackForm.$valid) {
      alert("Thank you for your feedback, " + $scope.feedback.name + "!");
      $scope.feedback = {};
      $scope.feedbackForm.$setPristine();
      $scope.feedbackForm.$setUntouched();
    }
  };
});
