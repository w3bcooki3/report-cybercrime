document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Quiz state
  let quizStarted = false;
  let currentQuestionIndex = 0;
  let answers = Array(quizQuestions.length).fill(null);
  let quizCompleted = false;
  
  // DOM elements
  const mainContent = document.getElementById('mainContent');
  const homeButton = document.getElementById('homeButton');
  
  // Templates
  const quizIntroTemplate = document.getElementById('quizIntroTemplate');
  const quizQuestionTemplate = document.getElementById('quizQuestionTemplate');
  const quizResultsTemplate = document.getElementById('quizResultsTemplate');
  
  // Event listeners
  homeButton.addEventListener('click', resetQuiz);
  
  // Initialize the quiz
  showQuizIntro();
  
  // Functions
  function showQuizIntro() {
    const introClone = quizIntroTemplate.content.cloneNode(true);
    mainContent.innerHTML = '';
    mainContent.appendChild(introClone);
    
    // Add event listener to start button
    document.getElementById('startQuizButton').addEventListener('click', startQuiz);
    
    // Hide home button
    homeButton.style.display = 'none';
    
    // Reinitialize Lucide icons for the new content
    lucide.createIcons();
  }
  
  function startQuiz() {
    quizStarted = true;
    currentQuestionIndex = 0;
    answers = Array(quizQuestions.length).fill(null);
    quizCompleted = false;
    
    // Show home button
    homeButton.style.display = 'flex';
    
    // Show first question
    showQuestion(currentQuestionIndex);
  }
  
  function showQuestion(index) {
    const questionClone = quizQuestionTemplate.content.cloneNode(true);
    mainContent.innerHTML = '';
    mainContent.appendChild(questionClone);
    
    // Update question content
    const question = quizQuestions[index];
    document.getElementById('currentQuestion').textContent = index + 1;
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    document.getElementById('progressPercentage').textContent = Math.round(((index + 1) / quizQuestions.length) * 100);
    document.getElementById('progressBar').style.width = `${((index + 1) / quizQuestions.length) * 100}%`;
    document.getElementById('questionText').textContent = question.question;
    
    // Create option buttons
    const optionsContainer = document.getElementById('optionsContainer');
    question.options.forEach((option, optionIndex) => {
      const optionButton = document.createElement('button');
      optionButton.className = 'option-button';
      optionButton.dataset.index = optionIndex;
      
      const optionContent = `
        <div class="option-indicator"></div>
        <span class="option-text">${option}</span>
      `;
      
      optionButton.innerHTML = optionContent;
      optionButton.addEventListener('click', () => handleOptionClick(optionIndex));
      optionsContainer.appendChild(optionButton);
    });
    
    // Set up continue button
    const continueButton = document.getElementById('continueButton');
    continueButton.addEventListener('click', handleContinue);
    
    // Set up reset button
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', handleReset);
    
    // Reinitialize Lucide icons for the new content
    lucide.createIcons();
  }
  
  function handleOptionClick(optionIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-button');
    const feedbackContainer = document.getElementById('feedbackContainer');
    const continueButton = document.getElementById('continueButton');
    const resetButton = document.getElementById('resetButton');
    
    // Clear previous selections
    optionButtons.forEach(button => {
      button.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Mark selected option
    const selectedButton = optionButtons[optionIndex];
    selectedButton.classList.add('selected');
    
    if (optionIndex === question.correctAnswerIndex) {
      selectedButton.classList.add('correct');
      selectedButton.querySelector('.option-indicator').innerHTML = '✓';
    } else {
      selectedButton.classList.add('incorrect');
      selectedButton.querySelector('.option-indicator').innerHTML = '✗';
    }
    
    // Show feedback
    feedbackContainer.innerHTML = '';
    feedbackContainer.style.display = 'block';
    
    if (optionIndex === question.correctAnswerIndex) {
      feedbackContainer.classList.add('correct');
      feedbackContainer.classList.remove('incorrect');
      
      feedbackContainer.innerHTML = `
        <h4 class="feedback-title correct">Good practice!</h4>
        <p class="feedback-text">${question.explanation}</p>
      `;
    } else {
      feedbackContainer.classList.add('incorrect');
      feedbackContainer.classList.remove('correct');
      
      let feedbackHTML = `
        <h4 class="feedback-title incorrect">Security risk detected</h4>
        <p class="feedback-text">${question.explanation}</p>
      `;
      
      if (question.resources) {
        feedbackHTML += `
          <p class="resources-title">Learn more:</p>
          <div class="resources-grid">
        `;
        
        question.resources.forEach(resource => {
          const hostname = new URL(resource.url).hostname.replace('www.', '');
          
          feedbackHTML += `
            <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-card">
              <div class="resource-header">
                <h5 class="resource-title">${resource.title}</h5>
                <i data-lucide="external-link" class="icon-small resource-icon"></i>
              </div>
              <p class="resource-description">
                Learn about best practices and strategies to improve your cybersecurity in this area.
              </p>
              <p class="resource-source">Source: ${ hostname}</p>
            </a>
          `;
        });
        
        feedbackHTML += `</div>`;
      }
      
      feedbackContainer.innerHTML = feedbackHTML;
    }
    
    // Enable continue button
    continueButton.classList.remove('disabled');
    
    // Show reset button
    resetButton.style.display = 'flex';
    
    // Store answer
    answers[currentQuestionIndex] = optionIndex;
    
    // Reinitialize Lucide icons for the new content
    lucide.createIcons();
  }
  
  function handleContinue() {
    if (answers[currentQuestionIndex] === null) return;
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);
    } else {
      completeQuiz();
    }
  }
  
  function handleReset() {
    // Reset the current question
    answers[currentQuestionIndex] = null;
    showQuestion(currentQuestionIndex);
  }
  
  function completeQuiz() {
    quizCompleted = true;
    
    const resultsClone = quizResultsTemplate.content.cloneNode(true);
    mainContent.innerHTML = '';
    mainContent.appendChild(resultsClone);
    
    // Calculate score
    const score = calculateScore();
    
    // Update score display
    document.getElementById('scoreValue').textContent = `${score}%`;
    
    // Animate score circle
    const scoreCircle = document.getElementById('scoreCircle');
    scoreCircle.style.strokeDashoffset = 283 - (283 * score / 100);
    
    // Set score category
    const scoreCategory = document.getElementById('scoreCategory');
    const scoreMessage = document.getElementById('scoreMessage');
    
    if (score >= 90) {
      scoreCategory.innerHTML = `<i data-lucide="shield" class="icon-small"></i><span>Excellent</span>`;
      scoreCategory.className = 'score-category excellent';
      scoreMessage.textContent = "Excellent job! You demonstrate strong cybersecurity awareness and practices.";
    } else if (score >= 70) {
      scoreCategory.innerHTML = `<i data-lucide="check-circle" class="icon-small"></i><span>Good</span>`;
      scoreCategory.className = 'score-category good';
      scoreMessage.textContent = "Good work! You have solid cybersecurity habits, but there's still room for improvement.";
    } else if (score >= 50) {
      scoreCategory.innerHTML = `<i data-lucide="alert-triangle" class="icon-small"></i><span>Fair</span>`;
      scoreCategory.className = 'score-category fair';
      scoreMessage.textContent = "You have some good security practices, but several areas need attention to better protect yourself.";
    } else {
      scoreCategory.innerHTML = `<i data-lucide="alert-triangle" class="icon-small"></i><span>Needs Improvement</span>`;
      scoreCategory.className = 'score-category needs-improvement';
      scoreMessage.textContent = "Your online security needs significant improvement. Focus on implementing the recommendations below.";
    }
    
    // Show bad habits
    const badHabits = getBadHabits();
    const badHabitsContainer = document.getElementById('badHabitsContainer');
    
    if (badHabits.length > 0) {
      let badHabitsHTML = `
        <h3><i data-lucide="alert-triangle" class="icon-small amber"></i>Areas for Improvement</h3>
        <div class="bad-habits-list">
      `;
      
      badHabits.forEach(habit => {
        let habitHTML = `
          <div class="bad-habit-card">
            <h4>${habit.question}</h4>
            <div class="response-container">
              <p class="response-label">Your response:</p>
              <p class="response-text">${habit.selectedAnswer}</p>
            </div>
            <div class="recommendation-container">
              <p class="recommendation-label">Recommended practice:</p>
              <p class="recommendation-text">${habit.correctAnswer}</p>
            </div>
            <p class="explanation-text">${habit.explanation}</p>
        `;
        
        if (habit.resources) {
          habitHTML += `
            <div class="resources-container">
              <p class="resources-title">Learn more:</p>
              <div class="resources-grid">
          `;
          
          habit.resources.forEach(resource => {
            const hostname = new URL(resource.url).hostname.replace('www.', '');
            
            habitHTML += `
              <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-card">
                <div class="resource-header">
                  <h5 class="resource-title">${resource.title}</h5>
                  <i data-lucide="external-link" class="icon-small resource-icon"></i>
                </div>
                <p class="resource-description">
                  Learn about best practices and strategies to improve your cybersecurity in this area.
                </p>
                <p class="resource-source">Source: ${hostname}</p>
              </a>
            `;
          });
          
          habitHTML += `</div></div>`;
        }
        
        habitHTML += `</div>`;
        badHabitsHTML += habitHTML;
      });
      
      badHabitsHTML += `</div>`;
      badHabitsContainer.innerHTML = badHabitsHTML;
    } else {
      badHabitsContainer.innerHTML = `
        <div class="next-steps" style="background-color: var(--green-100); border-color: var(--green-300);">
          <h3><i data-lucide="check-circle" class="icon-small green"></i>Perfect Score!</h3>
          <p>Congratulations! You've demonstrated excellent cybersecurity practices across all areas.</p>
          <p>Continue maintaining these good habits and stay informed about emerging threats.</p>
        </div>
      `;
    }
    
    // Set up retake button
    document.getElementById('retakeButton').addEventListener('click', resetQuiz);
    
    // Set up save button
    document.getElementById('saveButton').addEventListener('click', () => window.print());
    
    // Reinitialize Lucide icons for the new content
    lucide.createIcons();
  }
  
  function calculateScore() {
    const correctAnswers = answers.filter((answer, index) => {
      return answer === quizQuestions[index].correctAnswerIndex;
    }).length;
    
    return Math.round((correctAnswers / quizQuestions.length) * 100);
  }
  
  function getBadHabits() {
    return answers.map((answer, index) => {
      const question = quizQuestions[index];
      if (answer !== null && answer !== question.correctAnswerIndex) {
        return {
          question: question.question,
          selectedAnswer: question.options[answer],
          correctAnswer: question.options[question.correctAnswerIndex],
          explanation: question.explanation,
          resources: question.resources
        };
      }
      return null;
    }).filter(item => item !== null);
  }
  
  function resetQuiz() {
    quizStarted = false;
    currentQuestionIndex = 0;
    answers = Array(quizQuestions.length).fill(null);
    quizCompleted = false;
    
    showQuizIntro();
  }
});