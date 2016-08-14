var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://heatherhargreaves@localhost/personaldb";


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));

var massiveInstance = massive.connectSync({connectionString : connectionString});
app.set('db', massiveInstance);
var db = app.get('db');
// console.log(db);


// app.get('/test', function(req, res, next) {
//   res.status(200).send('yay');
// });

//GET ENDPOINTS (can't send data through service, can only retrieve it)
//get all products
app.get('/womens-all', function(req, res, next) {
  db.get_all_womens_products(function(err, products) {
    res.status(200).send(products);
  });
});

//find a particular product
app.get('/products/:id', function(req, res, next) {
  db.get_product_by_name(req.params.name, function(err, product){
    res.status(200).send(product);
  });
});

//POST ENDPOINTS (send data through service)
// create a products
app.post('/products', function(req, res, next) {
  db.add_product_to_inventory([req.body.name, req.body.description, req.body.price, req.body.type], function(err, response) {
    console.log(response);
    res.status(200).send('it was good');
  });
});

//PUT ENDPOINTS (send data through service)
// add product to cart
app.put('/products/:id', function(req, res, next) {
  db.add_product_to_cart(req.body.name, function(err, products) {
    res.status(200).send(products);
  });
});

//DELETE ENDPOINTS
// delete a product from inventory
app.delete('/products/:id', function(req, res, next) {
  db.delete_item_from_inventory(req.params.id, function(err, products) {
    res.status(200).send('it was good');
  });
});


//listening on localserver
var port = 3000;
app.listen(port, function() {
  console.log("Started server on port", port);
});
