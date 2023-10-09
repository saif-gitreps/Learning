/* To create database */
create database restaurant_finder;

/* To create a table with conditions, backticks are used when using special characters. */
CREATE TABLE restaurant_finder.restaurants (
  id INT NOT NULL,
  name VARCHAR(200) NOT NULL,
  type VARCHAR(200) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE);

=>inserting. 

INSERT INTO restaurants(id ,name, type) VALUES(1,'Morroccan Res' , 'Morrocan')
INSERT INTO restaurants(id, name, type) VALUES(2,'Italiano Res' , 'Italian');