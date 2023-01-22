// Declaring variables for base values.

let timerCounter = 0;
let winCount = 0;
let lossCount = 0;
let questionQuantity = 4;
let gameState = "disabled";

// Declaring choice to later be assigned value by question functions.

let choice1 = "";
let choice2 = "";
let choice3 = "";

//Declaing array of objects to be called later to display values and compare
//user input choices with correct answer.

let myQuestions = [
  {
    question: "What is a valid way to declare a variable?",
    choices: ["variable", "declare", "var"],
    correctAnswer: "var",
  },
  {
    question: "What of the following is a string?",
    choices: ["3", "yes", "||"],
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

// Declare and appending elements. Elements that need to be manipulated by css have
// a set attribute method.

let questionElement = document.createElement("h2");
document.body.appendChild(questionElement);
let timerElement = document.createElement("div");
document.body.appendChild(timerElement);
timerElement.setAttribute("class", "timerElement");
let lossElement = document.createElement("div");
document.body.appendChild(lossElement);
lossElement.setAttribute("class", "current-wins-losses-el");
let winElement = document.createElement("div");
document.body.appendChild(winElement);
winElement.setAttribute("class", "current-wins-losses-el");
let startElement = document.getElementById("start");
let choicesElement = document.createElement("div");
document.body.appendChild(choicesElement);
let higherScoreH1 = document.createElement("h1");
document.body.appendChild(higherScoreH1);
let scoreElement = document.createElement("div");
document.body.appendChild(scoreElement);
scoreElement.setAttribute("class", "scoreElement");

// Click start button event listener and start function which starts the game
// and calls the timer function.

startElement.addEventListener("click", startGame);

function startGame() {
  gameState = "active";
  timer();
}

// Timer function sets a count down and uses conditionals to check the value
// of timer count then decideds if it should clear it or decrement the count
// based on time, amount of questions, gameState. executes next function question
// one if conditionals pass checks.

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
  }
}

// Question functions sets cssText to hide the coding quiz challenge intro
// and start button. displays content by assigning text content value as
// properties of the choices array of objects then loops threw all choices array
// and sets event listeners for each of the fieldset buttons displayed to on
// click execute question handler functions.

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
}

// QuestionHandler function loops threw choices array and removes event listeners
// then compares the value of where the event originated from to the correct answer
// from specified value of array of objects.
// specific things are excuted on result of correct vs incorrect (ex. -10 from timer if incorrect )
// then calls the following question function.

function questionOneHandler(event) {
  choice1 = document.getElementById("choiceOne");
  choice2 = document.getElementById("choiceTwo");
  choice3 = document.getElementById("choiceThree");

  const choices = [choice1, choice2, choice3];

  questionQuantity--;
  for (let choice of choices) {
    choice.removeEventListener("click", questionOneHandler);
  }
  if (event.target.textContent === myQuestions[0].correctAnswer) {
    let messageEl = document.querySelector("#correct-incorrect");
    messageEl.textContent = "Correct!";
    questionTwo();
  } else {
    let messageEl = document.querySelector("#correct-incorrect");
    messageEl.textContent = "Incorrect.";
    timerCounter = timerCounter - 10;
    questionTwo();
  }

  return;
}

// Question functions displays content by assigning text content value as
// properties of the choices array of objects then loops threw all choices array
// and sets event listeners for each of the fieldset buttons displayed to on
// click execute question handler functions.

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
}

// QuestionHandler function loops threw choices array and removes event listeners
// then compares the value of where the event originated from to the correct answer
// from specified value of array of objects.
// specific things are excuted on result of correct vs incorrect (ex. -10 from timer if incorrect )
// then calls the following question function.

