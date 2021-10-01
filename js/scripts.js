const next = document.getElementById('next')
const copy = document.getElementById('copy')
const image = document.getElementsByClassName('image')[0]
const title = document.getElementsByClassName('title')[0]
gimme()


// navigator.clipboard.writeText("Omkar")
const status =  navigator.permissions.query({ name:'clipboard-write'})

next.addEventListener('click',(e) => {
    img.setAttribute('alt','omkar')
    gimme()
})

copy.addEventListener('click',(e) => {
    copyImage()
})

async function copyImage(){
    const img = document.getElementById('img')
    fetch(img.getAttribute('src'),{
        origin:"*",
        mode:'cors',
        credentials:"omit"
    })
        .then(res => {
            return res.blob()
        })
        .then(d => {
            console.log(d);
            navigator.clipboard.write([new ClipboardItem({[d.type]:d})])
            console.log(d);
        })
    // imageURL.json().then(d => {console.log(d);})
    // const blob = await imageURL.blob()
    // console.log(blob);
    // // await navigator.clipboard.write([new ClipboardItem({'image/png':blob})])
    // console.log(blob)

}

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

