
/**Call BAck Using */
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

function createPosts(callback){
    setTimeout(function(){
        posts.push({title:'Post Three',body:'My Post three'});
        callback();
    },2000)
}
createPosts(getPosts);
