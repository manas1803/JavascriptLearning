/* This is a basic example of closure*/
function init(){
    var x = 10;
    function getName(){
        console.log(x);
    }
    getName();
}
init();

/** Functional Calling Closure */

function a(){
    var y = 10;
    function b(){
        console.log(y);
    }
    y=100;
    return b;
}
console.log("Hello")
console.log("World");

var func = a();

func();

/** Coding question involving closures*/

function my(){
    setTimeout(()=>{
        console.log(20)
    },1000);
    setTimeout(()=>{
        console.log(120)
    },2000);
    setTimeout(()=>{
        console.log(220)
    },3000);
}
//my();

function newMy(){
    for(var i=1;i<=5;i++){
        function myClosure(x){
            setTimeout(()=>{
                console.log(x)
            },x*1000)
        }
        myClosure(i)
    }
}
newMy();