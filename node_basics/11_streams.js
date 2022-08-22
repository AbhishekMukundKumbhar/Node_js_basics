// Streams in node js : used for big data files
// -- writable - write data sequentialy
// -- readable - read data sequentialy
// -- duplex - both read and write data sequentialy
// -- transform - modify data


const { writeFileSync, createReadStream } = require('fs');
const http = require('http');

// just creating big data file for stream
// for(let i=0; i<1000; i++){
//     writeFileSync('./contents/streamTest.txt', `hello world ${i} \n`, {flag : 'a'});
// }


//reading stream file
// const stream = createReadStream('./contents/streamTest.txt', 'utf8');
// stream.on('data', (res) => {
//     console.log(res);
// })

// stream.on('error', (err) => {
//     console.log(err);
// })


//in server
const server = http.createServer((req, res) => {
    const stream = createReadStream('./contents/streamTest.txt', 'utf8');
    stream.on('open', () => {
        stream.pipe(res);
    })

    stream.on('error', (err) => {
        res.end(err);
    })

});

server.listen(5000);