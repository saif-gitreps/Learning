lab-7
=================================================================================
      Student table                    dept table
---------------------------        ------------------------
| id  | name | gpa | d_id |        | d_id | d.name | head |
|(pk) |      |     | (FK) |        | (pk) |        |      |
|     |      |     |      |        |      |        |      |
|     |      |     |      |        |      |        |      |
|     |      |     |      |        |      |        |      |
|     |      |     |      |        |      |        |      |
---------------------------        ------------------------
best practise to use uppercase for KEYWORDS and lowercase for variable names.

DROP table student40;
create table student40(id number(8), name varchar(20), cgpa number(3,2), d_id number(2));
desc student40;
drop table dept40; <- dropping previouly created tables.
create table dept40 (d_id number(2), name varchar(50), head varchar(20));
desc dept40;

adding primary keys to the table:
---------------------------------
alter table dept40 add constraint pk_dept_id_40 PRIMARY KEY(d_id);
desc dept40;
alter table student40 add constraint pk_student_id_40 PRIMARY KEY(id);
desc student40;

adding foreign key to studetn table:
------------------------------------
alter table student40 add constraint fk_d_id_40 foreign key(d_id) references dept40(d_id);
desc student40;

adding unique key to table:
alter table dept40 ADD CONSTRAINT uk_d_name_40 UNIQUE(name);

adding a check constaint in a table like cgpa:
alter table student40 add constraint chk_cgpa_40 CHECK(cgpa BETWEEN 0 AND 4);

alter table student40 modify(name NOT NULL); <- no idea what this was for.

select constraint_name , constraint_type, search_condition from user_constraints where table_name = 'STUDENT';

[note: while inserting in the table with the foreign key , first finish inserting into the table that has the PK as the FK]

insert into dept40(d_id,name,head) values(1,'CSE','MNU');
insert into dept40(d_id,name,head) values(2,'EEE','BB');
insert into dept40(d_id,name,head) values(3,'ETE','IAT');

insert into student40(id,name,cgpa,d_id) values(1,'rakib',3.5,1);
insert into student40(id,name,cgpa,d_id) values(2,'Ana',3.7,2);
insert into student40(id,name,cgpa,d_id) values(3,'Beter',3.1,2);

[note: check constraint will set a condition while inserting , example , check(cgpa between 0 and 4) 
restricts all the input that are less than 0 and greater than 4]


exercises:
1)
create table EMP(id number(2),emp_name varchar(10));
alter table EMP ADD CONSTRAINT pk_emp_id PRIMARY KEY(id);
desc emp;
2)
create table dept11(d_id number(2),dep_name varchar(10));
alter table dept11 ADD CONSTRAINT my_deptid_pl PRIMARY KEY(d_id);
3)
alter table emp add(d_id number(2));
alter table emp add constraint my_emp_dept_id_fk FOREIGN KEY(d_id) references dept11(d_id);
4)
select constraint_name, constraint_type from user_constraints where table_name='EMP' OR table_name='dept11';
5)

6)
alter table emp add(commission number(2));
alter table emp add constraint check_great CHECK(commission>0);
