angular.module('app')
  .controller('mainCtrl', function ($scope, ngDialog) {
    $scope.clickToLogin = function () {
        ngDialog.open({
          template: './app/components/main/loginModal.html',
          className: 'ngdialog-theme-plain',
          controller: 'mainCtrl'
        });
    };

});
