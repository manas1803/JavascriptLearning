/**HERE THE ... are being used as rest operators */
let sumOfOne = function(...args){
    let sum = 0;
    console.log(args)
    args.forEach((element)=>{
        sum+=element;
    })
    return sum;
}
let arr = [1,2,4,33,2,4,67,5,3,4,32,23,4,56,7,8,0,887,6,55,4,3,45];
/**HERE THE ... are being used as spread operators */
let summation = sumOfOne(...arr);
console.log(summation);