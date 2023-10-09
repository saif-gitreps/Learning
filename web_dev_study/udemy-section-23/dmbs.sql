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

=> using count.

select count(*) from restaurants where type = "German";

=> using Update command

update restaurants set type = "East-Germany" where id = 3; 

=> using Delete command

Delete from restaurants where id = 3;

=> Checking all current data bases

show databases; 

=> Creating table with auto increment

create table addresses(
	unique_id int NOT NULL AUTO_INCREMENT, 
	primary key(unique_id), 
	street varchar(30) NOT NULL, 
	street_number INT NOT NULL, 
    city varchar(30) NOT NULL, 
	postal_code int , 
    country varchar(20) NOT NULL);

=> Deleting an entire table 

drop table addresses;
desc addresses;

=> Renaming tables

RENAME TABLE addresses2 TO addresses;

=> Changing datatype of a Column

alter table addresses modify street_number varchar(30);

=> Creating a table with FOREIGN KEYs

CREATE TABLE restaurants(
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    name VARCHAR(200) NOT NULL,
    address_id INT NOT NULL,
    FOREIGN KEY(address_id) REFERENCES addresses(unique_id),
    type INT NOT NULL,
    FOREIGN KEY(type) REFERENCES types(id)
);

=> Creating a table with a default CURRENT_TIMESTAMP and New datatype called TEXT

CREATE TABLE reviews(
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    rev_name VARCHAR(200) NOT NULL,
	rating INT NOT NULL,
    text TEXT,
    date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    restaurant_id INT NOT NULL,
    FOREIGN KEY(restaurant_id) REFERENCES restaurants(id)
);

=> Seeing existing tables.

Show tables;