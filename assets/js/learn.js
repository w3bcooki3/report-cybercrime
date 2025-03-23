// Resource data
const resources = [
  {
    id: '1',
    title: 'Ethical Hacking: Getting Started',
    description: 'Learn the fundamentals of ethical hacking and penetration testing with this comprehensive guide for beginners.',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/ethical-hacking',
    date: 'May 15, 2025',
    readTime: '12 min read',
    category: 'Ethical Hacking',
    tags: ['Penetration Testing', 'Cybersecurity', 'Beginners']
  },
  {
    id: '2',
    title: 'Advanced Network Security Techniques',
    description: 'Discover advanced techniques for securing your network infrastructure against modern threats and vulnerabilities.',
    type: 'video',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/network-security',
    date: 'April 28, 2025',
    readTime: '45 min watch',
    category: 'Network Security',
    tags: ['Firewalls', 'IDS/IPS', 'Zero Trust']
  },
  {
    id: '3',
    title: 'Secure Coding Practices for Developers',
    description: 'Learn how to write secure code and avoid common vulnerabilities like SQL injection, XSS, and CSRF attacks.',
    type: 'article',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/secure-coding',
    date: 'May 2, 2025',
    readTime: '8 min read',
    category: 'Secure Coding',
    tags: ['OWASP', 'Web Security', 'DevSecOps']
  },
  {
    id: '4',
    title: 'Incident Response Planning and Execution',
    description: 'A comprehensive guide to creating and implementing an effective incident response plan for your organization.',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/incident-response',
    date: 'April 10, 2025',
    readTime: '15 min read',
    category: 'Incident Response',
    tags: ['CSIRT', 'Forensics', 'Crisis Management']
  },
  {
    id: '5',
    title: 'Cloud Security Architecture Best Practices',
    description: 'Learn how to design and implement secure cloud architectures across AWS, Azure, and Google Cloud platforms.',
    type: 'video',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/cloud-security',
    date: 'May 5, 2025',
    readTime: '60 min watch',
    category: 'Cloud Security',
    tags: ['AWS', 'Azure', 'GCP', 'IAM']
  },
  {
    id: '6',
    title: 'Threat Hunting Techniques for SOC Analysts',
    description: 'Advanced threat hunting methodologies and tools for security operations center analysts.',
    type: 'article',
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/threat-hunting',
    date: 'April 22, 2025',
    readTime: '10 min read',
    category: 'Threat Hunting',
    tags: ['SIEM', 'EDR', 'Threat Intelligence']
  },
  {
    id: '7',
    title: 'Ransomware Prevention and Recovery Strategies',
    description: 'Comprehensive strategies to prevent ransomware attacks and recover effectively if an attack occurs.',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/ransomware',
    date: 'May 8, 2025',
    readTime: '14 min read',
    category: 'Ransomware',
    tags: ['Backup', 'Recovery', 'Prevention']
  },
  {
    id: '8',
    title: 'Mobile Application Security Testing',
    description: 'Learn how to perform comprehensive security testing for iOS and Android applications.',
    type: 'video',
    image: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/mobile-security',
    date: 'April 15, 2025',
    readTime: '50 min watch',
    category: 'Mobile Security',
    tags: ['Android', 'iOS', 'OWASP Mobile']
  },
  {
    id: '9',
    title: 'Zero Trust Security Model Implementation',
    description: 'A practical guide to implementing the Zero Trust security model in your organization.',
    type: 'article',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/zero-trust',
    date: 'May 12, 2025',
    readTime: '11 min read',
    category: 'Zero Trust',
    tags: ['Identity', 'Micro-segmentation', 'Least Privilege']
  },
  {
    id: '10',
    title: 'Cybersecurity Compliance Frameworks Explained',
    description: 'An overview of major cybersecurity compliance frameworks including NIST, ISO 27001, GDPR, and more.',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/compliance',
    date: 'April 30, 2025',
    readTime: '16 min read',
    category: 'Compliance',
    tags: ['NIST', 'ISO 27001', 'GDPR', 'Regulatory']
  },
  {
    id: '11',
    title: 'Social Engineering Attack Vectors and Defense',
    description: 'Understanding social engineering techniques and how to defend against them in your organization.',
    type: 'video',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/social-engineering',
    date: 'May 3, 2025',
    readTime: '40 min watch',
    category: 'Social Engineering',
    tags: ['Phishing', 'Pretexting', 'Awareness']
  },
  {
    id: '12',
    title: 'Securing IoT Devices in Enterprise Environments',
    description: 'Best practices for securing Internet of Things devices in corporate networks and environments.',
    type: 'article',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://example.com/iot-security',
    date: 'April 25, 2025',
    readTime: '9 min read',
    category: 'IoT Security',
    tags: ['IoT', 'Network Segmentation', 'Device Management']
  }
];

// DOM Elements
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const typeFilter = document.getElementById('type-filter');
const resourcesGrid = document.getElementById('resources-grid');
const noResults = document.getElementById('no-results');
const clearFiltersBtn = document.getElementById('clear-filters');
const resourceCount = document.getElementById('resource-count');
const redirectPopup = document.getElementById('redirect-popup');
const closePopupBtn = document.getElementById('close-popup');
const cancelRedirectBtn = document.getElementById('cancel-redirect');
const goNowBtn = document.getElementById('go-now-link');
const destinationUrl = document.getElementById('destination-url');
const resourceTitle = document.getElementById('resource-title');
const resourceType = document.getElementById('resource-type');
const countdownEl = document.getElementById('countdown-number');

