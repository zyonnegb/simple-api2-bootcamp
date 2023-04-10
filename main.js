let joke = document.querySelector('h2')
let programming = document.querySelector('#btn1')
let pun = document.querySelector('#btn2')
let dark = document.querySelector('#btn3')
let misc = document.querySelector('#btn6')

programming.addEventListener('click', programCat)
pun.addEventListener('click', punCat)
dark.addEventListener('click', darkCat)
misc.addEventListener('click', miscCat)

function programCat(){
    let param = 'programming'
    let url = `https://v2.jokeapi.dev/joke/${param}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`

    fetch(url)
    .then(res => res.json()) //get json
    .then(data => {
    console.log(data.joke)
    if(data.joke === undefined){
        programCat()
    }else{
        joke.innerText = data.joke
    }
    })
}

function punCat(){
    let param = 'pun'
    let url = `https://v2.jokeapi.dev/joke/${param}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`

    fetch(url)
    .then(res => res.json()) //get json
    .then(data => {
    console.log(data.joke)
    if(data.joke === undefined){
        punCat()
    }else{
        joke.innerText = data.joke
    }
    })
}

function darkCat(){
    let param = 'dark'
    let url = `https://v2.jokeapi.dev/joke/${param}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`

    fetch(url)
    .then(res => res.json()) //get json
    .then(data => {
    console.log(data.joke)
    if(data.joke === undefined){
        darkCat()
    }else{
        joke.innerText = data.joke
    }
    })
}


function miscCat(){
    let param = 'misc'
    let url = `https://v2.jokeapi.dev/joke/${param}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`

    fetch(url)
    .then(res => res.json()) //get json
    .then(data => {
    console.log(data.joke)
    if(data.joke === undefined){
        miscCat()
    }else{
        joke.innerText = data.joke
    }
    })
}