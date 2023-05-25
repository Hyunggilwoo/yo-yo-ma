-- CREATE EXTERNAL DATA SOURCE thiscarshop_blob
-- WITH 
-- (
--     TYPE = BLOB_STORAGE,
--     LOCATION = 'https://thiscarshop.blob.core.windows.net',

-- )

-- Customer_Registry already exists
-- GRANT ALTER ON OBJECT::Customer_Registry TO wooRowan;

-- ALTER TABLE Customer_Registry
-- ALTER COLUMN Phone varchar(25);


SELECT * FROM sys.tables;


CREATE TABLE dbo.Customers
(
CID INT NOT NULL 	PRIMARY KEY, 
FNAME [NVARCHAR](255) NOT NULL,
LNAME  [NVARCHAR](255) NOT NULL,
Phone [NVARCHAR](25) NOT NULL,
Email	[NVARCHAR](255) NOT NULL
);
GO
-- BULK INSERT Customer_Registry
-- FROM 'car_database/customer.csv'
-- WITH
-- (
--     DATA_SOURCE = 'thiscarshop_blob',
--     FORMAT = 'CSV',
--     ROWTERMINATOR = '\n',
--     FIELDTERMINATOR = ',',
--     FIRSTROW = 1,
--     TABLOCK
-- );


-- INSERT INTO Customer_Registry1 (CID, First_Name, Last_Name, Phone, Email) 
-- VALUES
-- (1, 'David', 'Kim', '(900)273-3516', 'christine57@example.net'),
-- (2, 'Donna', 'Herrera', '601-558-6443x348', 'welchjohn@example.org');
INSERT INTO dbo.Customers
   ([CID],[FNAME], [LNAME],[Phone],[Email])
VALUES
(3, 'Melissa', 'Lee', '269-522-3078x316', 'montgomerykayla@example.com'),
(4, 'Carmen', 'Conley', '+1-440-688-7870x654', 'emily71@example.net'),
(5, 'Eileen', 'Thompson', '001-188-274-7474x879', 'schwartzjohn@example.net'),
(6, 'Susan', 'Rich', '828.602.8296x617', 'stephaniewilliams@example.net'),
(7, 'Erin', 'Patton', '+1-936-305-6383', 'rthornton@example.net'),
(8, 'Natasha', 'Tucker', '(437)906-0449x162', 'unewman@example.org'),
(9, 'Sabrina', 'Wilson', '016-482-0543', 'cjones@example.org'),
(10, 'Taylor', 'Kerr', '012-306-4047x95447', 'coleraymond@example.net'),
(11, 'James', 'Long', '161-066-8135', 'fwilkins@example.org'),
(12, 'Andrea', 'Snow', '+1-608-205-8704x951', 'qtucker@example.net'),
(13, 'Kimberly', 'Campbell', '743-903-2266', 'richardsonedward@example.org'),
(14, 'Ellen', 'Day', '712.811.9585x94322', 'patelthomas@example.org'),
(15, 'Cole', 'Morgan', '767.413.3185', 'uhardin@example.org'),
(16, 'Valerie', 'Michael', '946-528-9535x459', 'brandtpatricia@example.org'),
(17, 'Jose', 'Diaz', '001-105-988-8851x282', 'steven32@example.com'),
(18, 'Caleb', 'Adkins', '8390846896', 'vbush@example.com'),
(19, 'Wendy', 'Bowers', '016-766-1502', 'scarter@example.org'),
(20, 'Cody', 'White', '828-236-7775x102', 'zdiaz@example.net'),
(21, 'Paul', 'Benton', '879-823-7379x694', 'vhopkins@example.net'),
(22, 'Hannah', 'Holden', '611.514.1561x9213', 'xwalker@example.com'),
(23, 'Olivia', 'Church', '6329814584', 'stacychandler@example.org'),
(24, 'Sharon', 'Williams', '(071)218-4686x490', 'cherylcooper@example.org'),
(25, 'Jacqueline', 'Fisher', '001-426-570-9724x8797', 'edward24@example.org'),
(26, 'Stephen', 'Hood', '037.028.0247x2170', 'mcphersonmichael@example.net'),
(27, 'Brian', 'Johnson', '+1-502-499-7446', 'latasha88@example.com'),
(28, 'Travis', 'Thompson', '673.467.5416', 'lharris@example.com'),
(29, 'Victoria', 'Miranda', '001-965-471-0382x854', 'virginiafoley@example.com'),
(30, 'Mary', 'Snow', '565-616-4706x191', 'kelsey18@example.com');
GO