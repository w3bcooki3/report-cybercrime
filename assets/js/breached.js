// DOM Elements
const form = document.getElementById('breach-form');
const emailInput = document.getElementById('email');
const checkButton = document.getElementById('check-button');
const buttonText = document.getElementById('button-text');
const spinner = document.getElementById('spinner');
const errorMessage = document.getElementById('error-message');
const errorText = errorMessage.querySelector('p');
const results = document.getElementById('results');
const resultSummary = document.getElementById('result-summary');
const resultIcon = document.getElementById('result-icon');
const resultTitle = document.getElementById('result-title');
const resultSubtitle = document.getElementById('result-subtitle');
const breachDetails = document.getElementById('breach-details');
const breachList = document.getElementById('breach-list');
const tipsSection = document.getElementById('tips-section');

// Event Listeners
form.addEventListener('submit', handleSubmit);

// Handle form submission
function handleSubmit(e) {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  
  // Basic email validation
  if (!isValidEmail(email)) {
    showError('Please enter a valid email address.');
    return;
  }
  
  // Clear previous results and errors
  hideError();
  hideResults();
  
  // Show loading state
  setLoading(true);
  
  // Check for breaches
  checkBreaches(email);
}

// Check if email has been breached (mock API)
function checkBreaches(email) {
  // Simulate API call delay
  setTimeout(() => {
    try {
      // Mock response based on email pattern for demo purposes
      if (email.includes('breach')) {
        // Simulate breached email
        const result = {
          breached: true,
          breaches: [
            {
              name: "ExampleBreach",
              domain: "example.com",
              breachDate: "2023-01-15",
              description: "Example.com suffered a data breach that exposed user accounts.",
              dataClasses: ["Email addresses", "Passwords", "Names", "Phone numbers"]
            },
            {
              name: "AnotherBreach",
              domain: "another.com",
              breachDate: "2022-05-20",
              description: "Another.com had a security incident affecting millions of users.",
              dataClasses: ["Email addresses", "Passwords", "IP addresses"]
            }
          ]
        };
        
        showResults(result);
      } else {
        // Simulate safe email
        const result = {
          breached: false,
          breaches: []
        };
        
        showResults(result);
      }
    } catch (err) {
      showError('An error occurred while checking the email. Please try again.');
    } finally {
      setLoading(false);
    }
  }, 1500);
}

// Show results
function showResults(result) {
  results.classList.remove('hidden');
  
  if (result.breached) {
    // Breached result
    resultSummary.className = 'result-summary breached';
    
    resultIcon.className = 'result-icon breached';
    resultIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    `;
    
    resultTitle.className = 'breached';
    resultTitle.textContent = 'Your email was found in data breaches!';
    
    resultSubtitle.className = 'breached';
    resultSubtitle.textContent = `Found in ${result.breaches.length} breach${result.breaches.length > 1 ? 'es' : ''}.`;
    
    // Show breach details
    breachDetails.classList.remove('hidden');
    breachList.innerHTML = '';
    
    result.breaches.forEach(breach => {
      const breachItem = document.createElement('div');
      breachItem.className = 'breach-item';
      
      breachItem.innerHTML = `
        <div class="breach-header">
          <h4 class="breach-name">${breach.name}</h4>
          <span class="breach-date">${formatDate(breach.breachDate)}</span>
        </div>
        <p class="breach-domain">${breach.domain}</p>
        <p class="breach-description">${breach.description}</p>
        
        <div class="breach-data">
          <h5 class="breach-data-title">Compromised Data:</h5>
          <div class="data-classes">
            ${breach.dataClasses.map(dataClass => `
              <span class="data-class">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                ${dataClass}
              </span>
            `).join('')}
          </div>
        </div>
      `;
      
      breachList.appendChild(breachItem);
    });
    
    // Show tips section
    tipsSection.classList.remove('hidden');
  } else {
    // Safe result
    resultSummary.className = 'result-summary safe';
    
    resultIcon.className = 'result-icon safe';
    resultIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    `;
    
    resultTitle.className = 'safe';
    resultTitle.textContent = 'Good news! Your email appears to be safe.';
    
    resultSubtitle.className = 'safe';
    resultSubtitle.textContent = 'No breaches found for this email address.';
    
    // Hide breach details
    breachDetails.classList.add('hidden');
    
    // Hide tips section
    tipsSection.classList.add('hidden');
  }
}

// Hide results
function hideResults() {
  results.classList.add('hidden');
  breachDetails.classList.add('hidden');
  tipsSection.classList.add('hidden');
}

// Show error message
function showError(message) {
  errorText.textContent = message;
  errorMessage.classList.remove('hidden');
}

// Hide error message
function hideError() {
  errorMessage.classList.add('hidden');
}

// Set loading state
function setLoading(isLoading) {
  if (isLoading) {
    buttonText.classList.add('hidden');
    spinner.classList.remove('hidden');
    checkButton.disabled = true;
  } else {
    buttonText.classList.remove('hidden');
    spinner.classList.add('hidden');
    checkButton.disabled = false;
  }
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}