// Current resource for redirect
let currentResource = null;
let countdownInterval = null;

// Initialize the page
function init() {
  renderResources(resources);
  setupEventListeners();
}

// Render resource cards
function renderResources(resourcesArray) {
  resourcesGrid.innerHTML = '';
  
  if (resourcesArray.length === 0) {
    resourcesGrid.classList.add('hidden');
    noResults.classList.remove('hidden');
  } else {
    resourcesGrid.classList.remove('hidden');
    noResults.classList.add('hidden');
    
    resourcesArray.forEach(resource => {
      resourcesGrid.appendChild(createResourceCard(resource));
    });
  }
  
  resourceCount.textContent = resourcesArray.length;
}

// Create a resource card element
function createResourceCard(resource) {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col';
  
  // Get type icon HTML
  const typeIconHtml = getTypeIconHtml(resource.type);
  
 
  
  card.innerHTML = `
    <div class="relative">
      <img 
        src="${resource.image}" 
        alt="${resource.title}" 
        class="w-full h-52 object-cover"
      />
      ${typeIconHtml}
    </div>
    <div class="p-5 flex flex-col flex-grow">
      <h3 class="text-xl font-bold mb-3 font-syne line-clamp-2">${resource.title}</h3>
      <p class="text-dark2 text-sm mb-4 line-clamp-3 flex-grow">${resource.description}</p>
      <div class="flex justify-between items-center text-xs text-dark2 mb-4">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar mr-1">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
          </svg>
          <span>${resource.date}</span>
        </div>
        ${resource.readTime ? `
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock mr-1">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${resource.readTime}</span>
          </div>
        ` : ''}
      </div>
      <button
        class="view-resource flex items-center justify-center mt-auto"
        data-id="${resource.id}"
      >
        View Resource 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link ml-2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" x2="21" y1="14" y2="3"></line>
        </svg>
      </button>
    </div>
  `;
  
  // Add event listener to the view resource button
  const viewBtn = card.querySelector('.view-resource');
  viewBtn.addEventListener('click', () => {
    const resourceId = viewBtn.getAttribute('data-id');
    const resource = resources.find(r => r.id === resourceId);
    showRedirectPopup(resource);
  });
  
  return card;
}

// Get type icon HTML based on resource type
function getTypeIconHtml(type) {
  switch (type) {
    case 'video':
      return `
        <div class="absolute top-3 right-3 bg-dark1 bg-opacity-80 text-white p-1.5 rounded-md shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      `;
    case 'article':
      return `
        <div class="absolute top-3 right-3 bg-dark1 bg-opacity-80 text-white p-1.5 rounded-md shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" x2="8" y1="13" y2="13"></line>
            <line x1="16" x2="8" y1="17" y2="17"></line>
            <line x1="10" x2="8" y1="9" y2="9"></line>
          </svg>
        </div>
      `;
    case 'blog':
      return `
        <div class="absolute top-3 right-3 bg-dark1 bg-opacity-80 text-white p-1.5 rounded-md shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
      `;
    default:
      return '';
  }
}

// Filter resources based on search query and filters
function filterResources() {
  const query = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const type = typeFilter.value;
  
  let filtered = resources;
  
  // Filter by search query
  if (query) {
    filtered = filtered.filter(
      resource => 
        resource.title.toLowerCase().includes(query) || 
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  // Filter by category
  if (category !== 'All Categories') {
    filtered = filtered.filter(resource => resource.category === category);
  }
  
  // Filter by type
  if (type !== 'All Types') {
    filtered = filtered.filter(
      resource => resource.type === type.toLowerCase()
    );
  }
  
  renderResources(filtered);
}

// Show redirect popup
function showRedirectPopup(resource) {
  currentResource = resource;
  
  // Set popup content
  destinationUrl.textContent = resource.url;
  resourceTitle.textContent = resource.title;
  resourceType.textContent = resource.type.charAt(0).toUpperCase() + resource.type.slice(1);
  
  // Reset countdown
  let countdown = 10;
  countdownEl.textContent = countdown;
  
  // Show popup
  redirectPopup.classList.remove('hidden');
  
  // Start countdown
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    countdown--;
    countdownEl.textContent = countdown;
    
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      redirectToResource();
    }
  }, 1000);
}

// Redirect to resource URL
function redirectToResource() {
  if (currentResource) {
    window.open(currentResource.url, '_blank');
    closeRedirectPopup();
  }
}

// Close redirect popup
function closeRedirectPopup() {
  redirectPopup.classList.add('hidden');
  clearInterval(countdownInterval);
  currentResource = null;
}

// Clear all filters
function clearFilters() {
  searchInput.value = '';
  categoryFilter.value = 'All Categories';
  typeFilter.value = 'All Types';
  filterResources();
}

// Setup event listeners
function setupEventListeners() {
  // Search and filter events
  searchInput.addEventListener('input', filterResources);
  categoryFilter.addEventListener('change', filterResources);
  typeFilter.addEventListener('change', filterResources);
  
  // Clear filters button
  clearFiltersBtn.addEventListener('click', clearFilters);
  
  // Redirect popup events
  closePopupBtn.addEventListener('click', closeRedirectPopup);
  cancelRedirectBtn.addEventListener('click', closeRedirectPopup);
  goNowBtn.addEventListener('click', redirectToResource);
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);