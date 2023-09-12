import fs from "fs"

const file = fs.createWriteStream("./streamFile.txt")


for(let i = 0; i < 1000; i++) {
    file.write("Welcome to Set08 class\n")
}
file;

let att = 1

setInterval(()=>{
    file.write(`Welcome to Set08 class ${att++}\n`)
},2000)