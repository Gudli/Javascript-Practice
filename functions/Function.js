function sayMyName(){
    console.log("Hello Sagarika");
}
//sayMyName()
function addTwoNumbers(n1, n2){
    //console.log(n1+n2);
    return n1+n2
}
const result =addTwoNumbers(5,7);
//console.log(result);

function loginUserMsg(username) {
    if(username === undefined){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMsg("sagarika"));
//console.log(loginUserMsg());

function calculateCartPrice(val1, val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000));
const user = {
    username: "sagarika",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myArr =[200,400,100,600]
function returnSecoundValue(getArray) {
    return getArray[1];
}
console.log(returnSecoundValue(myArr));