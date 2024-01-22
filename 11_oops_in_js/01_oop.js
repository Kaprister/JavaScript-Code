
const user = {
    username : "sushant",
    loginCount : 0,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const user2 = {
//     username : "sushant",
//     loginCount : 0,
//     signedIn : true,

//     getUserDetails : function(){
//         // console.log("Got user details from database");
//         // console.log(`Username : ${this.username}`);
//         console.log(this);
//     }
// }




// constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this // it is not neccessary to return this
}

const userOne = new User("sushant", 12, true)
const usertwo = new User("rajesh", 89, false)
// console.log(userOne);
console.log(userOne.constructor);
// console.log(usertwo);