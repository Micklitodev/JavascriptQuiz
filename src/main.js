let timerCounter = 0;
let winCount = 0;
let lossCount = 0;
let questionQuantity = 4;
let gameState = ''

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
  {
    question: "Which of these are a reusable peice of code?",
    choices: ["function", "condtional", "assignment operator"],
    correctAnswer: "function",
  },
  {
    question: "Which of these is a conditional delcaration",
    choices: ["choose", "if", "condition"],
    correctAnswer: "if",
  },
];

let questionElement = document.createElement("h2");
document.body.appendChild(questionElement);
let timerElement = document.createElement("div");
document.body.appendChild(timerElement);
let lossElement = document.createElement("div");
document.body.appendChild(lossElement);
let winElement = document.createElement("div");
document.body.appendChild(winElement);
let startElement = document.getElementById("start");
let choicesElement = document.createElement("div");
document.body.appendChild(choicesElement);
let scoreElement = document.createElement("div");
document.body.appendChild(scoreElement);

startElement.addEventListener("click", startGame);

function startGame() {
  gameState = 'active'
  timer();
}

function timer() {
  if (timerCounter === 0) {
    timerCounter = 30;
    questionQuantity = 4;
    let timerInterval = setInterval(function () {
      timerElement.textContent = `TIME LEFT: ${timerCounter}`;
      if (timerCounter <= 0 || questionQuantity === 0) {
        timerElement.textContent = ''
        clearInterval(timerInterval);
        if(gameState === 'active') {
        makeDescision();} else {gameState = 'disabled'}
      }
        else if (timerCounter > 0) {
        timerCounter--;
        document.getElementById("fieldset").style.cssText = "display: block;";
        document.querySelector(".introh1").style.cssText = "display: none;";
        document.querySelector(".introp").style.cssText = "display: none;";
        document.querySelector("#start").style.cssText = "display: none;";
      }
    }, 1000);
    questionOne();
  } else {
    return;
  }
}

function makeDescision() {
  if (questionQuantity === 0 && timerCounter > 0) {
    gameState = 'disabled';
    handleWin();
    console.log('youwin')
  } else if (questionQuantity > 0 && timerCounter <= 0) {
    gameState = 'disabled';
    handleLoss();
    console.log('youlose')
  } 
}

function questionOne() {
  questionElement.textContent = myQuestions[0].question;
  let choice1Label = document.getElementById("choiceOne");
  let choice2Label = document.getElementById("choiceTwo");
  let choice3Label = document.getElementById("choiceThree");

  choice1Label.textContent = myQuestions[0].choices[0];
  choice2Label.textContent = myQuestions[0].choices[1];
  choice3Label.textContent = myQuestions[0].choices[2];

  let choice1 = document.getElementById("choiceOne");
  let choice2 = document.getElementById("choiceTwo");
  let choice3 = document.getElementById("choiceThree");

  choice1.addEventListener("click", questionOneHandler);
  choice2.addEventListener("click", questionOneHandler);
  choice3.addEventListener("click", questionOneHandler);

  function questionOneHandler(event) {
    questionQuantity--;
    choice1.removeEventListener("click", questionOneHandler);
    choice2.removeEventListener("click", questionOneHandler);
    choice3.removeEventListener("click", questionOneHandler);
    if (event.target.textContent === myQuestions[0].correctAnswer) {
      questionTwo();
    } else { timerCounter = timerCounter - 10;
      questionTwo();

    }

    return;
  }
}

function questionTwo() {
  questionElement.textContent = myQuestions[1].question;
  let choice1Label = document.getElementById("choiceOne");
  let choice2Label = document.getElementById("choiceTwo");
  let choice3Label = document.getElementById("choiceThree");

  choice1Label.textContent = myQuestions[1].choices[0];
  choice2Label.textContent = myQuestions[1].choices[1];
  choice3Label.textContent = myQuestions[1].choices[2];

  let choice1 = document.getElementById("choiceOne");
  let choice2 = document.getElementById("choiceTwo");
  let choice3 = document.getElementById("choiceThree");

  choice1.addEventListener("click", questionTwoHandler);
  choice2.addEventListener("click", questionTwoHandler);
  choice3.addEventListener("click", questionTwoHandler);

  function questionTwoHandler(event) {
    questionQuantity--;
    choice1.removeEventListener("click", questionTwoHandler);
    choice2.removeEventListener("click", questionTwoHandler);
    choice3.removeEventListener("click", questionTwoHandler);
    if (event.target.textContent === myQuestions[1].correctAnswer) {
      questionThree();
    } else { timerCounter = timerCounter - 10;
      questionThree();
    }
    return;
  }
}

