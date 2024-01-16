
const user = {
    username : "sushant",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "sushant"
//     // console.log(this);
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username = "sushant"
//     console.log(this.username);
// }
// chai()


// ------- arrow functions

// const chai = () => {
//     let username = "sushant"
//     console.log(this.username);
// }

// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2

// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username: "sushant"})

// console.log(addtwo(7,4));

const myArray = [2,3,4,5,6]

myArray.forEach(() => {})
