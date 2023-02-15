const http= require("http");

http.createServer((req,res)=>{
    res.write("hello world! This is the server created by Rhitika.");
    res.end();
}).listen(3000);