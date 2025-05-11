var app = angular.module('studentApp', []);

app.controller('StudentController', function($scope) {
  $scope.students = [
    { name: 'Alice Johnson', department: 'Computer Science', email: 'alice@example.com' },
    { name: 'Bob Smith', department: 'Mechanical Engineering', email: 'bob@example.com' },
    { name: 'Carol Lee', department: 'Electrical Engineering', email: 'carol@example.com' },
    { name: 'David Kim', department: 'Computer Science', email: 'david@example.com' },
    { name: 'Eva Brown', department: 'Civil Engineering', email: 'eva@example.com' }
  ];
});
