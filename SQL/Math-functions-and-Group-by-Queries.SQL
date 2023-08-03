- 7 group function
max, min, avg, sum, stdev, variance, count -> only single output.
example:
{ // these are for numeric data.
select stddev(salary) from employees; <- standard division
select variance(salary) from employees;
select avg(salary) from employees;
select count(salary) from employees; <- counts the number of rows in the employee table.it can count entre column or distinct column.
}
select max(salary) from employees;
select min(salary) from employees;

select max(first_name),min(last_name) from employees;
select max(hire_date), min(hire_date) from employees; <- max date shows the one who recently joined, min shows the one who joined earliest.

select count(*),count(department_id) from employees; < outputs 107 and 106 because it didnt count one null value in department id column.

select count(*),count(department_id),count(DISTINCT department_id) as dist_IDs from employees; 
select avg(nvl(commission_pct,0)),avg(commission_pct) from employees;
select sum(commission_pct)/35 , sum(commission_pct)/107 from employees;

note: to count all the null values in a column -> select count(nvl(commission_pct,0)) from employees;

GROUP BY:
select department_id , max(salary),min(salary),sum(salary) as Total_salary from employees GROUP by department_ID; <- basicaslly groups all the repeating values belonging to one department_id value.	
	
select department_id , max(salary),min(salary),sum(salary) as Total_salary from employees GROUP by department_ID order by max(salary); <- sorting by max salary, by default ascending order.

select department_id , max(salary),min(salary),sum(salary) as Total_salary from employees GROUP by department_ID order by max(salary) desc; <- sorting by descending order.

select department_id m job_id, sum(salary) from employees group by department_id, job_id; <- nesting grouping , first it will group by department id, and then it will group by distinct job ids.

Note: we cannot use WHERE function while using group function. Instead use HAVING .

example:
select department_id m job_id, avg(salary) from employees HAVING avg(salary)>9000 group by department_id; <- It only prints the group where average salary is greater than 8000.

note: we can use where function with group but only if there is having before the group function.
example :
select job_id, sum(salary) as PAYROL from employees where job_id not like '%rep%' group by job_id having sum(salary) > 13000 order by sum(salary);

select max(avg(salary)) from employees from employees group by department_id; <-nesting group function in a depth of two. example of the maximum average salay.

true
false
false
select max(salary),min(salary),avg(salary),sum(salary) from employees;
select max(salary),min(salary),avg(salary), sum(salary) from employees group by job_id;
select round(max(salary)) as MAXIMUM,round(min(salary)) as MINIMUM ,round(avg(salary)) as AVERAGE , round(sum(salary)) as SUM from employees;
select job_id,max(salary),min(salary),avg(salary), sum(salary) from employees group by job_id ORDER BY job_id;
select max(salary),min(salary),avg(salary), sum(salary) from employees group by job_id;
select distinct job_id , count(*) from employees group by job_id;
select department_id as NAME, count(department_id) as "NUMBER OF PEOPLE" , avg(salary) as SALARY from employees group by department_id order by department_id;

select * from employees
select count(employee_id) as TOTAL,hire_date as 19995 Where hire_date like '95%' from employees group by employee_id;
