// ************* START BUTTON ********************

function beginGame() {
  document.getElementById("removeIntro").innerText = "";
  timeLeft();
}
//  ************* QUESTION STUFF ********************

var question = ["What is a typical abbreviation for Javascript? - JS", "What kind of styles does Javascript support? - Event-Driven, Functional, Imperative", "What was Javascript's original name? - LiveScript", "What does console.log() do? - It prints the result to the console log.", "What is the right way to declare a variable? - var name = 'Whatever';", "Why would you want to use var rather than const? - When you want to change a variable, you will use var.", "Why would you want to use const as a variable declaration? - When you want to ensure that the variable stays the same.", "Why would you use a while loop? - You want to run a loop until a condition has been satisfied.", "Why would you run a for loop? - You would want to run a loop while a certain condition is true."];
//.element.textContent()
var correct = document.getElementById(right);
var wrong = document.getElemntbyId(wrong);
var questionsRight = docment.getElementById(answers);
var answerSet = 

/* var questionChange = function(){
if (correct === true) {
  document.getElementsByClassName(questionWhole).setAttribute("click", "question[i]");
  document.getElementsByClassName(questionWhole).setAttribute("click", "answerSet[i]");
  questionsRight++;
}
else{
  document.getElementsByClassName(questionWhole).setAttribute("click", "question[i]");
  document.getElementsByClassName(questionWhole).setAttribute("click", "answerSet[i]");

}
} */

// ************* TIMER STUFF ********************
// Need to add 'Adding 3 seconds' for wrong answers
var questionsRight = 3;

function timeLeft() {
  var movementPlaceholder = document.getElementById("Progress");
  var movement = 0;
  var final = setInterval(timeToMove, 600);
  function timeToMove() {
    if (movement >= 100) {
      clearInterval(final);
    } 
    else{
      movement++;
      movementPlaceholder.style.width = movement + '%';
    }
    if(questionsRight === 10 && movement >= 100){
      window.location.href = "winner.html";
    }
    else if(questionsRight < 10 && movement >= 100){
      window.location.href ="loser.html";
    }

  }
}


  
/* var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();
 */