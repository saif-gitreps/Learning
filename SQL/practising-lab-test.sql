create table emp(first_name varchar2(20),last_name varchar2(25),department_id number(3), salary number(7),job_id number(6));

insert into emp(first_name,last_name,department_id,salary,job_id,join_date) values('saif','rahman',2,12033,10,to_date('10-JUN-2022'));

insert into emp(first_name,last_name,department_id,salary,job_id,join_date) values('manan','abun',3,40633,11,to_date('12-JUL-2021'));

insert into emp(first_name,last_name,department_id,salary,job_id,join_date) values('abdul','jabbar',3,80900,13,to_date('01-SEP-2009'));

update emp set department_id = 4 where first_name = 'abdul';

describe emp20;

insert into emp20 select * from emp;

drop table emp20;

delete from emp20 where first_name = 'manan';

delete from emp20;

alter table emp20 modify (department_id number(5));

update emp set department_id = 10 where first_name = 'manan';

alter table emp modify (last_name varchar2(50));

select * from emp;

update emp set last_name = 'drexler' where department_id = 4;

update emp set salary = 95000 where salary<50000;
           
rename emp to emp40;

select * from emp40;

alter table emp40 drop column job_id;

create table emp60 as SELECT last_name,first_name,department_id from emp40;

select * from emp60;

drop table student40;
create table student40(id number(5),name varchar2(20),gpa number(4,2),d_id number(5));
describe student40;

drop table dept40;
create table dept40(d_id number(5), d_name varchar2(20), head varchar2(20));
describe dept40;

alter table student40 add constraint pk_student40 PRIMARY KEY(id);
alter table dept40 add constraint pk_dept40 primary key(d_id);

alter table student40 add constraint fk_student40 foreign key(d_id) references dept40(d_id);

alter table student40 add constraint check_gpa check(gpa between 0 and 4);

alter table student40 modify name not null;

insert into dept40(d_id,d_name,head) values(1,'chem','mr.roos');
insert into dept40(d_id,d_name,head) values(2,'phy','mr.kroos');
insert into dept40(d_id,d_name,head) values(3,'bio','mr.moos');

insert into student40 values(101,'saif',2.4,1);
insert into student40 values(102,'kaif',5.6,2);
insert into student40 values(104,'jaif',2.8,3);

select constraint_name, constraint_type, search_condition from user_constraints where table_name = 'student40';

create table dep30(d_id number(5) primary key,d_name varchar2(25),id number(5), constraint ck_name check(d_name is not NULL),foreign key(id) references student40(id));

select * from user_constraints where table_name = 'dep30';

select * from student40;
alter table student40 add commission_pct number(3);
alter table student40 add constraint check_comm check(commission_pct>0);
     
select * from student40 join dept40 using (d_id);
select * from student40 natural join dept40;

SELECT s.name, d.d_id, s.d_id FROM student40 s JOIN dept40 d ON (s.d_id = d.d_id);

SELECT table_name FROM user_tables;


SELECT s.name, d.d_id, s.d_id FROM student40 s JOIN dept40 d ON (s.d_id = d.d_id);

SELECT table_name FROM user_tables;

select name , d_id from student40 NATURAL JOIN dept40;

select s.name , s.d_id , d.d_id from student40 s FULL OUTER JOIN dept40 d on (d.d_id = s.d_id);

select e.last_name, e.department_id , d.department_name from employees e JOIN department d on e.department_id = d.department_id;

select distinct e.job_id, d.location from employees e join department d on e.department_id = d.department_id where department_id=30 or deparment_id = 90;

select e.last_name, d.department_name, d.location , d.city from employees e join department d on (e.department_id=d.department_id)d where commission is not NULL; 

select name from student40 where name like '%A%';

select e.last_name, d.department_name, d.location from employees e join department d on (e.department_id = d.department_id) where last_name like '%a%';

select e.last_name , e.department_id , d.department_name from employees.e join department d on (e.department_id = d.department_id) join location L on (d.department_id = L.department_id);

 