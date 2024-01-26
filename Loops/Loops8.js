//reduced
const myNums =[1,2,3]

/*const myTotal = myNums.reduce(function (acc,curval){
    console.log(`acc: ${acc} curval :${curval}`);
    return acc +curval
},0)
*/
const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
//console.log(myTotal);

const shoppingCart =[{
    itemName:"js Course",
    price: 2999
},
{
    itemName:"Mobile dev course",
    price: 5999
},
{
    itemName:"Data Science course",
    price: 12999
}
]

const PriceToPay =shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(PriceToPay);