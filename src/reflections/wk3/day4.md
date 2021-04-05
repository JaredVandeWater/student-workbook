# Day 4 - MVCS
<br>
  
 (4-1-21)

<br>

## Daily Journal and Questions
<br>
AFTERNOON PROJECT: https://github.com/JaredVandeWater/storefront
<br>


Read Advancing with JS > The Observer Pattern and answer the following questions
<br>
<br>
What problems does the Observer Pattern seek to solve?
<br>
The observer pattern seeks to solve updating the page when certain events happen.
<br>
What are the three mechanisms of the observer pattern?
<br>
I could be wrong here, but I believe it is the subscribe, unsubscribe, and broadcast.
<br>
Review the code generated from the bcw-template and reflect on the proxy objects from yesterday, and your understanding of the observer pattern today. With this knowledge, explain how the magic of the bcw-template uses these two concepts to manage and update the dom.
<br>
From what I can gather, we use proxys of objects as to not change the actual object, but the instance of an object, then update the dom with the new instance when the listeners notice a state change. 
<br>