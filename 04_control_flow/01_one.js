// if 
// syntax
// if(condition){
        // code statement
// }

// const isUserLoggedIn = true;

// if(isUserLoggedIn){
//     console.log("executed");
// }

// const score = 200;
// if(score > 100){
//     let power = "fly"
//     console.log(`user power : ${power}`);
// }

// console.log(`user power : ${power}`);

const balance = 800
// if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


const userLoggedIn = true;
const debitcard = true;

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard && 2 == 3){
    console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in!");
}

// > < <= >= || && == != === !== !