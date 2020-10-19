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
    console.log("Game Started")
    startButton.classList.add("hide")
    questionEl.classList.remove("hide")
    questionOn = 0
    randomQuestion = questions.sort(() => Math.random() - .5)
    nextGame()
}
function nextGame(){
    questionShow(randomQuestion[questionOn])

}
function questionShow(question){
    allQuestions.innerText = question.question
    console.log(question)
    question.answers.forEach(answer => {
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", answerSelect)
    });
}

function answerSelect(){

}


var questions = [
    {
    question: "What type of lure catches the most bass?",
        answer: [
            {text: "A soft plastic senko.", correct: true},
            {text: "Crankbait", correct: false}
        ]
        },
        {
        question: "What type of fish like deep water 25ft+",
            answer: [
            {text:"Smallmouth bass", correct: true},
            {text:"Trout", correct: false},
        ]
        },
        {
        question: "What type of rod & reel is commonly used for both bass and trout?",
            answer: [
                {text: "Spinning rod/reel", correct: true},
                {text: "Baitcasting rod/reel", correct: false}
            ]
            },
            {
        question: "What type of knot is used for most Bass bait?",
            answer: [
                {text: "Polymer Knot", correct: true},
                {text: "Winchester Knot", correct: false},
                {text: "Monkey's Fist", correct: false},
                {text: "Dropper Loop", correct: false}
            ]
            },
            {
        question: "What type of fish are the most fun to catch?",
            answer: [
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































