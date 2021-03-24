
# Day 1 - Javascript intro

 (3-22-21)

## Daily Journal and Questions

AFTERNOON PROJECT: https://github.com/JaredVandeWater/js-day1

What is Scope ?
<br>
<br>
<br>
<br>
Scope is where the availability of variables is, if a var is inside a function, it is scoped to that func, whereas if it's outside, you can access it globally.

What is Hoisting ?
<br>
<br>
<br>
<br>
Code reads variables before other code, so they are basically hoisted to the top. this does not include the value, just that the var name exists.
<br>
<br>
<br>
<br>
In what cases might you use let vs const vs var?
<br>
<br>
<br>
<br>
Vars can be re-declared and they are good for being used globally and changed often. Let cannot be re-declared, which helps keep your variables from being accidentally overwritten if you are very lazy with names. Finally, const is the strictest, where it doesn't even let the value change.
<br>
<br>
<br>
<br>
This was useful:
<br>
<br>
<br>
<br>
var declarations are globally scoped or function scoped while let and const are block scoped.

var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

They are all hoisted to the top of their scope but while var variables are initialized with undefined, let and const variables are not initialized.

While var and let can be declared without being initialized, const must be initialized during declaration.