function questionThree() {

  questionElement.textContent = myQuestions[2].question;
  let choice1Label = document.getElementById("choiceOne");
  let choice2Label = document.getElementById("choiceTwo");
  let choice3Label = document.getElementById("choiceThree");

  choice1Label.textContent = myQuestions[2].choices[0];
  choice2Label.textContent = myQuestions[2].choices[1];
  choice3Label.textContent = myQuestions[2].choices[2];

  let choice1 = document.getElementById("choiceOne");
  let choice2 = document.getElementById("choiceTwo");
  let choice3 = document.getElementById("choiceThree");

  choice1.addEventListener("click", questionThreeHandler);
  choice2.addEventListener("click", questionThreeHandler);
  choice3.addEventListener("click", questionThreeHandler);

  function questionThreeHandler(event) {
    questionQuantity--;
    choice1.removeEventListener("click", questionThreeHandler);
    choice2.removeEventListener("click", questionThreeHandler);
    choice3.removeEventListener("click", questionThreeHandler);
    if (event.target.textContent === myQuestions[2].correctAnswer) {
      questionFour();
    } else { timerCounter = timerCounter - 10;
      questionFour();
    }
    return;
  }
}

function questionFour() {
  questionElement.textContent = myQuestions[3].question;
  let choice1Label = document.getElementById("choiceOne");
  let choice2Label = document.getElementById("choiceTwo");
  let choice3Label = document.getElementById("choiceThree");

  choice1Label.textContent = myQuestions[3].choices[0];
  choice2Label.textContent = myQuestions[3].choices[1];
  choice3Label.textContent = myQuestions[3].choices[2];

  let choice1 = document.getElementById("choiceOne");
  let choice2 = document.getElementById("choiceTwo");
  let choice3 = document.getElementById("choiceThree");

  choice1.addEventListener("click", questionFourHandler);
  choice2.addEventListener("click", questionFourHandler);
  choice3.addEventListener("click", questionFourHandler);

  function questionFourHandler(event) {
    questionQuantity--;
    choice1.removeEventListener("click", questionFourHandler);
    choice2.removeEventListener("click", questionFourHandler);
    choice3.removeEventListener("click", questionFourHandler);
    if (event.target.textContent === myQuestions[3].correctAnswer) {
      makeDescision();
    } else { timerCounter = timerCounter - 10;
      makeDescision();
    }
  }
}

function handleLoss() {
  lossCount++;
  localStorage.setItem("loss", lossCount);
  renderWinsAndLosses();
}

function handleWin() {
  winCount++;
  console.log(winCount)
  higherScore();
  localStorage.setItem("win", winCount);
}

function higherScore() {
  let currentScore = localStorage.getItem("score");
  if (timerCounter > currentScore) {
    let input = prompt("Please enter in your initals");
    upperInput = input.toUpperCase();
    localStorage.setItem("name", upperInput);
    localStorage.setItem("score", timerCounter);
    renderWinsAndLosses();
  } else {
    renderWinsAndLosses();
  }
}

function playAgain() {
  document.getElementById("fieldset").style.cssText = "display: none;";
  playOnceMore = document.getElementById("playAgain");
  playOnceMore.style.cssText = "display: block;";
  playOnceMore.addEventListener("click", replay);
}

function replay() {
  playOnceMore.removeEventListener('click', replay);
  playOnceMore.style.cssText = 'display: none;';
  timerCounter = 0;
  questionQuantity = 0;
  startGame();
}

function renderWinsAndLosses() {
  lossElement.textContent = ` Losses: ${localStorage.getItem("loss")}`;
  winElement.textContent = `Wins: ${localStorage.getItem("win")}`;
  scoreElement.textContent = `${localStorage.getItem(
    "name"
  )} / Score: ${localStorage.getItem("score")}`;
  playAgain();
}
