// fetch('https://something.com').then().catch().finally()


const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 completed');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async task 2 resolved');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 3 completed');
        resolve({username : "sushant", email : "sushant@gmail.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
    console.log('Async task 3 resolved');
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "rajesh", password : "123"})
        }else{
            reject('ERROR : Something went wrong!')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The Promise is either resolve or rejected!");
})

console.log('------------------5----------------------');



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javascript", password : "js"})
        }else{
            reject('ERROR : Something went wrong!')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const reponse = await promiseFive
        console.log(reponse);
    }catch(error){
        console.log(error);
        console.log('----------------END----------------');
    }
}
consumePromiseFive();


// 

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://randomuser.me/api/')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     }catch(e){
//         console.log(e);
//     }
// }
// getAllUsers()


fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log('ERROR : ', err);
})
