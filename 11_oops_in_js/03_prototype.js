
// let myName = 'sushant    '

// console.log(myName.length);
// console.log(myName.trueLength()); // i have made this method
// console.log(myName.trim().length);


let myHeros = ['thor', 'spiderman']
let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.sushant = function(){
    console.log(`sushant is present in all object`);
}

Array.prototype.heySushant = function(){
    console.log(`Sushant says hello to everyone`);
}

// heroPower.sushant();
// myHeros.sushant()
// myHeros.heySushant()
// heroPower.heySushant() // this power only for arrays


// inheritance

const User = {
    name : "tej",
    email : "tej@ibm.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__:TeachingSupport,
}

Teacher.__proto__ = User

// moder syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


// //

let anotherUserName = 'panchayat       '
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUserName.trueLength()
'sushant      '.trueLength()
'       love'.trueLength()