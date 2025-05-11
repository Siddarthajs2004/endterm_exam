var app = angular.module('employeeApp', []);

app.controller('EmployeeController', function($scope) {
  $scope.sortField = '';

  $scope.employees = [
    { name: 'Alice Johnson', department: 'HR', role: 'Manager', contact: 'alice@company.com' },
    { name: 'Bob Smith', department: 'IT', role: 'Developer', contact: 'bob@company.com' },
    { name: 'Catherine Lee', department: 'Finance', role: 'Analyst', contact: 'catherine@company.com' },
    { name: 'David King', department: 'IT', role: 'Manager', contact: 'david@company.com' },
    { name: 'Eva Brown', department: 'Sales', role: 'Executive', contact: 'eva@company.com' }
  ];

  $scope.sortBy = function(field) {
    $scope.sortField = field;
  };
});
