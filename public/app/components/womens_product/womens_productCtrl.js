angular.module('app')
  .controller('womensProductCtrl', ($scope, womensProductService, $stateParams, checkUser, ngDialog) => {

    //returning product object based on id
    var id = $stateParams.id;

    womensProductService.getWomensProduct(id).then(function(response) {

      $scope.womensProduct = response[0];
      $scope.assets = response[0].image_urls_list;
      $scope.images = response[0].image_urls_list;

      if($scope.womensProduct.sizes.length === 0) {
        $scope.womensProductSizes = false;
      }
      else {
        $scope.womensProductSizes = true;
      }

    });


    //add to cart
    $scope.addToCart = function(product) {

      if(product.sizes === null) {
        product.selectedSize = 'One size';
        $scope.noSelectedSize = false;
        ngDialog.open({
          template: './app/components/modal_templates/added_item_to_cart.html',
          className: 'ngdialog-theme-plain',
          controller: 'mainCtrl'
        });
      }
      else if(!product.selectedSize) {
        $scope.noSelectedSize = true;
      }

        // else {
        //   $scope.noSelectedSize = false;
        // }

      var selectedProduct = {
        productid: product.productid,
        size: product.selectedSize
      };

      if(product.selectedSize) {
        womensProductService.addToCart(selectedProduct)
          .then(function(response) {
            $scope.cart = response;
          });
      }
    };

    //check if user is logged in
    $scope.checkIfUserCanAdd = function() {
      if(!$scope.userNotLogged) {
        ngDialog.open({
          template: './app/components/modal_templates/cannot_add_to_cart_login.html',
          className: 'ngdialog-theme-plain',
          controller: 'mainCtrl'
        });
      }
     else if (!$scope.noSelectedSize) {
        ngDialog.open({
          template: './app/components/modal_templates/added_item_to_cart.html',
          className: 'ngdialog-theme-plain',
          controller: 'mainCtrl'
        });
      }
    };

    console.log(checkUser);
    $scope.userNotLogged = checkUser;

  }); //end controller
