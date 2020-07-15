// ************* START BUTTON ********************

function beginGame() {
  timeLeft();
  questionChange();
}
//  ************* QUESTION STUFF ********************

let currentQuestionIndex = 0;
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
var questionsRight = 0;

let questions = [
  { question: "What is a typical abbreviation for Javascript?", choiceA: "JS", choiceB: "Java", choiceC: "JSS", choiceD: "Java1", correct: "A" },
  { question: "What is the foundational code for a website?", choiceA: "HTML", choiceB: "Java", choiceC: "Javascript", choiceD: "CSS", correct: "A" },
  { question: "What was Javascript's original name?", choiceA: "LiveScript", choiceB: "Netscape", choiceC: "Microsoft", choiceD: "Juno", correct: "A" },
  { question: "What does console.log() do?", choiceA: "It prints the result to the console log.", choiceB: "It creates code for the site.", choiceC: "It does not do anything.", choiceD: "It creates images.", correct: "A" },
  { question: "What is the right way to declare a variable?", choiceA: "var name = 'Whatever'", choiceB: "name = Whatever", choiceC: "Whatver", choiceD: "Smile.", correct: "A" },
  { question: "Why would you want to use var rather than const?", choiceA: "When you want to change a variable, you will use var.", choiceB: "When you want a variable to remain constant, you will choose var.", choiceC: "You want to use const to make the variable changable.", choiceD: "You never want to use var.", correct: "A" },
  { question: "Why would you want to use const as a variable declaration?", choiceA: "When you want to ensure that the variable stays the same.", choiceB: "You never want to use const.", choiceC: "You want to use const when the variables will change.", choiceD: "You want to use const when you need to change the style format.", correct: "A" },
  { question: "Why would you use a while loop?", choiceA: "You want to run a loop until a condition has been satisfied.", choiceB: "You want to run a loop for 5 times.", choiceC: "You don't want to run a loop.", choiceD: "You want to run a invalid loop.", correct: "A" },
  { question: "Why would you run a for loop?", choiceA: "You would want to run a loop while a certain condition is true.", choiceB: "You want to run a loop until a condition has been satisfied.", choiceC: "You don't want to run a loop.", choiceD: "This type of condition does not exist.", correct: "A" },
  { question: "Which element should you use to indicate that Javascript is being used?", choiceA: "script", choiceB: "javascript", choiceC: "html", choiceD: "css", correct: "A" },
  { question: "What do the intials HTML stand for?", choiceA: "Hyper Text Markup Language", choiceB: "Hello To My Lefties", choiceC: "How To Manuever Lettuce", choiceD: "Hypertext Markup Laughter", correct: "A" },
  { question: "Who makes the Web standards?", choiceA: "The World Wide Web Consortium", choiceB: "Yahoo", choiceC: "Google", choiceD: "Microsoft", correct: "A" },
  { question: "What is the HTML syntax used to bold text?", choiceA: "&lt b &gt", choiceB: "&lt i &gt", choiceC: "&lt div &gt", choiceD: "&lt span &gt", correct: "A" },
  { question: "What element is used to create a hyperlink?", choiceA: "&lt a &gt", choiceB: "&lt i &gt", choiceC: "&lt div &gt", choiceD: "&lt span &gt", correct: "A" },
  { question: "What element do you use to create a header in a table?", choiceA: "&lt th &gt", choiceB: "&lt i &gt", choiceC: "&lt div &gt", choiceD: "&lt span &gt", correct: "A" },
  { question: "What element is used to create an ordered list?", choiceA: "&lt ol &gt", choiceB: "&lt i &gt", choiceC: "&lt div &gt", choiceD: "&lt span &gt", correct: "A" },
  { question: "What is the purpose of the &ltiframe&gt element?", choiceA: "To display a media or webpage within a webpage.", choiceB: "To load a page.", choiceD: "To create a DocType element.", choiceC: "To allow for elements to be written.", correct: "A" },
  { question: "What is the purpose of the &ltalt&gt element?", choiceA: "To provide text if the image cannot be displayed.", choiceB: "To create a hyperlink.", choiceD: "To resize the image.", choiceC: "To create a gif from the image.", correct: "A" },
  { question: "SVG used what code?", choiceA: "CSS", choiceB: "HTML", choiceC: "Java", choiceD: "JavaScript", correct: "A" },
  { question: "What is the purpose of Javascript?", choiceA: "To provide functionality to a website.", choiceB: "To offer a base for a website.", choiceC: "To add style to a website.", choiceD: "It does not have a purpose.", correct: "A" },
  { question: "What letter choice was of all the correct answers?", choiceA: "A", choiceB: "B", choiceC: "C", choiceD: "D", correct: "A" },
];

function questionChange() {
  let q = questions[currentQuestionIndex];

  question.innerHTML = q.question;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

/// ***************Check Answer***************

function checkAnswer(answer) {
  if (answer == questions[currentQuestionIndex].correct) {
    document.getElementById("rightwrong").innerText = 'Correct!';
    document.getElementById("score").innerHTML = questionsRight + 1;
    questionsRight++;
  }
  else {
    var movement = movement + 3;
    document.getElementById("rightwrong").innerText = 'Wrong!';
    currentQuestionIndex++;
  }
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    questionChange();
  }
  else {
    confirm("Sorry Champ, Maybe Next Time.");
    window.location.replace("index.html");
  }
}
// ************* TIMER STUFF ********************

function timeLeft() {
  var movement = 0;
  var final = setInterval(timeToMove, 1000);
  var timePlaceholder = document.getElementById("timeHere");

  function timeToMove() {
    if (movement >= 100) {
      clearInterval(final);
    }
    else {
      movement++;
      timePlaceholder.innerText = 30 - movement;
    }
    if (30 - movement === 0) {
      clearTimeout(final);
      timePlaceholder.innerText = "Sorry Champ, Maybe Next Time. Refresh The Page to Try Again."
    }
    if (questionsRight === 10) {
      clearTimeout(final);
      var winnerCircle = confirm("Great Job!  Now, we will talk a walk to the scoreboard, champ.");
      if (winnerCircle === true || winnerCircle === false) {
        window.location.replace("winner.html");
      }
      document.getElementById("winnerCircle").addEventListener("click", function () {
        document.getElementById("winnerCircle").innerHTML = winnerCircle
      })
    }
  }
}