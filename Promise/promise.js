
/**Call Back Using */
const posts = [
    {title:'Post One',body:'My Post one'},
    {title:'Post Two',body:'My Post two'}
]
function getPosts(){
    setTimeout(function(){
        let listHtml = '';
        posts.forEach((element)=>{
            listHtml+=`<li>${element.title}</li>`
        });
        document.querySelector('.myList').innerHTML = listHtml;
    },1000)
}
getPosts();

function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Error in the promise")
            }
        },2000)
    })
}

createPosts({title:"Post Three",body:"My third post"})
.then(data=>data.json())
.then(res=>{
    let html = '';
    html += `<li>${res}</li>`
    document.querySelector('.myList').innerHTML=html;
})
.catch((error)=>{
    console.log(error)
})