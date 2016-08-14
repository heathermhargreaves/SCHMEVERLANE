angular.module('app')
  .service('womensService', function($http) {


    this.getAllWomensProducts = function() {
        return $http({
          method: 'GET',
          url: 'http://localhost:3000/womens-all'
        }).then(function(response) {
          return response.data;
        });
    };

  }); //end service
