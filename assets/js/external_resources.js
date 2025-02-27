// Resources data
const resources = [
    {
      id: 1,
      name: "Phishtank",
      category: "Phishing",
      description: "A community-driven website that tracks and verifies phishing scams. Users can report and verify suspicious emails or links.",
      url: "https://phishtank.org/",
      imageUrl: "./assets/imgs/phishtank.png"
    },
    {
      id: 2,
      name: "Avast Password Generator",
      category: "Password Generator",
      description: "It is a user-friendly tool that creates strong, unique passwords for your online accounts, enhancing security by making it difficult for hackers to access your personal information.",
      url: "https://www.nomoreransom.org/en/index.html",
      imageUrl: "./assets/imgs/avast_password_generator.png"
    },
    {
      id: 3,
      name: "No More Ransom",
      category: "Ransomware",
      description: "NoMoreRansom.org is a helpful website that offers free tools to unlock your files if they get locked by ransomware. It also shares tips to keep your digital life secure.",
      url: "https://zonealarm.com",
      imageUrl: "./assets/imgs/nomoreransom.png"
    },
    {
      id: 4,
      name: "URLScan.io",
      category: "Phishing",
      description: "This service allows you to scan and analyze websites for potential threats, including phishing and malware.",
      url: "https://urlscan.io/",
      imageUrl: "./assets/imgs/urlscan.png"
    },
    {
      id: 5,
      name: "Virustotal",
      category: "Phishing",
      description: "VirusTotal is a user-friendly online tool that scans files and URLs for potential threats. It analyzes them using multiple antivirus engines, giving you a comprehensive view of their safety status.",
      url: "https://www.virustotal.com/gui/home/upload",
      imageUrl: "./assets/imgs/virustotal.png"
    },
    {
      id: 6,
      name: "Cybercrime Support Network",
      category: "Fight Cybercrime",
      description: "The Cybercrime Support Network is an organization that assists individuals and businesses affected by cybercrime. They provide support, resources, and guidance to help victims navigate the aftermath of cybercrimes and recover from the impact.",
      url: "https://fightcybercrime.org/",
      imageUrl: "./assets/imgs/fightcybercrime.png"
    },
    {
      id: 7,
      name: "National Cyber Security Alliance",
      category: "Fight Cybercrime",
      description: "NCSA is a non-profit organization that promotes and educates people about safe and secure online practices, helping to protect individuals and businesses from cyber threats.",
      url: "https://staysafeonline.org/",
      imageUrl: "./assets/imgs/staysafeonline.png"
    },
    {
      id: 8,
      name: "BBB Scam Tracker",
      category: "Scam",
      description: "It provides valuable information to the public about various types of scams, trends in fraudulent activities, and tips on how to avoid falling victim to scams.",
      url: "https://www.bbb.org/scamtracker",
      imageUrl: "./assets/imgs/scamtracker.png"
    },
    {
      id: 9,
      name: "ScamAdvisor",
      category: "Scam",
      description: "It provides valuable information to the public about various types of scams, trends in fraudulent activities, and tips on how to avoid falling victim to scams.",
      url: "https://kaspersky.com",
      imageUrl: "./assets/imgs/scamadvisor.png"
    },
    {
      id: 10,
      name: "Scamwatch (Australia)",
      category: "Scam",
      description: "This government website provides information about current scams and tips to avoid falling victim to them.",
      url: "https://www.scamwatch.gov.au/",
      imageUrl: "./assets/imgs/scamwatch.png"
    },
    {
      id: 11,
      name: "World Intellectual Property Organization",
      category: "Patent Security",
      description: "WIPO, is a United Nations agency dedicated to managing and safeguarding intellectual property rights globally, including patents, trademarks, and copyrights.",
      url: "https://www.wipo.int/portal/en/index.html",
      imageUrl: "./assets/imgs/wipo.png"
    },
    {
      id: 12,
      name: "Take It Down",
      category: "revenge_porn",
      description: "It is a service that helps people remove sexually explicit images of themselves as minors from the internet. The service was launched by the National Center for Missing and Exploited Children (NCMEC). It's funded by Meta, the parent company of Facebook.",
      url: "https://takeitdown.ncmec.org/",
      imageUrl: "./assets/imgs/takeitdown.png"
    },
    {
        id: 13,
        name: "StopNCII.org",
        category: "revenge_porn",
        description: "StopNCII.org, run by the Revenge Porn Helpline, helps stop people from sharing intimate pictures without permission. They use smart technology to keep individuals safe online and have removed many such images from the internet.",
        url: "https://takeitdown.ncmec.org/",
        imageUrl: "./assets/imgs/stopncii.png"
    },
    {
        id: 14,
        name: "Have I been Pwned",
        category: "cred_check",
        description: "Check if your email address or passwords have been compromised in data breaches to enhance your online security.",
        url: "https://haveibeenpwned.com/",
        imageUrl: "./assets/imgs/haveibeenpwned.png"
    }
  ];
  
  // DOM Elements
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search');
  const categorySelect = document.getElementById('category-select');
  const resultsText = document.getElementById('results-text');
  const resourcesGrid = document.getElementById('resources-grid');
  const noResults = document.getElementById('no-results');
  const redirectPopup = document.getElementById('redirect-popup');
  const closePopupBtn = document.getElementById('close-popup');
  const cancelRedirectBtn = document.getElementById('cancel-redirect');
  const destinationUrl = document.getElementById('destination-url');
  const resourceInfo = document.getElementById('resource-info');
  const countdownNumber = document.getElementById('countdown-number');
  const goNowLink = document.getElementById('go-now-link');
  const currentYearElement = document.getElementById('current-year');
  
  
  
  // State
  let searchTerm = '';
  let selectedCategory = 'all';
  let countdownTimer = null;
  let currentRedirectUrl = '';
  
  // Initialize
  renderResources();
  
  // Event Listeners
  searchInput.addEventListener('input', handleSearch);
  clearSearchBtn.addEventListener('click', clearSearch);
  categorySelect.addEventListener('change', handleCategoryChange);
  closePopupBtn.addEventListener('click', closeRedirectPopup);
  cancelRedirectBtn.addEventListener('click', closeRedirectPopup);
  
  // Functions
  function handleSearch(e) {
    searchTerm = e.target.value.trim().toLowerCase();
    toggleClearButton();
    renderResources();
  }
  
  function clearSearch() {
    searchTerm = '';
    searchInput.value = '';
    toggleClearButton();
    renderResources();
  }
  
  function toggleClearButton() {
    if (searchTerm) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
  }
  
  function handleCategoryChange(e) {
    selectedCategory = e.target.value;
    renderResources();
  }
  
  function renderResources() {
    // Filter resources
    const filteredResources = resources.filter(resource => {
      const matchesSearch = resource.name.toLowerCase().includes(searchTerm) || 
                            resource.description.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    // Update results text
    if (selectedCategory !== 'all') {
      const categoryLabel = categorySelect.options[categorySelect.selectedIndex].text;
      resultsText.innerHTML = `Showing <span class="results-count">${filteredResources.length}</span> results for: <span class="results-category">${categoryLabel}</span>`;
    } else if (searchTerm) {
      resultsText.innerHTML = `Showing <span class="results-count">${filteredResources.length}</span> results for: <span class="results-category">"${searchTerm}"</span>`;
    } else {
      resultsText.innerHTML = `Showing all <span class="results-count">${filteredResources.length}</span> resources`;
    }
    
    // Clear grid
    resourcesGrid.innerHTML = '';
    
    // Show no results or render resources
    if (filteredResources.length === 0) {
      resourcesGrid.classList.add('hidden');
      noResults.classList.remove('hidden');
    } else {
      resourcesGrid.classList.remove('hidden');
      noResults.classList.add('hidden');
      
      // Render each resource
      filteredResources.forEach(resource => {
        const card = createResourceCard(resource);
        resourcesGrid.appendChild(card);
      });
    }
  }
  
  function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.dataset.id = resource.id;
    
    card.innerHTML = `
      <div class="card-image">
        <img src="${resource.imageUrl}" alt="${resource.name}">
      </div>
      <div class="card-content">
        <div class="card-header">
          <h3 class="card-title">${resource.name}</h3>
        </div>
        <p class="card-description">${resource.description}</p>
        <div class="visit-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
          <span>Visit Website</span>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      showRedirectPopup(resource);
    });
    
    return card;
  }
  
  function showRedirectPopup(resource) {
    // Set popup content
    destinationUrl.textContent = resource.url;
    resourceInfo.innerHTML = `
      <p>You are about to visit <span class="resource-name">${resource.name}</span>, which provides <span class="resource-category">${resource.category}</span> services.</p>
    `;
    
    // Set redirect URL
    currentRedirectUrl = resource.url;
    goNowLink.href = resource.url;
    
    // Show popup
    redirectPopup.classList.remove('hidden');
    
    // Start countdown
    let countdown = 10;
    countdownNumber.textContent = countdown;
    
    if (countdownTimer) {
      clearInterval(countdownTimer);
    }
    
    countdownTimer = setInterval(() => {
      countdown--;
      countdownNumber.textContent = countdown;
      
      if (countdown <= 0) {
        clearInterval(countdownTimer);
        window.open(currentRedirectUrl, '_blank');
        closeRedirectPopup();
      }
    }, 1000);
  }
  
  function closeRedirectPopup() {
    redirectPopup.classList.add('hidden');
    
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
  }