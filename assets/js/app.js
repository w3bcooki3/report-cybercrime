let currentQuestion = 0;
let score = 0;
let recommendations = [];

// Show specific screen and hide others
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

// Start the assessment
function startAssessment() {
  currentQuestion = 0;
  score = 0;
  recommendations = [];
  showQuestion(currentQuestion);
  showScreen('question-screen');
}

// Display current question
function showQuestion(questionIndex) {
  const question = questions[questionIndex];
  document.getElementById('question-text').textContent = question.text;
  
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.className = 'option-button';
    button.textContent = option.text;
    button.onclick = () => handleAnswer(option);
    optionsContainer.appendChild(button);
  });
}

// Handle answer selection
function handleAnswer(option) {
  if (option.isGoodPractice) {
    score++;
  } else {
    recommendations.push(option.recommendation);
  }

  showFeedback(option);
}

// Show feedback for the selected answer
function showFeedback(option) {
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackText = document.getElementById('feedback-text');
  const recommendationText = document.getElementById('recommendation-text');
  const examplesTitle = document.getElementById('examples-title');
  const examplesContainer = document.getElementById('examples-container');

  // Set feedback header
  const headerClass = option.isGoodPractice ? 'success' : 'warning';
  document.getElementById('feedback-header').className = `feedback-header ${headerClass}`;
  
  // Set icon
  feedbackIcon.innerHTML = option.isGoodPractice 
    ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'
    : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>';
  
  // Set texts
  feedbackTitle.textContent = option.isGoodPractice ? 'Good Practice!' : 'Room for Improvement';
  feedbackText.textContent = option.feedback;
  recommendationText.textContent = option.recommendation;
  examplesTitle.textContent = option.isGoodPractice ? 'Resources to Learn More:' : 'Real-World Examples:';

  // Set examples
  examplesContainer.innerHTML = '';
  option.examples.forEach(example => {
    const card = document.createElement('div');
    card.className = 'example-card';
    card.innerHTML = `
      <div class="example-card-header">
        <h5 class="example-title">${example.title}</h5>
        <a href="${example.link}" target="_blank" rel="noopener noreferrer" class="example-link">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
      <p class="example-description">${example.description}</p>
      <p class="example-source">Source: ${example.source}</p>
    `;
    examplesContainer.appendChild(card);
  });

  showScreen('feedback-screen');
}

// Continue to next question or show results
function handleContinue() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showResults();
  } else {
    showQuestion(currentQuestion);
    showScreen('question-screen');
  }
}

// Show final results
function showResults() {
  const percentage = Math.round((score / questions.length) * 100);
  const scoreDisplay = document.getElementById('score-display');
  const scoreMessage = document.getElementById('score-message');
  const recommendationsList = document.getElementById('recommendations-list');

  scoreDisplay.textContent = `${percentage}%`;
  
  if (percentage >= 80) {
    scoreMessage.textContent = "Great job! You have good security practices!";
  } else if (percentage >= 50) {
    scoreMessage.textContent = "You're on the right track, but there's room for improvement.";
  } else {
    scoreMessage.textContent = "Your security practices need attention. Let's improve them!";
  }

  // Show unique recommendations
  recommendationsList.innerHTML = '';
  [...new Set(recommendations)].forEach(recommendation => {
    const li = document.createElement('li');
    li.textContent = recommendation;
    recommendationsList.appendChild(li);
  });

  showScreen('results-screen');
}

// Restart assessment
function restartAssessment() {
  currentQuestion = 0;
  score = 0;
  recommendations = [];
  startAssessment();
}

// Initialize welcome screen
showScreen('welcome-screen');