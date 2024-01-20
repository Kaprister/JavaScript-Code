// for in loop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    py : 'python'
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'cpp', 'py', 'java']
for(const key in programming){
    // console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('FR', 'France')
map.set('SA', "South Africa")
map.set('NP', "Nepal")
map.set('BH', "Bhutan")

// map is not iterable
// for (const key in map) {
//     console.log(key);
// }