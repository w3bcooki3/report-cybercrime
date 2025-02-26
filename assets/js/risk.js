// SVG Icons
const ICONS = {
    shield: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-check"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    alertTriangle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-alert"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    refreshCw: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-refresh"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
    home: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
  };
  
  // Questions data with scores, solutions, and article references
  const questions = [
    {
      id: 1,
      question: "How often do you update your software and operating systems?",
      options: [
        { text: "Automatically or as soon as updates are available", score: 10, practice: "good" },
        { text: "Within a week of updates being released", score: 7, practice: "good" },
        { text: "Only when I remember to check", score: 3, practice: "bad" },
        { text: "Rarely or never", score: 0, practice: "bad" }
      ],
      goodAdvice: "Consider setting up a schedule to verify updates have been applied correctly. For critical systems, test updates in a non-production environment first.",
      badAdvice: "Outdated software contains known vulnerabilities that hackers actively exploit. Enable automatic updates for all systems and applications.",
      articles: [
        {
          title: "Equifax Breach",
          description: "Failure to patch a known vulnerability led to the exposure of 147 million people's personal data.",
          url: "https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement"
        }
      ]
    },
    {
      id: 2,
      question: "How do you manage your passwords?",
      options: [
        { text: "Use a password manager with unique, strong passwords for each account", score: 10, practice: "good" },
        { text: "Create unique passwords manually and store them securely", score: 7, practice: "good" },
        { text: "Use a few different passwords across multiple accounts", score: 3, practice: "bad" },
        { text: "Use the same password for most accounts", score: 0, practice: "bad" }
      ],
      goodAdvice: "Consider adding hardware security keys as a second factor for your most sensitive accounts for even stronger protection.",
      badAdvice: "Password reuse is extremely dangerous. If one service is breached, attackers will try those credentials on other popular sites. Use a password manager to generate and store unique passwords.",
      articles: [
        {
          title: "Marriott Data Breach",
          description: "500 million guest records were exposed partly due to poor password security practices.",
          url: "https://www.csoonline.com/article/3441220/marriott-data-breach-faq-how-did-it-happen-and-what-was-the-impact.html"
        }
      ]
    },
    {
      id: 3,
      question: "How do you handle Multi-Factor Authentication (MFA)?",
      options: [
        { text: "Enable MFA on all accounts that offer it", score: 10, practice: "good" },
        { text: "Use MFA only on financial and email accounts", score: 7, practice: "good" },
        { text: "Only use MFA when it's required", score: 3, practice: "bad" },
        { text: "Avoid MFA because it's inconvenient", score: 0, practice: "bad" }
      ],
      goodAdvice: "Consider using authentication apps instead of SMS where possible, as SMS is vulnerable to SIM swapping attacks.",
      badAdvice: "MFA can prevent 99.9% of account compromise attacks. Enable it on all services that offer it, especially email, financial, and cloud storage accounts.",
      articles: [
        {
          title: "Twitter VIP Account Hacks",
          description: "High-profile Twitter accounts were compromised due to lack of proper MFA implementation.",
          url: "https://www.wired.com/story/twitter-hack-social-engineering/"
        }
      ]
    },
    {
      id: 4,
      question: "How do you approach suspicious emails or messages?",
      options: [
        { text: "Carefully verify sender and links before taking any action", score: 10, practice: "good" },
        { text: "Delete suspicious messages without opening them", score: 7, practice: "good" },
        { text: "Open them but don't click on links or attachments", score: 3, practice: "bad" },
        { text: "Click links to see what they are or respond if it seems important", score: 0, practice: "bad" }
      ],
      goodAdvice: "Consider reporting phishing attempts to your IT department or to organizations like the Anti-Phishing Working Group.",
      badAdvice: "Even opening suspicious emails can trigger tracking. Never click links in unexpected emails - instead, navigate directly to the service's website by typing the URL.",
      articles: [
        {
          title: "Colonial Pipeline Ransomware Attack",
          description: "A major pipeline was shut down after attackers gained access through a compromised password, likely from a phishing attack.",
          url: "https://www.bloomberg.com/news/articles/2021-06-04/hackers-breached-colonial-pipeline-using-compromised-password"
        }
      ]
    },
    {
      id: 5,
      question: "How do you secure your home Wi-Fi network?",
      options: [
        { text: "WPA3 encryption, strong unique password, regular firmware updates", score: 10, practice: "good" },
        { text: "WPA2 encryption with a strong password", score: 7, practice: "good" },
        { text: "Default settings with changed password", score: 3, practice: "bad" },
        { text: "Open network or using default credentials", score: 0, practice: "bad" }
      ],
      goodAdvice: "Consider setting up a guest network for visitors and IoT devices to isolate them from your main network.",
      badAdvice: "Unsecured networks allow anyone nearby to intercept your traffic. Enable at least WPA2 encryption, use a strong password, and keep router firmware updated.",
      articles: [
        {
          title: "TalkTalk Data Breach",
          description: "Poor network security led to the theft of personal data of 157,000 customers.",
          url: "https://www.bbc.com/news/business-37565367"
        }
      ]
    },
    {
      id: 6,
      question: "How do you back up your important data?",
      options: [
        { text: "Regular automated backups to multiple locations (local and cloud)", score: 10, practice: "good" },
        { text: "Regular backups to either local storage or cloud", score: 7, practice: "good" },
        { text: "Occasional manual backups when I remember", score: 3, practice: "bad" },
        { text: "I don't back up my data", score: 0, practice: "bad" }
      ],
      goodAdvice: "Test your backup restoration process periodically to ensure your backups are working correctly.",
      badAdvice: "Without proper backups, ransomware attacks can be devastating. Implement the 3-2-1 backup strategy: 3 copies, 2 different media types, 1 copy offsite.",
      articles: [
        {
          title: "Hollywood Hospital Ransomware Attack",
          description: "A hospital paid $17,000 in ransom after attackers encrypted their data and they had no viable backups.",
          url: "https://www.healthcareitnews.com/news/hollywood-hospital-pays-17000-ransom-hackers"
        }
      ]
    },
    {
      id: 7,
      question: "How do you handle public Wi-Fi networks?",
      options: [
        { text: "Use a VPN and avoid accessing sensitive information", score: 10, practice: "good" },
        { text: "Use a VPN but sometimes access sensitive accounts", score: 7, practice: "good" },
        { text: "Connect directly but try to use HTTPS sites", score: 3, practice: "bad" },
        { text: "Connect and use any website or service I need", score: 0, practice: "bad" }
      ],
      goodAdvice: "Consider using your mobile data instead of public Wi-Fi for sensitive transactions when a trusted VPN isn't available.",
      badAdvice: "Public Wi-Fi networks are prime spots for man-in-the-middle attacks. Always use a reputable VPN service when connecting to public networks.",
      articles: [
        {
          title: "Starbucks Wi-Fi Network Attack",
          description: "Attackers used an unsecured Wi-Fi network to steal customers' banking credentials.",
          url: "https://www.kaspersky.com/blog/starbucks-wifi-hijacking/25212/"
        }
      ]
    },
    {
      id: 8,
      question: "How do you dispose of old devices?",
      options: [
        { text: "Factory reset and use specialized data wiping software before disposal/recycling", score: 10, practice: "good" },
        { text: "Perform a factory reset before disposal", score: 7, practice: "good" },
        { text: "Delete important files before disposal", score: 3, practice: "bad" },
        { text: "Dispose of devices without any data removal", score: 0, practice: "bad" }
      ],
      goodAdvice: "For highly sensitive data, consider physical destruction of storage devices after secure wiping.",
      badAdvice: "Standard deletion doesn't remove data permanently. Use specialized wiping software or perform multiple overwrites to ensure data cannot be recovered.",
      articles: [
        {
          title: "Morgan Stanley Data Breach",
          description: "Improper disposal of decommissioned data center equipment led to customer data exposure.",
          url: "https://www.reuters.com/business/finance/us-sec-fines-morgan-stanley-35-mln-data-security-failures-2022-09-20/"
        }
      ]
    },
    {
      id: 9,
      question: "How do you protect your mobile devices?",
      options: [
        { text: "Use biometrics, PIN, encryption, and find-my-device features", score: 10, practice: "good" },
        { text: "Use a strong PIN or password and find-my-device features", score: 7, practice: "good" },
        { text: "Use a simple PIN or pattern lock", score: 3, practice: "bad" },
        { text: "No screen lock or security measures", score: 0, practice: "bad" }
      ],
      goodAdvice: "Consider using app-level locks for sensitive applications like banking or email for an extra layer of security.",
      badAdvice: "Mobile devices often contain access to email, banking, and other sensitive accounts. Enable biometric authentication, use a strong PIN, and enable remote wipe capabilities.",
      articles: [
        {
          title: "Uber Data Breach",
          description: "Attackers accessed an unsecured personal device of an employee, leading to a massive data breach.",
          url: "https://www.ftc.gov/news-events/news/press-releases/2018/04/uber-agrees-expanded-settlement-ftc-related-privacy-security"
        }
      ]
    },
    {
      id: 10,
      question: "How do you handle software and app permissions?",
      options: [
        { text: "Review all permissions carefully and regularly audit app permissions", score: 10, practice: "good" },
        { text: "Review permissions before installing but rarely check afterward", score: 7, practice: "good" },
        { text: "Accept permissions without reviewing but from trusted sources only", score: 3, practice: "bad" },
        { text: "Accept all permission requests without reviewing", score: 0, practice: "bad" }
      ],
      goodAdvice: "Periodically review and revoke unnecessary permissions from apps you no longer use frequently.",
      badAdvice: "Excessive permissions can lead to data leakage. Only grant permissions that are necessary for the app's core functionality and be wary of apps requesting unrelated permissions.",
      articles: [
        {
          title: "Cambridge Analytica Facebook Scandal",
          description: "A third-party app collected data on millions of users through excessive permissions.",
          url: "https://www.nytimes.com/2018/04/04/us/politics/cambridge-analytica-scandal-fallout.html"
        }
      ]
    }
  ];
  
  // Main application state
  const state = {
    currentScreen: 'start',
    currentQuestion: 0,
    answers: Array(10).fill(null),
    score: 0,
    showFeedback: false,
    feedbackType: null
  };
  
  // Initialize the application
  document.addEventListener('DOMContentLoaded', () => {
    renderScreen();
  });
  
  // Calculate score based on answers
  function calculateScore() {
    let totalScore = 0;
    state.answers.forEach((answer, index) => {
      if (answer !== null) {
        const questionData = questions[index];
        const selectedOption = questionData.options.find(option => option.text === answer);
        if (selectedOption) {
          totalScore += selectedOption.score;
        }
      }
    });
    state.score = totalScore;
    return totalScore;
  }
  
  // Handle answer selection
  function handleAnswerSelect(answer) {
    state.answers[state.currentQuestion] = answer;
    
    // Determine if the selected practice is good or bad
    const selectedOption = questions[state.currentQuestion].options.find(option => option.text === answer);
    if (selectedOption) {
      state.feedbackType = selectedOption.practice;
      state.showFeedback = true;
      renderScreen();
    }
  }
  
  // Move to the next question
  function handleNextQuestion() {
    state.showFeedback = false;
    if (state.currentQuestion < questions.length - 1) {
      state.currentQuestion++;
    } else {
      state.currentScreen = 'results';
    }
    renderScreen();
  }
  
  // Reset the assessment
  function handleReset() {
    state.currentScreen = 'start';
    state.currentQuestion = 0;
    state.answers = Array(10).fill(null);
    state.score = 0;
    state.showFeedback = false;
    state.feedbackType = null;
    renderScreen();
  }
  
  // Get score category and recommendations
  function getScoreCategory() {
    const score = calculateScore();
    if (score >= 80) return { category: "Excellent", color: "excellent", description: "Your cybersecurity practices are strong. Continue maintaining these high standards and stay updated on new threats." };
    if (score >= 60) return { category: "Good", color: "good", description: "You have good security habits, but there's room for improvement in some areas." };
    if (score >= 40) return { category: "Fair", color: "fair", description: "Your security practices need significant improvement to protect against common threats." };
    return { category: "Poor", color: "poor", description: "Your current practices put you at high risk. Immediate action is recommended to improve your security posture." };
  }
  
  // Get recommendations based on bad answers
  function getRecommendations() {
    const recommendations = [];
    
    state.answers.forEach((answer, index) => {
      if (answer !== null) {
        const questionData = questions[index];
        const selectedOption = questionData.options.find(option => option.text === answer);
        
        if (selectedOption && selectedOption.practice === 'bad') {
          recommendations.push({
            question: questionData.question,
            answer: answer,
            advice: questionData.badAdvice,
            index: index + 1
          });
        }
      }
    });
    
    return recommendations;
  }
  
  // Render the appropriate screen
  function renderScreen() {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = '';
    
    let screenContent = '';
    
    switch (state.currentScreen) {
      case 'start':
        screenContent = renderStartScreen();
        break;
      case 'assessment':
        screenContent = renderAssessmentScreen();
        break;
      case 'results':
        screenContent = renderResultsScreen();
        break;
    }
    
    appContainer.innerHTML = screenContent;
    
    // Add event listeners after rendering
    addEventListeners();
  }
  
  // Render the start screen
  function renderStartScreen() {
    return `
      <div class="start-screen animate-fade-in">
        <div class="icon-shield">
          ${ICONS.shield}
        </div>
        <h1>Check Your Security</h1>
        <p class="text-center" style="color: #6b7280; margin-bottom: 32px;">
          Answer 10 questions about your cyber hygiene practices to receive a personalized risk assessment and recommendations.
        </p>
        <button id="start-assessment" class="btn-primary">
          Start Assessment ${ICONS.arrowRight}
        </button>
      </div>
    `;
  }
  
  // Render the assessment screen
  function renderAssessmentScreen() {
    const currentQ = questions[state.currentQuestion];
    const progressPercent = ((state.currentQuestion) / questions.length) * 100;
    
    let optionsHTML = '';
    currentQ.options.forEach((option, index) => {
      const isSelected = state.answers[state.currentQuestion] === option.text;
      const selectedClass = isSelected 
        ? (option.practice === 'good' ? 'selected-good' : 'selected-bad') 
        : '';
      
      optionsHTML += `
        <button 
          class="option-button ${selectedClass}" 
          data-option="${index}"
        >
          ${option.text}
        </button>
      `;
    });
    
    let feedbackHTML = '';
    if (state.showFeedback) {
      const currentFeedback = state.feedbackType === 'good' 
        ? currentQ.goodAdvice 
        : currentQ.badAdvice;
      
      let articlesHTML = '';
      if (state.feedbackType === 'bad' && currentQ.articles && currentQ.articles.length > 0) {
        let articleCardsHTML = '';
        currentQ.articles.forEach(article => {
          articleCardsHTML += `
            <a 
              href="${article.url}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="article-card"
            >
              <h6 class="article-card-title">${article.title}</h6>
              <p class="article-card-description">${article.description}</p>
            </a>
          `;
        });
        
        articlesHTML = `
          <div class="articles-container">
            <h5 class="article-title">Real-world examples:</h5>
            <div class="article-cards">
              ${articleCardsHTML}
            </div>
          </div>
        `;
      }
      
      feedbackHTML = `
        <div class="feedback-container ${state.feedbackType === 'good' ? 'good' : 'bad'}">
          <div class="feedback-header">
            <div class="feedback-icon">
              ${state.feedbackType === 'good' ? ICONS.checkCircle : ICONS.alertTriangle}
            </div>
            <div>
              <h4 class="feedback-title ${state.feedbackType === 'good' ? 'good' : 'bad'}">
                ${state.feedbackType === 'good' ? 'Good Practice!' : 'Risk Detected!'}
              </h4>
              <p class="feedback-text">
                ${currentFeedback}
              </p>
              ${articlesHTML}
            </div>
          </div>
        </div>
        
        <button id="next-question" class="btn-next">
            ${state.currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'} ${ICONS.arrowRight}
        </button>
      `;
    }
    
    return `
      <div class="assessment-screen animate-fade-in">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
          <h2>Question ${state.currentQuestion + 1} of ${questions.length}</h2>
          <div style="font-size: 14px; font-weight: 500; color: #6b7280;">
            Score: ${calculateScore()}/${state.currentQuestion * 10}
          </div>
        </div>
        
        <div class="progress-container">
          <div class="progress-bar" style="width: ${progressPercent}%"></div>
        </div>
        
        <h3>${currentQ.question}</h3>
        
        <div class="options-container">
          ${optionsHTML}
        </div>
        
        ${feedbackHTML}
      </div>
    `;
  }
  
  // Render the results screen
  function renderResultsScreen() {
    const score = calculateScore();
    const scoreCategory = getScoreCategory();
    const recommendations = getRecommendations();
    
    let recommendationsHTML = '';
    if (recommendations.length > 0) {
      recommendations.forEach(rec => {
        recommendationsHTML += `
          <div class="recommendation-item">
            <h4 class="recommendation-question">Question ${rec.index}: ${rec.question}</h4>
            <p class="recommendation-answer">Your answer: ${rec.answer}</p>
            <p class="recommendation-advice">${rec.advice}</p>
          </div>
        `;
      });
    } else {
      recommendationsHTML = `
        <p style="color: #10b981; font-weight: 600;">Great job! You didn't select any high-risk practices.</p>
      `;
    }
    
    // Create SVG for score circle
    const circumference = 2 * Math.PI * 58;
    const dashArray = (score/100) * circumference;
    
    let scoreColor = '';
    if (score >= 80) scoreColor = '#10b981';
    else if (score >= 60) scoreColor = '#3b82f6';
    else if (score >= 40) scoreColor = '#f59e0b';
    else scoreColor = '#ef4444';
    
    const scoreSvg = `
      <svg width="128" height="128" style="transform: rotate(-90deg);">
        <circle 
          cx="64" 
          cy="64" 
          r="58" 
          stroke="#e2e8f0" 
          stroke-width="8" 
          fill="transparent" 
        />
        <circle 
          cx="64" 
          cy="64" 
          r="58" 
          stroke="${scoreColor}" 
          stroke-width="8" 
          stroke-dasharray="${dashArray} ${circumference}" 
          stroke-linecap="round" 
          fill="transparent" 
        />
      </svg>
    `;
    
    return `
      <div class="results-screen animate-fade-in">
        <div style="text-align: center; margin-bottom: 32px;">
          <h2 style="margin-bottom: 8px;">Your Cybersecurity Score</h2>
          <div class="score-circle">
            ${scoreSvg}
            <div class="score-value">${score}</div>
          </div>
          <h3 class="score-category ${scoreCategory.color}">${scoreCategory.category}</h3>
          <p class="score-description">${scoreCategory.description}</p>
        </div>
        
        <div style="margin-bottom: 32px;">
          <h3 style="margin-bottom: 16px;">Areas for Improvement</h3>
          <div class="recommendations-container">
            ${recommendationsHTML}
          </div>
        </div>
        
        <div class="button-group">
          <button id="reset-assessment" class="btn-secondary">
            ${ICONS.refreshCw} Take Assessment Again
          </button>
          <button id="return-home" class="btn-primary">
            ${ICONS.home} Return to Home
          </button>
        </div>
      </div>
    `;
  }
  
  // Add event listeners based on current screen
  function addEventListeners() {
    switch (state.currentScreen) {
      case 'start':
        document.getElementById('start-assessment').addEventListener('click', () => {
          state.currentScreen = 'assessment';
          renderScreen();
        });
        break;
        
      case 'assessment':
        // Add event listeners to option buttons
        const optionButtons = document.querySelectorAll('.option-button');
        optionButtons.forEach((button, index) => {
          button.addEventListener('click', () => {
            const optionIndex = parseInt(button.getAttribute('data-option'));
            handleAnswerSelect(questions[state.currentQuestion].options[optionIndex].text);
          });
        });
        
        // Add event listener to next question button if visible
        const nextButton = document.getElementById('next-question');
        if (nextButton) {
          nextButton.addEventListener('click', handleNextQuestion);
        }
        break;
        
      case 'results':
        document.getElementById('reset-assessment').addEventListener('click', handleReset);
        document.getElementById('return-home').addEventListener('click', () => {
          state.currentScreen = 'start';
          renderScreen();
        });
        break;
    }
  }