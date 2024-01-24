const userEmail = "s@sagarika.ai"

if (userEmail) {
    console.log("Got user email");

}else{
    console.log("Dont have email");
}

//falsy value:
// false,0,-0,BigInt 0n, "",null,undefined,NaN

//truthy value
// "0","false"," ",[],{},function(){}

const arr = []
if (arr.length === 0) {
    console.log("Array is empty");
    
}
const obj ={}
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//Terniary Operator
const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("less then 80"):console.log("more then 80");
