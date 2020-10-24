// var quiz = document.getElementbyId("quiz");
// var submit = document.getElementbyId("submit");
// var results = document.getElemtnbyId("results");
// var timer = 
// var timeRemaining

//vars 
var startButton = document.getElementById("start-button")
var questionEl = document.getElementById("question-body")
var allQuestions = document.getElementById("question")
var answersEl = document.getElementById("answer-buttons")  
var userName = document.querySelector("#username")
var saveScoreBtn = document.querySelector("#saveScoreBtn")
var finalScore = document.querySelector("#finalScore")
//start btn
startButton.addEventListener('click', gameStart)
//highscore section
var highscores = JSON.parse(localStorage.getItem("highScores")) || []
var highscoreMax = 5
// finalScore.innerText = 
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value
})
//do not allow auto refresh on selection
saveHighScore = e => {
    e.preventDefault()
}

//var for randomizing questions
var randomQuestion
var questionOn = 0


//game begin
function gameStart(){
    // console.log("Game Started")
    startButton.classList.add("hide")
    questionEl.classList.remove("hide")
    
    randomQuestion = questions.sort(() => Math.random() - .5)
//next game function
    nextGame()
    // var countdown;
    // var timer = setInterval(function(){
    // }, 1000)
}
//Timer section
const quizTimer = document.getElementById("quiz-timer");
var count = 30;
if (answerSelect === false){
    count -= 5;
}
startButton.addEventListener("click", function(){
    setInterval(function (){
        count-= 1;
        quizTimer.textContent = count;
    },1000);
} )


//playing around with getting timer to start and end
// if (gameStart === true){
//     var count = 10;
//     var interval = setInterval(function(){
//       document.getElementById('count').innerHTML=count;
//       count--;
//       if (count === 0){
//         clearInterval(interval);
//         document.getElementById('count').innerHTML='Done';
//         // or...
//         alert("You're out of time!");
//       }
//     }, 1000);
//     console.log(count)
// }

//next game console log to see objects for questions
function nextGame(){
    console.log(randomQuestion)
    console.log(randomQuestion)
    console.log(randomQuestion)
    console.log(randomQuestion)

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

//show and hide question w/ clear text on btn
function questionShow(question){
    allQuestions.innerText = question.question
    // console.log(question)

    document.getElementById("answer-buttons").innerHTML = ""
//answer function w/ onclick selection (btn)
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        button.dataset.correct = answer.correct
        button.addEventListener("click", answerSelect)
        answersEl.appendChild(button)
    });
}



//// NEXT STEPS TO FINISH

// Get a timmer to display on the page, that doesn't go away as you answer questions
// Remove time from that timer, if data-correct is false (in the function below)
// A function that runs when that timer hits 0 or they finish the quiz
// allow the user to put in their initials use your hide class to hide it until the function runs
// store initials w/ score in local storage


function answerSelect(event){

    // 1. We can correctly tell what the user Clicked and if it's correct.
    // event.target.getAttribute("data-correct") <-- Returns true or false
    // 2. Store that boolean
    // 3. Generate the next question
    // 4. If boolean is true or false => (Remove time from the timer) (setTime()/setInterval())
    console.log(event.target.getAttribute("data-correct"))
    questionOn += 1
    nextGame()
    //not sure if setInterval() is necessary here
    // setInterval()
}

//highscore Local Storage
//   // save to localstorage
//   highscores.push(newScore);
//   window.localStorage.setItem("highscores", JSON.stringify(highscores));

//   // redirect to next page
//   window.location.href = "highScore.html";

// var score = 0;
// for(var i = 0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
//     if(response == quesions==questions[i].answer){
//         score++;
//         alert("Correct");
//     }else{
//         alert("Incorrect");
//     }
// }
// alert("you got" + score + "/" + questions.length);

//questions within an array, nested objects to pull from
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
                {text: "No fish is a bad fish.", correct: true}
            ]
        }
]

//pseudoCode
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