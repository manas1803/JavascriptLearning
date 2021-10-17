
let names ={
    firstName:"Manas",
    lastName:"Pant"
}
function printMyName(state,country){
    console.log(this.firstName + " " + this.lastName + " from " + state + ", " + country)
}

let myName = printMyName.bind(names,"Hello")
myName("India");

Function.prototype.myBind = function(...args)
{
    let obj = this;
    let params = args.slice(1)
    return function(...args1){
        obj.apply(args[0],params.concat(args1))
    }
}

let myName2 = printMyName.myBind(names,"Hello")

myName2("India");

