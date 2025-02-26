// Constants
const commonWords = [
    'mountain', 'ocean', 'forest', 'river', 'desert',
    'castle', 'dragon', 'phoenix', 'thunder', 'rainbow',
    'crystal', 'diamond', 'emerald', 'sapphire', 'ruby',
    'falcon', 'dolphin', 'tiger', 'eagle', 'wolf',
    'breeze', 'storm', 'sunset', 'dawn', 'dusk'
  ];
  
  // DOM Elements
  const passwordOutput = document.getElementById('passwordOutput');
  const copyButton = document.getElementById('copyButton');
  const generateBtn = document.getElementById('generateBtn');
  const modeToggleBtn = document.getElementById('modeToggleBtn');
  const lengthSlider = document.getElementById('lengthSlider');
  const lengthValue = document.getElementById('lengthValue');
  const characterOptions = document.getElementById('characterOptions');
  const modeBanner = document.getElementById('modeBanner');
  const strengthBadge = document.getElementById('strengthBadge');
  const strengthIcon = document.getElementById('strengthIcon');
  
  // Checkboxes
  const lowercase = document.getElementById('lowercase');
  const uppercase = document.getElementById('uppercase');
  const numbers = document.getElementById('numbers');
  const symbols = document.getElementById('symbols');
  const spaces = document.getElementById('spaces');
  
  // State
  let isMemorableMode = false;
  
  // Functions
  function generatePassword(length, options) {
    const chars = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
      spaces: ' '
    };
  
    let availableChars = '';
    if (options.lowercase) availableChars += chars.lowercase;
    if (options.uppercase) availableChars += chars.uppercase;
    if (options.numbers) availableChars += chars.numbers;
    if (options.symbols) availableChars += chars.symbols;
    if (options.spaces) availableChars += chars.spaces;
  
    if (availableChars === '') availableChars = chars.lowercase;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      password += availableChars[randomIndex];
    }
    return password;
  }
  
  function generateMemorablePassword(length) {
    let password = '';
    while (password.length < length) {
      const word = commonWords[Math.floor(Math.random() * commonWords.length)];
      const number = Math.floor(Math.random() * 999);
      const symbol = '!@#$%^&*()_+-=[]{}|;:,.<>?'[Math.floor(Math.random() * 21)];
      
      if (password.length === 0) {
        password = word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        password += symbol + word;
      }
      
      if (password.length < length) {
        password += number;
      }
    }
    return password.slice(0, length);
  }
  
  function calculatePasswordStrength(password) {
    const length = password.length;
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);
    
    const varietyCount = [hasLower, hasUpper, hasNumber, hasSymbol].filter(Boolean).length;
    
    if (length >= 12 && varietyCount >= 3) return 'strong';
    if (length >= 8 && varietyCount >= 2) return 'medium';
    return 'weak';
  }
  
  function updateStrengthIndicator(strength) {
    const colors = {
      weak: '#ef4444',
      medium: '#eab308',
      strong: '#22c55e'
    };
  
    const icons = {
      weak: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${colors.weak}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
      medium: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${colors.medium}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
      strong: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${colors.strong}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`
    };
  
    strengthBadge.textContent = strength.charAt(0).toUpperCase() + strength.slice(1);
    strengthBadge.style.backgroundColor = colors[strength];
    strengthIcon.innerHTML = icons[strength];
  }
  
  function generateNewPassword() {
    const length = parseInt(lengthSlider.value);
    let newPassword;
  
    if (isMemorableMode) {
      newPassword = generateMemorablePassword(length);
    } else {
      newPassword = generatePassword(length, {
        lowercase: lowercase.checked,
        uppercase: uppercase.checked,
        numbers: numbers.checked,
        symbols: symbols.checked,
        spaces: spaces.checked
      });
    }
  
    passwordOutput.value = newPassword;
    updateStrengthIndicator(calculatePasswordStrength(newPassword));
  }
  
  // Event Listeners
  generateBtn.addEventListener('click', generateNewPassword);
  
  modeToggleBtn.addEventListener('click', () => {
    isMemorableMode = !isMemorableMode;
    modeToggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
      </svg>
      <span>${isMemorableMode ? 'Memorable Mode' : 'Complex Mode'}</span>
    `;
    modeToggleBtn.classList.toggle('active');
    characterOptions.style.display = isMemorableMode ? 'none' : 'block';
    modeBanner.classList.toggle('active', isMemorableMode);
    generateNewPassword();
  });
  
  lengthSlider.addEventListener('input', (e) => {
    lengthValue.textContent = e.target.value;
    generateNewPassword();
  });
  
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(passwordOutput.value);
      copyButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
      setTimeout(() => {
        copyButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="13" height="13" x="9" y="9" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        `;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy password:', err);
    }
  });
  
  [lowercase, uppercase, numbers, symbols, spaces].forEach(checkbox => {
    checkbox.addEventListener('change', generateNewPassword);
  });
  
  // Initial password generation
  generateNewPassword();