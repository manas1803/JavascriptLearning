
function changeHelloWorld(){
    const hello = document.querySelector(".hello")
    hello.innerHTML = hello.innerHTML.replace('H','<span style = "color:lightslategrey">H</span>')
}
function changeFamily(){
    const world = document.querySelector('.world')
    const families = ["'Courier New', Courier, monospace","Arial, Helvetica, sans-serif","'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif","fantasy","'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"]

    for(var i=0;i<families.length;i++){
        function attachClosure(i){
            setInterval(function(){
                world.style.fontFamily = families[i];
                world.style.color = "blue"
            },1000*(i+1))
    }
    attachClosure(i)
    }
}
changeHelloWorld();
changeFamily();