// DOM Elements
const randomBtn = document.getElementById('random-btn');
const memorableBtn = document.getElementById('memorable-btn');
const pinBtn = document.getElementById('pin-btn');
const passwordDisplay = document.getElementById('password');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const copyIcon = document.getElementById('copy-icon');
const favoriteIcon = document.getElementById('favorite-icon');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const randomOptions = document.getElementById('random-options');
const memorableOptions = document.getElementById('memorable-options');
const pinOptions = document.getElementById('pin-options');
const modeIcon = document.getElementById('mode-icon');
const modeText = document.getElementById('mode-text');
const strengthIcon = document.getElementById('strength-icon');
const strengthText = document.getElementById('strength-text');
const crackTimeText = document.getElementById('crack-time-text');
const savedPasswordsSection = document.getElementById('saved-passwords');
const favoritesList = document.getElementById('favorites-list');
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history');

// Random Password Options
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const excludeSimilarCheckbox = document.getElementById('exclude-similar');

// Memorable Password Options
const capitalizeCheckbox = document.getElementById('capitalize');
const hyphensCheckbox = document.getElementById('hyphens');
const dotsCheckbox = document.getElementById('dots');
const underscoresCheckbox = document.getElementById('underscores');
const memSymbolsCheckbox = document.getElementById('mem-symbols');
const includeNumbersCheckbox = document.getElementById('include-numbers');

// PIN Options
const pinNumbersCheckbox = document.getElementById('pin-numbers');
const pinAvoidRepeatsCheckbox = document.getElementById('pin-avoid-repeats');
const pinAvoidSequencesCheckbox = document.getElementById('pin-avoid-sequences');
const pinAvoidPatternsCheckbox = document.getElementById('pin-avoid-patterns');

// State
let passwordType = 'random';
let currentPassword = '';
let length = 16;
let favorites = JSON.parse(localStorage.getItem('passwordFavorites')) || [];
let history = JSON.parse(localStorage.getItem('passwordHistory')) || [];

