6. CREATE table shipped_items(item_number number(3),weight number(5) , dimensions number(7), insurance_amt number(8) ,destination varchar2(25),final_delivery_date date,unique_id number(5)); 
CREATE table retail_center(retail_type varchar2(20), unique_id number(5) , address varchar2(20)); 
CREATE table transport_event(schedule_number number(5), type varchar2(15), delivery_route varchar(15),item_number number(3)); 
CREATE TABLE customer(email varchar2(30),payment_info varchar(25),name varchar(20),branch_id number(5)); 
CREATE TABLE sa_paribahan(branch_id number(5), branch_loc varchar(25), branch_manager varchar(25), manager_id varchar(20)); 
CREATE TABLE info_system(manager_id varchar(20),item_number number(3), server_loc varchar2(20), engineer_id number(3)); 

7. 
ALTER TABLE shipped_items ADD CONSTRAINT pk_shipped_items PRIMARY KEY(item_number); 
ALTER TABLE shipped_items ADD CONSTRAINT fk_retail_center FOREIGN KEY(unique_id) references retail_center(unique_id); 
ALTER TABLE retail_center ADD CONSTRAINT pk_retail_center PRIMARY KEY(unique_id); 
ALTER TABLE transport_event ADD CONSTRAINT pk_transport_event PRIMARY KEY(schedule_number); 
ALTER TABLE transport_event ADD CONSTRAINT fk_shipped_items FOREIGN KEY(item_number) references shipped_items(item_number); 
ALTER TABLE customer ADD CONSTRAINT pk_customer PRIMARY KEY(email); 
ALTER TABLE sa_paribahan ADD CONSTRAINT pk_sa_paribahan PRIMARY KEY(branch_id); 
ALTER TABLE sa_paribahan ADD CONSTRAINT fk_info_system FOREIGN KEY(manager_id) references info_system(manager_id); 
ALTER TABLE info_system ADD CONSTRAINT pk_info_system PRIMARY KEY(manager_id); 
ALTER TABLE info_system ADD CONSTRAINT fk_shipped_item FOREIGN KEY(item_number) references shipped_items(item_number);

10) 
b)
INSERT INTO shipped_items (item_number, weight, dimensions, insurance_amt, destination, final_delivery_date)VALUES(101, 23, 44, 4992, 'Kolkata', to_date('09-AUG-23'),1); 
INSERT INTO shipped_items (item_number, weight, dimensions, insurance_amt, destination, final_delivery_date)VALUES (102, 39, 903, 6792, 'Kulna', to_date('25-AUG-23'),2); 
INSERT INTO shipped_items (item_number, weight, dimensions, insurance_amt, destination, final_delivery_date)VALUES (103, 10, 130, 901, 'Chittagong', to_date('01-DEC-23'),3); 

Retail_center table: 
INSERT INTO retail_center(retail_type,unique_id,address) values('ShoppingMall',3021 , 'Dhaka'); 
INSERT INTO retail_center(retail_type,unique_id,address) values('ConvenientStore',3023 , 'Teknaf'); 
INSERT INTO retail_center(retail_type,unique_id,address) values('ElectricShop',3024 , 'Bharisal'); 

Transport_event table: 
INSERT INTO transport_event(schedule_number,type,delivery_route) values('271','truck','DhakaRoad',101); 
INSERT INTO transport_event(schedule_number,type,delivery_route) values('371','Train','ChittagongRails',102); 
INSERT INTO transport_event(schedule_number,type,delivery_route) values('471','truck','SyletHighway',103); 

info_system table:
INSERT INTO info_system(manager_id,item_number,server_loc,engineer_id) values(801,101,'agrabad',55); 
INSERT INTO info_system(manager_id,item_number,server_loc,engineer_id) values(802,102,'kulshi',56); 
INSERT INTO info_system(manager_id,item_number,server_loc,engineer_id) values(803,103,'nasirabad',57); 

sa_paribahan table:
INSERT INTO sa_paribahan(branch_id,branch_loc,branch_manager,manager_id) values(5,'agrabad','mahesh',801); 
INSERT INTO sa_paribahan(branch_id,branch_loc,branch_manager,manager_id) values(6,'feni','husain',802); 
INSERT INTO sa_paribahan(branch_id,branch_loc,branch_manager,manager_id) values(7,'teknaf','Badr',803); 

customer table:
INSERT INTO customer(email,payment_info,name,branch_id) values('12@gmail.com','card','naim',5); 
INSERT INTO customer(email,payment_info,name,branch_id) values('123@gmail.com','cash','uday',6); 
INSERT INTO customer(email,payment_info,name,branch_id) values('1257@gmail.com','cash','faiz',7); 

