// JavaScript to control the quiz flow on Level 2 page

let questionIndex = 0;
let points = 0;
let currentLevel = 2;

const levels = {
  2: {
    questions: [
      { question: "What should you do if a friend dares you to do something risky?", options: ["Say no firmly", "Do it to impress", "Think about it later"], correct: 0 },
      { question: "If someone you don’t know sends you a message online, what’s the safest choice?", options: ["Reply politely", "Ignore and tell an adult", "Ask them questions"], correct: 1 },
      { question: "Why is it okay to say no when something doesn’t feel right?", options: ["Because others will think it’s cool", "To stay safe", "To show you’re brave"], correct: 1 }
    ]
  }
};

const video = document.getElementById('scenarioVideo');
const startQuizButton = document.getElementById('startQuizButton');
const quizSection = document.getElementById('quizSection');
const questionText = document.getElementById('questionText');
const pointsText = document.getElementById('points');
const levelCompleteSection = document.getElementById('levelCompleteSection');
const optionsContainer = document.getElementById('options');

// Show "Start Quiz" button after video ends
video.onended = () => {
  startQuizButton.classList.remove('hidden');
};

// Start the quiz, hide video, and load the first question
function startQuiz() {
  document.querySelector('.video-container').classList.add('hidden');
  startQuizButton.classList.add('hidden');
  quizSection.classList.remove('hidden');
  loadQuestion();
}

function loadQuestion() {
  const question = levels[currentLevel].questions[questionIndex];
  questionText.innerText = question.question;
  optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const optionButton = document.createElement('button');
    optionButton.innerText = option;
    optionButton.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(optionButton);
  });
}

function checkAnswer(selected) {
  const correct = levels[currentLevel].questions[questionIndex].correct;
  if (selected === correct) {
    points++;
    pointsText.innerText = "Points: " + points;
    questionIndex++;
    if (questionIndex < levels[currentLevel].questions.length) {
      loadQuestion();
    } else {
      showLevelComplete();
    }
  } else {
    questionText.innerText = "Incorrect. Try again!";
  }
}

function showLevelComplete() {
  quizSection.classList.add('hidden');
  levelCompleteSection.classList.remove('hidden');
  setTimeout(goToNextLevel, 3000); // Redirect to Level 3 after 3 seconds
}

// Redirect to Level 3
function goToNextLevel() {
  window.location.href = 'level3.html';
}

function goToHomePage() {
  window.location.href = 'index.html';
}

