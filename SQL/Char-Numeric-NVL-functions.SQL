select first_name, length(first_name from employee; <- function to calc length.
userdefined and built in function.
1)char function:
select first_name, length(first_name) from employees;
select first_name, upper(first_name) from employees;
select first_name, lower(first_name) from employees;
concat
substr(string,start,end point)
lenght
instr(string1,string2) <- shows the index of the word/letter.
lpad() 
rpad()
trim <- removes empty spaces.
select employee_ID,lower(first_name),upper(first_name), initcap(first_name),length(first_name),instr(first_name, 'a') "Contains 'a '" from employees;
initcap <- first letter caps.


2) NUMBER FUNCTION:
round
trunc
mod
select round(45.923,0) , round(45.923) from dual; <- dual is like a text editor for SQL commands, can be accessed by everyone . by default , it rounds to 0.

select round(45.923,0) , round(45.923) from dual;
select round(45.923,0) , round(45.923,-2) from dual; < -2 will round from left side , 2 will round from decimal side.

select trunc(45.925,2) , trunc(45.932, -2) , trunc(45.932, -1) , trunc(445,-2) from dual;

select mod(40,3) from dual;

select sysdate from dual; <-system date.

select first_name ,hire_date, months_between(sysdate,hire_date), add_months(hire_date,6) as review, last_day(hire_date) from employees;
select first_name ,hire_date, round(months_between(sysdate,hire_date)) as rounded , add_months(hire_date,6) as review , last_day(hire_date) from employees;
note: AS "name" <- changes the column name on output.

nvl function:
converts a null to an actual value.
NVL(expr1,expr2)

select first_name, commission_pct, nvl(commission_pct,0) from employees; <- repalces null values with some values.

select first_name,salary, commission_pct, nvl(commission_pct,0),(salary*12) + (salary*nvl(commission_pct,0)) as yearly_salary_and_commission from employees;

select first_name,12*salary as yearly_salary, commission_pct, nvl(commission_pct,0),(salary) + (salary*nvl(commission_pct,0))*12 as yearly_salary_and_commission from employees;
