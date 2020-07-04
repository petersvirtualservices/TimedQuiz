// ************* START BUTTON ********************

function beginGame() {
  document.getElementById("removeIntro").innerText = "";
  timeLeft();
  questionChange();
}
//  ************* QUESTION STUFF ********************




/*  function questionChange (question, right, wrong1, wrong2, wrong3) {
  document.querySelector(".change").addEventListener("click", questionChange());
  var question = h2.textContent = questionChange[question];
  var answers = button.textContent = questionChange[right];
  var answers = button.textContent = questionChange[wrong1];
  var answers = button.textContent = questionChange[wrong2];
  var answers = button.textContent = questionChange[wrong3];
}
  */

var questions = [
  { question: "What is a typical abbreviation for Javascript?", answers: ["JS", "Java", "JSS", "Java1"], correctAnswer: 0 },
];

// document.getElementsByClassName('change')[0].addEventListener('click', beginGame);

var currentQuestionIndex = 0;

function questionChange() {
  var changeQuestion = document.getElementsByClassName("change")[0];
  
  changeQuestion.innerHTML = '';

  var pInnerText = document.createElement("p");
  pInnerText.innerText = questions[currentQuestionIndex].question;
  document.getElementsByTagName("p")[0].appendChild(pInnerText);

  for (var i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
   var ButtonCreation =  document.createElement("button");
   ButtonCreation.innerText = questions[currentQuestionIndex].answers[i];

    document.createElement("button").addEventListener("click", function () {
      if (currentQuestionIndex != questions.length - 1) {
        currentQuestionIndex += 1;
        startQuestion();
      } else {

      }
      document.getElementById("change").appendChild(button);
    });
  }
}
//Do for h2
/* questionChange("What is the foundational code for a website?", "HTML", "Java",  "Javascript", "CSS");
questionChange("What was Javascript's original name?",  "LiveScript", "Netscape",  "Microsoft", "Juno");
questionChange("What does console.log() do?",  "It prints the result to the console log.", "It creates code for the site.",  "It does not do anything.", "It creates images.");
questionChange("What is the right way to declare a variable?",  "var name = 'Whatever'", "name = Whatever",  "Whatver", "Smile.");
questionChange("Why would you want to use var rather than const?",  "When you want to change a variable, you will use var.", "When you want a variable to remain constant, you will choose var.",  "You want to use const to make the variable changable.", "You never want to use var.");
questionChange("Why would you want to use const as a variable declaration?",  "When you want to ensure that the variable stays the same.", "You never want to use const.",  "You want to use const when the variables will change.", "You want to use const when you need to change the style format.");
questionChange("Why would you use a while loop?",  "You want to run a loop until a condition has been satisfied.", "You want to run a loop for 5 times.",  "You don't want to run a loop.", "You want to run a invalid loop.");
questionChange("Why would you run a for loop?", "You would want to run a loop while a certain condition is true.", "You want to run a loop until a condition has been satisfied.",  "You don't want to run a loop.", "This type of condition does not exist.");
questionChange("Which element should you use to indicate that Javascript is being used?",  "script", "javascript",  "html", "css");
questionChange("What do the intials HTML stand for?", "Hyper Text Markup Language", "Hello To My Lefties",  "How To Manuever Lettuce", "Hypertext Markup Laughter");
questionChange("Who makes the Web standards?", "The World Wide Web Consortium", "Yahoo",  "Google", "Microsoft");
questionChange("What is the HTML syntax used to bold text?", "<b>", "<i>",  "<div>", "<span>");
questionChange("What element is used to create a hyperlink?", "<a>", "<i>",  "<div>", "<span>");
questionChange("What element do you use to create a header in a table?", "<th>", "<i>",  "<div>", "<span>");
questionChange("What element is used to create an ordered list?", "<ol>",  "<i>",  "<div>", "<span>");
questionChange("What is the purpose of the <iframe> element?", "To display a media or webpage within a webpage.", "To load a page.",  "To create a DocType element.", "To allow for elements to be written.");
questionChange("What is the purpose of the <alt> element?", "To provide text if the image cannot be displayed.", "To create a hyperlink.",  "To resize the image.", "To create a gif from the image.");
questionChange("SVG used what code?",  "CSS", "HTML",  "Java", "JavaScript");
questionChange("What is the purpose of Javascript?",  "To provide functionality to a website.", "To offer a base for a website.",  "To add style to a website.", "It does not have a purpose."); */


// ************* TIMER STUFF ********************
// Need to add 'Adding 3 seconds' fornswers
var questionsRight = 10;

function timeLeft() {
  var movementPlaceholder = document.getElementById("Progress");
  var movement = 0;
  var final = setInterval(timeToMove, 300);
  function timeToMove() {
    if (movement >= 100) {
      clearInterval(final);
    }
    else {
      movement++;
      movementPlaceholder.style.width = movement + '%';
    }
    if (questionsRight === 10 && movement >= 100) {
      window.location.href = "winner.html";
    }
    else if (questionsRight < 10 && movement >= 100) {
      window.location.href = "loser.html";
    }

  }
}
