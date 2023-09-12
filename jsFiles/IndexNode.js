const os = require("os");
console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.networkInterfaces())

let getAd = os.networkInterfaces()
let x = []
for(let i in getAd){
    x.push(getAd[i])
}
console.log(x[0][1].address)





const myOwn = os.cpus();
const result = myOwn[0].model.split(" ")[2].split("-")[0].split("")[1];
// console.log(result);

const myArch = os.arch();
//  console.log(myArch);

const total = os.totalmem();
const getGb = Math.floor(total/1000000000/2);
// console.log(getGb);

let core = "3";
let totalmem = 4;

// if(result === core && myArch=== "x64" && getGb>= totalmem){
//     console.log("Welcome to code lab")
// }else if(result !== core && myArch !== "x64" && getGb>= totalmem){
//     console.log("you are likely to get a new laptop soon")
// }else{
//     console.log("go and get a new laptop")
// }

