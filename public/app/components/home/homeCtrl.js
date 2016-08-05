angular.module('app')
  .controller('homeCtrl', function($scope, homeService) {

    $scope.getAllProducts = function() {
      homeService.getAllProducts()
        .then(function(response) {
          console.log(response);
          $scope.products = response;
        });
    };
    $scope.getAllProducts();

    $scope.addProductToInventory = function(newProduct) {
      homeService.addProductToInventory(newProduct).then(function(response) {
        $scope.getAllProducts();
      });
    };

    $scope.deleteProductFromInventory = function(id) {
      homeService.deleteProductFromInventory(id)
        .then(function(response) {
          $scope.getAllProducts();
        });
    };

  });
