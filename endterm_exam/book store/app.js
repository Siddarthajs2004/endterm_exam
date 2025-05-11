var app = angular.module('bookStoreApp', []);

app.controller('BookController', function($scope) {
  $scope.books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 499,
      image: 'https://covers.openlibrary.org/b/id/8226196-L.jpg'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 399,
      image: 'https://covers.openlibrary.org/b/id/8225631-L.jpg'
    },
    {
      title: '1984',
      author: 'George Orwell',
      price: 299,
      image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg'
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 599,
      image: 'https://covers.openlibrary.org/b/id/6979861-L.jpg'
    }
  ];
});
