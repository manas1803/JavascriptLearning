function arrowFunctionType1(){
    const func = _ => {
        console.log(20)
    };
    func();
}
function arrowFunctionType2(){
    const func = (param)=>{
        console.log(param)
    }
    func(2)
}
arrowFunctionType1();
arrowFunctionType2();