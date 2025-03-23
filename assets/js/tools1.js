// Tool data
const tools = [
    {
      id: "dashlane",
      name: "Dashlane",
      category: "Password Manager",
      description: "An online password manager that keeps all your passwords safe behind one master password. It has a password generator and autosave feature for seamless logins across devices.",
      logo: "./assets/imgs/dashlane.png",
      features: [
        "Secure password storage",
        "Password generator",
        "Autofill capabilities",
        "Cross-device synchronization",
        "Secure notes storage"
      ],
      instructions: "Download Dashlane from their official website. Create an account and set a strong master password. Install browser extensions for autofill functionality. Import your existing passwords or add them manually.",
      downloadLink: "https://www.dashlane.com/download",
      videoLink: "https://www.youtube.com/watch?v=KN-_q3T4zZE",
      websiteLink: "https://www.dashlane.com"
    },
    {
      id: "protonpass",
      name: "ProtonPass",
      category: "Password Manager",
      description: "A privacy-first password manager with end-to-end encryption, no tracking, and seamless device sync, from the creators of ProtonMail.",
      logo: "./assets/imgs/proton.png",
      features: [
        "End-to-end encryption",
        "No tracking",
        "Device synchronization",
        "Integrated with ProtonMail",
        "Open-source security"
      ],
      instructions: "Visit the ProtonPass website and sign up for an account. If you already have a Proton account, you can use the same credentials. Install the browser extension and mobile app for the best experience.",
      downloadLink: "https://proton.me/pass/download",
      videoLink: "https://www.youtube.com/watch?v=vcCWartESfs",
      websiteLink: "https://proton.me/pass"
    },
    {
      id: "1password",
      name: "1Password",
      category: "Password Manager",
      description: "A popular password manager that creates strong, unique passwords for every account. It stores passwords securely in a digital vault and syncs across all your devices.",
      logo: "./assets/imgs/1password.png",
      features: [
        "Digital vault storage",
        "Strong password generation",
        "Cross-platform support",
        "Travel mode for border crossings",
        "Family sharing options"
      ],
      instructions: "Download 1Password from their website. Create your account and set up your vault with a strong master password. Install browser extensions and mobile apps as needed. Begin adding your login credentials to your vault.",
      downloadLink: "https://1password.com/downloads/",
      videoLink: "https://www.youtube.com/watch?v=RM0fzHxMASQ",
      websiteLink: "https://1password.com"
    },
    {
      id: "lastpass",
      name: "LastPass",
      category: "Password Manager",
      description: "A password manager that securely stores all your passwords in an encrypted vault. It generates strong, unique passwords for each site and logs you in with a single click.",
      logo: "./assets/imgs/lastpass.png",
      features: [
        "Encrypted password vault",
        "One-click login",
        "Password generator",
        "Secure notes",
        "Emergency access"
      ],
      instructions: "Sign up for LastPass on their website. Install the browser extension and mobile app. Create a strong master password. Begin saving your passwords as you log into websites, or import them from your browser.",
      downloadLink: "https://www.lastpass.com/get-premium",
      videoLink: "https://www.youtube.com/watch?v=Q-jzKVpq73E",
      websiteLink: "https://www.lastpass.com"
    },
    {
      id: "microsoft-authenticator",
      name: "Microsoft Authenticator",
      category: "Multi-Factor Authentication",
      description: "A secure authentication app that provides two-factor authentication with ease, ensuring your accounts are protected across all devices.",
      logo: "./assets/imgs/microsoft.png",
      features: [
        "Two-factor authentication",
        "Phone sign-in",
        "Cloud backup",
        "Password management",
        "Microsoft account integration"
      ],
      instructions: "Download Microsoft Authenticator from your device's app store. Open the app and add your accounts either by scanning QR codes or entering setup keys. Use the app whenever you need to verify your identity.",
      downloadLink: "https://www.microsoft.com/en-us/security/mobile-authenticator-app",
      videoLink: "https://www.youtube.com/watch?v=uWbkLuI4g4Q",
      websiteLink: "https://www.microsoft.com/en-us/security/mobile-authenticator-app"
    },
    {
      id: "google-authenticator",
      name: "Google Authenticator",
      category: "Multi-Factor Authentication",
      description: "Google Authenticator adds an extra layer of security to your online accounts by adding a second step of verification when you sign in.",
      logo: "https://play-lh.googleusercontent.com/NntMALIH4odanPPYSqUOXsX8zy_giiK2olJiqkcxwFIOOspVrhMi9Miv6LYdRnKIg-3R=w240-h480-rw",
      features: [
        "Time-based one-time passwords",
        "Offline functionality",
        "Multiple account support",
        "QR code scanning",
        "Transfer accounts between devices"
      ],
      instructions: "Download Google Authenticator from your app store. Open the app and add an account by scanning a QR code or entering a provided key. Use the generated codes when signing into your accounts.",
      downloadLink: "https://googleauthenticator.net/",
      videoLink: "https://www.youtube.com/watch?v=VqpWJeb3jW8",
      websiteLink: "https://googleauthenticator.net/"
    },
    {
      id: "avast",
      name: "Avast",
      category: "Antivirus",
      description: "Avast keeps your devices safe from online dangers. It's easy to use, detecting and stopping malware, so you can enjoy the internet worry-free.",
      logo: "./assets/imgs/avast.png",
      features: [
        "Real-time virus protection",
        "Malware detection and removal",
        "Web shield",
        "Email protection",
        "Ransomware shield"
      ],
      instructions: "Download Avast from their official website. Run the installer and follow the on-screen instructions. After installation, run a full system scan to check for existing threats. Configure scheduled scans for ongoing protection.",
      downloadLink: "https://www.avast.com/free-antivirus-download",
      videoLink: "https://www.youtube.com/watch?v=Vk5FnpixSqw",
      websiteLink: "https://www.avast.com"
    },
    {
      id: "adblocker",
      name: "AdBlocker",
      category: "Ad-Blocker",
      description: "AdBlocker is a browser extension that blocks ads and trackers, giving you a faster, safer, and more private way to explore the web.",
      logo: "./assets/imgs/ad.png",
      features: [
        "Ad blocking",
        "Tracker blocking",
        "Customizable filters",
        "Whitelisting capability",
        "Performance improvement"
      ],
      instructions: "Visit your browser's extension store and search for AdBlocker. Click Install or Add to Browser. After installation, you can configure settings by clicking on the AdBlocker icon in your browser toolbar.",
      downloadLink: "https://getadblock.com/",
      videoLink: "https://www.youtube.com/watch?v=2Vx4-OL1k8s",
      websiteLink: "https://getadblock.com/"
    },
    {
      id: "protonvpn",
      name: "ProtonVPN",
      category: "VPN",
      description: "ProtonVPN is a user-friendly virtual private network (VPN) that shields your online activity. It encrypts your connection, keeping your data secure and enabling safe browsing on public networks.",
      logo: "./assets/imgs/proton.png",
      features: [
        "Secure Core servers",
        "No-logs policy",
        "Kill switch",
        "DNS leak protection",
        "P2P support"
      ],
      instructions: "Download ProtonVPN from their website. Install the application and sign in with your Proton account. If you don't have one, you'll need to create it. Select a server location and connect to start browsing securely.",
      downloadLink: "https://protonvpn.com/download",
      videoLink: "https://www.youtube.com/watch?v=XDSby9V5GeI",
      websiteLink: "https://protonvpn.com"
    },
    {
      id: "duo-mobile",
      name: "Duo Mobile",
      category: "Multi-Factor Authentication",
      description: "Duo Mobile is a user-friendly app that adds two-factor authentication to your accounts. It generates passcodes for login and can receive push notifications for easy, one-tap authentication.",
      logo: "./assets/imgs/duo.png",
      features: [
        "Push notifications",
        "Passcode generation",
        "Offline support",
        "Backup options",
        "Multiple account support"
      ],
      instructions: "Download Duo Mobile from your app store. When enrolling in Duo at your organization, you'll be prompted to activate Duo Mobile by scanning a QR code. Once activated, you can approve authentication requests via push notifications or generate passcodes.",
      downloadLink: "https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app",
      videoLink: "https://www.youtube.com/watch?v=tPLQe6chz9Q",
      websiteLink: "https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app"
    },
    {
      id: "truecaller",
      name: "True Caller",
      category: "Anti Scam",
      description: "Truecaller is a user-friendly caller ID and spam blocking app. It identifies unknown callers, filters spam, and helps you stay in control of your incoming calls and messages.",
      logo: "./assets/imgs/truecaller.png",
      features: [
        "Caller identification",
        "Spam blocking",
        "SMS filtering",
        "Call recording",
        "Block list management"
      ],
      instructions: "Download Truecaller from your app store. Open the app and follow the setup process, which includes verifying your phone number. Grant the necessary permissions for the app to function properly. Customize your settings for call blocking and identification.",
      downloadLink: "https://www.truecaller.com/",
      videoLink: "https://www.youtube.com/watch?v=g59TFV2LFbk",
      websiteLink: "https://www.truecaller.com/"
    },
    {
      id: "hiya",
      name: "Hiya: Spam Blocker & Caller ID",
      category: "Anti Scam",
      description: "Hiya is an easy-to-use app that blocks spam calls and shows caller IDs. It keeps unwanted callers at bay and helps you identify important calls with confidence.",
      logo: "https://assets-global.website-files.com/5dc2e934de1955d46d9f8eb5/5f1a08b8f263c3ef6e879a5b_hiya%20logo.svg",
      features: [
        "Spam call detection",
        "Caller ID",
        "Automatic call blocking",
        "Neighborhood spoofing protection",
        "Personal block list"
      ],
      instructions: "Download Hiya from your device's app store. Open the app and follow the setup instructions, which include verifying your phone number and granting necessary permissions. Customize your protection level in the settings.",
      downloadLink: "https://www.hiya.com/",
      videoLink: "https://www.youtube.com/watch?v=ZxiKGLpL1Fw",
      websiteLink: "https://www.hiya.com/"
    },
    {
      id: "wot",
      name: "Website Safety Check & Phishing Protection",
      category: "Browser Extensions",
      description: "WOT is a browser extension that helps users identify trustworthy websites and warns them about potentially harmful sites.",
      logo: "./assets/imgs/wot.jpg",
      features: [
        "Website reputation ratings",
        "Phishing protection",
        "Search result safety icons",
        "Community-based ratings",
        "Child safety filter"
      ],
      instructions: "Visit your browser's extension store and search for Web of Trust (WOT). Click Install or Add to Browser. After installation, the WOT icon will appear in your browser toolbar. Click it to see website ratings or adjust settings.",
      downloadLink: "https://www.mywot.com/",
      videoLink: "https://www.youtube.com/watch?v=QQKVzZpXTpQ",
      websiteLink: "https://www.mywot.com/"
    }
  ];
  
  // DOM elements
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const toolsGrid = document.getElementById('tools-grid');
  const modal = document.getElementById('tool-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const backToListBtn = document.getElementById('back-to-list');
  const searchResultsSummary = document.getElementById('search-results-summary');
  
  // Populate category filter
  const categories = [...new Set(tools.map(tool => tool.category))];
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
  
  // Render tools
  function renderTools(toolsToRender) {
    toolsGrid.innerHTML = '';
    
    // Update search results summary
    updateSearchResultsSummary(toolsToRender);
    
    if (toolsToRender.length === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
        width: 100%;
        color: #4a5568;
        font-family: 'Arial', sans-serif;
        padding: 20px;
      ">
        <div style="
          padding: 2rem;
          border-radius: 12px;
        ">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          <p style="font-size: 1.8rem; font-weight: bold; margin: 0; color: #333;">No tools found</p>
          <p style="font-size: 1.3rem; margin: 0.5rem 0; color: #6b7280;">Try adjusting your search or filter settings.</p>
        </div>
      </div>
    `;

      toolsGrid.appendChild(noResults);
      return;
    }
    
    toolsToRender.forEach(tool => {
      const toolCard = document.createElement('div');
      toolCard.className = 'tool-card';
      toolCard.dataset.id = tool.id;
      
      toolCard.innerHTML = `
        <div class="tool-content">
          <div class="tool-logo-container">
            <img src="${tool.logo}" alt="${tool.name} logo" class="tool-logo">
          </div>
          <div class="tool-info">
            <h2 class="tool-name">${tool.name}</h2>
            <span class="category-badge">${tool.category}</span>
            <p class="tool-description">${tool.description}</p>
          </div>
        </div>
        <div class="tool-footer">
          <button class="view-details">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            View Details
          </button>
        </div>
      `;
      
      toolCard.addEventListener('click', () => openToolDetails(tool));
      toolsGrid.appendChild(toolCard);
    });
  }
  
  // Update search results summary
  function updateSearchResultsSummary(toolsToRender) {
    const count = toolsToRender.length;
    const selectedCategory = categoryFilter.value;
    const searchTerm = searchInput.value.trim();
    
    let summaryText = '';
    
    if (count === 0) {
      summaryText = 'No resources found';
      if (searchTerm) {
        summaryText += ` for "${searchTerm} "`;
      }
      if (selectedCategory) {
        summaryText += ` in ${selectedCategory} `;
      }
    } else {
      summaryText = `<span class="highlight">${count} </span>&nbsp; resource${count !== 1 ? 's' : ''} found`;
      if (searchTerm) {
        summaryText += ` for "${searchTerm}"`;
      }
      if (selectedCategory) {
        summaryText += ` in &nbsp; <span class="highlight"> ${selectedCategory } </span>`;
      }
    }
    
    searchResultsSummary.innerHTML = summaryText;
  }
  
  // Filter tools
  function filterTools() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    
    const filteredTools = tools.filter(tool => {
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchTerm) || 
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.category.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory === '' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    
    renderTools(filteredTools);
  }
  
  // Open tool details modal
  function openToolDetails(tool) {
    // Populate modal content
    document.getElementById('modal-logo').src = tool.logo;
    document.getElementById('modal-logo').alt = `${tool.name} logo`;
    document.getElementById('modal-title').textContent = tool.name;
    document.getElementById('modal-category').textContent = tool.category;
    document.getElementById('modal-description').textContent = tool.description;
    
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    tool.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
    
    document.getElementById('modal-instructions').textContent = tool.instructions;
    
    // Set up action buttons
    const watchVideoBtn = document.getElementById('watch-video');
    const downloadToolBtn = document.getElementById('download-tool');
    const visitWebsiteBtn = document.getElementById('visit-website');
    
    if (tool.videoLink) {
      watchVideoBtn.href = tool.videoLink;
      watchVideoBtn.style.display = 'flex';
    } else {
      watchVideoBtn.style.display = 'none';
    }
    
    if (tool.downloadLink) {
      downloadToolBtn.href = tool.downloadLink;
      downloadToolBtn.style.display = 'flex';
    } else {
      downloadToolBtn.style.display = 'none';
    }
    
    if (tool.websiteLink) {
      visitWebsiteBtn.href = tool.websiteLink;
      visitWebsiteBtn.style.display = 'flex';
    } else {
      visitWebsiteBtn.style.display = 'none';
    }
    
    // Show modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
  }
  
  // Close modal
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Restore scrolling
  }
  
  // Event listeners
  searchInput.addEventListener('input', filterTools);
  categoryFilter.addEventListener('change', filterTools);
  closeModalBtn.addEventListener('click', closeModal);
  backToListBtn.addEventListener('click', closeModal);
  
  // Close modal when clicking outside of it
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
  
  // Initial render
  renderTools(tools);
  
  // Add focus to search input on page load
  window.addEventListener('load', () => {
    searchInput.focus();
  });

  