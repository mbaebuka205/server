import { error } from "console"
import fs from "fs"
import path from "path"

const message = ".\nWelcome to codeLab"

const writeEvent = () => {
    fs.appendFile(path.join(__dirname, "events", "firstFile"), message,(error):void=>{
        if(error){
            console.log("error creating file", error)
        }else{
            console.log("file appended")
        }
    })
}
writeEvent()
export default writeEvent;