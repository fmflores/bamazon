CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price DECIMAL(10,2),
    stock_quantity INTEGER,
    PRIMARY KEY (item_id)
);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUE(101, "laptop", "electronics", 1000, 10);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUE(102, "monitor", "electronics", 150, 10);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUE(103, "tupperware", "home goods", 5, 300);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUE(104, "nalgene bottle", "sports & fitness", 15, 500);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUE(105, "cups", "kitchen", 8, 500);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUE(106, );
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUE(107, );
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUE(540);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUE(412);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUE(406);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity) VALUE(602);

SELECT * FROM products;