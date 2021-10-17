/**THE CALL METHOD */

let printName = function(city,state,country){
    console.log(this.firstName + " " + this.lastName + " from " + city,state,country)
}
let names = {
    firstName:"Manas",
    lastName:"Pant",
}
let name2 = {
    firstName:"Kislaya",
    lastName:"Pant"
}
let sachin = {
    firstName:"Sachin",
    lastName:"Tendulkar"
}
printName.call(names,"Jaipur","Rajasthan","India")
printName.call(name2,"Bangalore","Karnataka","India")

printName.apply(names,["a","b","c"])

let printSachin = printName.bind(sachin)

printSachin("Mumbai","Maha","India");
let summationFunction = function(...args){
    let sum = 0;
    for(let i=0;i<args.length;i++){
        sum+=args[i];
    }
    return sum;
}

let sumofNaturalNumbers = summationFunction.bind(this,1,2,3,4,5,6,7,8,9,10);
console.log(sumofNaturalNumbers(11));