/* function contextMenuListener(el) {
    el.addEventListener( "contextmenu", function(e) {
      alert("Listen here, you little cheater.  I, too, have looked at the source code to find the answer.  You are only hurting yourself because if you do not know the answer by heart, you will probably lose to someone who does.")
    });
  } */

//  ************* QUESTION STUFF ********************

// .innerHTML to change questions

/* var question = document.getElementById(question);
var correct = document.getElementById(right);
var wrong = document.getElemntbyId(wrong);
var answersCorrect = docment.getElementById(answers);
var answerSet = 

var questionChange = function(){
if (correct === true) {
  document.getElementsByClassName(questionWhole).setAttribute("click", "question[i]");
  document.getElementsByClassName(questionWhole).setAttribute("click", "answerSet[i]");
  answerCorrect++;
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
  document.getElementById("removeIntro").innerText = "";
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


  
