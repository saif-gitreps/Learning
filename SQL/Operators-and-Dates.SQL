restriting and sorting data.

select first_name, salary from employees

select first_name, salary from employees WHERE salary = 10000;

relational operator =,>,>=,<,<=,<>

<> is not operator a.k.a !=

select first_name, salary from employees WHERE salary BETWEEN 10000 AND 14000; <- between keyword.

select first_name, salary from employees WHERE salary IN(10000,14000,11000); <- in operator like in python.

select * from employees WHERE salary IN(10000,14000,11000);

to find NULL values: select * from employees where manager_id IS NULL;

like operator -> for strings ->	select first_name, salary from employees where first_name like 'A%';
note: A% means all stuffs starting with letter A. 

String datas are always case sensitive.

select first_name, salary from employees where first_name like '%a'; 
note: %a means if there is 'a ' at the end of the string.

select first_name, salary from employees where first_name like '%na%'; <- for all strings that contains na .

select first_name, salary from employees where first_name NOT like '%a%'; <- not opertor to command which do not have 'a' in it.

select first_name, salary from employees where first_name like '%_a'; <- _a means second letter , etc __a third letter be 'a'.

select first_name, salary from employees where first_name like 'A%' and Salary>=8000;
	
select first_name, salary from employees where first_name like 'A%' OR Salary>=8000; <- using OR operator.

select first_name,department_id,salary from employees ORDER BY salary; <- sorting in ascedning order.

select first_name,department_id,salary from employees ORDER BY department_id,salary; <- nested sorting, first sorts by deparment 
then sorts all the common deparment by salary.

select first_name,department_id,salary from employees ORDER BY department_id desc ,salary desc; -> also can sort individually.

select first_name,department_id,salary from employees ORDER BY salary DESC; <-sorting in descending order.

date formate -> 'DD-MON-YY' or '07-JUN-23'














