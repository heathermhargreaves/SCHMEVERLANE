var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://heatherhargreaves@localhost/personaldb";
var session = require('express-session');
var cookieParser = require('cookie-parser');
var Cart = require('./models/cart');
var passport = require('passport');
var facebookStrategy = require('passport-facebook').Strategy;
var myKeys = require('./keys');

passport.use(new facebookStrategy({
    clientID: myKeys.facebookKey,
    clientSecret: myKeys.facebookSecret,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'email']
  },
  //create new user if they do not exist
  function(accessToken, refreshToken, profile, next) {
    db.get_user_by_facebookid([profile.id], function(err, user) {
      user = user[0];
      if(!user) {
        console.log('creating user');
        console.log(profile);
        var firstName;
        var lastName;
        var names = profile.displayName.split(' ');
        first_name = names.shift();
        last_name = names.join(' ');
        var date_joined = new Date();
        db.users.insert({facebookid: profile.id, firstname: first_name, lastname: last_name, datejoined: date_joined, email: profile.email}, function(err, user) {
          console.log('user created', user);
        });
      }
      else {
        console.log(user);
        return next(null, user);
      }
    });

    // return next(null, profile);
}));

//basic setup
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));
app.use(cookieParser());
app.use(session({
  secret: 'hello12345',
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

var massiveInstance = massive.connectSync({connectionString : connectionString});
app.set('db', massiveInstance);
var db = app.get('db');

//controllers
var orderCtrl = require('./controllers/orderCtrl')
var productCtrl = require('./controllers/productCtrl')
var userCtrl = require('./controllers/userCtrl')

////////////////////////////////////////////////
/////////// Facebook auth /////////////////////
///////////////////////////////////////////////
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/me', function(req, res, next) {
  console.log(req.user);
  if(req.user) res.send(req.user);
  else res.send('no user found');
});



///////////////////////////////////////////////////////////////////
//GET ENDPOINTS (can't send data through service, can only retrieve it)
///////////////////////////////////////////////////////////////////
//get all womens products
app.get('/womens-all', productCtrl.getAllWomensProducts);

//find a particular womens product
app.get('/womens-all/:id', productCtrl.getOneWomensProduct);

//get cart for specific user by userid
app.get('/cart', orderCtrl.get_cart);

//get cart total for specific user
app.get('/cart/total', orderCtrl.get_total_price);


////////////////////////////////////////////////////
///////// POST ENDPOINTS //////////////////////

//add item to cart
app.post('/cart', orderCtrl.add_product_to_cart);

////////////////////////////////////////////////////
///////// DELETE ENDPOINTS //////////////////////
app.delete('/cart/:id', orderCtrl.delete_product_from_cart);

/////////////////////////////////////////////////////
///////// TEMPLATES   ////////////////////////////////
///////////////////////////////////////////////////////
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
