
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 0, 14)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 0, 14, 5, 3)
// let myCreatedDate = new Date('2024-01-12')
// let myCreatedDate = new Date('01-14-2024')

// console.log(myCreatedDate.toString());



// --------------

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()}`


newDate.toLocaleString('default' , {
    weekday: "long",
    timeZone: ''
})


