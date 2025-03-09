// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Search form submission handler
    const searchForm = document.querySelector('.phish_guide_search_box');
    const searchInput = document.querySelector('.phish_guide_search_input');
    const scenariosGrid = document.querySelector('.phish_guide_scenarios_grid');
    const cards = document.querySelectorAll('.phish_guide_card');
    
    // Create a container for the scenarios if it doesn't exist
    let scenariosContainer = document.querySelector('.phish_guide_scenarios_container');
    if (!scenariosContainer) {
        // If the container doesn't exist, create one and wrap the grid
        scenariosContainer = document.createElement('div');
        scenariosContainer.className = 'phish_guide_scenarios_container';
        scenariosGrid.parentNode.insertBefore(scenariosContainer, scenariosGrid);
        scenariosContainer.appendChild(scenariosGrid);
    }
    
    // Save original content
    const originalGridHTML = scenariosGrid.innerHTML;
    const originalContainerHTML = scenariosContainer.innerHTML;
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (!searchTerm) {
            // If search is empty, reset to original content
            scenariosContainer.innerHTML = originalContainerHTML;
            return;
        }
        
        // Filter the cards based on search term
        const filteredCards = Array.from(cards).filter(card => {
            const title = card.querySelector('.phish_guide_card_title').textContent.toLowerCase();
            const description = card.querySelector('.phish_guide_card_description').textContent.toLowerCase();
            return title.includes(searchTerm) || description.includes(searchTerm);
        });
        
        // Create results header
        const resultsHeader = document.createElement('div');
        resultsHeader.className = 'phish_guide_results_header';
        
        if (filteredCards.length === 0) {
            // No results found
            resultsHeader.innerHTML = `
                <h3 class="phish_guide_results_title">No results found for "${searchTerm}"</h3>
                <p style="margin-bottom: 25px;">Try a different search term or browse our common scenarios below.</p>
                <button class="phish_guide_btn" id="resetSearch">Show All Scenarios</button>
            `;
        } else {
            // Results found
            resultsHeader.innerHTML = `
                <h3 class="phish_guide_results_title">Results for "${searchTerm}"</h3>
                <button class="phish_guide_btn2" id="resetSearch">Show All Scenarios</button>
            `;
        }
        
        // Clear current content
        scenariosContainer.innerHTML = '';
        
        // Add the header and recreate the grid
        scenariosContainer.appendChild(resultsHeader);
        
        const newGrid = document.createElement('div');
        newGrid.className = 'phish_guide_scenarios_grid';
        scenariosContainer.appendChild(newGrid);
        
        // Add filtered cards to grid
        if (filteredCards.length > 0) {
            filteredCards.forEach(card => {
                newGrid.appendChild(card.cloneNode(true));
            });
        }
        
        // Add reset button event listener
        document.getElementById('resetSearch').addEventListener('click', function() {
            scenariosContainer.innerHTML = originalContainerHTML;
            searchInput.value = '';
        });
    });
    
    // Scenario button handlers
    const scenarioButtons = document.querySelectorAll('.phish_guide_question_btn');
    
    scenarioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const scenario = this.textContent.toLowerCase().trim();
            
            // Match scenario to related cards
            const relatedCards = Array.from(cards).filter(card => {
                const title = card.querySelector('.phish_guide_card_title').textContent.toLowerCase();
                const description = card.querySelector('.phish_guide_card_description').textContent.toLowerCase();
                
                // Map common scenarios to keywords for better matching
                const keywordMap = {
                    'i clicked on a suspicious link': ['link', 'click', 'phishing', 'suspicious'],
                    'i provided personal information': ['personal', 'information', 'credentials', 'identity'],
                    'i downloaded something suspicious': ['malicious', 'download', 'attachment', 'document'],
                    'i received a suspicious email': ['email', 'message', 'suspicious', 'compromised'],
                    'i got a message about my package': ['package', 'delivery', 'tracking', 'shipping'],
                    'someone asked for my password': ['password', 'reset', 'credentials', 'account'],
                    'i have a virus warning': ['virus', 'malware', 'warning', 'security'],
                    'i received an account deletion notice': ['account', 'deletion', 'notice', 'warning']
                };
                
                const keywords = keywordMap[scenario] || [scenario];
                
                // Check if any keyword appears in the title or description
                return keywords.some(keyword => 
                    title.includes(keyword) || description.includes(keyword)
                );
            });
            
            // Create results header
            const resultsHeader = document.createElement('div');
            resultsHeader.className = 'phish_guide_results_header';
            resultsHeader.style.width = '100%';
            resultsHeader.style.textAlign = 'center';
            resultsHeader.style.marginBottom = '30px';
            
            if (relatedCards.length === 0) {
                // No results found
                resultsHeader.innerHTML = `
                    <h3 style="margin-bottom: 15px; color: var(--dark2);">No results found for "${scenario}"</h3>
                    <p style="margin-bottom: 25px;">Try a different scenario or browse all scenarios below.</p>
                    <button class="phish_guide_btn" id="resetSearch">Show All Scenarios</button>
                `;
            } else {
                // Results found
                resultsHeader.innerHTML = `
                    <h3 style="margin-bottom: 15px; color: var(--primary_color);">Results for "${scenario}"</h3>
                    <button class="phish_guide_btn2" id="resetSearch">Show All Scenarios</button>
                `;
            }
            
            // Clear current content
            scenariosContainer.innerHTML = '';
            
            // Add the header and recreate the grid
            scenariosContainer.appendChild(resultsHeader);
            
            const newGrid = document.createElement('div');
            newGrid.className = 'phish_guide_scenarios_grid';
            scenariosContainer.appendChild(newGrid);
            
            // Add filtered cards to grid
            if (relatedCards.length > 0) {
                relatedCards.forEach(card => {
                    newGrid.appendChild(card.cloneNode(true));
                });
            }
            
            // Add reset button event listener
            document.getElementById('resetSearch').addEventListener('click', function() {
                scenariosContainer.innerHTML = originalContainerHTML;
                searchInput.value = '';
            });
            
            // Scroll to results
            document.querySelector('.phish_guide_scenarios').scrollIntoView({
                behavior: 'smooth'
            });
            
            // Highlight active button
            scenarioButtons.forEach(btn => {
                btn.classList.remove('active_scenario');
                btn.style.backgroundColor = '';
                btn.style.color = '';
            });
            
            this.classList.add('active_scenario');
            this.style.backgroundColor = 'var(--primary_color)';
            this.style.color = 'white';
        });
    });
    
    // Add CSS for the results header if not already in stylesheet
    if (!document.querySelector('#phish_guide_dynamic_styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'phish_guide_dynamic_styles';
        styleElement.textContent = `
            .phish_guide_scenarios_container {
                width: 100%;
                max-width: 1200px;
                margin: 0 auto;
            }
            
            .phish_guide_results_header {
                width: 100%;
                text-align: center;
                margin-bottom: 30px;
            }
            
            .phish_guide_results_title {
                margin-bottom: 15px;
                color: var(--primary_color);
            }
        `;
        document.head.appendChild(styleElement);
    }
});

// Add some smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});