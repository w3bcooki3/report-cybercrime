document.addEventListener('DOMContentLoaded', function() {
  
  // DOM elements
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const examplesGrid = document.getElementById('examples-grid');
  const examplesCount = document.getElementById('examples-count');
  const noResults = document.getElementById('no-results');
  const modal = document.getElementById('detail-modal');
  const closeModalButtons = document.querySelectorAll('#close-modal, #close-modal-btn');
  const originalViewBtn = document.getElementById('original-view-btn');
  const annotatedViewBtn = document.getElementById('annotated-view-btn');
  const annotationsPanel = document.getElementById('annotations-panel');
  const descriptionPanel = document.getElementById('description-panel');
  const annotationMarkers = document.getElementById('annotation-markers');
  
  // State
  let activeFilter = 'all';
  let searchTerm = '';
  let currentExample = null;
  
  // Initialize
  renderExamples();
  
  // Event listeners
  searchInput.addEventListener('input', function(e) {
    searchTerm = e.target.value.toLowerCase();
    renderExamples();
  });
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      activeFilter = this.dataset.filter;
      
      // Update button styles
      filterButtons.forEach(btn => {
        if (btn.dataset.filter === activeFilter) {
          btn.classList.remove('bg-gray-100', 'hover:bg-gray-200', 'text-gray-800');
          btn.classList.add('bg-indigo-600', 'text-white');
        } else {
          btn.classList.remove('bg-indigo-600', 'text-white');
          btn.classList.add('bg-gray-100', 'hover:bg-gray-200', 'text-gray-800');
        }
      });
      
      renderExamples();
    });
  });
  
  closeModalButtons.forEach(button => {
    button.addEventListener('click', closeModal);
  });
  
  originalViewBtn.addEventListener('click', function() {
    setModalView('original');
  });
  
  annotatedViewBtn.addEventListener('click', function() {
    setModalView('annotated');
  });
  
  // Functions
  function renderExamples() {
    const filteredExamples = phishingExamples.filter(example => {
      const matchesSearch = example.title.toLowerCase().includes(searchTerm) || 
                            example.description.toLowerCase().includes(searchTerm);
      const matchesFilter = activeFilter === 'all' || example.type === activeFilter;
      
      return matchesSearch && matchesFilter;
    });
    
    // Update count
    examplesCount.textContent = `${filteredExamples.length} phishing examples found`;
    
    // Clear grid
    examplesGrid.innerHTML = '';
    
    // Show/hide no results message
    if (filteredExamples.length === 0) {
      noResults.classList.remove('hidden');
      examplesGrid.classList.add('hidden');
    } else {
      noResults.classList.add('hidden');
      examplesGrid.classList.remove('hidden');
      
      // Render examples
      filteredExamples.forEach(example => {
        const card = createExampleCard(example);
        examplesGrid.appendChild(card);
      });
    }
  }
  
  function createExampleCard(example) {
    const card = document.createElement('div');
    card.className = 'phishing-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer';
    card.dataset.id = example.id;
    
    const typeIcon = example.type === 'email' 
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
    
    card.innerHTML = `
      <div class="relative">
        <img 
          src="${example.imageUrl}" 
          alt="${example.title}" 
          class="w-full h-48 object-cover"
        />
        <div class="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg flex items-center space-x-1">
          ${typeIcon}
          <span class="text-sm font-medium capitalize">${example.type}</span>
        </div>
      </div>
      <div class="p-5">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">${example.title}</h3>
        <p class="text-gray-600 text-sm mb-4 line-clamp-2">${example.description}</p>
        <div class="flex items-center text-sm text-gray-500 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
          </svg>
          <span>${example.date}</span>
        </div>
        <div class="flex items-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Reported by ${example.reportedBy}</span>
        </div>
      </div>
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-100 flex justify-between items-center">
        <div class="flex items-center text-amber-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
          <span class="text-sm font-medium">${example.riskLevel} Risk</span>
        </div>
        <span class="text-indigo-600 text-sm font-medium flex items-center">
          View Details
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 ml-1">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" x2="21" y1="14" y2="3"></line>
          </svg>
        </span>
      </div>
    `;
    
    card.addEventListener('click', function() {
      openModal(example);
    });
    
    return card;
  }
  
  function openModal(example) {
    currentExample = example;
    
    // Set modal content
    document.getElementById('modal-title').textContent = example.title;
    document.getElementById('modal-meta').textContent = `Reported by ${example.reportedBy} on ${example.date}`;
    document.getElementById('modal-image').src = example.imageUrl;
    document.getElementById('modal-image').alt = example.title;
    document.getElementById('modal-description').textContent = example.description;
    document.getElementById('modal-risk-level').textContent = `Risk Level: ${example.riskLevel}`;
    document.getElementById('modal-risk-description').textContent = example.riskDescription;
    document.getElementById('modal-target').textContent = example.target;
    document.getElementById('modal-technique').textContent = example.technique;
    document.getElementById('modal-footer-risk').textContent = `${example.riskLevel} Risk`;
    
    // Set type icon
    const typeIconContainer = document.getElementById('modal-type-icon');
    if (example.type === 'email') {
      typeIconContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>';
    } else {
      typeIconContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
    }
    
    // Reset view to original
    setModalView('original');
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }
  
  function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    currentExample = null;
  }
  
  function setModalView(view) {
    if (view === 'original') {
      originalViewBtn.classList.add('bg-white', 'shadow-sm');
      originalViewBtn.classList.remove('hover:bg-gray-200');
      annotatedViewBtn.classList.remove('bg-white', 'shadow-sm');
      annotatedViewBtn.classList.add('hover:bg-gray-200');
      
      annotationsPanel.classList.add('hidden');
      descriptionPanel.classList.remove('hidden');
      annotationMarkers.innerHTML = '';
    } else {
      annotatedViewBtn.classList.add('bg-white', 'shadow-sm');
      annotatedViewBtn.classList.remove('hover:bg-gray-200');
      originalViewBtn.classList.remove('bg-white', 'shadow-sm');
      originalViewBtn.classList.add('hover:bg-gray-200');
      
      descriptionPanel.classList.add('hidden');
      annotationsPanel.classList.remove('hidden');
      
      // Render annotations
      renderAnnotations();
    }
  }
  
  function renderAnnotations() {
    if (!currentExample) return;
    
    // Clear existing annotations
    annotationMarkers.innerHTML = '';
    const annotationsList = document.getElementById('annotations-list');
    annotationsList.innerHTML = '';
    
    // Add annotation markers
    currentExample.annotations.forEach((annotation, index) => {
      // Create marker
      const marker = document.createElement('div');
      marker.className = 'annotation-marker';
      marker.style.top = `${annotation.position.top}%`;
      marker.style.left = `${annotation.position.left}%`;
      marker.style.width = `${annotation.position.width}%`;
      marker.style.height = `${annotation.position.height}%`;
      
      const number = document.createElement('span');
      number.className = 'annotation-number';
      number.textContent = index + 1;
      
      marker.appendChild(number);
      annotationMarkers.appendChild(marker);
      
      // Create annotation item
      const item = document.createElement('div');
      item.className = 'bg-gray-50 p-4 rounded-lg border border-gray-200';
      item.innerHTML = `
        <div class="flex items-start">
          <span class="flex items-center justify-center bg-yellow-500 text-white rounded-full h-6 w-6 text-xs font-bold mr-3 mt-0.5">
            ${index + 1}
          </span>
          <div>
            <h5 class="font-medium text-gray-800">${annotation.title}</h5>
            <p class="text-gray-600 text-sm mt-1">${annotation.description}</p>
          </div>
        </div>
      `;
      
      annotationsList.appendChild(item);
    });
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  
  // Close modal on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});