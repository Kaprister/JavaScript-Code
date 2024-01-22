// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const tej = new User("tej", "tej@ibm.com", "1234");

console.log(tej.encryptPassword());
console.log(tej.changeUsername());


// behind the scene ---------------------------------------------

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const raj = new User("raj", "raj@ibm.com", "6779");

// console.log(raj.encryptPassword());
// console.log(raj.changeUsername());