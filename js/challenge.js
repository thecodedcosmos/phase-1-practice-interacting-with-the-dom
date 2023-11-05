//Declare all variables.//
const counterPiece = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartShape = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const likesButton = document.getElementById("likes");
const listSection = document.getElementById("list");
const formComment = document.getElementById("comment-form");
const inputComment = document.getElementById("comment-input");
const submitComment = document.getElementById("submit");
let count = 0;
let paused = false;
//Add event listeners.//
minusButton.addEventListener("click", decrementCounter);
plusButton.addEventListener("click", incrementCounter);
heartShape.addEventListener("click", addlike);
formComment.addEventListener("submit", addComment);
pauseButton.addEventListener("click", function() {
    paused = !paused;
    if (paused) {
        pauseCounter();
    } else {
        startCounter();
    }
    });
//Create a function.//
function counterValue() {
    counterPiece.innerText = count;
}

function startCounter() {
    intervalID = setInterval(incrementCounter, 1000);
}

function pauseCounter() {
    clearInterval(internalID);
}

function incrementCounter() {
    count++;
    counterValue;
}

function decrementCounter() {
    count--;
    counterValue;
}

function addLike() {
    const li = document.createElement("li");
    li.innerText = `${count} has been liked`;
    likesButton.appendChild(li);
}

function addComment(e) {
    e.preventDefault();
    const p = document.createElement("p");
    p.innerText = commentInput.value;
    commentList.appendChild(p);
}

//Invoke//

startCounter();