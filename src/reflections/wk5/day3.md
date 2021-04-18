# Day 1 - Learning about relationships
<br>
  
 (4-14-21)

<br>

## Daily Journal and Questions
<br>
AFTERNOON PROJECT: https://github.com/JaredVandeWater/planets
<br>


Read Servers with Node/Express > MongoDb Relationships and answer the following questions
<br>
<br>

Q1. In simple terms what is a sub-document?
<br>
A document nested in another document.
<br>
<br>

Q2. When might you use a sub-document?
<br>
When a database item contains info that would usually only appear on that specific item, like a user having a home address, its easier to grab that user and its address rather than searching through every user, and searching through every address. 
<br>
<br>

Q3. How do you add to a collection of sub-documents? What about editing them?
<br>
 First use findOne, then get the array, and push the new item into that array. For Edit you would also findOne, then grab the right array and grab the right key you want to change and set it to the new one. I believe you can use a save function. 
<br>
