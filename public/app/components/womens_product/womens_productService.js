angular.module('app')
  .service('womensProductService', function($http) {


    this.getWomensProduct = function(id) {
        return $http({
          method: 'GET',
          url: 'http://localhost:3000/#/womens-all/' + id
        }).then(function(response) {
          console.log(response);
          return response.data;
        });
    };

  }); //end service
