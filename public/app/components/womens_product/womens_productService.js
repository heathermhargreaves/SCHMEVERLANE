angular.module('app')
  .service('womensProductService', function($http) {

    
    this.getWomensProduct = function(id) {
        return $http({
          method: 'GET',
          url: '/womens-all/' + id
        }).then(function(response) {
          // console.log(response);
          return response.data;
        });
    };

    this.addToCart = function(product) {
      console.log(product);
      return $http({
        method: 'POST',
        url: '/cart',
        data: product
      }).then(function(response) {
        // console.log(response);
        return response.data;
      });

    };

  }); //end service
