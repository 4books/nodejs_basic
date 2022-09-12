const fsPromise = require('fs').promises;

fsPromise.writeFile('./writeme.txt', '글이 입력됨2')
    .then(() => {
        console.log('성공');
        return fsPromise.readFile('./writeme.txt')
    })
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });