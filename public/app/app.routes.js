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
      });

}); //end ruoter
