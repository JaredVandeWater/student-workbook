# Day 1 - 
<br>
  
 (7-20-21)

<br>

## Daily Journal and Questions
<br>
<br>
Read Dotnet WebAPI's > Relationships, and answer the following questions
<br>
<br>

Q1. What is the difference between a primary key and a foreign key

<br>
Primary key is the main key to access the instance of a table variable, when another table uses a that variable.
<br>
<br>

Q2. What is an Alias?

<br>
An instance of something saved into a seperate variable for reuse or simplifying the name.
<br>
<br>



Q3. Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:



CREATE TABLE doctors (
  id INT NOT NULL AUTO_INCREMENT,
  -- CODE OMITTED
  PRIMARY KEY (id)
)

CREATE TABLE patients (
  id INT NOT NULL AUTO_INCREMENT,
  -- CODE OMITTED
  PRIMARY KEY (id)
)

CREATE TABLE doctors_patients (
  id INT NOT NULL AUTO_INCREMENT,
  doctorId INT NOT NULL,
  patientId INT NOT NULL,

  FOREIGN KEY (doctorId)
    REFERENCES doctors(id),
  FOREIGN KEY (patientId)
    REFERENCES patients(id),

SELECT d.*, p.*  FROM doctors_patients dp
 JOIN students d ON d.id = dp.doctorId

<br>

 






