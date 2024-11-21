let questionIndex = 0;
let points = 0;
let currentLevel = 3;

const levels = {
  3: {
    questions: [
      { question: "If you get separated from your family in a crowded place, what should you do?", options: ["Look for a security guard", "Run around and shout", "Stay where you are"], correct: 0 },
      { question: "If you see someone who looks lost or in trouble, what's the best way to help?", options: ["Tell an adult nearby", "Ignore them", "Try to help them yourself"], correct: 0 },
      { question: "In an emergency, what should you always remember to do?", options: ["Stay calm and ask for help", "Panic and run away", "Ignore it and keep going"], correct: 0 }
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
}

// Redirect to Level 4
function goToNextLevel() {
  window.location.href = 'level4.html';
}

function goToHomePage() {
  window.location.href = 'index.html';
}


