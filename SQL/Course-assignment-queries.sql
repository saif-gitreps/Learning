6. CREATE table shipped_items(item_number number(3),weight number(5) , dimensions number(7), insurance_amt number(8) ,destination varchar2(25),final_delivery_date date,unique_id number(5)); 

CREATE table retail_center(retail_type varchar2(20), unique_id number(5) , address varchar2(20)); 

CREATE table transport_event(schedule_number number(5), type varchar2(15), delivery_route varchar(15),item_number number(3)); 

CREATE TABLE customer(email varchar2(30),payment_info varchar(25),name varchar(20),branch_id number(5)); 

CREATE TABLE sa_paribahan(branch_id number(5), branch_loc varchar(25), branch_manager varchar(25), manager_id varchar(20)); 

CREATE TABLE info_system(manager_id varchar(20),item_number number(3), server_loc varchar2(20), engineer_id number(3)); 

7. ALTER TABLE shipped_items ADD CONSTRAINT pk_shipped_items PRIMARY KEY(item_number); 

ALTER TABLE shipped_items ADD CONSTRAINT fk_retail_center FOREIGN KEY(unique_id) references retail_center(unique_id); 

ALTER TABLE retail_center ADD CONSTRAINT pk_retail_center PRIMARY KEY(unique_id); 

ALTER TABLE transport_event ADD CONSTRAINT pk_transport_event PRIMARY KEY(schedule_number); 

ALTER TABLE transport_event ADD CONSTRAINT fk_shipped_items FOREIGN KEY(item_number) references shipped_items(item_number); 

ALTER TABLE customer ADD CONSTRAINT pk_customer PRIMARY KEY(email); 

ALTER TABLE sa_paribahan ADD CONSTRAINT pk_sa_paribahan PRIMARY KEY(branch_id); 

ALTER TABLE sa_paribahan ADD CONSTRAINT fk_info_system FOREIGN KEY(manager_id) references info_system(manager_id); 

ALTER TABLE info_system ADD CONSTRAINT pk_info_system PRIMARY KEY(manager_id); 

ALTER TABLE info_system ADD CONSTRAINT fk_shipped_item FOREIGN KEY(item_number) references shipped_items(item_number); 
