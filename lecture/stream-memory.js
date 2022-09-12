let fs = require('fs');

//Stream으로 옮기므로 작은 용량으로 사용해야 한다
console.log('before: ', process.memoryUsage().rss);
const readStream = fs.createReadStream('./big.txt');
let writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('stream: ', process.memoryUsage().rss);
});

