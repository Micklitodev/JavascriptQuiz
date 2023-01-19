let timerCounter = 0;
let winCount = 0;
let lossCount = 0;
let questionQuantity = 1;
let question = "";
let choices = "";

let myQuestions = [
  {
    question: "What is a valid way to declare a variable?",
    choices: ["variable", "declare", "var"],
    correctAnswer: "var",
  },
  {
    question: "What of the following is a string?",
    choices: ["3", "yes", "true"],
    correctAnswer: "yes",
  },
];

let questionElement = document.createElement("h1");
document.body.appendChild(questionElement);
let timerElement = document.createElement("div");
document.body.appendChild(timerElement);
let lossElement = document.createElement("div");
document.body.appendChild(lossElement);
let winElement = document.createElement("div");
document.body.appendChild(winElement);
let startElement = document.getElementById("start");
let formElement = document.createElement("form");
document.body.appendChild(formElement);
let choicesElement = document.createElement("div");
document.body.appendChild(choicesElement);


let choice1Label = document.querySelector('label[for="choiceOne"]');
let choice2Label = document.querySelector('label[for="choiceTwo"]');
let choice3Label = document.querySelector('label[for="choiceThree"]');

startElement.addEventListener("click", startGame);

function startGame() {
  timer();
}

function timer() {
  if (timerCounter <= 0 ) {
  timerCounter = 30;
  let timerInterval = setInterval(function () {
    timerElement.textContent = timerCounter;
    if (timerCounter === 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "";
      handleLoss();
    } else if (timerCounter > 0) {
      timerCounter--;
    }
  }, 1000);
  questionOne();} else { return }
}

function questionOne() {
  questionElement.textContent = JSON.stringify(myQuestions[0].question);
  let choice1Label = document.querySelector('label[for="choiceOne"]');
  let choice2Label = document.querySelector('label[for="choiceTwo"]');
  let choice3Label = document.querySelector('label[for="choiceThree"]');

  choice1Label.textContent = myQuestions[0].choices[0];
  choice2Label.textContent = myQuestions[0].choices[1];
  choice3Label.textContent = myQuestions[0].choices[2];

  let choice1 = document.getElementById("choiceOne") ;
  let choice2 = document.getElementById("choiceTwo") ;
  let choice3 = document.getElementById("choiceThree") ;

  choice1.addEventListener("click", q1c1);
  choice2.addEventListener("click", q1c2);
  choice3.addEventListener("click", q1c3);

  function q1c1() {
    timerCounter = timerCounter - 10;
    questionQuantity = questionQuantity - 1;
    questionTwo();
  }

  function q1c2() {
    timerCounter = timerCounter - 10;
    questionQuantity = questionQuantity - 1;
    questionTwo();
  }

  function q1c3() {
    questionQuantity = questionQuantity - 1;
    questionTwo();
  }
};

function questionTwo() {
  questionElement.textContent = JSON.stringify(myQuestions[1].question);
  let choice1Label = document.querySelector('label[for="choiceOne"]');
  let choice2Label = document.querySelector('label[for="choiceTwo"]');
  let choice3Label = document.querySelector('label[for="choiceThree"]');

  choice1Label.textContent = myQuestions[1].choices[0];
  choice2Label.textContent = myQuestions[1].choices[1];
  choice3Label.textContent = myQuestions[1].choices[2];

  let choice1 = document.getElementById("choiceOne");
  let choice2 = document.getElementById("choiceTwo");
  let choice3 = document.getElementById("choiceThree");

  choice1.addEventListener("click", q2c1);
  choice2.addEventListener("click", q2c2);
  choice3.addEventListener("click", q2c3);

  function q2c1() {
    questionQuantity = questionQuantity - 1;
    timerCounter = timerCounter - 10;
    questionThree();
  }

  function q2c2() {
    questionQuantity = questionQuantity - 1;
    handleWin();
  }

  function q2c3() {
    questionQuantity = questionQuantity - 1;
    timerCounter = timerCounter - 10;
    questionThree();
  }
}

function handleLoss() {
  lossCount = lossCount + 1;
  localStorage.setItem("loss", lossCount);
  renderWinsAndLosses();
}

function handleWin() {
  winCount = winCount + 1;
  localStorage.setItem("win", winCount);
  renderWinsAndLosses();
}

function playAgain() {

  let restart = document.createElement("button");
  restart.textContent = "play again";
  document.body.appendChild(restart);
  restart.addEventListener("click", replay);
}

function replay() {
  startGame();
}

function renderWinsAndLosses() {
  lossElement.textContent = ` Losses: ${localStorage.getItem("loss")}`;
  winElement.textContent = `Wins: ${localStorage.getItem("win")}`;
  playAgain();
}
