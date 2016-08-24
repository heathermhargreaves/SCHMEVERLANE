angular.module('app')
  .controller('checkoutpreviewCtrl', function($scope, checkoutpreviewService, womensProductService) {


      $scope.getCart = function() {
        checkoutpreviewService.getCart()
          .then(function(response) {
            console.log(response)
            // return response.data;
            $scope.cartItems = response;
            $scope.cartItemsDetails = [];
            for(var i = 0; i < $scope.cartItems.length; i++) {
              womensProductService.getWomensProduct($scope.cartItems[i].productid)
                .then(function(res) {
                  // console.log(res[0]);
                  $scope.cartItemsDetails.push(res[0]);
                })
            }
            console.log($scope.cartItemsDetails);
          });

      };
      $scope.getCart();

      // $scope.getWomensProduct = function($scope.cartItems) {
      //   womensProductService.getWomensProduct($scope.cartItems)
      //     .then(function(response) {
      //       console.log(response);
      //     });
      // }
      // $scope.getWomensProduct();

      $scope.getCartTotal = function() {
        checkoutpreviewService.getCartTotal()
          .then(function(response) {
            console.log(response)
            // return response.data;
            $scope.orderTotal = response.data;
          })
      }
      $scope.getCartTotal();

  }); // end controller
