let a=300//global
if (true) {
    let a =10
    const b = 20
   // console.log("Inner: ",a);//block level
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "sagarika"

    function two() {
        const website = "youtube"
        console.log((username));
    }
    //console.log(website);//cannot access
    two()
}
one()

if (true){
    const username ="sagarika"
    if(username=== "sagarika"){
        const website ="youtube"
        //console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);

// +++++++++++++++++++++++++++++++++++++++++++++++++//
//hoisting
function addone(num) {
    return num+1
}

addone(5)
//for the below case we should call the function afer defining
const addTwo = function (num) {
    return num+2
}
addTwo(5)