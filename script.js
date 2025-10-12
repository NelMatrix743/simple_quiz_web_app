/**
 * SOURCE CODE VERSION: 1.0
 * FILE/TYPE: JS
 * PROGRAMMER: NELSON CHIDI (NELMATRIX)
 * DATE-TIME CREATED: SEPT 13, 2025; 1:03PM
 * REPOSITORY: https://github.com/NelMatrix743/simple_quiz_web_app.git
 */


// map HTML elements to JS DOM objects
const questionComponent = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextQuestionButton = document.getElementById("nxt-btn");
const scoreNumElement = document.getElementById("score-num");


// implement 10 CS questions
const questionLists =  [
  {
    question: "Which data structure uses the First-In-First-Out (FIFO) principle?",
    answers: [
      { option: "Stack", isCorrect: false },
      { option: "Queue", isCorrect: true },
      { option: "Tree", isCorrect: false },
      { option: "Graph", isCorrect: false }
    ]
  },
  {
    question: "What is the time complexity of binary search on a sorted array?",
    answers: [
      { option: "O(n)", isCorrect: false },
      { option: "O(log n)", isCorrect: true },
      { option: "O(n log n)", isCorrect: false },
      { option: "O(1)", isCorrect: false }
    ]
  },
  {
    question: "Which of the following is not a programming paradigm?",
    answers: [
      { option: "Object-oriented", isCorrect: false },
      { option: "Functional", isCorrect: false },
      { option: "Procedural", isCorrect: false },
      { option: "Hierarchical", isCorrect: true }
    ]
  },
  {
    question: "What does SQL stand for?",
    answers: [
      { option: "Structured Query Language", isCorrect: true },
      { option: "Sequential Query Language", isCorrect: false },
      { option: "Structured Question Language", isCorrect: false },
      { option: "Standard Query Logic", isCorrect: false }
    ]
  },
  {
    question: "In Big O notation, what does O(1) represent?",
    answers: [
      { option: "Constant time", isCorrect: true },
      { option: "Linear time", isCorrect: false },
      { option: "Logarithmic time", isCorrect: false },
      { option: "Quadratic time", isCorrect: false }
    ]
  },
  {
    question: "Which of the following best describes a compiler?",
    answers: [
      { option: "Translates high-level code to machine code", isCorrect: true },
      { option: "Executes code line by line", isCorrect: false },
      { option: "Interprets HTML", isCorrect: false },
      { option: "Manages system memory", isCorrect: false }
    ]
  },
  {
    question: "What does HTTP stand for?",
    answers: [
      { option: "HyperText Transfer Protocol", isCorrect: true },
      { option: "Hyper Transfer Text Protocol", isCorrect: false },
      { option: "HighText Transmission Protocol", isCorrect: false },
      { option: "Hyperlink Transfer Program", isCorrect: false }
    ]
  },
  {
    question: "Which sorting algorithm has the best average time complexity?",
    answers: [
      { option: "Bubble Sort", isCorrect: false },
      { option: "Quick Sort", isCorrect: true },
      { option: "Selection Sort", isCorrect: false },
      { option: "Insertion Sort", isCorrect: false }
    ]
  },
  {
    question: "What type of language is JavaScript?",
    answers: [
      { option: "Compiled language", isCorrect: false },
      { option: "Markup language", isCorrect: false },
      { option: "Interpreted language", isCorrect: true },
      { option: "Assembly language", isCorrect: false }
    ]
  },
  {
    question: "Which logic gate outputs true only if both inputs are true?",
    answers: [
      { option: "OR gate", isCorrect: false },
      { option: "AND gate", isCorrect: true },
      { option: "XOR gate", isCorrect: false },
      { option: "NAND gate", isCorrect: false }
    ]
  }
];


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

let currentQuestionIndex = 0;
let currentScore = 0;

// let progress = sessionStorage.getItem("QUIZ_IN_PROGRESS");

// if(!Boolean(progress)){
//   sessionStorage.setItem("QUIZ_IN_PROGRESS", !Boolean(progress));
//   currentQuestionIndex = 0;
//   currentScore = 0;
// } else {
//   currentQuestionIndex = sessionStorage.getItem("CURRENT_QUESTION");
//   currentScore = sessionStorage.getItem("CURRENT_SCORE");
// }


startQuiz(currentQuestionIndex, currentScore);