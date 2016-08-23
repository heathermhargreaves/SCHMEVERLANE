angular.module('app')
  .controller('womensProductCtrl', ($scope, trustedFilter, womensProductService, $stateParams, checkUser) => {

    //returning product object based on id
    var id = $stateParams.id;

    womensProductService.getWomensProduct(id).then(function(response) {

      $scope.womensProduct = response[0];
      console.log($scope.womensProduct);
      $scope.assets = response[0].image_urls_list;
      $scope.images = response[0].image_urls_list;

      if($scope.womensProduct.sizes.length === 0) {
        $scope.womensProductSizes = false;
      }
      else {
        $scope.womensProductSizes = true;
      }

    });





    //select size
    $scope.selectSize = function($index) {
      $scope.size = $index;
      console.log($scope.size);
    };

    //add to cart
    $scope.addToCart = function(product) {
      console.log(product);

      //make sure they have size, if they don't,
      //if there is a size option, make sure they select, if there is a size option and they don't select, don't let them run 'addtocart'
      //if there is a size and they have selected, take that value, and put it on the object
      //send that object back to service
      if(!product.selectedSize) {
        product.selectedSize = null;
      }

      var selectedProduct = {
        productid: product.productid,
        size: product.selectedSize
      };

      womensProductService.addToCart(selectedProduct)
        .then(function(response) {
          $scope.cart = response;
          console.log($scope.cart);
        })
    }

    console.log(checkUser);
    $scope.userNotLogged = checkUser;
  }); //end controller
