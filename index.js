function Bigmessage(){
    console.log("sai")
}
setTimeout(()=> {
    console.log("Sai")
},5000)
const interval = setInterval(() => {
    console.log("Sai")
},10000);
setTimeout(()=> {
    console.log("Stop")
},10000)