// const img = document.getElementById('img')
const next = document.getElementById('next')
const copy = document.getElementById('copy')
const image = document.getElementsByClassName('image')[0]
const title = document.getElementsByClassName('title')[0]
gimme()

next.addEventListener('click',(e) => {
    img.setAttribute('alt','omkar')
    gimme()
})

function gimme(){
    title.innerHTML = "Loading..."
    fetch("https://meme-api.herokuapp.com/gimme")
        .then((response) =>{
            console.log(response);
            return response.json()
        })
        .then((res) => {
            console.log(res);
            console.log(image);
            title.innerHTML = `<h2>${res.title}</h2>`
            image.innerHTML = `<img src="${res.url}" id="img" alt="Meme">`
            // img.setAttribute('src',res.url)
        })
}

