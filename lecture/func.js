const value = require('./var')
// console.log(value.odd);
// console.log(value.even);
// console.log(value)

const {odd, even} = require('./var');
// import {odd, even} from './var';
// console.log(odd);
// console.log(even);

function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    } else {
        return even;
    }
}

// console.log(checkOddOrEven(4));
// console.log(checkOddOrEven(3));

module.exports = checkOddOrEven;
