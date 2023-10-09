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

Deleting an entire table => 

drop table addresses;
desc addresses;

Renaming tables=>

RENAME TABLE addresses2 TO addresses;