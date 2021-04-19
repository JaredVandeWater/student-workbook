# Day 2 - 
<br>
  
 (4-13-21)

<br>

## Daily Journal and Questions
<br>
AFTERNOON PROJECT: https://github.com/JaredVandeWater/gregslistdb
<br>


Read Servers with Node/Express > MongoDb Relationships and answer the following questions
<br>
<br>

Q1. What are the three types of relationships?
<br>
One to One
One to Many
Many to Many
<br>
<br>

Q2. What are the benefits of the traditional linking of relationships instead of Embedding
<br>
Linking is best with one to one relationships because it is faster to grab the info.
<br>
<br>

Q3. What are some of the challenges faced when deciding how to manage a many-to-many relationship that ultimately drive your decision on how to create it?
<br>
 Many to Many relationships are more complicated due to a problem that was very well described by this: "If there were many invoices with the same invoice number and one of your customers inquired about that invoice number, you wouldn't know which number they were referring to. This is one reason for assigning a unique value to each invoice." (https://fmhelp.filemaker.com/help/18/fmp/en/index.html#page/FMP_Help/many-to-many-relationships.html)

 This challenge is usually fixed by joining the two many to many relationships together with a kind of in-between table containing an id from each.
<br>
