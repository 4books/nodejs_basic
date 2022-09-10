const os = require('os');

console.log(os);
console.log(os.cpus());
console.log(os.cpus().length);
console.log(os.release());
console.log(os.type());
console.log(os.totalmem() / 1024 / 1024);
console.log(os.freemem() / 1024 / 1024);