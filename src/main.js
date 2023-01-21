let timerCounter = 0;
let winCount = 0;
let lossCount = 0;
let questionQuantity = 4;
let gameState = "disabled";

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

let choice1 = "";
let choice2 = "";
let choice3 = "";

startElement.addEventListener("click", startGame);

function startGame() {
  gameState = "active";
  timer();
}

function timer() {
  if (timerCounter === 0) {
    timerCounter = 30;
    questionQuantity = 4;
    let timerInterval = setInterval(function () {
      timerElement.textContent = `Time Left: ${timerCounter}`;
      if (timerCounter <= 0 || questionQuantity === 0) {
       timerElement.textContent = "";
        clearInterval(timerInterval);
        if (gameState === "active") {
          makeDescision();
        } else {
          gameState = "disabled";
        }
      } else if (timerCounter > 0) {
        timerCounter--;
      }
    }, 1000);
    questionOne();
  } else {
    return;
  }
}

function makeDescision() {
  if (questionQuantity === 0 && timerCounter > 0) {
    gameState = "disabled";
    handleWin();
  } else if (questionQuantity > 0 && timerCounter <= 0) {
    gameState = "disabled";
    handleLoss();
  }
}

function questionOne() {
  document.getElementById("fieldset").style.cssText = "display: block;";
  document.querySelector(".introh1").style.cssText = "display: none;";
  document.querySelector(".introp").style.cssText = "display: none;";
  document.querySelector("#start").style.cssText = "display: none;";

  questionElement.textContent = myQuestions[0].question;
  let choice1Label = document.getElementById("choiceOne");
  let choice2Label = document.getElementById("choiceTwo");
  let choice3Label = document.getElementById("choiceThree");

  choice1Label.textContent = myQuestions[0].choices[0];
  choice2Label.textContent = myQuestions[0].choices[1];
  choice3Label.textContent = myQuestions[0].choices[2];

  choice1 = document.getElementById("choiceOne");
  choice2 = document.getElementById("choiceTwo");
  choice3 = document.getElementById("choiceThree");

  const choices = [choice1, choice2, choice3];
  for (let choice of choices) {
    choice.addEventListener("click", questionOneHandler);
  }

  function questionOneHandler(event) {
    questionQuantity--;
    for (let choice of choices) {
      choice.removeEventListener("click", questionOneHandler);
    }
    if (event.target.textContent === myQuestions[0].correctAnswer) {
      let messageEl = document.querySelector('#correct-incorrect')
      messageEl.textContent = 'Correct!'
      questionTwo();
    } else {
      let messageEl = document.querySelector('#correct-incorrect')
      messageEl.textContent = 'Incorrect.'
      timerCounter = timerCounter - 10;
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

  choice1 = document.getElementById("choiceOne");
  choice2 = document.getElementById("choiceTwo");
  choice3 = document.getElementById("choiceThree");

  const choices = [choice1, choice2, choice3];
  for (let choice of choices) {
    choice.addEventListener("click", questionTwoHandler);
  }

  function questionTwoHandler(event) {
    questionQuantity--;
    for (let choice of choices) {
      choice.removeEventListener("click", questionTwoHandler);
    }
    if (event.target.textContent === myQuestions[1].correctAnswer) {
      let messageEl = document.querySelector('#correct-incorrect')
      messageEl.textContent = 'Correct!'
      questionThree();
    } else {
      let messageEl = document.querySelector('#correct-incorrect')
      messageEl.textContent = 'Incorrect.'
      timerCounter = timerCounter - 10;
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

  choice1 = document.getElementById("choiceOne");
  choice2 = document.getElementById("choiceTwo");
  choice3 = document.getElementById("choiceThree");

  const choices = [choice1, choice2, choice3];
  for (let choice of choices) {
    choice.addEventListener("click", questionThreeHandler);
  }

  function questionThreeHandler(event) {
    questionQuantity--;
    for (let choice of choices) {
      choice.removeEventListener("click", questionThreeHandler);
    }
    if (event.target.textContent === myQuestions[2].correctAnswer) {
      let messageEl = document.querySelector('#correct-incorrect')
      messageEl.textContent = 'Correct!'
      questionFour();
    } else {
      let messageEl = document.querySelector('#correct-incorrect')
      messageEl.textContent = 'Incorrect.'
      timerCounter = timerCounter - 10;
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

  choice1 = document.getElementById("choiceOne");
  choice2 = document.getElementById("choiceTwo");
  choice3 = document.getElementById("choiceThree");

  const choices = [choice1, choice2, choice3];
  for (let choice of choices) {
    choice.addEventListener("click", questionFourHandler);
  }

  function questionFourHandler(event) {
    questionQuantity--;
    for (let choice of choices) {
      choice.removeEventListener("click", questionFourHandler);
    }
    if (event.target.textContent === myQuestions[3].correctAnswer) {
      let messageEl = document.querySelector('#correct-incorrect')
      messageEl.textContent = 'Correct!'
      questionElement.textContent = "";
      makeDescision();
    } else {
      let messageEl = document.querySelector('#correct-incorrect')
      messageEl.textContent = 'Incorrect.'
      timerCounter = timerCounter - 10;
      questionElement.textContent = "";
      makeDescision();
    }
  }
}

function handleLoss() {
  console.log(questionQuantity);
  let currentLoss = parseInt(localStorage.getItem("loss"), 10) || 0;
  let updateLoss = currentLoss + 1;
  localStorage.setItem("loss", updateLoss);
  renderWinsAndLosses();
}

function handleWin() {
  let currentWin = parseInt(localStorage.getItem("win"), 10) || 0;
  let updateWin = currentWin + 1;
  localStorage.setItem("win", updateWin);
  higherScore();
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
  questionElement.textContent = ''
  timerElement.textContent = ''
  document.getElementById("fieldset").style.cssText = "display: none;";
  playOnceMore = document.getElementById("playAgain");
  playOnceMore.style.cssText = "display: block;";
  playOnceMore.addEventListener("click", replay);
}

function replay() {
  playOnceMore.removeEventListener("click", replay);
  playOnceMore.style.cssText = "display: none;";
  resetCount();
  startGame();
}

function resetCount() {
  timerCounter = 0;
  winCount = 0;
  lossCount = 0;
  questionQuantity = 4;
  choices1 = 0;
  choice2 = 0;
  choice3 = 0;
  choice1Label = 0;
  choice2Label = 0;
  choice3Label = 0;
}

function renderWinsAndLosses() {
  let messageEl = document.querySelector('#correct-incorrect')
  messageEl.textContent = ''
  lossElement.textContent = ` Losses: ${localStorage.getItem("loss")}`;
  winElement.textContent = `Wins: ${localStorage.getItem("win")}`;
  scoreElement.textContent = `${localStorage.getItem(
    "name"
  )} / Score: ${localStorage.getItem("score")}`;
  if (gameState === "disabled") {
    console.log("gamestate is currently disabled");
    startElement.removeEventListener("click", startGame);
  }
  playAgain();
}
