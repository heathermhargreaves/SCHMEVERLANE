var app = require('../index');
var db = app.get('db');

module.exports = {


    add_product_to_cart: function(req, res, next) {
        console.log(req.body);
        db.add_cartorder([req.user.userid, req.body.productid, new Date(), req.body.size], function(err, productid) {
                console.log(err, productid);
                res.status(200).send('it was good');
            });
        }



}; //end controller
