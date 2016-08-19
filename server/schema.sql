CREATE TABLE everlane_products (
    product_name text,
    price integer,
    gender_type text,
    featured_type text,
    product_type text,
    product_category text,
    factory text,
    main_image_url text,
    sizes text[],
    quantity integer,
    color text,
    description_main text,
    description_size text,
    description_materials text,
    image_urls_list text[],
    video text,
    transparent_pricing_url text
);

productid SERIAL PRIMARY KEY NOT NULL,



CREATE TABLE orders
(
  orderid SERIAL PRIMARY KEY NOT NULL,
  userid int references users,
  orderdate timestamp with time zone
);

CREATE TABLE order_lines
(
  orderlineid SERIAL PRIMARY KEY NOT NULL,
  orderid int references orders,
  productid int references everlane_products,
  quantity integer
);

CREATE TABLE users
(
  userid SERIAL PRIMARY KEY NOT NULL,
  facebookid text,
  firstName text,
  lastName text,
  dateJoined timestamp with time zone
);


-- id SERIAL PRIMARY KEY NOT NULL,
