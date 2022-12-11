//server creation

const http = require("http");

const port = 8081;

http.createServer((req, res) => {
    // res.writelead(200, { "content Type": "text/html"});
    // res.write("<h4>Hello, this is from my new server</h4>")
    // res.end();
    const {method, url } = req;
    console.log(method,url);
    res.end();
}).listen(port, () => {
    console.log("My nodejs server stated on ${port}");
});

// https://localhost:5500