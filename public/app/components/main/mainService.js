angular.module('app')
  .service('mainService', function($http) {

      this.checkUser = function() {
        return $http({
          method: 'GET',
          url: '/me'
        }).then(function(response) {
          console.log(response);
          return response.data;
        });
      };

  }); //end main service
