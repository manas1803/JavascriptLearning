console.log("Hello")

setTimeout(function(){
    console.log("Callback")
},4000)

console.log("World")

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate<startDate+10000){
    endDate = new Date().getTime();
    //
}
console.log("While expires")