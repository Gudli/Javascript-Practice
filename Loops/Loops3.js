// for of

const arr = [1,2,3,4,5]

for (const i of arr) {
    //console.log(i);
}

const greetings = "Hello world"
for (const i of greetings) {
    //console.log(`Each char is ${i}`);
}

//maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

//console.log(map);
for (const [key,value] of map) {
    //console.log(key, ':-', value );
}

const myobj ={
    'game1': 'NFS',
    'game2': 'Spiderman'
}
