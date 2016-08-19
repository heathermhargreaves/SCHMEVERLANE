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
         controller: 'womensProductCtrl'
      });
      // .state('checkout-preview', {
      //   url: '/checkout/preview',
      //   templateUrl: 'index.html',
      //
      // })

}); //end ruoter
