// Platform data
const platforms = [
  {
    id: 'facebook',
    name: 'Facebook',
    logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Report harassment, fake accounts, privacy violations, and content issues.',
    categories: [
      { name: 'Harassment', url: 'https://www.facebook.com/help/contact/274459462613911' },
      { name: 'Hacked Account', url: 'https://www.facebook.com/hacked' },
      { name: 'Impersonation', url: 'https://www.facebook.com/help/contact/295309487309948' },
      { name: 'Privacy Violation', url: 'https://www.facebook.com/help/contact/144059062408922' }
    ]
  },
  {
    id: 'instagram',
    name: 'Instagram',
    logo: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Report bullying, impersonation, intellectual property violations, and more.',
    categories: [
      { name: 'Harassment/Bullying', url: 'https://help.instagram.com/contact/584460464982589' },
      { name: 'Hacked Account', url: 'https://help.instagram.com/368191326593075' },
      { name: 'Impersonation', url: 'https://help.instagram.com/contact/636276399721841' },
      { name: 'Copyright Violation', url: 'https://help.instagram.com/contact/372592039493026' }
    ]
  },
  {
    id: 'twitter',
    name: 'Twitter',
    logo: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Report abusive behavior, spam, privacy concerns, and impersonation.',
    categories: [
      { name: 'Abusive Behavior', url: 'https://help.twitter.com/forms/abusiveuser' },
      { name: 'Hacked Account', url: 'https://help.twitter.com/forms/account-access' },
      { name: 'Impersonation', url: 'https://help.twitter.com/forms/impersonation' },
      { name: 'Privacy Violation', url: 'https://help.twitter.com/forms/private_information' }
    ]
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    logo: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Report harassment, dangerous content, privacy violations, and more.',
    categories: [
      { name: 'Harassment', url: 'https://www.tiktok.com/legal/report/privacy' },
      { name: 'Hacked Account', url: 'https://www.tiktok.com/legal/report/account-hacked' },
      { name: 'Dangerous Content', url: 'https://www.tiktok.com/legal/report/dangerous-content' },
      { name: 'Privacy Violation', url: 'https://www.tiktok.com/legal/report/privacy' }
    ]
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    logo: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Report harassment, fake profiles, inappropriate content, and more.',
    categories: [
      { name: 'Harassment', url: 'https://www.linkedin.com/help/linkedin/answer/37822' },
      { name: 'Fake Profile', url: 'https://www.linkedin.com/help/linkedin/answer/61664' },
      { name: 'Inappropriate Content', url: 'https://www.linkedin.com/help/linkedin/answer/146' },
      { name: 'Account Issues', url: 'https://www.linkedin.com/help/linkedin/answer/56196' }
    ]
  },
  {
    id: 'youtube',
    name: 'YouTube',
    logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Report harassment, privacy violations, harmful content, and more.',
    categories: [
      { name: 'Harassment', url: 'https://support.google.com/youtube/answer/2802268' },
      { name: 'Privacy Violation', url: 'https://support.google.com/youtube/answer/142443' },
      { name: 'Harmful Content', url: 'https://support.google.com/youtube/answer/2802027' },
      { name: 'Copyright Violation', url: 'https://support.google.com/youtube/answer/2807622' }
    ]
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    logo: 'https://images.unsplash.com/photo-1611944212126-bbc9e719fe87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Report harassment, impersonation, privacy concerns, and more.',
    categories: [
      { name: 'Harassment', url: 'https://support.snapchat.com/en-US/a/report-abuse-in-app' },
      { name: 'Hacked Account', url: 'https://support.snapchat.com/en-US/a/hacked-howto' },
      { name: 'Impersonation', url: 'https://support.snapchat.com/en-US/a/report-impersonation' },
      { name: 'Privacy Concerns', url: 'https://support.snapchat.com/en-US/a/privacy-settings2' }
    ]
  },
  {
    id: 'reddit',
    name: 'Reddit',
    logo: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Report harassment, content policy violations, privacy concerns, and more.',
    categories: [
      { name: 'Harassment', url: 'https://www.reddit.com/report' },
      { name: 'Content Policy Violation', url: 'https://www.reddit.com/report' },
      { name: 'Account Issues', url: 'https://www.reddithelp.com/hc/en-us/requests/new' },
      { name: 'Privacy Concerns', url: 'https://www.reddithelp.com/hc/en-us/requests/new' }
    ]
  }
];

// DOM elements
const platformsGrid = document.getElementById('platforms-grid');
const platformDetail = document.getElementById('platform-detail');
const platformsList = document.getElementById('platforms-list');
const searchInput = document.getElementById('search-input');
const noResults = document.getElementById('no-results');
const viewAllBtn = document.getElementById('view-all-btn');
const platformCount = document.getElementById('platform-count');
const redirectPopup = document.getElementById('redirect-popup');
const destinationUrl = document.getElementById('destination-url');
const platformName = document.getElementById('platform-name');
const categoryName = document.getElementById('category-name');
const countdown = document.getElementById('countdown');
const goNowBtn = document.getElementById('go-now');
const cancelRedirectBtn = document.getElementById('cancel-redirect');
const closePopupBtn = document.getElementById('close-popup');

let countdownInterval;
let currentUrl = '';

// Initialize the application
function init() {
  renderPlatforms(platforms);
  setupEventListeners();
}

