// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for(let i = 0; i <= 10; i++){
    const ele = i;
    if(ele == 5){
        // console.log("5 is best number!");
    }
    // console.log(ele);
}

// console.log(ele); --> not assessible out side the loop


// for(let i = 1; i <= 10; i++){
//     console.log(`outer loop value : ${i}`);
//     for(let j = 1; j <= 10; j++){
//     // console.log(`inner loop value : ${j} and inner loop ${i}`);
//         console.log(i + ' * ' + j + ' = ' + i*j);
//     }
// }

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for(let i = 0; i <= myArray.length; i++){
    const ele = myArray[i];
    // console.log(ele);
}


// break and continue

for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`detected 5`);
        // break;
        continue;
    }
    console.log(`value of i is ${i}`);
}
