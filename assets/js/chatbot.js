document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mock articles data with professional cybersecurity content
    const mockArticles = [
       {
        id: 1,
        title: "Zero Trust Architecture: Implementation Guide for Enterprises",
        description: "A comprehensive framework for implementing zero trust security models across your organization's infrastructure.",
        imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        url: "#",
        tags: ["Zero Trust", "Enterprise Security", "Network Architecture"]
      },
      {
        id: 2,
        title: "Ransomware Defense: Advanced Protection Strategies",
        description: "Proactive measures and response protocols to safeguard your organization against sophisticated ransomware threats.",
        imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        url: "#",
        tags: ["Ransomware", "Threat Prevention", "Incident Response"]
      },
      {
        id: 3,
        title: "Securing Cloud Infrastructure: Best Practices",
        description: "Essential security controls and governance frameworks for multi-cloud and hybrid cloud environments.",
        imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        url: "#",
        tags: ["Cloud Security", "Infrastructure", "Compliance"]
      },
      {
        id: 4,
        title: "Advanced Threat Detection Using AI and Machine Learning",
        description: "How artificial intelligence is revolutionizing cybersecurity threat detection and response capabilities.",
        imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        url: "#",
        tags: ["AI", "Threat Detection", "Security Operations"]
      },
      {
        id: 5,
        title: "Securing Remote Workforce: Enterprise Strategies",
        description: "Comprehensive security frameworks for protecting distributed teams and remote access to corporate resources.",
        imageUrl: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        url: "#",
        tags: ["Remote Work", "Endpoint Security", "Zero Trust"]
      },
      {
        id: 6,
        title: "Building a Cyber-Resilient Organization",
        description: "Strategies for developing organizational resilience against evolving cyber threats and security challenges.",
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        url: "#",
        tags: ["Cyber Resilience", "Risk Management", "Business Continuity"]
      }
    ];
  
    // Professional AI responses focused on enterprise cybersecurity
    const mockResponses = [
      'Based on your query, I recommend implementing a comprehensive zero trust architecture with continuous authentication and least privilege access controls to strengthen your security posture.',
      'To address your concern, consider deploying advanced endpoint detection and response (EDR) solutions combined with a security information and event management (SIEM) system for enhanced visibility.',
      'The enterprise best practice is to establish a defense-in-depth strategy with multiple security layers, including network segmentation, data encryption, and regular security assessments.',
      'For your enterprise security needs, I recommend implementing a robust identity and access management framework with privileged access management and just-in-time access provisioning.',
      'To mitigate these risks, consider adopting a comprehensive security orchestration, automation and response (SOAR) platform integrated with your existing security tools for faster incident response.'
    ];
  
    // DOM elements
    const searchForm = document.getElementById('search-form');
    const queryInput = document.getElementById('query-input');
    const searchButton = document.getElementById('search-button');
    const searchIconDefault = document.querySelector('.search-icon-default');
    const searchLoading = document.querySelector('.search-loading');
    const aiResponseSection = document.getElementById('ai-response-section');
    const aiResponseText = document.getElementById('ai-response-text');
    const articlesSection = document.getElementById('articles-section');
    const articlesContainer = document.getElementById('articles-container');
  
    // Handle search form submission
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const query = queryInput.value.trim();
      if (!query) return;
      
      // Show loading state
      searchIconDefault.classList.add('hidden');
      searchLoading.classList.remove('hidden');
      searchButton.disabled = true;
      
      // Simulate AI processing with a realistic delay
      setTimeout(() => {
        // Generate a contextual response
        const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
        const personalizedResponse = randomResponse.replace('your query', `your inquiry about "${query}"`);
        
        // Update AI response
        aiResponseText.textContent = personalizedResponse;
        aiResponseSection.classList.remove('hidden');
        
        // Filter articles based on query keywords with improved relevance
        let filteredArticles = mockArticles.filter(article => {
          // Check title, description and tags for matches
          const titleMatch = article.title.toLowerCase().includes(query.toLowerCase());
          const descMatch = article.description.toLowerCase().includes(query.toLowerCase());
          const tagMatch = article.tags.some(tag => 
            query.toLowerCase().includes(tag.toLowerCase()) || 
            tag.toLowerCase().includes(query.toLowerCase())
          );
          
          // Prioritize exact matches
          if (titleMatch) return true;
          if (descMatch) return true;
          if (tagMatch) return true;
          
          // Check for partial matches in keywords
          const keywords = query.toLowerCase().split(' ');
          return keywords.some(keyword => 
            keyword.length > 3 && (
              article.title.toLowerCase().includes(keyword) || 
              article.description.toLowerCase().includes(keyword) ||
              article.tags.some(tag => tag.toLowerCase().includes(keyword))
            )
          );
        });
        
        // If no matches, show most relevant articles
        if (filteredArticles.length === 0) {
          filteredArticles = mockArticles.slice(0, 3);
        } else if (filteredArticles.length > 3) {
          // Limit to 3 most relevant articles
          filteredArticles = filteredArticles.slice(0, 3);
        }
        
        // Render articles with animation
        renderArticles(filteredArticles);
        articlesSection.classList.remove('hidden');
        
        // Reset loading state
        searchIconDefault.classList.remove('hidden');
        searchLoading.classList.add('hidden');
        searchButton.disabled = false;
        
        // Smooth scroll to results
        setTimeout(() => {
          aiResponseSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }, 1800); // Slightly longer delay for a more realistic AI processing experience
    });
  
    // Function to render articles with enhanced presentation
    function renderArticles(articles) {
      articlesContainer.innerHTML = '';
      
      articles.forEach((article, index) => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.style.opacity = '0';
        articleCard.style.transform = 'translateY(20px)';
        
        const tagsHtml = article.tags.map(tag => 
          `<span class="article-tag">${tag}</span>`
        ).join('');
        
        articleCard.innerHTML = `
          <img src="${article.imageUrl}" alt="${article.title}" class="article-image">
          <div class="article-content">
            <div class="article-tags">
              ${tagsHtml}
            </div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-description">${article.description}</p>
            <a href="${article.url}" class="article-link">
              Read full article
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        `;
        
        articlesContainer.appendChild(articleCard);
        
        // Animate articles appearing with a staggered delay
        setTimeout(() => {
          articleCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          articleCard.style.opacity = '1';
          articleCard.style.transform = 'translateY(0)';
        }, 100 + (index * 150));
      });
    }
    
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Add animation to the robot icon
    const robotIcon = document.querySelector('.robot-icon');
    if (robotIcon) {
      // Subtle floating animation
      setInterval(() => {
        robotIcon.style.transition = 'transform 2s ease-in-out';
        robotIcon.style.transform = 'translateY(-5px)';
        
        setTimeout(() => {
          robotIcon.style.transform = 'translateY(0)';
        }, 1000);
      }, 2000);
    }
    
    // Add focus animation to search input
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.addEventListener('focus', () => {
        document.querySelector('.search-input-container').classList.add('focused');
      });
      
      searchInput.addEventListener('blur', () => {
        document.querySelector('.search-input-container').classList.remove('focused');
      });
    }
  });