angular.module('app')
  .controller('checkoutpreviewCtrl', function($scope, checkoutpreviewService, womensProductService) {


      $scope.getCart = function() {
        checkoutpreviewService.getCart()
          .then(function(response) {
            console.log(response);
            $scope.cartItemsDetails = response;
          })
      };
      $scope.getCart();


      $scope.getCartTotal = function() {
        checkoutpreviewService.getCartTotal()
          .then(function(response) {
            console.log(response);
            // return response.data;
            $scope.orderTotal = response.data;
          })
      }
      $scope.getCartTotal();

      $scope.deleteItemFromCart = function(id) {
        console.log(id);
        checkoutpreviewService.deleteItemFromCart(id)
          .then(function(response) {
            console.log(response);
            $scope.getCart();
          })

      }

      $scope.decrementQuantity = function(id) {
        id.quantity--
      }


  }); // end controller