// Icons for strength indicator
const strengthIcons = {
  'vulnerable': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>`,
  'weak': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>`,
  'medium': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>`,
  'strong': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>`,
  'very-strong': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>`
};

// Colors for strength indicator
const strengthColors = {
  'vulnerable': '#ef4444',
  'weak': '#f59e0b',
  'medium': '#f59e0b',
  'strong': '#10b981',
  'very-strong': '#059669'
};

// Initialize
function init() {
  updateLengthValue();
  generatePassword();
  renderFavorites();
  renderHistory();
  
  // Event Listeners
  randomBtn.addEventListener('click', () => setPasswordType('random'));
  memorableBtn.addEventListener('click', () => setPasswordType('memorable'));
  pinBtn.addEventListener('click', () => setPasswordType('pin'));
  generateBtn.addEventListener('click', generatePassword);
  copyBtn.addEventListener('click', copyToClipboard);
  favoriteBtn.addEventListener('click', toggleFavorite);
  lengthSlider.addEventListener('input', handleLengthChange);
  clearHistoryBtn.addEventListener('click', clearHistory);
  
  // Checkbox event listeners for random password
  lowercaseCheckbox.addEventListener('change', generatePassword);
  uppercaseCheckbox.addEventListener('change', generatePassword);
  numbersCheckbox.addEventListener('change', generatePassword);
  symbolsCheckbox.addEventListener('change', generatePassword);
  excludeSimilarCheckbox.addEventListener('change', generatePassword);
  
  // Checkbox event listeners for memorable password
  capitalizeCheckbox.addEventListener('change', generatePassword);
  hyphensCheckbox.addEventListener('change', generatePassword);
  dotsCheckbox.addEventListener('change', generatePassword);
  underscoresCheckbox.addEventListener('change', generatePassword);
  memSymbolsCheckbox.addEventListener('change', generatePassword);
  includeNumbersCheckbox.addEventListener('change', generatePassword);
  
  // Checkbox event listeners for PIN
  pinNumbersCheckbox.addEventListener('change', generatePassword);
  pinAvoidRepeatsCheckbox.addEventListener('change', generatePassword);
  pinAvoidSequencesCheckbox.addEventListener('change', generatePassword);
  pinAvoidPatternsCheckbox.addEventListener('change', generatePassword);
  
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', createRipple);
  });
  
  // Update favorite button state
  updateFavoriteButtonState();
}

// Set password type (random, memorable, or pin)
function setPasswordType(type) {
  passwordType = type;
  
  // Reset all buttons and option sections
  randomBtn.classList.remove('active');
  memorableBtn.classList.remove('active');
  pinBtn.classList.remove('active');
  randomOptions.classList.add('hidden');
  memorableOptions.classList.add('hidden');
  pinOptions.classList.add('hidden');
  
  if (type === 'random') {
    randomBtn.classList.add('active');
    randomOptions.classList.remove('hidden');
    modeText.textContent = 'Random Mode Active';
    modeIcon.innerHTML = `<circle cx="8" cy="15" r="4"></circle>
      <line x1="10.85" y1="12.15" x2="19" y2="4"></line>
      <line x1="18" y1="5" x2="20" y2="7"></line>
      <line x1="15" y1="8" x2="17" y2="10"></line>`;
    lengthSlider.min = "8";
    lengthSlider.max = "64";
    if (length < 8) {
      length = 8;
      lengthSlider.value = length;
      updateLengthValue();
    }
  } else if (type === 'memorable') {
    memorableBtn.classList.add('active');
    memorableOptions.classList.remove('hidden');
    modeText.textContent = 'Memorable Mode Active';
    modeIcon.innerHTML = `<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>`;
    lengthSlider.min = "8";
    lengthSlider.max = "64";
    if (length < 8) {
      length = 8;
      lengthSlider.value = length;
      updateLengthValue();
    }
  } else if (type === 'pin') {
    pinBtn.classList.add('active');
    pinOptions.classList.remove('hidden');
    modeText.textContent = 'PIN Mode Active';
    modeIcon.innerHTML = `<path d="M12 17v5"></path>
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path>`;
    lengthSlider.min = "4";
    lengthSlider.max = "12";
    if (length > 12) {
      length = 6;
      lengthSlider.value = length;
      updateLengthValue();
    }
  }
  
  generatePassword();
  
  // Add animation to mode badge
  const modeBadge = document.getElementById('mode-badge');
  modeBadge.classList.add('pulse');
  setTimeout(() => {
    modeBadge.classList.remove('pulse');
  }, 500);
}

// Update length value display
function updateLengthValue() {
  lengthValue.textContent = `${length} characters`;
}

// Handle length slider change
function handleLengthChange() {
  length = parseInt(lengthSlider.value);
  updateLengthValue();
  generatePassword();
}

// Generate random password
function generateRandomPassword() {
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '0123456789';
  let symbols = '!@#$%^&*()_-+=<>?';

  // Handle excluded characters
  if (excludeSimilarCheckbox.checked) {
    lowercase = lowercase.replace(/[il]/g, '');
    uppercase = uppercase.replace(/[IL]/g, '');
    numbers = numbers.replace(/[10]/g, '');
  }

  let chars = '';
  if (lowercaseCheckbox.checked) chars += lowercase;
  if (uppercaseCheckbox.checked) chars += uppercase;
  if (numbersCheckbox.checked) chars += numbers;
  if (symbolsCheckbox.checked) chars += symbols;

  // Ensure at least one character set is selected
  if (!chars) {
    lowercaseCheckbox.checked = true;
    chars = lowercase;
  }

  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Generate memorable password
function generateMemorablePassword() {
  const words = ['apple', 'banana', 'cherry', 'dragon', 'elephant', 'flower', 'guitar', 'happy', 'island', 'jungle', 'koala', 'lemon', 'monkey', 'ninja', 'orange', 'panda', 'queen', 'rabbit', 'snake', 'tiger', 'umbrella', 'violet', 'window', 'xylophone', 'yellow', 'zebra', 'mountain', 'river', 'forest', 'desert', 'ocean', 'planet', 'rocket', 'castle', 'wizard', 'knight', 'pirate', 'robot', 'dinosaur', 'unicorn'];
  
  const separators = [];
  if (hyphensCheckbox.checked) separators.push('-');
  if (dotsCheckbox.checked) separators.push('.');
  if (underscoresCheckbox.checked) separators.push('_');
  if (memSymbolsCheckbox.checked) separators.push('!', '@', '#', '$');

  // Ensure at least one separator if any are checked
  if (separators.length === 0) separators.push('');

  let result = '';
  let wordCount = 0;
  
  while (result.length < length && wordCount < 10) { // Limit to prevent infinite loop
    const word = words[Math.floor(Math.random() * words.length)];
    const separator = separators[Math.floor(Math.random() * separators.length)];
    
    let processedWord = word;
    if (capitalizeCheckbox.checked && Math.random() > 0.5) {
      processedWord = word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    // Add numbers if option is checked
    if (includeNumbersCheckbox.checked && Math.random() > 0.7) {
      processedWord += Math.floor(Math.random() * 100);
    }
    
    // Add the word with separator if it's not the first word
    if (result.length > 0) {
      result += separator;
    }
    
    result += processedWord;
    wordCount++;
  }
  
  // Trim to exact length
  return result.slice(0, length);
}

// Generate PIN
function generatePIN() {
  let digits = '0123456789';
  let result = '';
  
  // Simple PIN generation
  if (!pinAvoidRepeatsCheckbox.checked && !pinAvoidSequencesCheckbox.checked && !pinAvoidPatternsCheckbox.checked) {
    for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return result;
  }
  
  // Advanced PIN generation with constraints
  let attempts = 0;
  const maxAttempts = 100;
  
  while (attempts < maxAttempts) {
    result = '';
    for (let i = 0; i < length; i++) {
      const availableDigits = getAvailableDigits(digits, result, i);
      if (availableDigits.length === 0) {
        result = '';
        break;
      }
      result += availableDigits.charAt(Math.floor(Math.random() * availableDigits.length));
    }
    
    if (result.length === length && isValidPIN(result)) {
      return result;
    }
    
    attempts++;
  }
  
  // Fallback to simple generation if constraints are too strict
  result = '';
  for (let i = 0; i < length; i++) {
    result += digits.charAt(Math.floor(Math.random() * digits.length));
  }
  return result;
}

// Get available digits based on constraints
function getAvailableDigits(allDigits, currentResult, position) {
  let availableDigits = allDigits;
  
  // Avoid repeats
  if (pinAvoidRepeatsCheckbox.checked && position > 0) {
    const lastDigit = currentResult[position - 1];
    availableDigits = availableDigits.replace(lastDigit, '');
  }
  
  // Avoid sequences
  if (pinAvoidSequencesCheckbox.checked && position > 0) {
    const lastDigit = parseInt(currentResult[position - 1]);
    const ascending = (lastDigit + 1) % 10;
    const descending = (lastDigit + 9) % 10;
    availableDigits = availableDigits.replace(ascending.toString(), '').replace(descending.toString(), '');
  }
  
  return availableDigits;
}

// Check if PIN is valid based on constraints
function isValidPIN(pin) {
  // Check for common patterns
  if (pinAvoidPatternsCheckbox.checked) {
    // Check for repeated digits (e.g., 1111)
    if (/(\d)\1{3,}/.test(pin)) return false;
    
    // Check for common patterns (e.g., 1234, 2580)
    const commonPatterns = ['1234', '4321', '2580', '0852', '1357', '2468', '1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999', '0000'];
    for (const pattern of commonPatterns) {
      if (pin.includes(pattern)) return false;
    }
  }
  
  return true;
}

// Generate password based on selected type
function generatePassword() {
  let newPassword = '';
  
  if (passwordType === 'random') {
    newPassword = generateRandomPassword();
  } else if (passwordType === 'memorable') {
    newPassword = generateMemorablePassword();
  } else if (passwordType === 'pin') {
    newPassword = generatePIN();
  }
  
  // Only update if we got a valid password
  if (newPassword) {
    currentPassword = newPassword;
    passwordDisplay.textContent = currentPassword;
    updateStrengthIndicator();
    updateCrackTimeEstimate();
    addToHistory(currentPassword);
    
    // Add animation effect
    passwordDisplay.classList.add('animate-fade');
    setTimeout(() => {
      passwordDisplay.classList.remove('animate-fade');
    }, 500);
    
    // Update favorite button state
    updateFavoriteButtonState();
  }
}

// Copy password to clipboard
function copyToClipboard() {
  if (!currentPassword) return;
  
  navigator.clipboard.writeText(currentPassword).then(() => {
    copyIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5"></path>
    </svg>`;
    copyIcon.style.color = '#10b981';
    
    // Show a toast notification
    showToast('Password copied to clipboard!');
    
    setTimeout(() => {
      copyIcon.innerHTML = `<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>`;
      copyIcon.style.color = '';
    }, 2000);
  });
}

