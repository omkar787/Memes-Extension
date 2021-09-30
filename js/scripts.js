const img = document.getElementById('img')
const next = document.getElementById('next')
const copy = document.getElementById('copy')


next.addEventListener('click',(e) => {
    img.setAttribute('alt','omkar')
    fetch("https://meme-api.herokuapp.com/gimme")
        .then((response) =>{
            console.log(response);
            return response.json()
        })
        .then((res) => {
            console.log(res);
            img.setAttribute('src',res.url)
        })
})


