-- This creates tables into Azure Cloud database called Hyunggil

CREATE DATABASE WooRowan_db;
GO

CREATE TABLE customerregistry (
  CID int PRIMARY KEY,
  First_Name varchar(255),
  Last_Name varchar(255),
  Phone varchar(255),
  Email varchar(255)
);
GO

CREATE TABLE vehicleregistry (
  Year varchar(4),
  Make varchar(255),
  Model varchar(255),
  VID varchar(23) PRIMARY KEY,
  Class varchar(24),
  Color varchar(24)
);
GO

CREATE TABLE ownedvehicles (
  CID int,
  VID varchar(23),
  PRIMARY KEY (CID, VID),
  FOREIGN KEY (CID) REFERENCES customerregistry(CID),
  FOREIGN KEY (VID) REFERENCES vehicleregistry(VID)
);
GO

CREATE TABLE invoiceregistry (
  InvoiceNo int PRIMARY KEY,
  VID varchar(23),
  CID int,
  total float,
  FOREIGN KEY (VID) REFERENCES vehicleregistry(VID),
  FOREIGN KEY (CID) REFERENCES customerregistry(CID)
);
GO

CREATE TABLE partsregistry (
  PartNo varchar(64) PRIMARY KEY,
  Description varchar(256),
  StockedNo int,
  Cost float,
  Price float
);
GO

CREATE TABLE jobregistry (
  JobID int PRIMARY KEY,
  JobName varchar(255),
  Description varchar(255),
  Time float
);
GO

CREATE TABLE billing (
  InvoiceNo int,
  PartNo varchar(64),
  JobID int,
  PRIMARY KEY (InvoiceNo, PartNo, JobID),
  FOREIGN KEY (InvoiceNo) REFERENCES invoiceregistry(InvoiceNo),
  FOREIGN KEY (PartNo) REFERENCES partsregistry(PartNo),
  FOREIGN KEY (JobID) REFERENCES jobregistry(JobID)
);
GO

CREATE TABLE contactregistry (
  contactID int PRIMARY KEY,
  CID int,
  Relationship varchar(255),
  Phone varchar(255),
  Email varchar(255),
  First_Name varchar(255),
  Last_Name varchar(255),
  FOREIGN KEY (CID) REFERENCES customerregistry(CID)
);
GO

CREATE TABLE store (
  StoreNo int PRIMARY KEY,
  CID int,
  InvoiceNo int,
  FOREIGN KEY (CID) REFERENCES customerregistry(CID),
  FOREIGN KEY (InvoiceNo) REFERENCES invoiceregistry(InvoiceNo)
);
GO

-- This statement adds data into the designated files in Azure Cloud
INSERT INTO CustomerRegistry (CID, First_Name, Last_Name, Phone, Email) VALUES
(1, 'John', 'Doe', '123-456-7890', 'johndoe@example.com'),
(2, 'Jane', 'Smith', '987-654-3210', 'janesmith@example.com'),
(3, 'Michael', 'Johnson', '555-123-4567', 'michaeljohnson@example.com'),
(4, 'Emily', 'Davis', '111-222-3333', 'emilydavis@example.com'),
(5, 'David', 'Wilson', '444-555-6666', 'davidwilson@example.com'),
(6, 'Sarah', 'Taylor', '777-888-9999', 'sarahtaylor@example.com'),
(7, 'Christopher', 'Anderson', '222-333-4444', 'christopheranderson@example.com'),
(8, 'Jennifer', 'Brown', '666-777-8888', 'jenniferbrown@example.com'),
(9, 'Matthew', 'Martinez', '999-000-1111', 'matthewmartinez@example.com'),
(10, 'Olivia', 'Thomas', '333-444-5555', 'oliviathomas@example.com');
GO

INSERT INTO InvoiceRegistry ([InvoiceNo], VID, [total], CID) VALUES
(1, '1ABC23D456E789012F34567', 150.0, 1),
(2, '2DEF34G567H890123I45678', 250.0, 2),
(3, '3GHI45J678K901234L56789', 350.0, 3),
(4, '4MNO56P789Q012345R67890', 200.0, 4),
(5, '5STU67V890W123456X78901', 300.0, 5);
GO

