-- For now, we will have us execute this command to create a data table.
CREATE TABLE Customers (Customer_ID int PRIMARY KEY, Name VARCHAR(256), 
                        Address VARCHAR(1024), phone_number Varchar(256) , email VARCHAR(256));
INSERT INTO Customers (Customer_ID, Name, Address, phone_number, email) VALUES 
    (00123, "Rowan Osmon", "278 Bleecker Street, New York City, NY 10014", "212-243-1680")
-- Customers (Name, address, phone, email, authorize contacts, vehicles, customer number)

-------------------------------------------------------------------------------------------------------
-- This query command generates relationship between the store and customer registry.

-- Creating Many-to-one relationship between store and customer_registry
CREATE TABLE Store (
    name Varchar(100) PRIMARY KEY
);

-- Customer registry retrieves information to the store.
CREATE TABLE Customers (
    id INT PRIMARY KEY, -- Created primary key
    Name VARCHAR(100),
    Phone_Num INT,
    Email VARCHAR(100), -- TODO: In application, don't forget to include character restriction or it cannot be null
    History VARCHAR(100), -- TODO: Need to figure out how to query specific invoice number into history.
);


-- How can we adapt the following tables and queries to be used in our car database?
CREATE TABLE Cars (id int PRIMARY KEY, pnum VARCHAR(10), year int, Make VARCHAR(20), Model VARCHAR(20),
                    color VARCHAR(20), submodel VARCHAR(20));

-- We use the Customers, Cars, and OwnedVehicle tables to retrieve the information in relation to customers and cars.
CREATE TABLE OwnedVehicle (vin int REFERENCES Cars(id),
                            cid int REFERENCES Customers(id));


------------------------------------------------------------------------------------------------------
