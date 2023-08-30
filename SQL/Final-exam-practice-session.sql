drop table student;
drop table employee;

create table employee(id number(5), last_name varchar2(25), first_name varchar2(25),user_id varchar2(8));

insert into employee values(1,'patel','ralph','rtapel');

update employee set salary = 895 where id = 1;

insert into employee values(2,'dancs','betty','bdancs',650);

insert into employee values(3,'Ben','Ben','bbiri',1100);

insert into employee values(4,'newman','chad','cnewman',750);

alter table employee modify (last_name varchar2(50));

update employee set last_name = 'drexler' where id = 3;

update employee set salary = 1000 where salary <900;

delete employee where last_name = 'dancs';

select * from emp70;

rename employee to emp70;

alter table emp70 drop column first_name;

describe emp70;

create table emp2 as select id, first_name, last_name , salary from emp70;

describe emp2;

truncate table emp70;

select * from employee;

create table emp2 as select * from employee;

insert into emp2 select * from employee;

select * from emp2;

create table emp3 as select * from emp2;

insert into emp3 select distinct * from emp2;

select * from emp3;

drop table emp2;

drop table student;

create table student (id number(5),  name varchar(15), gpa number(5) , d_id number(5));

create table dept(d_id number(5), dname varchar(12)); 

describe dept;
describe student;

alter table dept add constraint pk_dept PRIMARY KEY (d_id);
alter table student add constraint pk_student PRIMARY KEY (id); 

alter table student modify name not null;
alter table student add constraint check_gpa check(gpa>0 and gpa<4);

alter table student add constraint fk_dept FOREIGN KEY (d_id) references dept(d_id); 

alter table dept add head varchar(19);

insert into dept(d_id,dname,head) values(1,'CSE','MNU');
insert into dept(d_id,dname,head) values(2,'EEE','BB');
insert into dept(d_id,dname,head) values(3,'ETE','IAT');
