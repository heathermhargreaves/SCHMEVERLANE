angular.module('app')
  .controller('navbarCtrl', function($scope, mainService) {

    $scope.getUserName = function() {
      mainService.checkUser()
        .then(function(response) {
          $scope.firstname = response.firstname;
        });
    };

    $scope.getUserName();

  }); //end controller
