CREATE TABLE products
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(40),
  description TEXT,
  price MONEY,
  type VARCHAR(20)
);

CREATE TABLE cart
(
  id SERIAL PRIMARY KEY NOT NULL,
  products_id int references products
);
