//Premitive datatype(call by vale)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Javascript is statically typed or Dynamically typed?
/*
Statically typed languages
A language is statically typed if the type of a variable is known at compile time. For some languages this means that you as the programmer must specify what type each variable is; other languages (e.g.: Java, C, C++) offer some form of type inference, the capability of the type system to deduce the type of a variable (e.g.: OCaml, Haskell, Scala, Kotlin).

The main advantage here is that all kinds of checking can be done by the compiler, and therefore a lot of trivial bugs are caught at a very early stage.

Examples: C, C++, Java, Rust, Go, Scala

Dynamically typed languages
A language is dynamically typed if the type is associated with run-time values, and not named variables/fields/etc. This means that you as a programmer can write a little quicker because you do not have to specify types every time (unless using a statically-typed language with type inference).

Examples: Perl, Ruby, Python, PHP, JavaScript, Erlang

Most scripting languages have this feature as there is no compiler to do static type-checking anyway, but you may find yourself searching for a bug that is due to the interpreter misinterpreting the type of a variable. Luckily, scripts tend to be small so bugs have not so many places to hide.

Most dynamically typed languages do allow you to provide type information, but do not require it. One language that is currently being developed, Rascal, takes a hybrid approach allowing dynamic typing within functions but enforcing static typing for the function signature.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const id = Symbol('123')
const anid = Symbol('123')


*/ 
const id = Symbol('123')
const anid = Symbol('123')
//console.log(id==anid)//false
const bigNum = 3335896472644n//bigint
//console.log(typeof bigNum)


//Reference type(Non primitive )

// Array, Objects, Functions

const heros =["shaktiman", "naagraj","doga"]
let myObj = {
    name: "sagarika",
    age: 22,
}

const myFunction =function(){
    console.log("Hello world")
}

/*
Type            Result
-----           -------
Undefined       Undefined
null            object
Boolean         boolean
Number          number
BigInt          bigint
String          string
Symbol          symbol
Function        function (function object)
Any other object    Object 
*/
//******************************************************* */

//Stack (Primitive), Heap(non-primitive)

let mychannel = "SagarikaRocks!!"
let next = mychannel//copy of the data
console.log(mychannel)
console.log(next)
next = "SagarikaBeats!!"
console.log(next);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ylb"
}
let userTwo = userOne //reference of the data
userTwo.email ="sp@gmail.com"
console.log(userOne)
console.log(userTwo)
