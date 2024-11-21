let questionIndex = 0;
let points = 0;
let currentLevel = 1;

const levels = {
  1: {
    video: 'v1-s1-q.mp4',
    questions: [
      { question: "What should Arjun do after the stranger offers him candy?", options: ["Say no and walk away", "Take the candy", "Ask for more candy"], correct: 0 },
      // other questions for level 1
    ]
  },
  2: {
    video: 'v2-s2-q.mp4',
    questions: [
      // questions for level 2
    ]
  },
  3: {
    video: 'v3-s3-q.mp4',
    questions: [
      // questions for level 3
    ]
  },
  4: {
    video: 'level4_scenario.mp4',
    questions: [
      { question: "What should you do if someone you don't know messages you asking for your address?", options: ["Ignore and delete the message", "Share your address", "Reply politely"], correct: 0 },
      // other questions for level 4
    ]
  },
  5: {
    video: 'level5_scenario.mp4',
    questions: [
      // questions for level 5
    ]
  },
  6: {
    video: 'level6_scenario.mp4',
    questions: [
      // questions for level 6
    ]
  },
  7: {
    video: 'level7_scenario.mp4',
    questions: [
      // questions for level 7
    ]
  },
  8: {
    video: 'level8_scenario.mp4',
    questions: [
      // questions for level 8
    ]
  }
};

function startQuiz() {
  quizSection.classList.remove('hidden');
  startQuizButton.classList.add('hidden');
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

// Add navigation to next level after completion
function showLevelComplete() {
  quizSection.classList.add('hidden');
  levelCompleteSection.classList.remove('hidden');
  setTimeout(() => {
    if (currentLevel < 8) {
      currentLevel++;
      window.location.href = `level${currentLevel}.html`;
    } else {
      window.location.href = 'index.html';
    }
  }, 3000);
}

















