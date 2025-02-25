// Password Generator
const passwordOutput = document.getElementById('passwordOutput');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheck = document.getElementById('uppercaseCheck');
const lowercaseCheck = document.getElementById('lowercaseCheck');
const numbersCheck = document.getElementById('numbersCheck');
const symbolsCheck = document.getElementById('symbolsCheck');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');

// Have I Been Pwned
const pwnedInput = document.getElementById('pwnedInput');
const pwnedButton = document.getElementById('pwnedButton');

// VirusTotal
const virusTotalInput = document.getElementById('virusTotalInput');
const virusTotalButton = document.getElementById('virusTotalButton');
const scanTypeRadios = document.getElementsByName('scanType');

// Password Generator Functions
function generatePassword() {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (uppercaseCheck.checked) chars += uppercase;
    if (lowercaseCheck.checked) chars += lowercase;
    if (numbersCheck.checked) chars += numbers;
    if (symbolsCheck.checked) chars += symbols;

    if (!chars) {
        showToast('Please select at least one character type', 'error');
        return;
    }

    let password = '';
    const length = parseInt(lengthSlider.value);
    
    // Ensure at least one character from each selected type
    if (uppercaseCheck.checked) password += uppercase[Math.floor(Math.random() * uppercase.length)];
    if (lowercaseCheck.checked) password += lowercase[Math.floor(Math.random() * lowercase.length)];
    if (numbersCheck.checked) password += numbers[Math.floor(Math.random() * numbers.length)];
    if (symbolsCheck.checked) password += symbols[Math.floor(Math.random() * symbols.length)];
    
    // Fill the rest randomly
    while (password.length < length) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    // Shuffle the password
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    // Animate the password change
    passwordOutput.style.opacity = '0';
    setTimeout(() => {
        passwordOutput.value = password;
        passwordOutput.style.opacity = '1';
        updatePasswordSegments();
    }, 150);
}

function updatePasswordSegments() {
    const segments = document.querySelectorAll('.segment');
    
    segments.forEach(segment => segment.classList.remove('active'));
    
    setTimeout(() => {
        segments[0].classList.toggle('active', uppercaseCheck.checked);
        segments[1].classList.toggle('active', numbersCheck.checked);
        segments[2].classList.toggle('active', symbolsCheck.checked);
    }, 50);
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

async function copyToClipboard() {
    if (!passwordOutput.value) return;
    
    try {
        await navigator.clipboard.writeText(passwordOutput.value);
        const originalText = copyButton.innerHTML;
        
        // Add loading state
        copyButton.classList.add('loading');
        
        setTimeout(() => {
            // Remove loading and show success
            copyButton.classList.remove('loading');
            copyButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
                Copied!
            `;
            
            // Animate the password display
            const passwordDisplay = document.querySelector('.password-display');
            passwordDisplay.classList.add('copied');
            setTimeout(() => passwordDisplay.classList.remove('copied'), 300);
            
            // Reset button after delay
            setTimeout(() => {
                copyButton.innerHTML = originalText;
            }, 2000);
        }, 500);
        
    } catch (err) {
        showToast('Failed to copy password', 'error');
    }
}

// Event Listeners with debouncing
let generateTimeout;
function debouncedGenerate() {
    clearTimeout(generateTimeout);
    generateTimeout = setTimeout(generatePassword, 100);
}

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
    // Animate the length badge
    lengthValue.style.transform = 'scale(1.1)';
    setTimeout(() => {
        lengthValue.style.transform = 'scale(1)';
    }, 150);
    debouncedGenerate();
});

[uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck].forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        checkbox.parentElement.classList.add('active');
        setTimeout(() => checkbox.parentElement.classList.remove('active'), 300);
        generatePassword();
    });
});

generateButton.addEventListener('click', () => {
    generateButton.classList.add('loading');
    setTimeout(() => {
        generatePassword();
        generateButton.classList.remove('loading');
    }, 300);
});

copyButton.addEventListener('click', copyToClipboard);

// Have I Been Pwned with loading state
pwnedButton.addEventListener('click', () => {
    if (!pwnedInput.value) {
        showToast('Please enter an email or password to check', 'error');
        return;
    }
    
    pwnedButton.classList.add('loading');
    setTimeout(() => {
        const url = `https://haveibeenpwned.com/account/${encodeURIComponent(pwnedInput.value)}`;
        window.open(url, '_blank');
        pwnedButton.classList.remove('loading');
    }, 500);
});

// VirusTotal with loading state
virusTotalButton.addEventListener('click', () => {
    if (!virusTotalInput.value) {
        showToast('Please enter a URL or file hash to scan', 'error');
        return;
    }
    
    virusTotalButton.classList.add('loading');
    setTimeout(() => {
        const scanType = Array.from(scanTypeRadios).find(radio => radio.checked).value;
        let url;
        
        if (scanType === 'url') {
            url = `https://www.virustotal.com/gui/url/${encodeURIComponent(virusTotalInput.value)}`;
        } else {
            url = `https://www.virustotal.com/gui/file/${encodeURIComponent(virusTotalInput.value)}`;
        }
        
        window.open(url, '_blank');
        virusTotalButton.classList.remove('loading');
    }, 500);
});

// Radio button animations
scanTypeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        radio.parentElement.classList.add('active');
        setTimeout(() => radio.parentElement.classList.remove('active'), 300);
        
        // Update input placeholder based on selected type
        virusTotalInput.placeholder = radio.value === 'url' 
            ? 'Enter URL to scan' 
            : 'Enter file hash to scan';
    });
});

// Initialize
generatePassword();