let questionIndex = 0;
let points = 0;
let currentLevel = 1;

const levels = {
  1: {
    questions: [
      { question: "What should Arjun do after the stranger offers him candy?", options: ["Say no and walk away", "Take the candy", "Ask for more candy"], correct: 0 },
      { question: "What is the safe action to take when a stranger calls you?", options: ["Ignore and leave", "Walk towards them", "Respond politely"], correct: 0 },
      { question: "If you feel uncomfortable around someone, what should you do?", options: ["Stay near them", "Find an adult or safe place", "Give them your information"], correct: 1 }
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

// Display "Start Quiz" button after video ends
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
  setTimeout(goToNextLevel, 3000); // Redirect to Level 2 after 3 seconds
}

// Redirect to Level 2
function goToNextLevel() {
  window.location.href = 'level2.html';
}

function goToHomePage() {
  window.location.href = 'index.html';
}



