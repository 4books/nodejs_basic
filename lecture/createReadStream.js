const fs = require('fs');

//default 64kb씩 읽음
//highWaterMark 로 원하는 byte 만큼 나누어서 진행
const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});

const data = []
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data:', chunk, chunk.length);
});
readStream.on('end', () => {
    console.log('end:', Buffer.concat(data).toString());
    console.log(data);
});
readStream.on('error', (err) => {
    console.log('error:', err);
});