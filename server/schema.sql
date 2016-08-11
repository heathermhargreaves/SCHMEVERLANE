CREATE TABLE everlane_products (
    product_name char(60),
    price integer,
    gender_type char(10),
    featured_type char(50),
    product_type char(50),
    product_category char(50),
    factory char(20),
    main_image_url char(100),
    sizes text[],
    quantity integer,
    color char(20),
    description_main char(200),
    description_size char(140),
    description_materials char(200),
    image_urls_list text[],
    transparent_pricing_url char(240)
);

CREATE TABLE cart
(
  id SERIAL PRIMARY KEY NOT NULL,
  products_id int references products
);
