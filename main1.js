//part 2

//1
/* forEach: is used with arrays only and it loops through every element. You can't stop it using break.
for.of : is used with anything iterable (arrays, strings) and you can stop it with break or continue.
Use: forEach when you want to go through the whole array normally and (for.of) when you need to stop the loop early.

*/


//2
/* 
Hoisting means JavaScript moves variable and function declarations to the top of the code before running it.

TDZ (Temporal Dead Zone) is the zone where a variable (let / const) exists but can't be used yet. until we reach the line where it's defined
*/

console.log(x); 
var x = 5;   // undefined

console.log(y); 
let y = 10;   // Error


//3
// == compares the value only and converts the type if it's different.        5 == "5"    true
// === compares both the value and the type together without any conversion.  5 === "5"   false


//4 
//try-catch lets you try code that might have an error and if an error happens the code doesn't crash — it goes to catch instead of stopping the program.

try {
} 
catch ( error) {
  console.log ( "An error happened:", error)
}



//5
// Conversion (manual): you convert the type yourself using a function.     Number("123")
// Coercion (automatic): JavaScript converts the type by itself without you asking.   "5" + 3


