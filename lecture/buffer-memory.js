let fs = require('fs');

//buffer를 통째로 옮기는 것이니 1기가 차이가 나야된다
console.log('before: ', process.memoryUsage().rss);
const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss);
