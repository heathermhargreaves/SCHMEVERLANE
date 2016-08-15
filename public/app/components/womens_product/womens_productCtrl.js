angular.module('app')
  .controller('womensProductCtrl', function($scope, trustedFilter, womensProductService) {

    $scope.getWomensProduct = function(id) {
      console.log(id);
      womensProductService.getWomensProduct(id)
        .then(function(response) {
          console.log(response);
          $scope.womensProduct = response;
        });
    };
    // $scope.getWomensProduct();


  }); //end controller
