/* To create database */
create database restaurant_finder;

/* To create a table with conditions, backticks are used when using special characters. */
CREATE TABLE restaurant_finder.restaurants (
  id INT NOT NULL,
  name VARCHAR(200) NOT NULL,
  type VARCHAR(200) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE);

=>inserting:
INSERT INTO restaurants(id ,name, type) VALUES(1,'Morroccan Res' , 'Morrocan')
INSERT INTO restaurants(id, name, type) VALUES(2,'Italiano Res' , 'Italian');

=> using count:
select count(*) from restaurants where type = "German";

=> using Update command:
update restaurants set type = "East-Germany" where id = 3; 

=> using Delete command:
Delete from restaurants where id = 3;

=> Checking all current data bases:
show databases; 

=> Creating table with auto increment:
create table addresses(
	unique_id int NOT NULL AUTO_INCREMENT, 
	primary key(unique_id), 
	street varchar(30) NOT NULL, 
	street_number INT NOT NULL, 
    city varchar(30) NOT NULL, 
	postal_code int , 
    country varchar(20) NOT NULL);

=> Deleting an entire table:
drop table addresses;
desc addresses;

=> Renaming tables:
RENAME TABLE addresses2 TO addresses;

=> Changing datatype of a Column:
alter table addresses modify street_number varchar(30);

=> Creating a table with FOREIGN KEYs:
CREATE TABLE restaurants(
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    name VARCHAR(200) NOT NULL,
    address_id INT NOT NULL,
    FOREIGN KEY(address_id) REFERENCES addresses(unique_id),
    type INT NOT NULL,
    FOREIGN KEY(type) REFERENCES types(id)
);

=> Creating a table with a default CURRENT_TIMESTAMP and New datatype called TEXT:
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

=> Seeing existing tables:
Show tables;

=> Inserting into RELATED DATAS across a SCHEMA:
INSERT INTO types(name) VALUES('Italian');
INSERT INTO types(name) VALUES('American');
INSERT INTO types(name) VALUES('Cuban');
INSERT INTO types(name) VALUES('German');
select * from types;

INSERT INTO 
	addresses(street,  street_number, city, postal_code , country) 
	values('StreetDaBest' , '210v' , 'Berlin' , 1122, 'Germany');
INSERT INTO 
	addresses(street,  street_number, city, postal_code , country) 
	values('Chingchong' , '01' , 'Vietnam' , 4, 'East Asia');
    
INSERT INTO
	restaurants(name, address_id, type)
    values('Schwam' , 1, 3);
INSERT INTO
	restaurants(name, address_id, type)
    values('Olam' , 1, 2);
INSERT INTO
	restaurants(name, address_id, type)
    values('BurgerKing' , 2, 1);
select * from restaurants;

=> Inserting into a table with crrent_timestamp constaint:
INSERT INTO
	reviews(rev_name, rating, text, restaurant_id)
    values('Karl' , 2, 'Not that bad of a restaurant', 2);
INSERT INTO
	reviews(rev_name, rating, text, restaurant_id)
    values('Coman' , 4, 'It was alright', 2);
INSERT INTO
	reviews(rev_name, rating, text, restaurant_id)
    values('Paura' , 3, 'bad restaurant', 3);
INSERT INTO
	reviews(rev_name, rating, restaurant_id)
    values('Laura' , 2, 1);
delete from reviews where id = 2;
select * from reviews;

=> Using inner JOIN in two tables:
SELECt * FROM restaurants INNER JOIN addresses ON (restaurants.address_id = addresses.unique_id);

=> using inner JOIN accross two or more tables:
SELECT restaurants.name , addresses.* , types.name AS CUISINE from restaurants 
INNER JOIN addresses ON (restaurants.address_id = addresses.unique_id)
INNER JOIN types ON (restaurants.type = types.id);

=> inner joins with conditions:
SELECT restaurants.name , addresses.* , types.name AS CUISINE from restaurants 
INNER JOIN addresses ON (restaurants.address_id = addresses.unique_id)
INNER JOIN types ON (restaurants.type = types.id)
WHERE addresses.city = 'Munich';

=>Practice query with inner joing and abbreviations:
SELECT R.name , A.* , T.name AS Cuisine , Rv.rev_name , Rv.text , Rv.date FROM restaurants R
INNER JOIN addresses A ON (R.address_id = A.unique_id)
INNER JOIN types T ON (R.type = T.id)
INNER JOIN reviews Rv ON(R.id = Rv.restaurant_id)
where Rv.rating > 3 OR Rv.rating < 3; 

=>Using left Outer/ left join:
SELECt * FROM restaurants LEFT JOIN addresses ON (restaurants.address_id = addresses.unique_id);

=>Using natural JOIN:
select * from restaurants natural Join addresses;