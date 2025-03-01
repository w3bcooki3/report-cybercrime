// Security services data
const securityServices = [
  {
    id: '1',
    name: 'Norton Security',
    description: 'Comprehensive antivirus protection for all your devices with advanced threat detection and prevention.',
    category: ['antivirus', 'firewall'],
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://norton.com',
  },
  {
    id: '2',
    name: 'McAfee Total Protection',
    description: 'Multi-device security solution with antivirus, identity monitoring, and secure VPN.',
    category: ['antivirus', 'monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://mcafee.com',
  },
  {
    id: '3',
    name: 'Palo Alto Networks',
    description: 'Enterprise-grade firewall solutions with advanced threat intelligence and cloud security.',
    category: ['firewall', 'monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://paloaltonetworks.com',
  },
  {
    id: '4',
    name: 'HackerOne',
    description: 'Bug bounty and penetration testing platform connecting businesses with ethical hackers.',
    category: ['pentest'],
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://hackerone.com',
  },
  {
    id: '5',
    name: 'Splunk',
    description: 'Security information and event management (SIEM) platform for real-time security monitoring.',
    category: ['monitoring', 'compliance'],
    imageUrl: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://splunk.com',
  },
  {
    id: '6',
    name: 'Fortinet',
    description: 'Integrated and automated cybersecurity solutions with advanced firewall protection.',
    category: ['firewall', 'monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://fortinet.com',
  },
  {
    id: '7',
    name: 'Kaspersky',
    description: 'Advanced antivirus and internet security solutions for home and business users.',
    category: ['antivirus'],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://kaspersky.com',
  },
  {
    id: '8',
    name: 'Rapid7',
    description: 'Vulnerability management, penetration testing, and security analytics platform.',
    category: ['pentest', 'monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://rapid7.com',
  },
  {
    id: '9',
    name: 'Qualys',
    description: 'Cloud-based IT, security and compliance solutions with vulnerability management.',
    category: ['compliance', 'monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://qualys.com',
  },
  {
    id: '10',
    name: 'CrowdStrike',
    description: 'Cloud-delivered endpoint protection with advanced threat intelligence and response.',
    category: ['antivirus', 'monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://crowdstrike.com',
  },
  {
    id: '11',
    name: 'Cisco Secure',
    description: 'Integrated security solutions for networks, cloud, and endpoints with threat detection.',
    category: ['firewall', 'monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://cisco.com/security',
  },
  {
    id: '12',
    name: 'Tenable',
    description: 'Vulnerability management platform with continuous monitoring and assessment.',
    category: ['monitoring', 'compliance'],
    imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    url: 'https://tenable.com',
  }
];

// DOM elements
const searchInput = document.getElementById('search-input');
const categorySelect = document.getElementById('category-select');
const servicesGrid = document.getElementById('services-grid');
const noResults = document.getElementById('no-results');
const resultsSummary = document.getElementById('results-summary');
const redirectPopup = document.getElementById('redirect-popup');
const destinationUrl = document.getElementById('destination-url');
const serviceName = document.getElementById('service-name');
const countdownElement = document.getElementById('countdown');
const closePopupButton = document.getElementById('close-popup');
const cancelRedirectButton = document.getElementById('cancel-redirect');
const goNowButton = document.getElementById('go-now');
const currentYearElement = document.getElementById('current-year');

// Set current year in footer
currentYearElement.textContent = new Date().getFullYear();

// Initialize Lucide icons
lucide.createIcons();

// Variables for redirect
let redirectTimer;
let currentCountdown = 10;
let currentUrl = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderServices(securityServices);
});

// Event listeners
searchInput.addEventListener('input', filterServices);
categorySelect.addEventListener('change', filterServices);
closePopupButton.addEventListener('click', closeRedirectPopup);
cancelRedirectButton.addEventListener('click', closeRedirectPopup);
goNowButton.addEventListener('click', handleManualRedirect);

// Render service cards
function renderServices(services) {
  servicesGrid.innerHTML = '';
  
  if (services.length === 0) {
    noResults.style.display = 'block';
    servicesGrid.style.display = 'none';
  } else {
    noResults.style.display = 'none';
    servicesGrid.style.display = 'grid';
    
    services.forEach(service => {
      const serviceCard = createServiceCard(service);
      servicesGrid.appendChild(serviceCard);
    });
  }
  
  updateResultsSummary(services);
}

// Create a service card element
function createServiceCard(service) {
  const card = document.createElement('div');
  card.className = 'service-card';
  
  // Create image section
  const imageSection = document.createElement('div');
  imageSection.className = 'card-image';
  
  if (service.imageUrl) {
    const img = document.createElement('img');
    img.src = service.imageUrl;
    img.alt = service.name;
    imageSection.appendChild(img);
  } else {
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.innerHTML = '<i data-lucide="shield"></i>';
    imageSection.appendChild(placeholder);
  }
  
  // Create content section
  const contentSection = document.createElement('div');
  contentSection.className = 'card-content';
  
  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = service.name;
  
  const description = document.createElement('p');
  description.className = 'card-description';
  description.textContent = service.description;
  
  const categories = document.createElement('div');
  categories.className = 'card-categories';
  
  service.category.forEach(cat => {
    const tag = document.createElement('span');
    tag.className = 'category-tag';
    tag.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    categories.appendChild(tag);
  });
  
  contentSection.appendChild(title);
  contentSection.appendChild(description);
  
  // Create button section
  const buttonSection = document.createElement('div');
  buttonSection.className = 'card-button';
  
  const button = document.createElement('button');
  button.className = 'visit-button';
  button.innerHTML = 'Visit Website <i data-lucide="external-link"></i>';
  button.addEventListener('click', () => showRedirectPopup(service));
  
  buttonSection.appendChild(button);
  
  // Assemble the card
  card.appendChild(imageSection);
  card.appendChild(contentSection);
  card.appendChild(buttonSection);
  
  return card;
}

// Filter services based on search and category
function filterServices() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;
  
  let filteredServices = securityServices;
  
  // Filter by search term
  if (searchTerm) {
    filteredServices = filteredServices.filter(service => 
      service.name.toLowerCase().includes(searchTerm) ||
      service.description.toLowerCase().includes(searchTerm) ||
      service.category.some(cat => cat.toLowerCase().includes(searchTerm))
    );
  }
  
  // Filter by category
  if (selectedCategory !== 'all') {
    filteredServices = filteredServices.filter(service => 
      service.category.includes(selectedCategory)
    );
  }
  
  renderServices(filteredServices);
  
  // Reinitialize Lucide icons for newly created elements
  lucide.createIcons();
}

// Update the results summary text
function updateResultsSummary(services) {
  let summaryText = `Showing ${services.length} results`;
  
  if (categorySelect.value !== 'all') {
    const categoryName = categorySelect.options[categorySelect.selectedIndex].text;
    summaryText += ` in ${categoryName}`;
  }
  
  if (searchInput.value) {
    summaryText += ` for "${searchInput.value}"`;
  }
  
  resultsSummary.textContent = summaryText;
}

// Show redirect popup
function showRedirectPopup(service) {
  currentUrl = service.url;
  currentCountdown = 10;
  
  destinationUrl.textContent = service.url;
  serviceName.textContent = service.name;
  countdownElement.textContent = `Redirecting in ${currentCountdown} seconds...`;
  
  redirectPopup.style.display = 'flex';
  
  // Start countdown
  redirectTimer = setInterval(updateCountdown, 1000);
  
  // Reinitialize Lucide icons for popup
  lucide.createIcons();
}

// Update countdown timer
function updateCountdown() {
  currentCountdown--;
  countdownElement.textContent = `Redirecting in ${currentCountdown} seconds...`;
  
  if (currentCountdown <= 0) {
    clearInterval(redirectTimer);
    window.open(currentUrl, '_blank');
    closeRedirectPopup();
  }
}

// Close redirect popup
function closeRedirectPopup() {
  redirectPopup.style.display = 'none';
  clearInterval(redirectTimer);
}

// Handle manual redirect
function handleManualRedirect() {
  window.open(currentUrl, '_blank');
  closeRedirectPopup();
}