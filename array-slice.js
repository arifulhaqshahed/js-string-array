// slice
const numbers = [2, 3, 4, 2, 8, 10, 23, 45, 67, 72, 98, 222, 211];
const slicedNumbers = numbers.slice(2, 8);
// console.log(slicedNumbers);
// console.log(numbers);

// splice
const numbersSpliced = numbers.splice(2, 8);
console.log(numbersSpliced);
console.log(numbers);

const spliced = numbers.splice(2, 8, 23, 12, 12, 22, 33);
console.log(numbers);