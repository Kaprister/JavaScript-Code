
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `1234`
    }
}

const sushant = new User('sushant')
// console.log(sushant.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone1", "i@phone.com")
iphone.logMe();
// console.log(iphone.createId());
