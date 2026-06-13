const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Hello world from the server")
})  // server create ho gya h


server.listen(3000,()=>{
    console.log("Server is runing on port 3000")
})

