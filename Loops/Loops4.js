const myobj ={
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobj) {
    //console.log(myobj[key]);
}

const programing = ["js","rb","py","java"]
for (const key in programing) {
  // console.log(programing[key]);
}
//don't work with map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
for (const key in map) {
   //  console.log(key);
  }