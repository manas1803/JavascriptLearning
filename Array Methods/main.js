const arr = [8,12,4,7,23,5,665,5,75,65,89,89,89];

function addAtStartShiftMethod(num){
    arr.unshift(num);
}
function removeFromStartShiftMethod(){
    arr.shift();
}
function addAtEndPushMethod(num){
    arr.push(num);
}
function removeAtEndPopMethod(){
    arr.pop();
}
function addAtStartSpliceMethod(num){
    arr.splice(0,0,num);
}
function removeAtStartSpliceMethod(){
    arr.splice(0,1);
}
function addMultipleValuesUsingSplice(num1,num2,num3,num4,num5){
    arr.splice(3,0,num1,num2,num3,num4,num5);
}
function removeMultipleValuesUsingSplice(){
    arr.splice(3,5);
}
function replaceMultipleValuesUsingSplice(num){
    arr.splice(1,1,num)
}
function addElementFromLast(num){
    arr.splice(arr.length,0,num);   
}
function removeElementFromLastSpliceMethod(){
    arr.splice(arr.length-1,1)
}
function foreachMethodToTraverse(){
    arr.forEach((element,index)=>{
        console.log(element + " is the element in the array at index " + index);
    })
}
function mapMethodInArray(){
    const newFunc = arr.map((element,arr)=>{
        return element*2;
    })
    printArray(newFunc);
}
function filterMethodInArray(){
    const newFunc = arr.filter((element,index,arr)=>{
        return arr.indexOf(element)==index;
    })
    printArray(newFunc);
}
function ReduceMethodInArray(){
    const sum = arr.reduce((current,total,index,arr)=>{
        total+=current;
       return total; 
    },0)
    console.log(sum)
}
function findIndexOfElement(num){
    console.log(arr.indexOf(num));
    console.log(arr.lastIndexOf(num));
}

function sliceMethodForCreatingCopy(){
    const newSlicedArray = arr.slice(0,4);
    console.log(newSlicedArray)
}
function arrayToString(){
    const stringArray = arr.toString();
    console.log(stringArray);
}
function arrayToStringUsingJoin(){
    const stringArray = arr.join(":");
    console.log(stringArray);
}
function printArray(newArray){
    console.log(newArray)
}
function sortingTheArray(){
    arr.sort((a,b)=>{
        if(a>b)
            return 1;
        else if(a<b)
            return -1;
        else
        return 0;
    });
}
addAtStartShiftMethod(12);
removeFromStartShiftMethod();
addAtEndPushMethod(12345);
removeAtEndPopMethod();
addAtStartSpliceMethod(234);
removeAtStartSpliceMethod();
addMultipleValuesUsingSplice(11,22,33,44,55);
removeMultipleValuesUsingSplice();
printArray(arr);
replaceMultipleValuesUsingSplice(10);
printArray(arr);
addElementFromLast(123);
printArray(arr);
removeElementFromLastSpliceMethod();
printArray(arr);
foreachMethodToTraverse();
mapMethodInArray();
filterMethodInArray();
ReduceMethodInArray();
findIndexOfElement(89);
sliceMethodForCreatingCopy();
printArray(arr);
arrayToString();
arrayToStringUsingJoin();
sortingTheArray();
printArray(arr);