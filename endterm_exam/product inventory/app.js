var app = angular.module('inventoryApp', []);

app.controller('InventoryController', function($scope) {
  $scope.sortField = '';

  $scope.products = [
    { name: 'Laptop', category: 'Electronics', price: 55000, quantity: 3 },
    { name: 'Desk Chair', category: 'Furniture', price: 7000, quantity: 15 },
    { name: 'Notebook', category: 'Stationery', price: 50, quantity: 2 },
    { name: 'Smartphone', category: 'Electronics', price: 30000, quantity: 9 },
    { name: 'Pen', category: 'Stationery', price: 10, quantity: 1 },
    { name: 'Bookshelf', category: 'Furniture', price: 4000, quantity: 6 }
  ];

  $scope.sortBy = function(field) {
    $scope.sortField = field;
  };
});
