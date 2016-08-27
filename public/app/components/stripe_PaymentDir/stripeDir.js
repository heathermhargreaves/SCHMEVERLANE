angular.module('app')
.directive('stripePayment', function($http) {
  return {
    restrict: 'E',
    template: '<button id="customPaymentButton" ng-click="deleteCart()">Purchase</button>',
    controller: 'checkoutpreviewCtrl',
    link: function(scope, elem, attrs) {
      var handler = StripeCheckout.configure({
        key: 'pk_test_hC6fkYywOPHze3b3UZhEwjPN',
        image: 'https://pbs.twimg.com/profile_images/684546698538926081/N0kGR9pm.jpg',
        locale: 'auto',
        token: function(token) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token);
        $http.post('/api/charge', {
          stripeToken: token.id,
          price: 1000,
          email: token.email,
          stripeTokenCard: token.card
          });
        }
      });

      $('#customPaymentButton').on('click', function(e) {
        // Open Checkout with further options:
        handler.open({
          name: 'Everlane checkout',
          description: 'Your final cart total',
          amount: (scope.total * 100)
        });
        e.preventDefault();
      });

      // Close Checkout on page navigation:
      $(window).on('popstate', function() {
        handler.close();
      });
    }
  }
})
