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

insert into student(id,name,gpa,d_id) values(1,'rakib',3,1);
insert into student(id,name,gpa,d_id) values(2,'Ana',3,2);
insert into student(id,name,gpa,d_id) values(3,'Beter',3,2);

alter table student drop constraint check_gpa;

select constraint_name , constraint_type, search_condition from user_constraints where table_name = 'STUDENT';

describe student;

select * from student, dept;

select * from student cross join dept;

select * from student natural join dept;

select * from student join dept using (d_id);

select * from student LEFT OUTER join dept on (student.d_id = dept.d_id);

select * form employee s,location,department join department d on (s.dept_id = d.dept_id) join location n on (n.dept_id = d.dept_id);

select id from student where gpa = (select avg(gpa) from student);

select name from student where gpa <= (select avg(gpa) from student);

select * from employees where job_id = (select job_id from employees where emp_id = 141);