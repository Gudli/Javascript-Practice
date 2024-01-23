const user = {
    username: "sagarika",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);//print current context
    }
}

//user.welcomeMessage()
//user.username ="sam"
//user.welcomeMessage()
//console.log(this);//empty

function chai(){
    let username ="sagarika"
   // console.log(this.username);//undefine cannot use this in function
}
//chai();
/*const chai = function(){
    let username = "hitesh"
    console.log(this.username);
}
chai()*/
//arrow function
/*const chai = () =>{
    let username = "hitesh"
    console.log(this.username);
}
//chai()*/

/*const addTwo = (n1,n2)=>{
    return n1+n2
}
console.log(addTwo(5,10));*/

//if we are not using {} in arrow function the there is no need to add the return
//const addTwo = (n1,n2) => (n1+n2)
const addTwo = (n1,n2) => ({username:"sagarika"})
console.log(addTwo(9,10));

//const myArray = [2,5,6,8]
//myArray.forEach()