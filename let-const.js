const friend = "Ali";
// friend = "bali"; // a const variable can't be reassign. If you try to reassign a const variable than it will show an error
// console.log(friend);

let userName = "Yeasin";
userName = "Simul";
// console.log(userName);


// we can access an array or it's property but we can't reassign an array in a const variable. same case with object also
const myArray = [];
myArray.push(2);
myArray[0] = 3;
// console.log(myArray);


const myObj = {name: "ali", age: 13}
myObj.isStudent = true;
myObj['age'] = 15;
console.log(myObj);

// let variable has a special use case and that is scope
// for(var i = 0; i < 10; i++){
//    const element = i;
//     // console.log(i);
// }
// console.log(i); // but if we use let variable here it can't be access outside of the scope

for(let i = 0; i < 10; i++){
    const element = i;
}
// console.log(i); // it will show an error that i is not defined