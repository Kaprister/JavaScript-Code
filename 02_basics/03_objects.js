// singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "sushant",
    "fullName" : "sushant kapri",
    [mySym] : "mykey1",
    age : "22",
    location : "bihar",
    email : "sushant@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "sunday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);

// jsUser.email = "sushantkapri@gmail.com"
// console.log(jsUser.email);

// Object.freeze(jsUser)

// jsUser.email = "tej@gmail.com"
// console.log(jsUser.email);
// console.log(jsUser);



jsUser.greeting = function() {
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
