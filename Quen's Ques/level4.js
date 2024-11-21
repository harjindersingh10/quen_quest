let questionIndex = 0;
let points = 0;
let currentLevel = 4;

const levels = {
  4: {
    questions: [
      { question: "What should you do if someone you don't know messages you asking for your address?", options: ["Ignore and delete the message", "Share your address", "Reply politely"], correct: 0 },
      { question: "If someone online is being mean or makes you feel uncomfortable, what’s the best action?", options: ["Tell a trusted adult", "Ignore it", "Message them back"], correct: 0 },
      { question: "Who should you share your passwords with?", options: ["No one", "Your best friend", "Only trusted adults"], correct: 0 }
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

// Redirect to Level 5
function goToNextLevel() {
  window.location.href = 'level5.html';
}

function goToHomePage() {
  window.location.href = 'index.html';
}