// Toggle favorite status
function toggleFavorite() {
  if (!currentPassword) return;
  
  const isFavorite = favorites.includes(currentPassword);
  
  if (isFavorite) {
    // Remove from favorites
    favorites = favorites.filter(p => p !== currentPassword);
    favoriteIcon.style.fill = 'none';
    favoriteIcon.style.color = '';
    showToast('Removed from favorites');
  } else {
    // Add to favorites
    favorites.push(currentPassword);
    favoriteIcon.style.fill = 'currentColor';
    favoriteIcon.style.color = '#ec4899';
    showToast('Added to favorites');
  }
  
  // Save to localStorage
  localStorage.setItem('passwordFavorites', JSON.stringify(favorites));
  
  // Update UI
  renderFavorites();
}

// Update favorite button state
function updateFavoriteButtonState() {
  const isFavorite = favorites.includes(currentPassword);
  
  if (isFavorite) {
    favoriteIcon.style.fill = 'currentColor';
    favoriteIcon.style.color = '#ec4899';
  } else {
    favoriteIcon.style.fill = 'none';
    favoriteIcon.style.color = '';
  }
}

// Add password to history
function addToHistory(pwd) {
  // Don't add duplicates
  if (history.includes(pwd)) {
    // Move to the top of history
    history = history.filter(p => p !== pwd);
    history.unshift(pwd);
  } else {
    // Add to the beginning of history
    history.unshift(pwd);
    // Limit history to 10 items
    if (history.length > 10) {
      history = history.slice(0, 10);
    }
  }
  
  // Save to localStorage
  localStorage.setItem('passwordHistory', JSON.stringify(history));
  
  // Update UI
  renderHistory();
}

