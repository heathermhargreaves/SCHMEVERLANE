angular.module('app')
  .service('homeService', function($http){

    this.getAllProducts = function() {
        return $http({
          method: 'GET',
          url: '/products'
        }).then(function(response) {
          return response.data;
        });
    };

    this.addProductToInventory = function(newProduct) {
      return $http({
        method: "POST",
        url: '/products',
        data: newProduct
      }).then(function(response) {
        return response;
      });
    };

    this.deleteProductFromInventory = function(id) {
      return $http({
        method: 'DELETE',
        url: '/products/' + id
      }).then(function(response) {
        return "it was good";
      });
    };


  }); //end service
