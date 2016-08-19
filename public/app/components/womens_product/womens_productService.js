angular.module('app')
  .service('womensProductService', function($http) {


    this.getWomensProduct = function(id) {
        return $http({
          method: 'GET',
          url: '/womens-all/' + id
        }).then(function(response) {
          console.log(response);
          return response.data;
        });
    };

    this.addToCart = function(id) {
      console.log(id);
      return $http({
        method: 'GET',
        url: '/checkout/preview/' + id
      }).then(function(response) {
        console.log(response);
        return response.data;
      });

    };

  }); //end service