function questionTwoHandler(event) {
  choice1 = document.getElementById("choiceOne");
  choice2 = document.getElementById("choiceTwo");
  choice3 = document.getElementById("choiceThree");

  const choices = [choice1, choice2, choice3];
  questionQuantity--;
  for (let choice of choices) {
    choice.removeEventListener("click", questionTwoHandler);
  }
  if (event.target.textContent === myQuestions[1].correctAnswer) {
    let messageEl = document.querySelector("#correct-incorrect");
    messageEl.textContent = "Correct!";
    questionThree();
  } else {
    let messageEl = document.querySelector("#correct-incorrect");
    messageEl.textContent = "Incorrect.";
    timerCounter = timerCounter - 10;
    questionThree();
  }
  return;
}

// Question functions displays content by assigning text content value as
// properties of the choices array of objects then loops threw all choices array
// and sets event listeners for each of the fieldset buttons displayed to on
// click execute question handler functions.

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
}

// QuestionHandler function loops threw choices array and removes event listeners
// then compares the value of where the event originated from to the correct answer
// from specified value of array of objects.
// specific things are excuted on result of correct vs incorrect (ex. -10 from timer if incorrect )
// then calls the following question function.

function questionThreeHandler(event) {
  choice1 = document.getElementById("choiceOne");
  choice2 = document.getElementById("choiceTwo");
  choice3 = document.getElementById("choiceThree");

  const choices = [choice1, choice2, choice3];
  questionQuantity--;
  for (let choice of choices) {
    choice.removeEventListener("click", questionThreeHandler);
  }
  if (event.target.textContent === myQuestions[2].correctAnswer) {
    let messageEl = document.querySelector("#correct-incorrect");
    messageEl.textContent = "Correct!";
    questionFour();
  } else {
    let messageEl = document.querySelector("#correct-incorrect");
    messageEl.textContent = "Incorrect.";
    timerCounter = timerCounter - 10;
    questionFour();
  }
  return;
}

// Question functions displays content by assigning text content value as
// properties of the choices array of objects then loops threw all choices array
// and sets event listeners for each of the fieldset buttons displayed to on
// click execute question handler functions.

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
}

// QuestionHandler function loops threw choices array and removes event listeners
// then compares the value of where the event originated from to the correct answer
// from specified value of array of objects. 
// specific things are excuted on result of correct vs incorrect (ex. -10 from timer if incorrect )
// then calls the make decision function.

function questionFourHandler(event) {
  choice1 = document.getElementById("choiceOne");
  choice2 = document.getElementById("choiceTwo");
  choice3 = document.getElementById("choiceThree");

  const choices = [choice1, choice2, choice3];
  questionQuantity--;
  for (let choice of choices) {
    choice.removeEventListener("click", questionFourHandler);
  }
  if (event.target.textContent === myQuestions[3].correctAnswer) {
    let messageEl = document.querySelector("#correct-incorrect");
    messageEl.textContent = "Correct!";
    questionElement.textContent = "";
    makeDescision();
  } else {
    let messageEl = document.querySelector("#correct-incorrect");
    messageEl.textContent = "Incorrect.";
    timerCounter = timerCounter - 10;
    questionElement.textContent = "";
    makeDescision();
  }
}

// makeDecision function checks if the game has been won or loss, once
// make decision used if conditional to determine outome, 
// executes either handleWin function or handleLoss function. 

function makeDescision() {
  if (questionQuantity === 0 && timerCounter > 0) {
    gameState = "disabled";
    handleWin();
  } else if (questionQuantity > 0 && timerCounter <= 0) {
    gameState = "disabled";
    handleLoss();
  }
}

// handleLoss function is executed if game is detemined as a loss by makeDecision
// function. Then sets currentLoss to the value of the localStorage parsed Integer
// by radix 10 to convert from string, then defines updateLoss as currentLoss + 1
// and sets local storage value to it. 
// then executes renderValues function 

function handleLoss() {
  let currentLoss = parseInt(localStorage.getItem("loss"), 10) || 0;
  let updateLoss = currentLoss + 1;
  localStorage.setItem("loss", updateLoss);
  renderValues();
}

