//should avoid this type of comperision

//console.log(2>1)
console.log("2" > 1);//true
console.log("02" > 1);//true

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
/* The reason is thet an equality check == 
and comparisions ><>= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null >0 is false
*/

// === value and datatype

console.log("2" === 2);//fales
