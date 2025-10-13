/**
 * SOURCE CODE VERSION: 1.0
 * FILE/TYPE: JS
 * PROGRAMMER: NELSON CHIDI (NELMATRIX)
 * DATE-TIME CREATED: SEPT 13, 2025; 1:03PM
 * REPOSITORY: https://github.com/NelMatrix743/simple_quiz_web_app.git
 */

import questionLists from "./questions.js";

console.log(questionLists[0]);

// map HTML elements to JS DOM objects
const questionComponent = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextQuestionButton = document.getElementById("nxt-btn");
const scoreNumElement = document.getElementById("score-num");


function displayQuestion(currentQuestionIndex){
  // render question
  let currentQuestion = questionLists[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionComponent.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

  // clear previous answers
  answerButtons.innerHTML = "";

  // render answers
  currentQuestion.answers.forEach(answer => {
    const optionButton = document.createElement("button");
    optionButton.classList.add("btn");
    optionButton.innerHTML = answer.option;
    answerButtons.appendChild(optionButton);
  });
}


function startQuiz(currentQuestionIdx, score){
  nextQuestionButton.style.display = "block";
  nextQuestionButton.innerHTML = "NEXT QUESTION";
  displayQuestion(currentQuestionIdx);
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
}


startQuiz(currentQuestionIndex, currentScore);