// handleWin function is executed if game is detemined as a win by makeDecision
// function. Then sets currentWin to the value of the localStorage parsed Integer
// by radix 10 to convert from string, then defines updateWin as currentWin + 1
// and sets local storage value to it. 
// then executes higherScore function 

function handleWin() {
  let currentWin = parseInt(localStorage.getItem("win"), 10) || 0;
  let updateWin = currentWin + 1;
  localStorage.setItem("win", updateWin);
  higherScore();
}

// higherScoreFunction gets most current score. then checks if the timer count
// stopped at a higher value than the current score if so it will execute a prompt
// for user to enter in initals. If they enter in value to prompt, input will be
// uppercased and input as well as current timer score will be saved to local storage
// if no input its detected by prompt higher score function will re - execute
// forcing user to enter value to the prompt. 
// after value is set to local storage, renderValues function is executed. 

function higherScore() {
  let currentScore = localStorage.getItem("score");
  if (timerCounter > currentScore) {
    let input = prompt("Please enter in your initals");
    if (input) {
      upperInput = input.toUpperCase();
      localStorage.setItem("name", upperInput);
      localStorage.setItem("score", timerCounter);
      renderValues();
    } else {
      higherScore();
    }
  } else {
    renderValues();
  }
}

// renderValues function sets display properties as their significant values
// and checks gameState then if disabled removes start button event listener
// and executes play Again function. 


function renderValues() {
  higherScoreH1.style.cssText = "display: flex;";
  scoreElement.style.cssText = "display: flex;";
  let messageEl = document.querySelector("#correct-incorrect");
  messageEl.textContent = "";
  lossElement.textContent = ` Losses: ${localStorage.getItem("loss")}`;
  winElement.textContent = `Wins: ${localStorage.getItem("win")}`;
  higherScoreH1.textContent = "-HighScore-";

  scoreElement.textContent = `${localStorage.getItem(
    "name"
  )} / Score: ${localStorage.getItem("score")}`;
  if (gameState === "disabled") {
    startElement.removeEventListener("click", startGame);
  }
  playAgain();
}


// playAgain function reassigns elements text content to nothing to hide
// then sets fieldsets cssText to  display: none. 
// then sets cssText for play again to display and adds event listener for 
// it to be clicked if clicked executes replay function 

function playAgain() {
  questionElement.textContent = "";
  timerElement.textContent = "";
  document.getElementById("fieldset").style.cssText = "display: none;";
  playOnceMore = document.getElementById("playAgain");
  playOnceMore.style.cssText = "display: block;";
  playOnceMore.addEventListener("click", replay);
}


// resetCount function ensures ALL of the data values have been reset to their default
// state prior to ever having played game, then loops threw and removes any left over
// event listners that werent removed for example in the case 2 wrong choices are 
// selected and time runs out since the structure is to clean up the event listeners
// after making choice. if the choice never gets made event listener will stick around
// this ensures they are cleared. 
// then resetCount sets display properties of highscore h1 and score Element to none 
// with cssText. 

function resetCount() {
  timerCounter = 0;
  winCount = 0;
  lossCount = 0;
  questionQuantity = 4;
  choice1 = document.getElementById("choiceOne");
  choice2 = document.getElementById("choiceTwo");
  choice3 = document.getElementById("choiceThree");
  let choices = [choice1, choice2, choice3];
  for (let choice of choices) {
    choice.removeEventListener("click", questionOneHandler);
    choice.removeEventListener("click", questionTwoHandler);
    choice.removeEventListener("click", questionThreeHandler);
    choice.removeEventListener("click", questionFourHandler);
  }
  higherScoreH1.style.cssText = "display: none;";
  scoreElement.style.cssText = "display: none;";
}

// replay function removes event listener from playAgain buttons, 
// hides play again button by setting cssText to display none. 
// then executes resetCount function AND start game function after resetCount function. 

function replay() {
  playOnceMore.removeEventListener("click", replay);
  playOnceMore.style.cssText = "display: none;";
  resetCount();
  startGame();
}
