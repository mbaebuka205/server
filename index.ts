import { log } from "console"
import Event from "events"
import writeEvent from "./newFs"

console.log(Event)

const emitter = new Event


emitter.on("Money", () =>{
    console.log(writeEvent())
})
setInterval(()=>{
    emitter.emit("Money", "Please get me rice 300 naira")
},5000)