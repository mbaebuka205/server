// import http,{ServerResponse, IncomingMessage} from "http"

// const port:number = 1889

// const server = http.createServer((request:IncomingMessage, response:ServerResponse<IncomingMessage>)=>{
//     response.writeHead(200)
//     response.write("server is up and running on typeScript")
//     response.end()
// })

// server.listen(port, ()=>{
//     console.log(`listening on port: ${port}`)
// })




import http,{ServerResponse,IncomingMessage} from "http"

const port : number = 3586
const server = http.createServer((req : IncomingMessage, res : ServerResponse) =>{
    res.writeHead(300)
    res.write("dsousd")
    res.end()
} )






















