angular.module('app')
  .controller('landingCtrl', function($scope, checkUser) {

      console.log(checkUser);
      $scope.userNotLogged = checkUser;

  });
