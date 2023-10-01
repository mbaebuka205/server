import axios from "axios";
import path from "path";
import  fs from "fs";
import http, {ServerResponse, IncomingMessage} from "http"

const port:number = 3000
interface IData{
    message:string,
    success:boolean,
    data:null| [] | {}[]
}

const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
    res.setHeader("Content-Type", "application/json");
    let status = 404;

    let response:IData = {
        message:"null",
        success:false,
        data:null
    }
    let body = ""

       req.on("data",(chunk)=>{
        body += chunk;
       });
       req.on("end", async()=>{
         const {method, url} = req
        if(method === "GET"){
            const knwee:any = url?.split("/")[1]
            const errihr = parseInt(knwee)
     
            const fakestoreEnd = await axios.get("https://fakestoreapi.com/products")
          //endpoint

          if(fakestoreEnd.status){
            let FakeStrDetails = fakestoreEnd.data;
            let Data = FakeStrDetails.filter((el)=>{
                return el.id === errihr
            })
            Data.push(FakeStrDetails)
            status = 200
            response.message = "completed",
            response.success = true,
            response.data = Data,
            res.write(JSON.stringify({response, status}))
            res.end()
          }else{
            status = 404
            response.message = "No search Made"
            response.success = false,
            response.data = null,
    
            res.write(JSON.stringify({response, status}))
            res.end()
        }
    }else{
        status = 404
        response.message = "No search Made"
        response.success = false,
        response.data = null,

        res.write(JSON.stringify({response, status}))
        res.end()
    }
})
})

server.listen(port, ()=>{
    console.log("server is listening on port", port)
})