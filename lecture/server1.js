const http = require("http");

let server1 = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=urf-8'});
    res.write('<h1>Hello Node! </h1>');
    res.end('<p>Hello naegwon</p>')
}).listen(8080, () => {

});

server1.on('listening', () => {
    console.log('8080 대기중');
});

server1.on('error', (error) => {
    console.log(error);
})
