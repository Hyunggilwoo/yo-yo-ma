-- For now, we will have us execute this command to create a data table.
CREATE TABLE Customers (Customer_ID int PRIMARY KEY, Name VARCHAR(256), 
                        Address VARCHAR(1024), phone_number Varchar(256) , email VARCHAR(256));
INSERT INTO Customers (Customer_ID, Name, Address, phone_number, email) VALUES 
    (00123, "Rowan Osmon", "278 Bleecker Street, New York City, NY 10014", "212-243-1680")
-- Customers (Name, address, phone, email, authorize contacts, vehicles, customer number)