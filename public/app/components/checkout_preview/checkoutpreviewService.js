angular.module('app')
  .service('checkoutpreviewService', function($http) {


    this.getCart = function() {
      return $http({
        method: 'GET',
        url: '/cart'
      }).then(function(response) {
        console.log(response.data);
        return response.data;
      });
    };

    this.getCartTotal = function() {
      return $http({
        method: 'GET',
        url: '/cart/total'
      }).then(function(response) {
        // console.log(response.data);
        return response.data;
      });
    };

    this.deleteItemFromCart = function(id) {
      console.log(id);
      return $http({
        method: 'DELETE',
        url: '/cart/' + id
      }).then(function(response) {
        // console.log(response.data);
        return response.data;
      });
    };


  }); //end service
