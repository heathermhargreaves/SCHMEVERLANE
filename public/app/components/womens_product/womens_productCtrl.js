angular.module('app')
  .controller('womensProductCtrl', ($scope, trustedFilter, womensProductService, $stateParams) => {

    var id = $stateParams.id;
    womensProductService.getWomensProduct(id).then(function(response) {

      $scope.womensProduct = response[0];
      console.log($scope.womensProduct);
      $scope.assets = response[0].image_urls_list;
      $scope.images = response[0].image_urls_list;
      console.log($scope.assets);

      if($scope.womensProduct.sizes.length === 0) {
        $scope.womensProductSizes = false;
      }
      else {
        $scope.womensProductSizes = true;
      }
      console.log($scope.womensProductSizes);

    });

    $scope.selectSize = function($index) {
      $scope.size = $index;
      console.log($scope.size);
    };

    // $scope.getWomensProduct();
    //add to cart
    $scope.addToCart = function(id) {
      console.log(id);
      // $scope.id.size = $scope.size;
      // console.log(id);
      womensProductService.addToCart(id)
        .then(function(response) {
          console.log(response);
          $scope.cart = response;
          // $scope.cart.id.push($scope.size);
          console.log($scope.cart);
        })
    }


  }); //end controller
