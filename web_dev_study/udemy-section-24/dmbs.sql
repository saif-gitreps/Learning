CREATE TABLE author(
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    name varchar(50) NOT NULL,
    email varchar(50) NOT NULL);

CREATE TABLE post(
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    title varchar(200) NOT NULL,
    summary varchar(250) NOT NULL,
    body TEXT NOT NULL,
	date DATETIME DEFAULT CURRENT_TIMESTAMP,
    author_id INT NOT NULL,
    FOREIGN KEY(author_id) REFERENCES author(id)
    );
    
show tables;

INSERT INTO author(name,email) VALUES('Justin' ,'Justin12@mail.com');
INSERT INTO author(name,email) VALUES('Manny' ,'Manny55@mail.com');
INSERT INTO author(name,email) VALUES('Paura' ,'Paura@mail.org');