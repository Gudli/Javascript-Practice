//Immediately Invoked Function Expression(IIFE)

(function chai() {
    //named iife
    console.log(`DB CONNECTED`);
})();
//chai()
//()=> defination
//()=> execution
//to get rid of polution of global scope variables

((name)=>{
    console.log(`DB connected two ${name}`);
})('sagarika');