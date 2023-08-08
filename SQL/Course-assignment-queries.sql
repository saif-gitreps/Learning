6. CREATE table shipped_items(item_number number(3),weight number(5) , dimensions number(7), insurance_amt number(8) ,destination varchar2(25),final_delivery_date date,unique_id number(5)); 

CREATE table retail_center(retail_type varchar2(20), unique_id number(5) , address varchar2(20)); 

CREATE table transport_event(schedule_number number(5), type varchar2(15), delivery_route varchar(15),item_number number(3)); 

CREATE TABLE customer(email varchar2(30),payment_info varchar(25),name varchar(20),branch_id number(5)); 

CREATE TABLE sa_paribahan(branch_id number(5), branch_loc varchar(25), branch_manager varchar(25), manager_id varchar(20)); 

CREATE TABLE info_system(manager_id varchar(20),item_number number(3), server_loc varchar2(20), engineer_id number(3)); 
