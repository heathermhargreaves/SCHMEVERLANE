var app = require('../index');
var db = app.get('db');

module.exports = {

  getAllOrderLinesByUser: function(req, res, next) {
    db.get_all_womens_products(function(err, products) {
      res.status(200).send(products);
    });
  },

  addNewOrderline: function(req, res, next) {
    db.get_product_by_name(req.params.id, function(err, product){
      res.status(200).send(product);
    });
  }


};
