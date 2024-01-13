// console.log("hello");

// primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);

const bigNumber = 3456897654321n
// console.log(typeof bigNumber);
// console.log(bigNumber);


// Reference (Non primitive)
// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "sushant",
    age: 22,
}

const myFunction = function(){
    console.log("helloWorld");
}


// ++++++++++++++++++++++++++++++++++++++++++++++++
// MEMORY ALLOCATION

// Stack (primitive) , Heap (Non-primitive)

let myname = "sushant";

let anothername = myname
anothername = "shubham"

console.log(myname);
console.log(anothername);

// object
let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

console.log(userOne);

let userTwo = userOne

userTwo.email = "sushant@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
