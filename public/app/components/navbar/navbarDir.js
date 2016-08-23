angular.module('app')
  .directive('navbarDir', function() {

    return {
      restrict: 'E',
      templateUrl: './app/components/navbar/navbarTemplate.html',
      controller: 'navbarCtrl'
    };

  }); //end directive
