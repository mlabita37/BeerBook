console.log('...app.js loaded');

var app = angular.module('BrewBook', []);

app.controller('usersController', ['$scope', '$http', function($scope, $http){
  $scope.newUser = {};

  $scope.allUsers = function(){
    $http.get('/api/users').then(function(response){
      var data = response.data;
      $scope.users = data.users;
    });
  };

  $scope.createUser = function(){
    $http.post('/api/users', {user: $scope.newUser}).then(function(response){
      var data = response.data;
      console.log("Creating new user");
      $scope.users.push( data );
      $scope.allUsers();
      $scope.newUser = '';
    });
  };

  $scope.removeUser = function(idx){
    $http.delete('api/users/' + idx ).then(function (response) {
      console.log(response);
      $scope.allUsers();
    })
  };

  $scope.allUsers();
}]);
