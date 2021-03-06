angular.module('app')
  .controller('womensCtrl', function($scope, womensService, checkUser) {

    $scope.getAllWomensProducts = function() {
      womensService.getAllWomensProducts()
        .then(function(response) {
          console.log(response);
          $scope.womensProducts = response;

          $scope.products = {};
          for(var i = 0; i < response.length; i++) {
            if(!$scope.products.hasOwnProperty(response[i].product_name)) {
              $scope.products[response[i].product_name] = [{
                color: response[i].color,
                image: response[i].main_image_url,
                images: response[i].image_urls_list,
                price: response[i].price,
                id: response[i].productid
              }];
            }
            else {
              $scope.products[response[i].product_name].push({
                color: response[i].color,
                image: response[i].main_image_url,
                images: response[i].image_urls_list,
                price: response[i].price,
                id: response[i].productid
              });
            }
          }
          console.log($scope.products);
        });
    };
    $scope.getAllWomensProducts();

    console.log(checkUser);
    $scope.userNotLogged = checkUser;
  }); //end controller
