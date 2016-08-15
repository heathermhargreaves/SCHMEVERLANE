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
    transparent_pricing_url text
);

CREATE TABLE cart
(
  id SERIAL PRIMARY KEY NOT NULL,
  products_id int references products
);



-- id SERIAL PRIMARY KEY NOT NULL,
