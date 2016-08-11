angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'public/app/components/landing/landingView.html'
      });

}); //end ruoter
