function doubleIt(num){
    return num *2
};
const result = doubleIt(5);
console.log(result)

const doubleIt = function(num){
    return num * 2;
}
console.log(doubleIt(5));


const doubleIt = function myFun(num){
    return num * 2;
}
console.log(doubleIt(10));

const doubleIt = (num) => num * 2;
const result = doubleIt(4);
console.log(result);

const add = (num1, num2) => num1 + num2;
const result = add(2, 5);
console.log(result);

const propose = () => "l Love You So much";
console.log(propose());

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x -y;
    const result = sum + diff;
    return result;
}
console.log(doMath(5, 3))