const fs = require('fs');
let zlib = require('zlib');

let readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
let zlibStream = zlib.createGzip();
let writeStream = fs.createWriteStream('./writeme3.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);



