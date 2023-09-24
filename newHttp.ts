// import http, { ServerResponse, IncomingMessage} from 'http'
// const port:number = 2000;


// interface iData {
//     id:number,
//     name:string,
//     phone:number,
//     stark:string,
// }

// interface iMessage {
//     message:string,
//     success:boolean,
//     data:null | {} | {}[]
// }
// const set08 : iData[] = [
//     {
//         id: 1,
//         name: 'Joan',
//         phone:8045789345,
//         stark:'FULL STARK'
//     },
//     {
//         id: 2,
//         name: 'Joan',
//         phone:8045789345,
//         stark:'FULL STARK'
//     },
//      {
//         id: 3,
//         name: 'Joan',
//         phone:8045789345,
//         stark:'FULL STARK'
//     },
//     {
//         id: 4,
//         name: 'Joan',
//         phone:8045789345,
//         stark:'FULL STARK'
//     },
// ]

// const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
//     res.setHeader("Content-Type", "Application/JSON")
//     const {method, url} = req
//     let status:number = 404

//     let response: iMessage = {
//         message:'failed',
//         success: false,
//         data: null
//     }

//     const contain:any = []
//     req.on("data",(chunk:any)=>{
//       contain.push(chunk)
//     }).on("end", ()=>{
//         // Get Method
//         if(url === "/" && method === "GET"){
//             status = 200
//             response.message = "All set08 data"
//             response.success = true
//             response.data = set08
//             res.write(JSON.stringify({response, status}))
//             res.end()
//         }
        
//         // Push Method
//         if(url === "/" && method === "GET"){
//             status = 201
//             const body = JSON.parse(contain)
//             set08.push(body);
//             response.message = "SUCCESSFULLY Added"
//             response.success = true;
//             response.data = set08;
//             res.write(JSON.stringify({response, status}));
            
//             res.end()
//         }
//     })
// })

// server.listen(port, ()=>{
//     console.log('server is up and listening on', port)
// })


import http, {ServerResponse, IncomingMessage} from 'http'
const port:number = 2000;

  
interface iData{
    id:number, 
    name:string,
    phone:number,
    stark:string
}

interface iMessage{
    message:string,
    success:boolean,
    data:null|[]|{}[]
}

let set08:iData []= [
    {
        id:1,
        name:'isaac',
        phone:7385743593,
        stark:'Full'
    },
    {
        id:1,
        name:'isaac',
        phone:7385743593,
        stark:'Full'
    }
]


const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
    res.setHeader('Content-Type', 'Aplication/JSON')
    let status:number = 404
    const {method, url} = req

    const response:iMessage={
        message:"",
        success:true,
        data:null,
    }

    const contain:any = []
    req.on("data",(chunk:any)=>{
       contain.push(set08)
    }).on("end",()=>{
       //get
       if(url === "/" && method === "GET"){
          status = 200
          response.message = "all set08"
          response.success = true
          response.data = set08
          res.write(JSON.stringify({response, status}))
          res.end()
       }
       //post
       if(url === "/" && method === "GET"){
        status = 201
        const body = JSON.parse(contain)
        set08.push(body)
        response.message = "all set08"
        response.success = true
        response.data = set08
        res.write(JSON.stringify({response, status}))
        res.end()
     }
     //patch
     if (method === "PATCH") {
        const build = JSON.parse(contain);

        let details: any = url?.split("/")[1];
        let datavalue = parseInt(details);

        let findobject = set08.some((el) => {
          return el.id === datavalue;
        });

        if (findobject === false) {
          status = 404;

          response.message = "User not Found",
            response.data = null,
            response.success = false;

          res.write(JSON.stringify({ response, status }));

          res.end();
        } else {
          const updateusername = build.name;

          set08 = set08.map((user: any) => {
            if (user?.id === datavalue) {
              return {
                id: user?.id,
                name: updateusername,
                age: user?.age,
              };
            }

            return user;
          });

          status = 200;

          response.message = "User Updated",
            response.data = set08,
            response.success = true;

          res.write(JSON.stringify({ response, status }));

          res.end();
        }
      }


        //put
     if (method === "PUT") {
      const build = JSON.parse(contain);

      let details: any = url?.split("/")[1];
      let datavalue = parseInt(details);

      let findobject = set08.some((el) => {
        return el.id === datavalue;
      });

      if (findobject === false) {
        status = 404;

        response.message = "User not Found",
          response.data = null,
          response.success = false;

        res.write(JSON.stringify({ response, status }));

        res.end();
      } else {
        const updateusername = build.name;

        set08 = set08.map((user: any) => {
          if (user?.id === datavalue) {
            return {
              id: user?.id,
              name: updateusername,
              age: user?.age,
            };
          }

          return user;
        });

        status = 200;

        response.message = "User Updated",
          response.data = set08,
          response.success = true;

        res.write(JSON.stringify({ response, status }));

        res.end();
      }
    }

    })

})

server.listen(port, ()=>{
    console.log('server is up and runnuig on port', port);
    
})
