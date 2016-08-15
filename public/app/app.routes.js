angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: './app/components/landing/landingView.html'
      })
      .state('womens-all', {
        url: '/womens-all',
        templateUrl: './app/components/womens/womens.html',
        controller: 'womensCtrl'
      })
      .state('womens-product', {
        url: '/womens-all/:id',
        templateUrl: './app/components/womens_product/womens_product.html',
        controller: function($scope, womensProductService, $stateParams) {
          womensProductService.getWomensProduct($stateParams.id).then(function(response) {
            console.log(response);
            $scope.womensProduct = response;
            // return $scope.womensProduct;
          });
        }
      });

}); //end ruoter
