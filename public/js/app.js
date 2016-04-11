console.log('... app.js loaded');

var app = angular.module('BrewBook', []);

app.controller('usersController', ['$scope', '$http', function($scope, $http){
  $scope.newUser = {};
  $scope.emails = [];

  $scope.createUser = function(){
    $http.post('/api/users', {email: $scope.newEmail}).then(function(response){
      console.log("Create user is working");
      var data = response.data;
      $scope.users.push( data );
      $scope.newUser = '';
    });
  };
}]);
