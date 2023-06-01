/* 1. Write a SQL statement to show sku and 
Description for all products having a SKU description that includes the word ‘foot’.
*/
SELECT S.SKU, S.SKU_Description 
	FROM SKU_DATA as S
	/* Where S.description COMMENT
	*/
		WHERE S.SKU_Description LIKE '%foot%';

/* 2. 2. Write a SQL statement to display the warehouse and 
a count of QuantityOnHand grouped by warehouse.
*/
SELECT I.Warehouse, count(I.QuantityOnHand)
	FROM INVENTORY as I
		GROUP BY I.Warehouse;

/*3. Write a SQL statement to show the SKU and 
SKU_Description for all items stored in a warehouse managed by each manager.
*/
SELECT S.SKU, S.SKU_Description
	FROM SKU_DATA as S, INVENTORY as I, 
		WAREHOUSE as W
		WHERE I.Warehouse = W.Warehouse AND
			I.SKU = S.SKU
			ORDER BY W.Manager;

/* 4. Find out the total revenue collected by each store.
*/
SELECT StoreNumber, Sum(OrderTotal)
	FROM RETAIL_ORDER
	GROUP BY StoreNumber;

/* 5. Which department is associated with the highest revenue?
*/
SELECT S.Deparment, MAX(O.ExtendedPrice)
	FROM ORDER_ITEM as O, SKU_DATA as S
        WHERE O.SKU = S.SKU
            GROUP BY S.Department
                ORDER BY SUM(O.ExtendedPrice) DESC;

/* 6. Which department is associated with the lowest revenue?
*/
SELECT S.Deparment, MIN(O.ExtendedPrice)
	FROM ORDER_ITEM as O, SKU_DATA as S
        WHERE O.SKU = S.SKU
            GROUP BY S.Department
                ORDER BY SUM(O.ExtendedPrice) ASC;

/* 7. Find out the storenumber and zipcode of the store that sold the maximum number of products.
*/
SELECT R.StoreNumber, R.StoreZip, MAX(O.Quantity)
    FROM ORDER_ITEM as O, RETAIL_ORDER as R
        WHERE O.OrderNumber = R.OrderNumber
            GROUP BY R.StoreNumber, R.StoreZip
                ORDER BY O.Quantity;

/*8. Find out other warehouses whose average quantity on hand is not smaller than That of Atlanta warehouse.
*/
SELECT I.Warehouse, AVG(I.QuantityOnHand)
    FROM INVENTORY as I
        GROUP BY I.Warehouse
            Having AVG(I.QuantityOnHand) >= (SELECT AVG(I1.QuantityOnHand)
                                            FROM INVENTORY as I1
                                            WHERE I1.Wharehouse = 'Atlanta');

/* 9.
*/
SELECT SKU, SKU_Description
    FROM SKU_DATA as SD
        Where SKU BETWEEN 200000 AND 299999

/* 10.
*/
SELECT W.Warehouse
    FROM INVENTORY as I, WAREHOUSE as W
        WHERE W.Warehouse = I.Warehouse
            HAVING I.QuantityOnHand <= 255;

/* 11. List all order items for products currently out of stock in Atlanta. 
Use a subquery. 
*/

SELECT O.*
FROM ORDER_ITEM as O
WHERE O.SKU IN (
    SELECT I.SKU
    FROM INVENTORY as I
    WHERE I.Warehouse = 'Atlanta' AND I.QuantityOnOrder = 0
        );

/*12. Get a list of buyers and their departments for any products out of stock (at any warehouse, not all warehouses). 
Use a join. 
*/
SELECT SD.Buyer, SD.Department
FROM SKU_DATA as SD
JOIN INVENTORY as I on SD.SKU = I.SKU
Where I.QuantityOnHand = 0;

/* 13. Get a list of departments and the total items on order for each department, sorted from largest to smallest quantity. 
Use a join. 
*/

SELECT SD.Department, SUM(I.QuantityOnOrder)
FROM SKU_DATA as SD
JOIN INVENTORY as I on SD.SKU = I.SKU
GROUP BY SD.Department
ORDER BY SUM(I.QuantityOnOrder);