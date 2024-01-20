//  for of loop used for arrays
// for (const iterator of object) {
    
// }

const arr = [1,2,3,4,5];

for (const num of arr) {
    // console.log(`nums are : ${num}`);
}

const greeting = "Hello World";
for (const ch of greeting) {
    // console.log(`Each char is ${ch}`);
}


// Maps 

const map = new Map()
map.set('IN', "India")
map.set('FR', 'France')
map.set('SA', "South Africa")
map.set('NP', "Nepal")
map.set('BH', "Bhutan")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':- ', value);
}



const myObject = {
    'g1' : "GTA",
    'g2' : "Valorant",
    'g3' : "PUBG"
}

//  for of not iterable with for of loop

// for (const [key , value] of myObject) {
//     console.log(key, ':- ', value);
// }
