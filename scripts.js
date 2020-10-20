// var quiz = document.getElementbyId("quiz");
// var submit = document.getElementbyId("submit");
// var results = document.getElemtnbyId("results");
// var timer = 
// var timeRemaining


var startButton = document.getElementById("start-button")
var questionEl = document.getElementById("question-body")
var allQuestions = document.getElementById("question")
var answersEl = document.getElementById("answer-buttons")    
startButton.addEventListener('click', gameStart)


var randomQuestion, questionOn



function gameStart(){
    // console.log("Game Started")
    startButton.classList.add("hide")
    questionEl.classList.remove("hide")
    
    randomQuestion = questions.sort(() => Math.random() - .5)
    questionOn = 0
    nextGame()
    // var countdown;
    // var timer = setInterval(function(){
    // }, 1000)
}
function nextGame(){
    questionShow(randomQuestion[questionOn])

}

//Note that for whatever reason this code did not work.
//I rewrote the code below and now it works....
// question.answers.forEach(answer => {
//     if(answer.correct){
//         var button = document.createElement("button")
//         button.innerText = anwer.text
//         button.dataset.correct = answer.correct
//     }
//     button.addEventListener("click", answerSelect)
//     answerButtonsElement.appendChild(button)


function questionShow(question){
    allQuestions.innerText = question.question
    // console.log(question)
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener("click", answerSelect)
        answersEl.appendChild(button)
    });
}

function answerSelect(){

}


var questions = [
    {
        question: "What type of lure catches the most bass?",
            answers: [
            {text: "A soft plastic senko.", correct: true},
            {text: "Crankbait", correct: false}
        ]
        },
        {
        question: "What type of fish like deep water 25ft+",
            answers: [
            {text:"Smallmouth bass", correct: true},
            {text:"Trout", correct: false},
        ]
        },
        {
        question: "What type of rod & reel is commonly used for both bass and trout?",
            answers: [
                {text: "Spinning rod/reel", correct: true},
                {text: "Baitcasting rod/reel", correct: false}
            ]
            },
            {
        question: "What type of knot is used for most Bass bait?",
            answers: [
                {text: "Polymer Knot", correct: true},
                {text: "Winchester Knot", correct: false},
                {text: "Monkey's Fist", correct: false},
                {text: "Dropper Loop", correct: false}
            ]
            },
            {
        question: "What type of fish are the most fun to catch?",
            answers: [
                {text: "Bass", correct: true},
                {text: "Any other fish.", correct: true}
            ]
        }
]







//function for next question:
// function next() {
//     currentQuestion++;
//        if (currentQuestion > questions.length - 1) {
//         endGame();
//         return;
//     }
//     var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"
//     document.getElementById("quizBody").innerHTML = quizContent;











//var quiz will house questions 
//var submit will push answer to app and progress to next question
//^^ inner.html will clear the page and refresh
//var results will house the result screen with score and user initials input  



/*
-Add homescreen for application before first question prompt
-Add a start button
-A timer begins to countdown when the button is clicked
-A question is presented when the button is clicked
-When an answer is selected (buttonPress) >>> 
-Another question is presented once the first question is answered
-If the question is answered INCORRECTLY, time is subtracted from the timer
-All questions answered (5 total) OR timer reaches 0, End Game screen presented
-When the game is over (Pass/Fail) user initials && score can be saved
*/

//check user input with the answer of the question
// if (userChoice === true) {
    
// }else{

// };































