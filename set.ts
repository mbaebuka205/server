// // for every one sec
setInterval(()=>{
//    console.log("i am Esther");
}, 1000);

//after one sec
setTimeout(()=>{
    // console.log("Am a guy")
})

//the number of times i have run
let attemts:number = 0
setInterval(()=>{
//    console.log(`i have run ${attemts++} times`)
}, 2000)

setImmediate(()=>{
    // console.log(`Am Isaac and am also a guy `)
})

setInterval(()=>{
    let ad = "skip this ad in the next 5 secs"
    // console.log(ad);
   setTimeout(()=>{
    //  console.log(`click this button to skip add`)
   }, 5000)
}, 1000)



function app(myMoney){   
setInterval(()=>{
    console.log(`${myMoney += 2}`)
}, 3000)
}
app(3000)