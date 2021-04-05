# Day 1 - ???
<br>
  
 (4-5-21)

<br>

## Daily Journal and Questions
<br>
AFTERNOON PROJECT: 
<br>


Read Asynchronous Code > Callback Hell and answer the following questions
<br>
<br>

What are some of the signs and causes of Callback Hell?
<br>
When you see a pyramid shape with a bunch of '})' at the end. The issue is that people try to write executions visually from top to bottom.
<br>
<br>

What does the asynchronous mean and how are callbacks involved?
<br>
Callbacks can take some time to produce a result, often when using databases, reading files, or downloading things. We do them asynchronously so that it doesn't pause the rest of the app.
<br>
<br>

Summarize the 3 ways to avoid / fix Callback Hell
<br>
Keep your code shallow - add descriptive function names, put the function declarations on the bottom. Don't nest functions. 
<br>
Modularize - create smaller modules that do one thing and piece them together. Then you can require the module in your function. 
<br>
Handle every single error - first argument is always saved for an error. 
<br>