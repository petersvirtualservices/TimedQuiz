/* function contextMenuListener(el) {
    el.addEventListener( "contextmenu", function(e) {
      alert("Listen here, you little cheater.  I, too, have looked at the source code to find the answer.  You are only hurting yourself because if you do not know the answer by heart, you will probably lose to someone who does.")
    });
  } */

//  ************* QUESTION STUFF ********************

// .innerHTML to change questions

/* var question = document.getElementById("question");
var correct = document.getElementById("right");
var wrong = document.getElemntbyId("wrong"); */

// ************* TIMER STUFF ********************
// Need to add 'Adding 3 seconds' for wrong answers

function timeLeft() {
  var movementPlaceholder = document.getElementById("Progress");
  var movement = 0;
  var final = setInterval(timeToMove, 600);
  function timeToMove() {
    if (movement >= 100) {
      clearInterval(final);
    } else {
      movement++;
      movementPlaceholder.style.width = movement + '%';
    }
  }
}
