-- Use this initial query to create the data table
-- USE WooRowan_db;
-- GO

-- CREATE DATABASE WooRowan_db;
-- GO

-- -- USE WooRowan_db;
-- -- GO

-- CREATE TABLE customerregistry (
--   CID int PRIMARY KEY,
--   First_Name varchar(255),
--   Last_Name varchar(255),
--   Phone varchar(255),
--   Email varchar(255)
-- );
-- GO

-- CREATE TABLE vehicleregistry (
--   Year varchar(4),
--   Make varchar(255),
--   Model varchar(255),
--   VID varchar(23) PRIMARY KEY,
--   Class varchar(24),
--   Color varchar(24)
-- );
-- GO

-- CREATE TABLE ownedvehicles (
--   CID int,
--   VID varchar(23),
--   PRIMARY KEY (CID, VID),
--   FOREIGN KEY (CID) REFERENCES customerregistry(CID),
--   FOREIGN KEY (VID) REFERENCES vehicleregistry(VID)
-- );
-- GO

-- CREATE TABLE invoiceregistry (
--   InvoiceNo int PRIMARY KEY,
--   VID varchar(23),
--   CID int,
--   total float,
--   FOREIGN KEY (VID) REFERENCES vehicleregistry(VID),
--   FOREIGN KEY (CID) REFERENCES customerregistry(CID)
-- );
-- GO

-- CREATE TABLE partsregistry (
--   PartNo varchar(64) PRIMARY KEY,
--   Description varchar(256),
--   StockedNo int,
--   Cost float,
--   Price float
-- );
-- GO

-- CREATE TABLE jobregistry (
--   JobID int PRIMARY KEY,
--   JobName varchar(255),
--   Description varchar(255),
--   Time float
-- );
-- GO

-- CREATE TABLE billing (
--   InvoiceNo int,
--   PartNo varchar(64),
--   JobID int,
--   PRIMARY KEY (InvoiceNo, PartNo, JobID),
--   FOREIGN KEY (InvoiceNo) REFERENCES invoiceregistry(InvoiceNo),
--   FOREIGN KEY (PartNo) REFERENCES partsregistry(PartNo),
--   FOREIGN KEY (JobID) REFERENCES jobregistry(JobID)
-- );
-- GO

-- CREATE TABLE contactregistry (
--   contactID int PRIMARY KEY,
--   CID int,
--   Relationship varchar(255),
--   Phone varchar(255),
--   Email varchar(255),
--   First_Name varchar(255),
--   Last_Name varchar(255),
--   FOREIGN KEY (CID) REFERENCES customerregistry(CID)
-- );
-- GO

-- CREATE TABLE store (
--   StoreNo int PRIMARY KEY,
--   CID int,
--   InvoiceNo int,
--   FOREIGN KEY (CID) REFERENCES customerregistry(CID),
--   FOREIGN KEY (InvoiceNo) REFERENCES invoiceregistry(InvoiceNo)
-- );
-- GO

