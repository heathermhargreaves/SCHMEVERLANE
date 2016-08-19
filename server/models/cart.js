module.exports = function Cart() {
  // create items array to push cart items into, total quantity to track quantity of items in cart, and total price to track the sum of prices of items in cart
  this.items = [];
  this.totalQty = 0;
  this.totalPrice = 0;


  // function to adjust qty and price on cart
  this.getTotal = function(item) {
    this.totalQty++;
    this.totalPrice += item.price;
  }

};
