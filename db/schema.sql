DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE products(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(225) NOT NULL,
  devoured BOOL DEFAULT false,
  primary key(id)
);