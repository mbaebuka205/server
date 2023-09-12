import { error } from "console"
import fs from "fs"
import path from "path"


fs.mkdir("./NewClass", (error):void=>{
    if(error){
        console.log("An error in creating folder", error)
    }else{
        console.log("Folder created successfully")
    }
})

const newMsg = "Help me Buy Food"
fs.writeFile(path.join(__dirname , "NewClass" , "NewFile.txt"), newMsg,(error):void=>{
    if (error){
        console.log("Error wrinting a file", error)
    }else{
        console.log("New File Added")
    }

const newMsg2 = "\nBuy snack for joan"
fs.appendFile(path.join(__dirname, "NewClass", "NewFile.txt"), newMsg2, (error):void=>{
    if(error){
        console.log("An error in appending file", error)
    }else{
        console.log("New File Appended")
    }
})
})



// const newMsg2 = "\nBuy snack for joan"

// fs.appendFile(path.join(__dirname, "NewClass", "NewFile.txt"), newMsg2, (error):void=>{
//     if(error){
//         console.log("An error in appending file", error)
//     }else{
//         console.log("New File Appended")
//     }
// })

// setInterval(()=>{
    fs.appendFile(path.join(__dirname, "NewClass", "NewFile.tx"),"\nAm Isaac",(error):void=>{
        if (error){
            console.log("Error wrinting a file", error)
        }else{
            console.log("New File Added")
        }
    })
// }, 5000)

   setInterval(()=>{     
    const arg:string [] = [
        "\nAm Isaac",
        "\nAm daniel ",
        "\nAm ekene",
        "\nAm joan",
        "\nAm ahmed",
        "\nAm samuel",
        "\nAm stanley",
        "\nAm tobi",
        "\nAm khalid",
        "\nAm chinedu"
    ]
    
    const mat = Math.floor(Math.random() * arg.length )
    let they = (arg[mat])        
      fs.appendFile(path.join(__dirname, "NewClass", "myFile.txt"), they,(error):void=>{
          if (error){
              console.log("Error wrinting a file", error)
            }else{
                console.log("New File Added")
            }
        })
     },3000)  


//Assignment

//1
fs.mkdir("./folder1" , (error):void=>{
    if(error){
        console.log("An error in creating folder", error)
    }else{
        console.log("Folder created")
    }
})

fs.writeFile(path.join(__dirname, "folder1", "file1.xt" ),"",(error):void=>{
    if(error){
        console.log("Error writing a file", error)
    }else{
        console.log("File created")
    }
})

fs.writeFile(path.join(__dirname, "folder1", "file2.xt"),"",(error):void=>{
    if(error){
        console.log("Error creating a file", error)
    }else{
        console.log("File created")
    }
})

//2
fs.mkdir("./folder2", (error):void=>{
    if(error){
        console.log("Error creating a folder", error)
    }else{
        console.log("Folder created")
    }
})

fs.writeFile(path.join(__dirname, "folder2" , "file1.xt"),"",(error):void=>{
    if(error){
        console.log("Error creating file", error)
    }else{
        console.log("File created")
    }
})

fs.writeFile(path.join(__dirname, "folder2", "file2.xt"),"", (error):void=>{
    if(error){
        console.log("Error creating file", error)
    }else{
        console.log("File created")
    }
})

//3
fs.mkdir("./folder3", (error):void=>{
    if(error){
        console.log("Error creating folder", error)
    }else{
        console.log("Folder created")
    }
})

fs.writeFile(path.join(__dirname, "folder3" , "file1.xt"),"",(error):void=>{
    if(error){
        console.log("Error creating file", error)
    }else{
        console.log("File created")
    }
})

fs.writeFile(path.join(__dirname, "folder3", "file2.xt"),"", (error):void=>{
    if(error){
        console.log("Error creating file", error)
    }else{
        console.log("File created")
    }
})

//4
fs.mkdir("./folder4", (error):void=>{
    if(error){
        console.log("Error creating folder", error)
    }else{
        console.log("Folder created")
    }
})

fs.writeFile(path.join(__dirname, "folder4" , "file1.xt"),"",(error):void=>{
    if(error){
        console.log("Error creating file", error)
    }else{
        console.log("File created")
    }
})

fs.writeFile(path.join(__dirname, "folder4", "file2.xt"),"", (error):void=>{
    if(error){
        console.log("Error creating file", error)
    }else{
        console.log("File created")
    }
})
//5
fs.mkdir("./folder5", (error):void=>{
    if(error){
        console.log("Error creating folder", error)
    }else{
        console.log("Folder created")
    }
})

fs.writeFile(path.join(__dirname, "folder5" , "file1.xt"),"",(error):void=>{
    if(error){
        console.log("Error creating file", error)
    }else{
        console.log("File created")
    }
})

fs.writeFile(path.join(__dirname, "folder5", "file2.xt"),"", (error):void=>{
    if(error){
        console.log("Error creating file", error)
    }else{
        console.log("File created")
    }
})

fs.readFile(path.join(__dirname, "NewClass" , "NewFile.txt"),
"utf-8", (error,data) =>{
    if(error){
        console.log(error);   
    }else{
        console.log(data);
        
    }
})