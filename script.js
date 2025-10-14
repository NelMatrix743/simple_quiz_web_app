/**
 * SOURCE CODE VERSION: 1.0
 * FILE/TYPE: JS
 * PROGRAMMER: NELSON CHIDI (NELMATRIX)
 * DATE-TIME CREATED: SEPT 13, 2025; 1:03PM
 * REPOSITORY: https://github.com/NelMatrix743/simple_quiz_web_app.git
 */

import questionLists from "./questions.js";


// map HTML elements to JS DOM objects
const questionComponent = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextQuestionButton = document.getElementById("nxt-btn");
const restartQuizButton = document.getElementById("rst-btn");
const scoreNumElement = document.getElementById("score-num");
const controlButtonContainer = document.getElementById("control-btn-container");


function debugCallBack(){
  window.alert("DEBUGGING...");
}


function selectAnswer(elmnt){
  const selectedButton = elmnt.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if(isCorrect){
    selectedButton.classList.add("correct");
    currentScore++;
    scoreNumElement.innerHTML = currentScore;
    if(currentScore >= 5){
      scoreNumElement.style.color = "green";
    }
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  if(currentQuestionIndex === 0){
    controlButtonContainer.style.display = "flex";
  }
}


function displayQuestionAndScore(currentQuestionIndex, userScore){
  // render question
  let currentQuestion = questionLists[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionComponent.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

  // render score
  scoreNumElement.innerHTML = userScore;

  // clear previous answers
  answerButtons.innerHTML = "";

  // render answers
  currentQuestion.answers.forEach(answer => {
    const optionButton = document.createElement("button");
    optionButton.classList.add("btn");
    optionButton.innerHTML = answer.option;
    optionButton.addEventListener("click", selectAnswer);
    optionButton.dataset.correct = answer.isCorrect;

    answerButtons.appendChild(optionButton);
  });
}


function resetQuiz(){
 // reset all data persistence
  currentQuestionIndex = 0;
  currentScore = 0;
  sessionStorage.setItem("CURRENT_QUESTION", currentQuestionIndex);
  sessionStorage.setItem("CURRENT_SCORE", currentScore);
  sessionStorage.removeItem("QUIZ_IN_PROGRESS");
  startQuiz(currentQuestionIndex, currentScore);
  // hide next question button
  controlButtonContainer.style.display = "none"
  // reload page
  location.reload();
}


function startQuiz(currentQuestionIdx, userScore){
  displayQuestionAndScore(currentQuestionIdx, userScore);
}


// main section

let currentQuestionIndex;
let currentScore;

let progress = sessionStorage.getItem("QUIZ_IN_PROGRESS");

if(!Boolean(progress)){
  sessionStorage.setItem("QUIZ_IN_PROGRESS", "true");
  currentQuestionIndex = 0;
  currentScore = 0;
} else {
  currentQuestionIndex = Number(sessionStorage.getItem("CURRENT_QUESTION"));
  currentScore = Number(sessionStorage.getItem("CURRENT_SCORE"));
  nextQuestionButton.style.display = "block";
}


restartQuizButton.addEventListener("click", resetQuiz);

nextQuestionButton.addEventListener("click", () => {
  if(nextQuestionButton.innerHTML === "FINISH"){
    window.alert("YOUR TOTAL SCORE IS: " + currentScore);
    nextQuestionButton.style.display = "none";
    restartQuizButton.innerHTML = "QUIZ AGAIN";
    return;
  }
  if(currentQuestionIndex === 8){
    nextQuestionButton.innerHTML = "FINISH";
  }
  if(currentQuestionIndex < questionLists.length){
    currentQuestionIndex++;
    sessionStorage.setItem("CURRENT_QUESTION", currentQuestionIndex);
    sessionStorage.setItem("CURRENT_SCORE", currentScore);
    displayQuestionAndScore(currentQuestionIndex, currentScore);
  }
});


// call entry point
startQuiz(currentQuestionIndex, currentScore);