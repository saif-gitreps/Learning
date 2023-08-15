Retrieving data from another table:
select last_name,department_name FROM employees JOIN departments USING (department_id);
LAB- 8

Using cross join (it joins two table values together):
select last_name,department_name from employees join departments using (department_id);

[USING is safer keyword than CROSS JOIN]

Using natural join:
select last_name, salary, department_name,location_id FROM employees NATURAL JOIN DEPARTMENTs;

Accessing column like class attributes:
Select employees.last_name, department_name, employees.salary ,departments.location_id from employees JOIN departments using (department_id); 

OR can use shortcut for the class name:
Select e.last_name, d.department_name, e.salary ,d.location_id from employees e JOIN departments d using (department_id); 

Using ON clause:
Select e.last_name, d.department_name, e.salary ,d.location_id from employees e JOIN departments d ON(e.department_id = d.department_id); 

Can join more than one table using ON and JOIN:
Select e.last_name, d.department_name, e.salary ,L.city,d.location_id from employees e JOIN departments d ON(e.department_id = d.department_id) JOIN locations L ON(d.location_id = L.location_id); 

LEFT OUTER JOIN :
select e.last_name, d.department_name from employees e LEFT OUTER JOIN departments d ON(e.department_id = d.department_id);
[outputs all the null values from the table thats left of the command, example here, all the null values from the employee table]

RIGHT OUTER JOIN :
select e.last_name, d.department_name from employees e RIGHT OUTER JOIN departments d ON(e.department_id = d.department_id);
[outputs all the null values from the table thats on the right side of the comman, here department table]

FULL OUTER JOIN:
select e.last_name, d.department_name from employees e FULL OUTER JOIN departments d ON(e.department_id = d.department_id);
[outputs null from both of the table]

select e.last_name emp, m.last_name mgr FROM employees e Join employees m ON (e.manager_id = m.employee_id); <- no idea what this command does.

sub-query
Q) display all the employees whose salary is greater than abel's: so first we have to find abels salary.
-select last_name, salary from employees> (select salary FROM employees where last_name = 'Abel');

-select last_name,job_id from employees where job_id = (select job_id from employees where employee_id = 141);

-select last_name,job_id from employees where job_id = (select job_id from employees where employee_id = 141) and salary > (select salary from employees where employee_id = 143);

Q) find the name and id of the guy who has the lowest salary:
select last_name, job_id , salary from employees where salary = (select min(salary) from employees);

Q) Display the all the employees in the group of job_id which 
has the minimum average values:
-select job_id, avg(salary) from employees group by job_id having avg(salary) = (select MIN(AVG(salary)) from employees group by job_id);

using ALL (works like AND)
-select employee_id,last_name,job_id, salary from employees where salary < ALL (select salary from employees where job_id = 'IT_PROG');

using ANY (works like OR)
select employee_id,last_name,job_id, salary from employees where salary < ANY (select salary from employees where job_id = 'IT_PROG');

