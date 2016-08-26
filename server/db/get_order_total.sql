Select sum(price * quantity)
From everlane_products
Join cart on cart.productid = everlane_products.productid
Join users on users.userid = cart.userid
Where cart.userid = $1;
