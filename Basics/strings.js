const name = "sagarika"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Sagarika")

//console.log(gameName[0])
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toLocaleUpperCase());
//console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newStr = gameName.substring(0, 4)
console.log(newStr);

const anotherStr = gameName.slice(-8, 4)
console.log(anotherStr);

const newStringOne = "   saga  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sagarika.com/sagarika%20padhy"
console.log(url.replace('%20', '-'))
console.log(url.includes('padhy'));
let game1 = new String("sagarika-p-adhy")
console.log(game1.split('-'));