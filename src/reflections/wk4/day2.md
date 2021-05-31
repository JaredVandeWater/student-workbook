# Day 2 - Getting and Posting Apis
<br>
  
 (4-6-21)

<br>

## Daily Journal and Questions
<br>
AFTERNOON PROJECT: https://github.com/JaredVandeWater/spring21-gregslist-mvc
AFTERNOON PROJECT 2: https://github.com/JaredVandeWater/summer21-gregslist-v1
<br>


Read Asynchronous Code > JavaScript Promises and answer the following questions
<br>
<br>

What are the three states of a Promise?
<br>
Pending- until we receive our data
Resolved- we received our data
Rejected- we failed to receive
<br>
<br>

How do promises seek to resolve the issues of "callback hell"?
<br>
By using something called chaining, we can avoid a bunch of nested operations and simply put one after another instead.
<br>
<br>

What is the difference between .then() and .catch()?
<br>
then() is called after a promise is resolved, it decides what to do with the resolved promise. 
catch() is used when a promise fails and is rejected. So if the promise fails it will jump to the catch method.
<br>
<br>