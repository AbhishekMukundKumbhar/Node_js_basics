const http = require('http');

const server = http.createServer((req, res)=>{
    // res.write("welcome to http module");
    if(req.url == '/'){
        res.end("welcome to Home screen");
    }
    else if(req.url =='/about'){
        res.end("welcome to about page");
    }
    else{
        res.end(
            `405 Error \n Path not found`
        )
    }
})
server.listen(5000);