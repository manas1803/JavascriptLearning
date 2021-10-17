const lists = document.querySelectorAll("ul li")
const parentList = document.querySelector("ul")
lists.forEach((element)=>{
    element.addEventListener('click',function(){
        parentList.prepend(element)
    })
})