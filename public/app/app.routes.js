angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: './app/components/landing/landingView.html',
        controller: 'landingCtrl',
        resolve: {
          checkUser: function(mainService) {
            return mainService.checkUser()
             .then(function(response) {
              //  console.log("hi", response);
               if(response.userid) {
                 console.log(response.firstname);
                //  $scope.firstname = response.firstname;
                //  console.log(firstname);
                 return true;
               }

               else {
                //  console.log('bye');
                 return false;
               }
             });
          }
        }
      })
      .state('womens-all', {
        url: '/womens-all',
        templateUrl: './app/components/womens/womens.html',
        controller: 'womensCtrl',
        resolve: {
          checkUser: function(mainService) {
            return mainService.checkUser()
             .then(function(response) {
              //  console.log("hi", response);
               if(response.userid) {
                //  console.log('hello');
                 return true;
               }

               else {
                //  console.log('bye');
                 return false;
               }
             });
          }
        }
      })
      .state('womens-product', {
        url: '/womens-all/:id',
        templateUrl: './app/components/womens_product/womens_product.html',
         controller: 'womensProductCtrl',
         resolve: {
           checkUser: function(mainService) {
             return mainService.checkUser()
              .then(function(response) {
               //  console.log("hi", response);
                if(response.userid) {
                 //  console.log('hello');
                  return true;
                }

                else {
                 //  console.log('bye');
                  return false;
                }
              });
           }
         }
      })
      .state('checkout-preview', {
        url: '/checkout-preview',
        templateUrl: './app/components/checkout_preview/checkoutpreview.html'

      })

}); //end ruoter
