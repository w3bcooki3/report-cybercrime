document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
    
    // Search functionality
    const searchInput = document.getElementById('financial-search');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterCards(searchTerm);
      });
    }
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.financial-filter-button');
    if (filterButtons.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // Get filter value
          const filterValue = this.getAttribute('data-filter');
          
          // Filter cards
          filterCardsByCategory(filterValue);
        });
      });
    }
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    if (anchorLinks.length > 0) {
      anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        });
      });
    }
    
    // Functions
    function filterCards(searchTerm) {
      const cards = document.querySelectorAll('.financial-card');
      
      cards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        
        if (cardText.includes(searchTerm)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
    
    function filterCardsByCategory(category) {
      const cards = document.querySelectorAll('.financial-card');
      
      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
    
    // Add animation to cards on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    const animatedElements = document.querySelectorAll('.financial-card, .financial-scenario-card, .financial-quick-action-card');
    animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      observer.observe(element);
    });
    
    // Make phone numbers clickable on mobile
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach(link => {
        link.style.color = '#0063cc';
        link.style.textDecoration = 'underline';
      });
    }
  });