// Clear history
function clearHistory() {
  history = [];
  localStorage.removeItem('passwordHistory');
  renderHistory();
  showToast('History cleared');
}

// Render favorites
function renderFavorites() {
  favoritesList.innerHTML = '';
  
  if (favorites.length === 0) {
    savedPasswordsSection.classList.add('hidden');
    return;
  }
  
  savedPasswordsSection.classList.remove('hidden');
  
  favorites.forEach(fav => {
    const item = document.createElement('div');
    item.className = 'favorite-item';
    
    const passwordElement = document.createElement('div');
    passwordElement.className = 'favorite-password';
    passwordElement.textContent = fav;
    
    const actions = document.createElement('div');
    actions.className = 'favorite-actions';
    
    const useBtn = document.createElement('button');
    useBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m5 12 5 5 9-9"></path>
    </svg>`;
    useBtn.title = 'Use this password';
    useBtn.addEventListener('click', () => {
      currentPassword = fav;
      passwordDisplay.textContent = fav;
      updateStrengthIndicator();
      updateCrackTimeEstimate();
      updateFavoriteButtonState();
      showToast('Password selected');
    });
    
    const copyBtn = document.createElement('button');
    copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
    </svg>`;
    copyBtn.title = 'Copy to clipboard';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(fav).then(() => {
        showToast('Password copied to clipboard!');
      });
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 6h18"></path>
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    </svg>`;
    deleteBtn.title = 'Remove from favorites';
    deleteBtn.addEventListener('click', () => {
      favorites = favorites.filter(p => p !== fav);
      localStorage.setItem('passwordFavorites', JSON.stringify(favorites));
      renderFavorites();
      updateFavoriteButtonState();
      showToast('Removed from favorites');
    });
    
    actions.appendChild(useBtn);
    actions.appendChild(copyBtn);
    actions.appendChild(deleteBtn);
    
    item.appendChild(passwordElement);
    item.appendChild(actions);
    
    favoritesList.appendChild(item);
  });
}

// Render history
function renderHistory() {
  historyList.innerHTML = '';
  
  if (history.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.className = 'empty-message';
    emptyMessage.textContent = 'No password history yet';
    historyList.appendChild(emptyMessage);
    return;
  }
  
  history.forEach(pwd => {
    const item = document.createElement('div');
    item.className = 'history-item';
    
    const passwordElement = document.createElement('div');
    passwordElement.className = 'history-password';
    passwordElement.textContent = pwd;
    
    const actions = document.createElement('div');
    actions.className = 'history-actions';
    
    const useBtn = document.createElement('button');
    useBtn.className = 'use-btn';
    useBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m5 12 5 5 9-9"></path>
    </svg>`;
    useBtn.title = 'Use this password';
    useBtn.addEventListener('click', () => {
      currentPassword = pwd;
      passwordDisplay.textContent = pwd;
      updateStrengthIndicator();
      updateCrackTimeEstimate();
      updateFavoriteButtonState();
      showToast('Password selected');
    });
    
    const copyBtn = document.createElement('button');
    copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
    </svg>`;
    copyBtn.title = 'Copy to clipboard';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(pwd).then(() => {
        showToast('Password copied to clipboard!');
      });
    });
    
    const favoriteBtn = document.createElement('button');
    favoriteBtn.className = `favorite-btn ${favorites.includes(pwd) ? 'active' : ''}`;
    favoriteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${favorites.includes(pwd) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    </svg>`;
    favoriteBtn.title = favorites.includes(pwd) ? 'Remove from favorites' : 'Add to favorites';
    favoriteBtn.addEventListener('click', () => {
      if (favorites.includes(pwd)) {
        favorites = favorites.filter(p => p !== pwd);
        favoriteBtn.classList.remove('active');
        favoriteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>`;
        showToast('Removed from favorites');
      } else {
        favorites.push(pwd);
        favoriteBtn.classList.add('active');
        favoriteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>`;
        showToast('Added to favorites');
      }
      localStorage.setItem('passwordFavorites', JSON.stringify(favorites));
      renderFavorites();
      updateFavoriteButtonState();
    });
    
    actions.appendChild(useBtn);
    actions.appendChild(copyBtn);
    actions.appendChild(favoriteBtn);
    
    item.appendChild(passwordElement);
    item.appendChild(actions);
    
    historyList.appendChild(item);
  });
}

