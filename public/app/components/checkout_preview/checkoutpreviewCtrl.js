angular.module('app')
  .controller('checkoutpreviewCtrl', function($scope, checkoutpreviewService) {

      $scope.getCart = function() {
        checkoutpreviewService.getCart()
          .then(function(response) {
            console.log(response)
            return response.data;
          })
      }
      $scope.getCart();

      $scope.getCartTotal = function() {
        checkoutpreviewService.getCartTotal()
          .then(function(response) {
            console.log(response)
            return response.data;
          })
      }
      $scope.getCart();

  }); // end controller
