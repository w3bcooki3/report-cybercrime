document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const categoryFilter = document.getElementById('categoryFilter');
    const noResultsMessage = document.getElementById('noResultsMessage');
    
    // Get all cards that should be filterable
    const allCards = document.querySelectorAll('.phish_layout-category-card, .phish_layout-audience-card, .phish_layout-threat-card, .phish_layout-resource-card');
    
    // Search functionality
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        let visibleCardsCount = 0;
        
        allCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardCategory = getCardCategory(card);
            
            // Check if card matches both search term and selected category
            const matchesSearch = searchTerm === '' || cardText.includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || cardCategory === selectedCategory;
            
            // Show/hide card based on filters
            if (matchesSearch && matchesCategory) {
                card.style.display = '';
                visibleCardsCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show or hide the "No Results" message
        if (visibleCardsCount === 0 && (searchTerm !== '' || selectedCategory !== 'all')) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }
    
    // Helper function to determine card category
    function getCardCategory(card) {
        if (card.querySelector('.phish_layout-category-header')) {
            const headerText = card.querySelector('.phish_layout-category-header').textContent.toLowerCase();
            if (headerText.includes('email')) return 'email';
            if (headerText.includes('social')) return 'social';
            if (headerText.includes('sms') || headerText.includes('mobile')) return 'mobile';
            if (headerText.includes('business') || headerText.includes('workplace')) return 'business';
            if (headerText.includes('advanced')) return 'advanced';
            if (headerText.includes('malware')) return 'malware';
        }
        return 'all'; // Default category
    }
    
    // Event listeners
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    categoryFilter.addEventListener('change', performSearch);
    
    // Add focus effect for input
    searchInput.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    searchInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});