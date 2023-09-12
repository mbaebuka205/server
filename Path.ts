// const path = require("path")
import path from "path";

const getExt = path.extname("index.ts");
console.log(getExt);

console.log(
    path.basename(
        "ahmed.css\\isaac.css\\nodeindex.ts"
    )
);

console.log(path.dirname("C:UsersCodeLabDocumentsprojectBE\\node_modules@types\\nodeindex.ts"))


const result:string = path.format({
    root: "user\\hp\\",
    base: "document"
})
console.log(result)

console.log(path.isAbsolute(
("C:UsersCodeLabDocumentsprojectBE\\node_modules@types\\nodeindex.ts")))

