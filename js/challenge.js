// Increment 
let timeLord 
start()
function start() {
    timeLord = setInterval(processCounter, 1000)
}

function processCounter() {
    const counter = document.getElementById('counter')
    let currentCount = Number(counter.textContent)
    currentCount++
    counter.textContent = currentCount
}

// Likes
const heart = document.getElementById('heart')
heart.addEventListener('click',processLikes)

function processLikes(){
    const likesList = document.querySelector('ul.likes')
    const currentCounter = document.getElementById('counter').textContent

    const newLi = document.createElement('li')
    newLi.dataset.dataNum = currentCounter
    newLi.textContent = `${currentCounter} has been liked 1 time`
    likesList.append(newLi)
}

// Plus and Minus
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

plus.addEventListener('click',processPlus)
minus.addEventListener('click',processMinus)

function processPlus() {
    const currentCounter = document.getElementById('counter')
    let newCounter = Number(currentCounter.textContent)
    newCounter++
    currentCounter.textContent = newCounter
}

function processMinus() {
    const currentCounter = document.getElementById('counter')
    let newCounter = Number(currentCounter.textContent)
    newCounter--
    currentCounter.textContent = newCounter
}


// Pause
const pause = document.getElementById('pause')
pause.addEventListener('click',processPause)

function processPause() {
    const buttons = document.querySelectorAll('button')

    if (this.textContent === ' pause '){
        buttons.forEach(button => {
            if(button.textContent ===' pause '){} else{button.disabled = true}})
        clearInterval(timeLord)
        this.textContent = ' resume '
    }
    else if (this.textContent === ' resume '){
        buttons.forEach(button => button.disabled = false)
        start()
        this.textContent = ' pause '
    }
}

// Comments
const submit = document.getElementById('submit')
submit.addEventListener('click',processComments)

function processComments(event) {
    event.preventDefault()
    const input = document.getElementById('comment-input')
    const commentList = document.querySelector('div#list.comments')
    const newP = document.createElement('p')

    newP.textContent = input.value
    commentList.append(newP)    
}