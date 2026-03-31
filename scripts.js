
let number = 0

let computing

let h2 = document.querySelector('h2')

function start() {
    computing = setInterval(function () {
        number++
        h2.innerHTML = number
    }, 1000)
}

function stop() {
    clearInterval(computing)
}

function restart() 

{
    clearInterval(computing)
    number = 0
    h2.innerHTML = "0"
    computing = setInterval(function () {
        number++
        h2.innerHTML = number
}, 1000)
}


