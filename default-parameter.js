// case 1:
function add(num1, num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const result = add(12);
// console.log(result);

// case 2:
function sum(num1, num2){
    num2 = num2 || 0;
    return num1 + num2;
}
const output = sum(10);
// console.log(output);

// case 3: 
function addValue(num1, num2 = 0){
    return num1 + num2;
}
const addNumbers = addValue(10);
console.log(addNumbers);