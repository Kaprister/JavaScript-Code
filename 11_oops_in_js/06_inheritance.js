
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tej = new Teacher("tej", "tej@ibm.com", "5736")
tej.addCourse();

const aniket = new User("aniket")
aniket.logMe()

// console.log(tej === aniket);
console.log(tej instanceof User);