/**The Promise way of getting data from the API */
function fetchChuckNorrisData(){
    fetch("https://api.chucknorris.io/jokes/random",{method:"get"})
    .then(res=>res.json())
    .then(data=>console.log(data.value))
}
fetchChuckNorrisData()

/**The async await way of getting the same */
async function fetchAnotherWay(){
    let data = await fetch("https://api.chucknorris.io/jokes/random",{method:"get"});
    let actualData = await data.json()
    console.log(actualData.value)
}

fetchAnotherWay();


