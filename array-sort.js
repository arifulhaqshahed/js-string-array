const numbers = [2, 3, 1, 6, 4, 8, 3, 1, 5];
const sorted = numbers.sort();
console.log(sorted);

const names = ['joshim', 'razzak', 'iliyaskancon', 'shakibkhan', 'anwar'];
const sortedNames = names.sort();
console.log(sortedNames);

const reversedNames = names.reverse();
console.log(reversedNames);


const values = [2, 33, 1, 60, 47, 8, 13, 19, 15];
const sortedNumbers = values.sort(function (a, b){
    return a - b;
});
console.log(sortedNumbers);