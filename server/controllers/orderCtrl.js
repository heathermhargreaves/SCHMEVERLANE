var app = require('../index');
var db = app.get('db');

module.exports = {


    add_product_to_cart: function(req, res, next) {
        db.add_cartorder([req.user.userid, req.body.productid, new Date(), req.body.size, 1], function(err, productid) {
                res.status(200).send('it was good');
            });
        },

    get_cart: function(req, res, next) {
        db.get_cart(req.user.userid, function(err, product){
          res.status(200).send(product);
        });
    },

    get_total_price: function(req, res, next) {
      db.get_order_total(req.user.userid, function(err, total) {
        res.status(200).send(total);
      });
    },

    delete_product_from_cart: function(req, res, next) {
      console.log(req.params.id);
      db.delete_product_from_cart(req.params.id, function(err, products) {
        res.status(200).send('heyyy');
      });
    },

    delete_cart: function(req, res, next) {
      db.delete_cart_items_by_userid(req.user.userid, function(err, cart) {
        res.status(200).send(cart);
      });
    },

    update_quantity: function(req, res, next) {
      db.update_cart_quantity(req.body.newQuantity, req.body.id, function(err, products) {
      });
      db.get_quantity_of_product_by_cartid(req.body.id, function(err, products) {
        res.status(200).send(products);
      });
    }


}; //end controller
