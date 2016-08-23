INSERT INTO cart (userid, productid, orderdate, size)
VALUES ($1, $2, $3, $4);

-- example:
-- INSERT INTO carts (userid, productid, orderdate, size)
-- VALUES (2, 10, null, 'S');
