import axios from "axios";
import path from "path";
import  fs from "fs";
import http, {ServerResponse, IncomingMessage} from "http"
import { error } from "console";

fs.mkdir("./F_Sylvia_Assignment/imgs" , (error):void=>{
    if (error){
        console.log(error)
    }else{
        console.log("created")
    }
})

const port:number = 2000

interface IData{
    message:string,
    success:boolean,
    data:null| [] | {}[]
}

const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
    res.setHeader("Content-Type", "application/json");
    let status = 404;
    const {method, url} = req

    let response:IData = {
        message:"null",
        success:false,
        data:null
    }
   let holder = ""
    req.on("data",(chunk)=>{
       holder += chunk
    }).on("end",async()=>{
        if(method === "GET"){
            let pat:any = url?.split("/")[1]
            let unPath = parseInt(pat)
            const fakestoreEnd = await axios.get("https://fakestoreapi.com/products")

            if(fakestoreEnd.status){
                unPath = fakestoreEnd.
                status = 200
                response.message = "completed",
                response.success = true,
                response.data = null,
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
        }
    })


})    
