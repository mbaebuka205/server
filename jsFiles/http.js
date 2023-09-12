const http = require("http")

const PORT = 2000

const server = http.createServer((request, response)=>{
    response.writeHead(200)
    response.write("server is up and running 😉😉")
    response.end()
})

server.listen(PORT, ()=>{
    console.log("port is up and listening")
})

//1
const pORT = 4000

const app = http.createServer((request, response)=>{
    response.writeHead(200)
    response.write("server is up an running")
    response.end()
})

server.listen(pORT, ()=>{
    console.log("port is up and listening")
})

//2
const PoRT = 5000

const myServer = http.createServer(()=>{
    response.writeHead(200)
    response.write("server is up and runnind")
    response.end()
})

server.listen(PoRT, ()=>{
    console.log("port is up and listening")
})