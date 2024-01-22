//singleton

//objects literals
//Object.create
const mysym = Symbol("key1")
const jsUser ={
    name:"Sagarika",
    age:24,
    location:"Bangalore",
    email:"spadhy@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday"],
    [mysym]: "mykey1"
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mysym]);
jsUser.email ="spadhy2@gmail.com"
//Object.freeze(jsUser)
console.log(jsUser);
jsUser.greeting = function(){
    console.log("Hello js User");
}
console.log(jsUser.greeting());
//console.log(jsUser.greeting);
jsUser.greeting2 = function(){
    console.log(`Hello js User, ${this.name}`);
}
console.log(jsUser.greeting2());