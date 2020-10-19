var quiz = document.getElementbyId("quiz");
var submit = document.getElementbyId("submit");
var results = document.getElemtnbyId("results");

//



//function for next question
function next() {
    currentQuestion++;
       if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }
    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"
    document.getElementById("quizBody").innerHTML = quizContent;