// Render all platforms
function renderPlatforms(platformsToRender) {
  platformsGrid.innerHTML = '';
  
  if (platformsToRender.length === 0) {
    noResults.classList.remove('hidden');
    platformCount.textContent = '0';
  } else {
    noResults.classList.add('hidden');
    platformCount.textContent = platformsToRender.length;
    
    platformsToRender.forEach(platform => {
      const platformCard = createPlatformCard(platform);
      platformsGrid.appendChild(platformCard);
    });
  }
}

// Create a platform card
function createPlatformCard(platform) {
  const card = document.createElement('div');
  card.className = 'platform-card';
  card.setAttribute('data-platform-id', platform.id);
  
  const cardContent = `
    <div class="card-header">
      <div class="card-bg" style="background-image: url('${platform.logo}');"></div>
      <div class="card-overlay"></div>
      <div class="card-logo-container">
        <div class="card-logo">
          <img src="${platform.logo}" alt="${platform.name} Logo">
        </div>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">${platform.name}</h3>
      <p class="card-description">${platform.description}</p>
      <button class="card-button">
        View Reporting Options
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </div>
  `;
  
  card.innerHTML = cardContent;
  return card;
}

// Render platform detail view
function renderPlatformDetail(platformId) {
  const platform = platforms.find(p => p.id === platformId);
  
  if (!platform) return;
  
  platformDetail.innerHTML = `
    <div class="platform-detail">
      <button id="back-to-list" class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Back to all platforms
      </button>
      
      <div class="detail-card">
        <div class="detail-header">
          <div class="detail-bg" style="background-image: url('${platform.logo}');"></div>
          <div class="detail-overlay"></div>
          <div class="detail-header-content">
            <div class="detail-logo">
              <img src="${platform.logo}" alt="${platform.name} Logo">
            </div>
            <h2 class="detail-title">${platform.name}</h2>
          </div>
        </div>
        
        <div class="detail-body">
          <h3 class="detail-section-title">Reporting Options</h3>
          <p class="detail-description">${platform.description}</p>
          
          <div class="categories-grid">
            ${platform.categories.map(category => `
              <div class="category-card">
                <h4 class="category-title">${category.name}</h4>
                <p class="category-description">Report ${category.name.toLowerCase()} issues on ${platform.name}.</p>
                <button class="category-button report-btn" data-platform="${platform.id}" data-category="${category.name}" data-url="${category.url}">
                  Go to Reporting Form
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  
  platformDetail.classList.remove('hidden');
  platformsList.classList.add('hidden');
  
  // Add event listener to back button
  document.getElementById('back-to-list').addEventListener('click', () => {
    platformDetail.classList.add('hidden');
    platformsList.classList.remove('hidden');
  });
  
  // Add event listeners to report buttons
  document.querySelectorAll('.report-btn').forEach(btn => {
    btn.addEventListener('click', handleReportButtonClick);
  });
}

// Handle report button click
function handleReportButtonClick(e) {
  const platformId = e.currentTarget.getAttribute('data-platform');
  const categoryText = e.currentTarget.getAttribute('data-category');
  const url = e.currentTarget.getAttribute('data-url');
  
  const platform = platforms.find(p => p.id === platformId);
  
  if (platform) {
    showRedirectPopup(platform.name, categoryText, url);
  }
}

// Show redirect popup
function showRedirectPopup(platformText, categoryText, url) {
  platformName.textContent = platformText;
  categoryName.textContent = categoryText;
  destinationUrl.textContent = url;
  currentUrl = url;
  
  redirectPopup.classList.remove('hidden');
  
  // Start countdown
  let seconds = 10;
  countdown.textContent = seconds;
  
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    seconds--;
    countdown.textContent = seconds;
    
    if (seconds <= 0) {
      clearInterval(countdownInterval);
      window.open(url, '_blank');
      redirectPopup.classList.add('hidden');
    }
  }, 1000);
}

// Setup event listeners
function setupEventListeners() {
  // Platform card click
  platformsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-platform-id]');
    if (card) {
      const platformId = card.getAttribute('data-platform-id');
      // Save current scroll position before showing platform detail
      const scrollPosition = window.scrollY;
      
      renderPlatformDetail(platformId);
      
      // Maintain the same scroll position
      window.scrollTo({
        top: scrollPosition,
        behavior: 'auto'
      });
    }
  });
  
  // Search input
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
      renderPlatforms(platforms);
      return;
    }
    
    const filteredPlatforms = platforms.filter(platform => {
      return (
        platform.name.toLowerCase().includes(searchTerm) ||
        platform.description.toLowerCase().includes(searchTerm) ||
        platform.categories.some(cat => cat.name.toLowerCase().includes(searchTerm))
      );
    });
    
    renderPlatforms(filteredPlatforms);
  });
  
  // View all button
  viewAllBtn.addEventListener('click', () => {
    searchInput.value = '';
    renderPlatforms(platforms);
  });
  
  // Go now button
  goNowBtn.addEventListener('click', () => {
    clearInterval(countdownInterval);
    window.open(currentUrl, '_blank');
    redirectPopup.classList.add('hidden');
  });
  
  // Cancel redirect button
  cancelRedirectBtn.addEventListener('click', () => {
    clearInterval(countdownInterval);
    redirectPopup.classList.add('hidden');
  });
  
  // Close popup button
  closePopupBtn.addEventListener('click', () => {
    clearInterval(countdownInterval);
    redirectPopup.classList.add('hidden');
  });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);