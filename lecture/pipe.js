const fs = require('fs');

let readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
let writeStream = fs.createWriteStream('./writeme3.txt.gz');
readStream.pipe(writeStream);



