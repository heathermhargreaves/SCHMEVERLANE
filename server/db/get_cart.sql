-- Select *
-- From cart
-- Join users
-- On cart.userid = users.userid
-- Where users.userid = $1;


Select *
From Cart inner join users on cart.userid = users.userid
inner join everlane_products on everlane_products.productid = cart.productid
Where users.userid = $1;

-- Select *
-- From Cart inner join users on cart.userid = users.userid
-- inner join everlane_products on everlane_products.productid = cart.productid
-- Where users.userid = 1
