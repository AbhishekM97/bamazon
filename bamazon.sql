Drop database if exists bamazon;

create database bamazon;

use bamazon;

create table products(
item_id integer(10) auto_increment not null,
product_name varchar(30) not null,
department_name varchar(30) not null,
price integer(10) not null,
stock_quantity integer(10) not null,
primary key(item_id)
);


insert into products
(product_name, department_name, price, stock_quantity)
values("IPhone", "Electronics", 800, 69);

insert into products
(product_name, department_name, price, stock_quantity)
values( "Sony 4k 80'", "Electronics", 2000, 50);

insert into products
(product_name, department_name, price, stock_quantity)
values("PlayStation 5", "Electronics", 500, 100);

insert into products
(product_name, department_name, price, stock_quantity)
values("Xbox 2", "Electronics", 500, 80);

insert into products
(product_name, department_name, price, stock_quantity)
values("MacBook Pro 15'9", "Electronics", 1600, 100);

insert into products
(product_name, department_name, price, stock_quantity)
values("Sterio", "Electronics", 149, 50);

insert into products
(product_name, department_name, price, stock_quantity)
values("Potatos", "Food", 1, 1000);

insert into products
(product_name, department_name, price, stock_quantity)
values("100% whey gold standard", "food", 35, 50);

insert into products
(product_name, department_name, price, stock_quantity)
values("CBD drops", "Health", 20, 100);

insert into products
(product_name, department_name, price, stock_quantity)
values("Siberian Husky", "Pets", 800, 40);