INSERT INTO JobRegistry (JobID, JobName, Description, Time) VALUES
(1, 'Oil Change', 'Perform oil change and filter replacement', 1.5),
(2, 'Brake Pad Replacement', 'Replace worn-out brake pads with new ones', 2.0),
(3, 'Tire Rotation', 'Rotate tires to ensure even wear', 0.75),
(4, 'Spark Plug Replacement', 'Replace spark plugs for improved engine performance', 1.25),
(5, 'Battery Replacement', 'Replace old battery with a new one', 1.5),
(6, 'Air Filter Replacement', 'Replace air filter to maintain air quality', 1.0),
(7, 'Coolant Flush', 'Flush and replace engine coolant', 1.75),
(8, 'Transmission Fluid Change', 'Drain and refill transmission fluid', 2.5),
(9, 'Wheel Alignment', 'Align wheels for optimal vehicle handling', 1.25),
(10, 'Headlight Bulb Replacement', 'Replace faulty headlight bulb', 0.5);
GO

INSERT INTO PartsRegistry ([PartNo], Description, [StockedNo], [Cost], [Price]) VALUES
('P001', 'Oil filter', 50, 5.0, 10.0),
('P002', 'Engine oil', 100, 20.0, 30.0),
('P003', 'Brake pads', 30, 35.0, 50.0),
('P004', 'Brake caliper grease', 20, 10.0, 15.0),
('P005', 'Tire wrench', 15, 8.0, 12.0),
('P006', 'Jack', 10, 20.0, 30.0),
('P007', 'Spark plugs', 40, 4.0, 8.0),
('P008', 'Car battery', 25, 80.0, 120.0);
GO

INSERT INTO VehicleRegistry (Year, Make, Model, VID, Class, Color) VALUES
('2021', 'Toyota', 'Camry', '1ABC23D456E789012F34567', 'Sedan', 'Silver'),
('2019', 'Honda', 'Civic', '2DEF34G567H890123I45678', 'Sedan', 'Black'),
('2020', 'Ford', 'F-150', '3GHI45J678K901234L56789', 'Truck', 'Blue'),
('2018', 'Chevrolet', 'Cruze', '4MNO56P789Q012345R67890', 'Hatchback', 'Red'),
('2022', 'Nissan', 'Rogue', '5STU67V890W123456X78901', 'SUV', 'White'),
('2017', 'BMW', '3 Series', '6YZA78B901C234567D89012', 'Sedan', 'Gray'),
('2019', 'Jeep', 'Wrangler', '7EFG89H012I345678J90123', 'SUV', 'Green'),
('2021', 'Mercedes-Benz', 'C-Class', '8KLM90N123P45678Q90123', 'Sedan', 'Silver'),
('2020', 'Audi', 'A4', '9RST01U234V56789W01234', 'Sedan', 'Black'),
('2018', 'Volkswagen', 'Golf', '0XYZ12A345B67890C12345', 'Hatchback', 'Blue');
GO

INSERT INTO Billing ([InvoiceNo], [PartNo], JobID) VALUES
(1, 'P001', 1),
(1, 'P002', 1),
(2, 'P003', 2),
(2, 'P004', 2),
(3, 'P005', 3),
(3, 'P006', 3),
(4, 'P007', 4),
(5, 'P008', 5);
GO

INSERT INTO Store ([StoreNo], CID, [InvoiceNo]) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5);
GO

INSERT INTO ContactRegistry (contactID, CID, Relationship, phone, Email, First_Name, Last_Name) VALUES
(1, 1, 'Spouse', '123-456-7890', 'spouse@example.com', 'Mary', 'Doe'),
(2, 2, 'Sibling', '987-654-3210', 'sibling@example.com', 'Alex', 'Smith'),
(3, 3, 'Parent', '555-123-4567', 'parent@example.com', 'Karen', 'Johnson'),
(4, 4, 'Friend', '111-222-3333', 'friend@example.com', 'Emily', 'Davis'),
(5, 5, 'Co-worker', '444-555-6666', 'coworker@example.com', 'Daniel', 'Wilson');
GO

INSERT INTO OwnedVehicles (CID, VID) VALUES
(1, '1ABC23D456E789012F34567'),
(2, '2DEF34G567H890123I45678'),
(3, '3GHI45J678K901234L56789'),
(4, '4MNO56P789Q012345R67890'),
(5, '5STU67V890W123456X78901');
GO