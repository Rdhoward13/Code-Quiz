var timer = 60;
var pauseInt = 0;
var penality = 5;
var timeLeft = document.getElementById("timeLeft");
var welcome = document.getElementById("welcome");
var startBtn = document.getElementById("startBtn");
var questionBox = document.getElementById("question");
var answersBox = document.getElementById("answers");
var quiz = document.getElementById("quiz");
quiz.style.display = "none";

var multiChoice = [
  {
    question: "Which tag is used in HTML to link a JavaScript file?",
    answers: ["A. <body/>", "B. <section/>", "C. <script/>", "D. <link/>"],
    correct: "C. <script/>",
  },
  {
    question: "What does a CSS file do?",
    answers: [
      "A. Functionality",
      "B. Style",
      "C. Store data",
      "D. Puts words on the page",
    ],
    correct: "B. Style",
  },
  {
    question: "How do you make a text bold in CSS?",
    answers: [
      "A. text-align",
      "B. display ",
      "C. font-family",
      "D. font-weight",
    ],
    correct: "D. font-weight",
  },
];

function startQuiz() {
  questionBox.innerHTML = "";
  answersBox.innerHTML = "";
  for (var i = 0; i < multiChoice.length; i++) {
    var index = i;
    let userQuestion = multiChoice[i].question;
    var userAnswers = multiChoice[i].answers;
    questionBox.innerHTML = userQuestion;
    function compare(event) {
      let choice = event.target;
      if (choice.matches("li")) {
        if (choice.textContent === multiChoice[index].correct) {
          console.log("correct");
          startQuiz();
        } else {
          console.log("wrong");
        }
      }
    }
  }
  userAnswers.forEach(function (nextAnswer) {
    let listItem = document.createElement("li");
    listItem.textContent = nextAnswer;
    answersBox.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

startBtn.addEventListener("click", function () {
  // Timer functionality goes here (setInterval, clearInterval)
  if (pauseInt === 0) {
    pauseInt = setInterval(function () {
      timer--;
      timeLeft.innerHTML = "Time: " + timer;
      if (timer <= 0) {
        clearInterval(timerInterval);
        timeLeft.innerHTMLTML = "Game is over";
        gameOver();
      }
    }, 1000);
  }
  welcome.style.display = "none";
  quiz.style.display = "block";
  startQuiz();
});
