// import http, {ServerResponse, IncomingMessage} from 'http';
// import fs from 'fs';
// import path from 'path';
// import{log} from 'console';

// const port:number = 2000

// const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
//   res.writeHead(200)
  
//   let connect:string = "web/";

//   switch (req.url){
//     case "/":
//         connect += "home.html"
//         res.statusCode = 200;
//         break;
//     case "/about":
//         connect += "about.html"
//         res.statusCode = 200;
//         break;
//     case "/contact":
//         connect += "contact.html"
//         res.statusCode = 200;
//         break;    
//     default:
//         connect += "404.html";
//         res.statusCode = 404;
//         break;
//   }

//   fs.readFile(path.join(__dirname, connect) , (err, data) => {
//      if (err) {
//         console.log("An error occured", err)
//      }else{
//         res.write(data);
//         res.end();
//      };
//   });

// })
 
// server.listen(port, () =>{
//     console.log("server is listening on port", port)
// });





import fs from "fs"
import path from "path"
import { error, log } from "console"
import http, {ServerResponse, IncomingMessage} from "http"
import { DefaultSerializer } from "v8";

const port:number = 3000;

const server = http.createServer ((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
    res.writeHead(200)

    let connect:string = "web/"

    switch(req.url){
       case "/": 
        connect += "home.html"
        res.statusCode = 200;
        break;

       case "/about":
        connect += "about.html"
        res.statusCode = 200;
        break;
       
       case "/contact":
        connect += "contact.html"
        res.statusCode = 200;
        break
        
       default :
       connect += "404.html"
       res.statusCode = 404; 
       break;
    }

    fs.readFile(path.join(__dirname, connect) , (error, data)=>{
        if(error){
            console.log(error)
        }else{
           res.write(data)
           res.end()
        }
    })
})
server.listen(port, ()=>{
    console.log(`server is up and listening on port ${port}`)
})



// import path from "path"
// import fs from "fs"
// import http,{ ServerResponse, IncomingMessage} from "http"

// const port:number = 2000

// const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
//     if(req.url === '/' && req.method === 'GET' && req.statusCode === 200){
//         let brsName= req.rawHeaders
//         res.end('you are running on :' + brsName [7].split(';')[3], 'utf-8', ()=>{
//             console.log(`result`)
//         })
//         res.setHeader('content-Type', "application/json");
//         res.write(`your server is running on ${brsName}`);
//        res.end();
//     };
    
// })
// server.listen(port, ()=>{
//     console.log("on port", port)
// })










