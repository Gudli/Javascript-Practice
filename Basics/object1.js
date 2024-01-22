//const tinderUser = new Object()// singleton object
const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name = "sammy"
//console.log(tinderUser);

const regularUser ={
    email: "sum@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Sagarika",
            lastname :"Padhy"
        }
    }
}
//console.log((regularUser.fullname?.userfullname));

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 ={...obj1, ...obj2}
//console.log(obj3);

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructore:"hitesh"
}
//destructuring object
const{courseInstructore: instructore} = course
//console.log(instructore);

/*{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price":"free"
}

[
    {},
    {},
    {}
]
*/
