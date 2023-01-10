let leftScore = document.getElementById("leftscore")
let rightScore = document.getElementById("rightscore")
let leaderText = document.getElementById("leader")
let initialLeft = 0
let initialRight= 0

function leader(){
    if (initialLeft > initialRight)
    leaderText.textContent = "Home team on the lead!"
    else if (initialLeft < initialRight)
    leaderText.textContent = "Guest team on the lead!"
    else
    leaderText.textContent =" "
}

function plusoneLeft() {
    initialLeft+=1
    leftScore.textContent = initialLeft
    leader()
}

function plustwoLeft() {
    initialLeft+=2
    leftScore.textContent = initialLeft
    leader()
}

function plusthreeLeft() {
    initialLeft+=3
    leftScore.textContent = initialLeft
    leader()
}

function plusoneRight() {
    initialRight+=1
    rightScore.textContent = initialRight
    leader()
}

function plustwoRight() {
    initialRight+=2
    rightScore.textContent = initialRight
    leader()
}

function plusthreeRight() {
    initialRight+=3
    rightScore.textContent = initialRight
    leader()
}

function reset() {
    initialRight-=initialRight
    initialLeft-=initialLeft
    leftScore.textContent = initialLeft
    rightScore.textContent = initialRight
    leader()
}