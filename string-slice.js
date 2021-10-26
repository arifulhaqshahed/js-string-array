const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
const word = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

const smallSlice = anthem.slice(5, 10);
// console.log(smallSlice);

const subStr = anthem.substr(11, 6);
// console.log(subStr);

const subString = anthem.substring(5, 10);
// console.log(subString);

const firstName = 'Jisan';
const lastName = 'Mahmud';
const fullName = firstName.concat(lastName);
// console.log(fullName);

const words = ['a', 'b', 'c', 'd', 'e'];
const joinedWords = words.join(', ');
console.log(joinedWords);