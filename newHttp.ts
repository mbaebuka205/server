import http, { ServerResponse, IncomingMessage} from 'http'
const port:number = 2000;


interface iData {
    id:number,
    name:string,
    phone:number,
    stark:string,
}

interface iMessage {
    message:string,
    success:boolean,
    data:null | {} | {}[]
}
const set08 : iData[] = [
    {
        id: 1,
        name: 'Joan',
        phone:8045789345,
        stark:'FULL STARK'
    },
    {
        id: 2,
        name: 'Joan',
        phone:8045789345,
        stark:'FULL STARK'
    },
     {
        id: 3,
        name: 'Joan',
        phone:8045789345,
        stark:'FULL STARK'
    },
    {
        id: 4,
        name: 'Joan',
        phone:8045789345,
        stark:'FULL STARK'
    },
]

const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
    res.setHeader("Content-Type", "Application/JSON")
    const {method, url} = req
    let status:number = 404

    let response: iMessage = {
        message:'failed',
        success: false,
        data: null
    }

    const contain:any = []
    req.on("data",(chunk:any)=>{
      contain.push(chunk)
    }).on("end", ()=>{
        // Get Method
        if(url === "/" && method === "GET"){
            status = 200
            response.message = "All set08 data"
            response.success = true
            response.data = set08
            res.write(JSON.stringify({response, status}))
            res.end()
        }
        
        // Push Method
        if(url === "/" && method === "GET"){
            status = 201
            const body = JSON.parse(contain)
            set08.push(body);
            response.message = "SUCCESSFULLY Added"
            response.success = true;
            response.data = set08;
            res.write(JSON.stringify({response, status}));
            
            res.end()
        }
    })
})

server.listen(port, ()=>{
    console.log('server is up and listening on', port)
})
