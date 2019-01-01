DROP DATABASE IF EXISTS `burgers_db`;

CREATE DATABASE `burgers_db`;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
id INTEGER(10) AUTO_INCREMENT NOT NULL PRIMARY KEY UNIQUE,
burger_name VARCHAR (50) NOT NULL,
devoured BOOLEAN DEFAULT false,
date TIMESTAMP not null DEFAULT current_timestamp
);