// Get password strength
function getPasswordStrength(password) {
  if (!password) return 'vulnerable';
  
  const length = password.length;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  
  const varietyCount = [hasLower, hasUpper, hasNumber, hasSymbol].filter(Boolean).length;
  
  if (length < 8) return 'vulnerable';
  if (length < 10 && varietyCount < 2) return 'weak';
  if (length < 12 && varietyCount < 3) return 'medium';
  if (length < 14 && varietyCount < 4) return 'strong';
  return 'very-strong';
}

// Update strength indicator
function updateStrengthIndicator() {
  const strength = getPasswordStrength(currentPassword);
  strengthIcon.innerHTML = strengthIcons[strength];
  strengthIcon.style.color = strengthColors[strength];
  strengthText.textContent = `${strength.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Password`;
  strengthText.style.color = strengthColors[strength];
}

// Update crack time estimate
function updateCrackTimeEstimate() {
  const strength = getPasswordStrength(currentPassword);
  let crackTime = '';
  
  if (passwordType === 'pin') {
    const possibleCombinations = Math.pow(10, currentPassword.length);
    if (possibleCombinations <= 10000) {
      crackTime = 'Instantly';
    } else if (possibleCombinations <= 100000) {
      crackTime = 'Less than a minute';
    } else if (possibleCombinations <= 1000000) {
      crackTime = 'A few minutes';
    } else {
      crackTime = 'Several hours';
    }
  } else {
    switch (strength) {
      case 'vulnerable':
        crackTime = 'Instantly';
        break;
      case 'weak':
        crackTime = 'A few hours to a few days';
        break;
      case 'medium':
        crackTime = 'A few weeks to a few months';
        break;
      case 'strong':
        crackTime = 'A few years to several decades';
        break;
      case 'very-strong':
        crackTime = 'Centuries or more';
        break;
    }
  }
  
  crackTimeText.textContent = `Estimated time to crack: ${crackTime}`;
}

// Show toast notification
function showToast(message) {
  // Check if a toast already exists
  let toast = document.querySelector('.toast');
  if (toast) {
    toast.remove();
  }
  
  // Create new toast
  toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  // Add toast styles
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  toast.style.color = 'white';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '4px';
  toast.style.zIndex = '1000';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.3s ease';
  
  document.body.appendChild(toast);
  
  // Animate toast
  setTimeout(() => {
    toast.style.opacity = '1';
  }, 10);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Create ripple effect
function createRipple(event) {
  const button = event.currentTarget;
  
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add('ripple');
  
  const ripple = button.getElementsByClassName('ripple')[0];
  
  if (ripple) {
    ripple.remove();
  }
  
  button.appendChild(circle);
}

// Add ripple style
const style = document.createElement('style');
style.textContent = `
  button {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
    background-color: rgba(255, 255, 255, 0.7);
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes animate-fade {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  .animate-fade {
    animation: animate-fade 0.5s ease-in-out;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  .pulse {
    animation: pulse 0.5s ease-in-out;
  }
`;

document.head.appendChild(style);

// Initialize the app
document.addEventListener('DOMContentLoaded', init);