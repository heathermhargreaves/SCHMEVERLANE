angular.module('app')
  .controller('checkoutpreviewCtrl', function($scope, checkoutpreviewService, womensProductService) {


      $scope.getCart = function() {
        checkoutpreviewService.getCart()
          .then(function(response) {
            $scope.cartItemsDetails = response;
          });

      };
      $scope.getCart();


      $scope.getCartTotal = function() {
        checkoutpreviewService.getCartTotal()
          .then(function(response) {
            $scope.orderTotal = Number(response[0].sum);
            $scope.shipping = 4.95;
            $scope.tax = Number((($scope.orderTotal + $scope.shipping) * .0875).toFixed(2));
            $scope.total = $scope.orderTotal + $scope.shipping + $scope.tax;
          })
      }
      $scope.getCartTotal();



      $scope.deleteItemFromCart = function(id) {
        checkoutpreviewService.deleteItemFromCart(id)
          .then(function(response) {
            $scope.getCart();
          });
      };

      $scope.deleteCart = function() {
        checkoutpreviewService.deleteCart()
          .then(function(response) {
            $scope.getCart();
            $scop.getCartTotal();
          });
      };

      $scope.decrementQuantity = function(quantity, id) {
        var d = quantity - 1;
        $scope.getCartTotal();
        checkoutpreviewService.changeQuantityInCart(d, id)
          .then(function(response) {
            for(var i = 0; i < $scope.cartItemsDetails; i++) {
              if($scope.cartItemsDetails[i].cartid === id) {
                $scope.cartItemsDetails[i].quantity = response.quantity;
              }

            }
            $scope.getCartTotal();
            $scope.checkQuantity();

          });
      };

      $scope.checkQuantity = function() {
        checkoutpreviewService.getCart()
          .then(function(response) {
            for (var i = 0; i < response.length; i++) {
              if(response[i].quantity <= 0) {
                $scope.deleteItemFromCart(response[i].cartid);
              }
            }
          });
      };
      $scope.checkQuantity();

      $scope.incrementQuantity = function(quantity, id) {
        var d = quantity + 1
        checkoutpreviewService.changeQuantityInCart(d, id)
          .then(function(response) {
            for(var i = 0; i < $scope.cartItemsDetails; i++) {
              if($scope.cartItemsDetails[i].cartid === id) {
                $scope.cartItemsDetails[i].quantity = response.quantity;
              }

            }
            $scope.getCartTotal();
            $scope.checkQuantity();

          });
        };

  }); // end controller
