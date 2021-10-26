// for number type
function addNumbers(num1, num2){
    // console.log(arguments[2]);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const addition = addNumbers(12, 18, 23, 7);
console.log(addition);


// for String type
function addName(firstName, lastName){
    let fullName = '';
    for (const name  of arguments) {
        fullName = fullName + name + ' ';
    }
    return fullName;
}
const name = addName('karim', 'benzema', 'ali');
console.log(name);