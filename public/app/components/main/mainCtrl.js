angular.module('app')
  .controller('mainCtrl', function ($scope, mainService, ngDialog) {

    $scope.clickToLogin = function () {
        ngDialog.open({
          template: './app/components/main/loginModal.html',
          className: 'ngdialog-theme-plain',
          controller: 'mainCtrl'
        });
    };

    // console.log(checkUser);
    // $scope.userNotLogged = checkUser;

    // console.log(checkUser);

}); //end main controller
