create table students (id number(2),name varchar(20), cgpa number(3,2));

[note: number(3,2)? why?]

describe students;

variables can have 1-30 characters. It can only begin with characters 
and must contain A-Z , a-z , 0-9 or _ ,$, #.

DATATYPE:

number datatype:
1- NUMBER , ex: 12,345,678.9012
2- NUMBER(10,2) , ex: 12,345,678.90 <- whole numbers limit is 10,decimal limit is 2
3- NUMBER(10) , ex: 12,345,678 <- only limits to 10, deletes all the decimal. 
4- NUMBER(10,-3) , ex: 12,346,000 <- truncates the whole numbers from right to 0.

CHAR datatype : its best to use vartchar instead.

VARCHAR2 : dynamically allocates spaces to the strings (like width to inline elements).
[note: why varchar2 and not varchar? Because oracle wanted a varchar of their version thats
why they names it varchar for their own use]

DATE: the default format is DD-MON-YY , ex: 12-OCT-16.

inserting values into tables:

insert into students(id,name,cgpa) values(1,'Karim' ,3.2); [note: use ' ' and not " "]
select * from students;

deleting value from tables:

delete * from students; <- deletes everything.

Delete from students where name = 'Alphonso'; <- setting a condition to delete a partictular data.

updating value in table:

update students set cgpa = 3.45 where id= 2; [note: set is a key word]

changing/modifying the structer of the table:

alter table students add(email varchar2(25)); <- adding a new column.

alter table students modify(id number(8)); <-changing the datatype for the columns.

alter table students drop column email; <- deleting a column.

TO DELETE ALL THE DATAS FROM THE TABLE:
TRUNCATE table students;

TO DELETE THE STRUCTURE AND THE DATAS:
DROP table students;

TO RENAME A TABLE:
rename students to student5;

TO COPY A TABLE TO ANTOHER:

select table_name from user_tables;

TO CREATE TABLE WITH PARTICULAR INFORMATIONS FROM ANTOHER TABLE:

create table dept80 as SELECT * from employees where department_id = 80;


1) create table employees13 (id number(4), last_name varchar2(25), first_name varchar2(25), userid varchar2(25) , salary number(9,2));
alter table employees13 modify(userid varchar2(8));

2)
insert into employees13 (id,last_name,first_name,userid,salary) values(1,'Patel','Ralph','rpatel',895);
insert into employees13 (id,last_name,first_name,userid,salary) values(2,'Dancs','betty','bdancs',860);
insert into employees13 (id,last_name,first_name,userid,salary) values(3,'Biri','Ben','bbiri',1100);
insert into employees13 (id,last_name,first_name,userid,salary) values(4,'Newman','Chad','cnewman',750);

select * from employees13;

3)
alter table employees13 modify(id number(7),last_name varchar2(50),first_name varchar(25));

5)
update employees13 set last_name = 'Drexler' where id=3;
6)
update employees13 set salary = 1000 where salary<900;
7)
delete from employees13 where first_name = 'betty' and last_name = 'Dancs';

8)
rename employees13 to EMP81;
9)
alter table EMP81 drop column first_name;
select * from emp81;
10)
select * from employees;
create table employee75 as select employee_id,first_name,last_name,salary from employees;
select * from employee75;
