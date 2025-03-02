document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Quiz state
  let quizStarted = false;
  let currentQuestionIndex = 0;
  let answers = Array(cybersecQuizQuestions.length).fill(null);
  let quizCompleted = false;
  
  // DOM elements
  const mainContent = document.getElementById('cybersec-mainContent');
  
  // Templates
  const quizIntroTemplate = document.getElementById('cybersec-quizIntroTemplate');
  const quizQuestionTemplate = document.getElementById('cybersec-quizQuestionTemplate');
  const quizResultsTemplate = document.getElementById('cybersec-quizResultsTemplate');
  
 
  
  // Initialize the quiz
  showQuizIntro();
  
  // Functions
  function showQuizIntro() {
    const introClone = quizIntroTemplate.content.cloneNode(true);
    mainContent.innerHTML = '';
    mainContent.appendChild(introClone);
    
    // Add event listener to start button
    document.getElementById('cybersec-startQuizButton').addEventListener('click', startQuiz);
    
    
    
    // Reinitialize Lucide icons for the new content
    lucide.createIcons();
  }
  
  function startQuiz() {
    quizStarted = true;
    currentQuestionIndex = 0;
    answers = Array(cybersecQuizQuestions.length).fill(null);
    quizCompleted = false;
    
   
    
    // Show first question
    showQuestion(currentQuestionIndex);
  }
  
  function showQuestion(index) {
    const questionClone = quizQuestionTemplate.content.cloneNode(true);
    mainContent.innerHTML = '';
    mainContent.appendChild(questionClone);
    
    // Update question content
    const question = cybersecQuizQuestions[index];
    document.getElementById('cybersec-currentQuestion').textContent = index + 1;
    document.getElementById('cybersec-totalQuestions').textContent = cybersecQuizQuestions.length;
    document.getElementById('cybersec-progressPercentage').textContent = Math.round(((index + 1) / cybersecQuizQuestions.length) * 100);
    document.getElementById('cybersec-progressBar').style.width = `${((index + 1) / cybersecQuizQuestions.length) * 100}%`;
    document.getElementById('cybersec-questionText').textContent = question.question;
    
    // Create option buttons
    const optionsContainer = document.getElementById('cybersec-optionsContainer');
    question.options.forEach((option, optionIndex) => {
      const optionButton = document.createElement('button');
      optionButton.className = 'cybersec-option-button';
      optionButton.dataset.index = optionIndex;
      
      const optionContent = `
        <div class="cybersec-option-indicator"></div>
        <span class="cybersec-option-text">${option}</span>
      `;
      
      optionButton.innerHTML = optionContent;
      optionButton.addEventListener('click', () => handleOptionClick(optionIndex));
      optionsContainer.appendChild(optionButton);
    });
    
    // Set up continue button
    const continueButton = document.getElementById('cybersec-continueButton');
    continueButton.addEventListener('click', handleContinue);
    
    // Set up reset button
    const resetButton = document.getElementById('cybersec-resetButton');
    resetButton.addEventListener('click', handleReset);
    
    // Reinitialize Lucide icons for the new content
    lucide.createIcons();
  }
  
  function handleOptionClick(optionIndex) {
    const question = cybersecQuizQuestions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.cybersec-option-button');
    const feedbackContainer = document.getElementById('cybersec-feedbackContainer');
    const continueButton = document.getElementById('cybersec-continueButton');
    const resetButton = document.getElementById('cybersec-resetButton');
    
    // Clear previous selections
    optionButtons.forEach(button => {
      button.classList.remove('cybersec-selected', 'cybersec-correct', 'cybersec-incorrect');
    });
    
    // Mark selected option
    const selectedButton = optionButtons[optionIndex];
    selectedButton.classList.add('cybersec-selected');
    
    if (optionIndex === question.correctAnswerIndex) {
      selectedButton.classList.add('cybersec-correct');
      selectedButton.querySelector('.cybersec-option-indicator').innerHTML = '✓';
    } else {
      selectedButton.classList.add('cybersec-incorrect');
      selectedButton.querySelector('.cybersec-option-indicator').innerHTML = '✗';
    }
    
    // Show feedback
    feedbackContainer.innerHTML = '';
    feedbackContainer.style.display = 'block';
    
    if (optionIndex === question.correctAnswerIndex) {
      feedbackContainer.classList.add('cybersec-correct');
      feedbackContainer.classList.remove('cybersec-incorrect');
      
      feedbackContainer.innerHTML = `
        <h4 class="cybersec-feedback-title cybersec-correct">Good practice!</h4>
        <p class="cybersec-feedback-text">${question.explanation}</p>
      `;
    } else {
      feedbackContainer.classList.add('cybersec-incorrect');
      feedbackContainer.classList.remove('cybersec-correct');
      
      let feedbackHTML = `
        <h4 class="cybersec-feedback-title cybersec-incorrect">Security risk detected</h4>
        <p class="cybersec-feedback-text">${question.explanation}</p>
      `;
      
      if (question.resources) {
        feedbackHTML += `
          <p class="cybersec-resources-title">Learn more:</p>
          <div class="cybersec-resources-grid">
        `;
        
        question.resources.forEach(resource => {
          const hostname = new URL(resource.url).hostname.replace('www.', '');
          
          feedbackHTML += `
            <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="cybersec-resource-card">
              <div class="cybersec-resource-header">
                <h5 class="cybersec-resource-title">${resource.title}</h5>
                <i data-lucide="external-link" class="cybersec-icon-small cybersec-resource-icon"></i>
              </div>
              <p class="cybersec-resource-description">
                Learn about best practices and strategies to improve your cybersecurity in this area.
              </p>
              <p class="cybersec-resource-source"><b style="color: black">Source:</b> ${hostname}</p>
            </a>
          `;
        });
        
        feedbackHTML += `</div>`;
      }
      
      feedbackContainer.innerHTML = feedbackHTML;
    }
    
    // Enable continue button
    continueButton.classList.remove('cybersec-disabled');
    
    // Show reset button
    resetButton.style.display = 'flex';
    
    // Store answer
    answers[currentQuestionIndex] = optionIndex;
    
    // Reinitialize Lucide icons for the new content
    lucide.createIcons();
  }
  
  function handleContinue() {
    if (answers[currentQuestionIndex] === null) return;
    
    if (currentQuestionIndex < cybersecQuizQuestions.length - 1) {
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
    document.getElementById('cybersec-scoreValue').textContent = `${score}%`;
    
    // Animate score circle
    const scoreCircle = document.getElementById('cybersec-scoreCircle');
    scoreCircle.style.strokeDashoffset = 283 - (283 * score / 100);
    
    // Set score category
    const scoreCategory = document.getElementById('cybersec-scoreCategory');
    const scoreMessage = document.getElementById('cybersec-scoreMessage');
    
    if (score >= 90) {
      scoreCategory.innerHTML = `<i data-lucide="shield" class="cybersec-icon-small"></i><span>Excellent</span>`;
      scoreCategory.className = 'cybersec-score-category cybersec-excellent';
      scoreMessage.textContent = "Excellent job! You demonstrate strong cybersecurity awareness and practices.";
    } else if (score >= 70) {
      scoreCategory.innerHTML = `<i data-lucide="check-circle" class="cybersec-icon-small"></i><span>Good</span>`;
      scoreCategory.className = 'cybersec-score-category cybersec-good';
      scoreMessage.textContent = "Good work! You have solid cybersecurity habits, but there's still room for improvement.";
    } else if (score >= 50) {
      scoreCategory.innerHTML = `<i data-lucide="alert-triangle" class="cybersec-icon-small"></i><span>Fair</span>`;
      scoreCategory.className = 'cybersec-score-category cybersec-fair';
      scoreMessage.textContent = "You have some good security practices, but several areas need attention to better protect yourself.";
    } else {
      scoreCategory.innerHTML = `<i data-lucide="alert-triangle" class="cybersec-icon-small"></i><span>Needs Improvement</span>`;
      scoreCategory.className = 'cybersec-score-category cybersec-needs-improvement';
      scoreMessage.textContent = "Your online security needs significant improvement. Focus on implementing the recommendations below.";
    }
    
    // Show bad habits
    const badHabits = getBadHabits();
    const badHabitsContainer = document.getElementById('cybersec-badHabitsContainer');
    
    if (badHabits.length > 0) {
      let badHabitsHTML = `
        <h3><i data-lucide="alert-triangle" class="cybersec-icon-small cybersec-amber"></i>Areas for Improvement</h3>
        <div class="cybersec-bad-habits-list">
      `;
      
      badHabits.forEach(habit => {
        let habitHTML = `
          <div class="cybersec-bad-habit-card">
            <h4>${habit.question}</h4>
            <div class="cybersec-response-container">
              <p class="cybersec-response-label">Your response:</p>
              <p class="cybersec-response-text">${habit.selectedAnswer}</p>
            </div>
            <div class="cybersec-recommendation-container">
              <p class="cybersec-recommendation-label">Recommended practice:</p>
              <p class="cybersec-recommendation-text">${habit.correctAnswer}</p>
            </div>
            <p class="cybersec-explanation-text">${habit.explanation}</p>
        `;
        
        if (habit.resources) {
          habitHTML += `
            <div class="cybersec-resources-container">
              <p class="cybersec-resources-title">Learn more:</p>
              <div class="cybersec-resources-grid">
          `;
          
          habit.resources.forEach(resource => {
            const hostname = new URL(resource.url).hostname.replace('www.', '');
            
            habitHTML += `
              <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="cybersec-resource-card">
                <div class="cybersec-resource-header">
                  <h5 class="cybersec-resource-title">${resource.title}</h5>
                  <i data-lucide="external-link" class="cybersec-icon-small cybersec-resource-icon"></i>
                </div>
                <p class="cybersec-resource-description">
                  Learn about best practices and strategies to improve your cybersecurity in this area.
                </p>
                <p class="cybersec-resource-source">Source: ${hostname}</p>
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
        <div class="cybersec-next-steps" style="background-color: var(--cybersec-green-100); border-color: var(--cybersec-green-300);">
          <h3><i data-lucide="check-circle" class="cybersec-icon-small cybersec-green"></i>Perfect Score!</h3>
          <p>Congratulations! You've demonstrated excellent cybersecurity practices across all areas.</p>
          <p>Continue maintaining these good habits and stay informed about emerging threats.</p>
        </div>
      `;
    }
    
    // Set up retake button
    document.getElementById('cybersec-retakeButton').addEventListener('click', resetQuiz);
    
    // Set up save button
    document.getElementById('cybersec-saveButton').addEventListener('click', () => window.print());
    
    // Reinitialize Lucide icons for the new content
    lucide.createIcons();
  }
  
  function calculateScore() {
    const correctAnswers = answers.filter((answer, index) => {
      return answer === cybersecQuizQuestions[index].correctAnswerIndex;
    }).length;
    
    return Math.round((correctAnswers / cybersecQuizQuestions.length) * 100);
  }
  
  function getBadHabits() {
    return answers.map((answer, index) => {
      const question = cybersecQuizQuestions[index];
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
    answers = Array(cybersecQuizQuestions.length).fill(null);
    quizCompleted = false;
    
    showQuizIntro();
  }
});