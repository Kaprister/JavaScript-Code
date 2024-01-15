
// const tinderUser = new Object() 
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "virat"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : {
            firstname : "sushant",
            lastname : "kapri"
        }
    }
}

// console.log(regularUser.fullname?.userFullname.lastname);
// console.log(regularUser.fullname.userFullname.lastname);


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}

// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "sushant@gamil.com"
    },
    {
        id : 2,
        email : "tej@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('id'));




// -----------objects destructuring------------

const course = {
    coursename : "javascript",
    price : "990",
    courseInstructor : "sushant"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor : instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "sushant",
//     "courseName": "helloWorld",
//     "price": "free"
// }


// [
//     {},
//     {},
//     {}
// ]


