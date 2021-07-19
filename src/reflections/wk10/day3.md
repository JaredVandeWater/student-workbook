# Day 1 - 
<br>
  
 (7-15-21)

<br>

## Daily Journal and Questions
<br>
<br>

<br>
<br>

Q1. In a SQL table, what is the difference between information in a row and information in a column?
<br>
 Columns contain the column name, data type, and any other attributes for the column. Rows contain the records or data for the columns.
<br>
<br>

Q2. Demonstrate the basic structure for creating a new table called characters with the values name, age, description as strings, and an int id.
<br>
CREATE TABLE IF NOT EXISTS characters
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  name VARCHAR(255),
  age VARCHAR(255),
  description VARCHAR(255)
 DEFAULT charset utf8;
<br>
<br>

Q3. What is the difference between the following statements:
DELETE FROM table_name;
DROP TABLE table_name;

Delete removes an item in the table, drop will remove everything.
<br>

 

