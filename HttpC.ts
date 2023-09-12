import http, {ServerResponse, IncomingMessage} from 'http';
import fs from 'fs';
import path from 'path';
import{log} from 'console';

const port:number = 2000

const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
  res.writeHead(200)
  
  let connect:string = "web/";

  switch (req.url){
    case "/":
        connect += "home.html"
        res.statusCode = 200;
        break;
    case "/":
        connect += "about.html"
        res.statusCode = 200;
        break;
    case "/":
        connect += "contact.html"
        res.statusCode = 200;
        break;    
    default:
        connect += "404.html";
        res.statusCode = 404;
        break;
  }

  fs.readFile(path.join(__dirname, connect) , (err, data) => {
     if (err) {
        console.log("An error occured", err)
     }else{
        res.write(data);
        res.end();
     };
  });

})
 
server.listen(port, () =>{
    console.log("server is listening on port", port)
});