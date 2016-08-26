INSERT INTO cart (userid, productid, orderdate, size, quantity)
VALUES ($1, $2, $3, $4, $5);

-- example:
-- INSERT INTO cart (userid, productid, orderdate, size, quantity)
-- VALUES (1, 10, null, 'S', 1);
