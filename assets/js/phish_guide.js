document.addEventListener('DOMContentLoaded', function() {
    const scenarioDropdown = document.getElementById('scenario-dropdown');
    const guideCards = document.querySelectorAll('.guide-card');
    
    // Map scenarios to relevant guide titles
    const scenarioGuideMap = {
        'suspicious-link': ['Fake Login Pages', 'Malicious Document Attachments', 'Search Engine Phishing'],
        'personal-info': ['Account Verification Scams', 'Fake Login Pages', 'OAuth Phishing Attacks'],
        'suspicious-download': ['Malicious Document Attachments', 'Fake Banking Apps', 'Fake Online Stores'],
        'suspicious-email': ['Account Verification Scams', 'Business Email Compromise', 'Password Reset Deception'],
        'package-message': ['SMS Phishing (Smishing)', 'Push Notification Phishing'],
        'password-request': ['Password Reset Deception', 'Voice Phishing (Vishing)', 'Account Verification Scams'],
        'virus-warning': ['Tech Support Scam Calls', 'Search Engine Phishing'],
        'account-deletion': ['Account Verification Scams', 'Fake Login Pages']
    };
    
    scenarioDropdown.addEventListener('change', function() {
        const selectedScenario = this.value;
        
        if (selectedScenario && scenarioGuideMap[selectedScenario]) {
            const relevantGuides = scenarioGuideMap[selectedScenario];
            
            // First hide all guide cards
            guideCards.forEach(card => {
                card.style.display = 'none';
            });
            
            // Then show only the relevant ones
            guideCards.forEach(card => {
                const cardTitle = card.querySelector('h3').textContent;
                if (relevantGuides.includes(cardTitle)) {
                    card.style.display = 'block';
                }
            });
            
            // Add a filter notice above the cards
            const filterNotice = document.createElement('div');
            filterNotice.id = 'filter-notice';
            filterNotice.className = 'alert-box';
            filterNotice.style.marginBottom = '30px';
            
            // Remove existing filter notice if present
            const existingNotice = document.getElementById('filter-notice');
            if (existingNotice) {
                existingNotice.remove();
            }
            
            filterNotice.innerHTML = `
                <h3 style="display: flex; align-items: center; gap: 10px;">
                    <span>Showing guides related to: "${document.querySelector(`option[value="${selectedScenario}"]`).textContent}"</span>
                </h3>
                <p style="margin-top: 10px;">Displaying ${relevantGuides.length} guides that can help with your situation.</p>
                <button id="clear-filter" class="theme-btn2" style="margin-top: 15px; border: None">Show All Guides</button>
            `;
            
            const firstCategoryHeader = document.querySelector('.category-header');
            firstCategoryHeader.parentNode.insertBefore(filterNotice, firstCategoryHeader);
            
            // Add event listener to the clear filter button
            document.getElementById('clear-filter').addEventListener('click', function() {
                // Show all guide cards
                guideCards.forEach(card => {
                    card.style.display = 'block';
                });
                
                // Reset dropdown selection
                scenarioDropdown.value = '';
                
                // Remove the filter notice
                filterNotice.remove();
            });
            
        } else {
            // If no scenario selected or invalid scenario, show all guide cards
            guideCards.forEach(card => {
                card.style.display = 'block';
            });
            
            // Remove filter notice if it exists
            const filterNotice = document.getElementById('filter-notice');
            if (filterNotice) {
                filterNotice.remove();
            }
        }
    });
});