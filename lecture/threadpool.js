let crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('2', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('3', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('4', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('5', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('6', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('7', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('8', Date.now() - start);
});

/*
3 1477
4 1523
2 1555
1 1639
8 3170
5 3214
7 3409
6 3453
처음 4개와 마지막 4개가 나누어져 있다.
node는 4개씩 돌린다.
 */
