// Global variables
let blogPosts = [
    {
        id: 1,
        title: "The Rise of AI-Powered Cyber Threats: What You Need to Know",
        excerpt: "Artificial intelligence has revolutionized numerous industries with its capabilities for automation, data analysis, and decision-making. However, as with any powerful technology, AI has a dark side.",
        date: "April 3, 2025",
        readTime: "8 Min Read",
        views: "1.2k Views",
        author: "Security Analyst",
        image: "/api/placeholder/400/220",
        tags: ["AI Security", "Cybersecurity", "Machine Learning", "Threat Intelligence", "Data Protection"],
        category: "AI Security",
        featured: true
    },
    {
        id: 2,
        title: "How Organizations Are Fighting AI Phishing Attacks",
        excerpt: "Discover the innovative strategies companies are deploying to combat increasingly sophisticated AI-powered phishing campaigns.",
        date: "March 20, 2025",
        readTime: "6 Min Read",
        views: "950 Views",
        author: "Phishing Expert",
        image: "/api/placeholder/400/220",
        tags: ["AI Security", "Phishing", "Email Security", "Social Engineering"],
        category: "Cyber Threats",
        featured: false
    },
    {
        id: 3,
        title: "The Growing Market for Deepfake Detection Tools",
        excerpt: "As deepfakes become more convincing, a new industry of detection technologies is emerging to help organizations verify digital content.",
        date: "March 15, 2025",
        readTime: "5 Min Read",
        views: "820 Views",
        author: "Media Specialist",
        image: "/api/placeholder/400/220",
        tags: ["Deepfakes", "AI", "Media Authentication", "Cybersecurity"],
        category: "AI Security",
        featured: false
    },
    {
        id: 4,
        title: "Building Security-First AI Systems for Enterprise",
        excerpt: "Learn how companies can implement robust security measures when developing and deploying their own AI applications.",
        date: "March 8, 2025",
        readTime: "7 Min Read",
        views: "760 Views",
        author: "Enterprise Architect",
        image: "/api/placeholder/400/220",
        tags: ["AI", "Enterprise Security", "Best Practices", "Development"],
        category: "Best Practices",
        featured: false
    },
    {
        id: 5,
        title: "Essential Cloud Security Practices for 2025",
        excerpt: "The latest strategies for securing cloud infrastructure and applications in an increasingly complex threat landscape.",
        date: "March 28, 2025",
        readTime: "9 Min Read",
        views: "1.1k Views",
        author: "Cloud Security Expert",
        image: "/api/placeholder/80/80",
        tags: ["Cloud", "AWS", "Azure", "DevSecOps", "Containers"],
        category: "Cloud Security",
        featured: false
    },
    {
        id: 6,
        title: "Implementing Zero Trust in Modern Networks",
        excerpt: "A comprehensive guide to implementing zero trust architecture across your organization's network infrastructure.",
        date: "March 15, 2025",
        readTime: "10 Min Read",
        views: "980 Views",
        author: "Network Architect",
        image: "/api/placeholder/80/80",
        tags: ["Zero Trust", "Network Security", "Access Control", "Authentication"],
        category: "Security Tools",
        featured: false
    },
    {
        id: 7,
        title: "Ransomware Defense Strategies That Work",
        excerpt: "Proven methods to protect your organization against the latest generation of ransomware attacks.",
        date: "March 5, 2025",
        readTime: "7 Min Read",
        views: "1.5k Views",
        author: "Incident Response Specialist",
        image: "/api/placeholder/80/80",
        tags: ["Ransomware", "Incident Response", "Backup Strategies", "Recovery"],
        category: "Incident Response",
        featured: false
    }
];

// Categories with post counts
const categories = [
    { name: "Cyber Threats", count: 24 },
    { name: "Data Protection", count: 18 },
    { name: "AI Security", count: 12 },
    { name: "Cloud Security", count: 15 },
    { name: "Incident Response", count: 9 },
    { name: "Security Tools", count: 22 }
];

// Popular tags
const popularTags = [
    "Cybersecurity", "AI", "Zero Trust", "Cloud", "Ransomware", 
    "Data Privacy", "IoT", "Phishing", "Compliance"
];

// DOM content loaded event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize search functionality
    initSearch();
    
    // Initialize tag click handlers
    initTagHandlers();
    
    // Initialize category click handlers
    initCategoryHandlers();
    
    // Initialize newsletter subscription
    initNewsletter();
});

// Initialize search functionality
function initSearch() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch(searchInput.value);
        });
    }
    
    // Search button click handler
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
    }
    
    // Enter key press in search input
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(searchInput.value);
            }
        });
    }
}

// Search functionality
function performSearch(query) {
    if (!query.trim()) {
        showNotification("Please enter a search term");
        return;
    }
    
    query = query.toLowerCase();
    
    // Get search scope
    const searchScope = document.querySelector('input[name="search-scope"]:checked').nextSibling.textContent.trim();
    
    // Filter blog posts based on search query
    const results = blogPosts.filter(post => {
        // Search in title, excerpt, tags, and category
        return post.title.toLowerCase().includes(query) || 
               post.excerpt.toLowerCase().includes(query) ||
               post.tags.some(tag => tag.toLowerCase().includes(query)) ||
               post.category.toLowerCase().includes(query);
    });
    
    displaySearchResults(query, results, searchScope);
}

// Display search results
function displaySearchResults(query, results, scope) {
    // Create a modal for search results
    const modal = document.createElement('div');
    modal.className = 'search-results-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.zIndex = '1000';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    
    // Create search results container
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results-container';
    resultsContainer.style.width = '80%';
    resultsContainer.style.maxWidth = '800px';
    resultsContainer.style.maxHeight = '80vh';
    resultsContainer.style.overflowY = 'auto';
    resultsContainer.style.backgroundColor = 'white';
    resultsContainer.style.borderRadius = '15px';
    resultsContainer.style.padding = '30px';
    resultsContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    
    // Create header
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = '20px';
    header.style.borderBottom = '1px solid #eee';
    header.style.paddingBottom = '15px';
    
    // Add title
    const title = document.createElement('h2');
    title.textContent = `Search Results for "${query}" in ${scope}`;
    title.style.fontFamily = 'var(--font_yantramanv)';
    title.style.fontSize = '24px';
    title.style.margin = '0';
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#1351D8';
    closeButton.onclick = function() {
        document.body.removeChild(modal);
    };
    
    header.appendChild(title);
    header.appendChild(closeButton);
    resultsContainer.appendChild(header);
    
    // Create results content
    const resultsList = document.createElement('div');
    resultsList.className = 'results-list';
    
    // Add results count
    const resultCount = document.createElement('p');
    resultCount.textContent = `Found ${results.length} results`;
    resultCount.style.marginBottom = '20px';
    resultCount.style.color = '#454545';
    resultsList.appendChild(resultCount);
    
    if (results.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'No results found. Try different keywords or browse our categories.';
        noResults.style.padding = '20px 0';
        noResults.style.textAlign = 'center';
        noResults.style.color = '#454545';
        resultsList.appendChild(noResults);
    } else {
        // Display each result
        results.forEach(post => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.style.display = 'flex';
            resultItem.style.gap = '20px';
            resultItem.style.marginBottom = '25px';
            resultItem.style.padding = '15px';
            resultItem.style.borderRadius = '10px';
            resultItem.style.transition = 'background-color 0.3s';
            resultItem.style.cursor = 'pointer';
            
            resultItem.addEventListener('mouseover', function() {
                this.style.backgroundColor = 'var(--primary_light)';
            });
            
            resultItem.addEventListener('mouseout', function() {
                this.style.backgroundColor = 'transparent';
            });
            
            resultItem.addEventListener('click', function() {
                // In a real application, this would navigate to the post
                showNotification(`Navigating to article: ${post.title}`);
                document.body.removeChild(modal);
            });
            
            // Post image
            const imageDiv = document.createElement('div');
            imageDiv.style.width = '120px';
            imageDiv.style.height = '80px';
            imageDiv.style.borderRadius = '8px';
            imageDiv.style.overflow = 'hidden';
            imageDiv.style.flexShrink = '0';
            
            const image = document.createElement('img');
            image.src = post.image;
            image.alt = post.title;
            image.style.width = '100%';
            image.style.height = '100%';
            image.style.objectFit = 'cover';
            
            imageDiv.appendChild(image);
            resultItem.appendChild(imageDiv);
            
            // Post details
            const detailsDiv = document.createElement('div');
            detailsDiv.style.flex = '1';
            
            const postTitle = document.createElement('h3');
            postTitle.textContent = post.title;
            postTitle.style.fontFamily = 'var(--font_yantramanv)';
            postTitle.style.fontSize = '18px';
            postTitle.style.fontWeight = '700';
            postTitle.style.margin = '0 0 8px 0';
            postTitle.style.color = 'var(--dark1)';
            
            const postExcerpt = document.createElement('p');
            postExcerpt.textContent = post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + '...' : post.excerpt;
            postExcerpt.style.fontSize = '14px';
            postExcerpt.style.margin = '0 0 8px 0';
            postExcerpt.style.color = 'var(--dark2)';
            
            const postMeta = document.createElement('div');
            postMeta.style.display = 'flex';
            postMeta.style.gap = '15px';
            postMeta.style.fontSize = '13px';
            postMeta.style.color = 'var(--dark2)';
            
            const postDate = document.createElement('span');
            postDate.textContent = post.date;
            
            const postCategory = document.createElement('span');
            postCategory.textContent = post.category;
            postCategory.style.color = 'var(--primary_color)';
            
            postMeta.appendChild(postDate);
            postMeta.appendChild(postCategory);
            
            detailsDiv.appendChild(postTitle);
            detailsDiv.appendChild(postExcerpt);
            detailsDiv.appendChild(postMeta);
            
            resultItem.appendChild(detailsDiv);
            resultsList.appendChild(resultItem);
        });
    }
    
    resultsContainer.appendChild(resultsList);
    modal.appendChild(resultsContainer);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
    
    // Restore scrolling when modal is closed
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.style.overflow = '';
        }
    });
    
    closeButton.addEventListener('click', function() {
        document.body.style.overflow = '';
    });
}

// Initialize tag click handlers
function initTagHandlers() {
    // Blog page tags
    const blogTags = document.querySelectorAll('.blog-tag');
    blogTags.forEach(tag => {
        tag.addEventListener('click', function() {
            filterByTag(this.textContent);
        });
    });
    
    // Article footer tags
    const articleTags = document.querySelectorAll('.article-tag');
    articleTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            filterByTag(this.textContent);
        });
    });
    
    // Sidebar widget tags
    const widgetTags = document.querySelectorAll('.widget-tag');
    widgetTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            filterByTag(this.textContent);
        });
    });
}

// Filter content by tag
function filterByTag(tagName) {
    // Find posts with this tag
    const filteredPosts = blogPosts.filter(post => 
        post.tags.some(tag => tag.toLowerCase() === tagName.toLowerCase())
    );
    
    displayFilteredResults(tagName, filteredPosts, 'tag');
}

// Initialize category click handlers
function initCategoryHandlers() {
    const categoryLinks = document.querySelectorAll('.widget-categories a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Extract category name (text before the span)
            const categoryName = this.childNodes[0].textContent.trim();
            filterByCategory(categoryName);
        });
    });
    
    // Trending topics
    const trendingTopics = document.querySelectorAll('.topic-name');
    trendingTopics.forEach(topic => {
        topic.addEventListener('click', function() {
            filterByCategory(this.textContent);
        });
    });
}

// Filter content by category
function filterByCategory(categoryName) {
    // Find posts in this category
    const filteredPosts = blogPosts.filter(post => 
        post.category.toLowerCase() === categoryName.toLowerCase()
    );
    
    displayFilteredResults(categoryName, filteredPosts, 'category');
}

// Display filtered results (shared by tag and category filters)
function displayFilteredResults(filterName, results, filterType) {
    // Create a modal for filtered results
    const modal = document.createElement('div');
    modal.className = 'filtered-results-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.zIndex = '1000';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    
    // Create filtered results container
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'filtered-results-container';
    resultsContainer.style.width = '80%';
    resultsContainer.style.maxWidth = '800px';
    resultsContainer.style.maxHeight = '80vh';
    resultsContainer.style.overflowY = 'auto';
    resultsContainer.style.backgroundColor = 'white';
    resultsContainer.style.borderRadius = '15px';
    resultsContainer.style.padding = '30px';
    resultsContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    
    // Create header
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.marginBottom = '20px';
    header.style.borderBottom = '1px solid #eee';
    header.style.paddingBottom = '15px';
    
    // Add title
    const title = document.createElement('h2');
    title.textContent = filterType === 'tag' ? 
        `Articles Tagged with "${filterName}"` : 
        `Articles in "${filterName}" Category`;
    title.style.fontFamily = 'var(--font_yantramanv)';
    title.style.fontSize = '24px';
    title.style.margin = '0';
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#1351D8';
    closeButton.onclick = function() {
        document.body.removeChild(modal);
    };
    
    header.appendChild(title);
    header.appendChild(closeButton);
    resultsContainer.appendChild(header);
    
    // Create results content
    const resultsList = document.createElement('div');
    resultsList.className = 'filtered-list';
    
    // Add results count
    const resultCount = document.createElement('p');
    resultCount.textContent = `Found ${results.length} articles`;
    resultCount.style.marginBottom = '20px';
    resultCount.style.color = '#454545';
    resultsList.appendChild(resultCount);
    
    if (results.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'No articles found in this category. Check out our other topics.';
        noResults.style.padding = '20px 0';
        noResults.style.textAlign = 'center';
        noResults.style.color = '#454545';
        resultsList.appendChild(noResults);
    } else {
        // Display results in a grid
        const resultsGrid = document.createElement('div');
        resultsGrid.style.display = 'grid';
        resultsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(230px, 1fr))';
        resultsGrid.style.gap = '20px';
        
        results.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card';
            postCard.style.background = 'var(--primary_light)';
            postCard.style.borderRadius = '10px';
            postCard.style.overflow = 'hidden';
            postCard.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
            postCard.style.transition = 'transform 0.3s, box-shadow 0.3s';
            postCard.style.cursor = 'pointer';
            
            postCard.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 12px 20px rgba(0,0,0,0.1)';
            });
            
            postCard.addEventListener('mouseout', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
            });
            
            postCard.addEventListener('click', function() {
                // In a real application, this would navigate to the post
                showNotification(`Navigating to article: ${post.title}`);
                document.body.removeChild(modal);
            });
            
            // Post image
            const imageDiv = document.createElement('div');
            imageDiv.style.width = '100%';
            imageDiv.style.height = '150px';
            imageDiv.style.overflow = 'hidden';
            
            const image = document.createElement('img');
            image.src = post.image;
            image.alt = post.title;
            image.style.width = '100%';
            image.style.height = '100%';
            image.style.objectFit = 'cover';
            image.style.transition = 'transform 0.5s';
            
            imageDiv.appendChild(image);
            postCard.appendChild(imageDiv);
            
            // Post content
            const postContent = document.createElement('div');
            postContent.style.padding = '15px';
            
            const postTitle = document.createElement('h3');
            postTitle.textContent = post.title.length > 60 ? post.title.substring(0, 60) + '...' : post.title;
            postTitle.style.fontFamily = 'var(--font_yantramanv)';
            postTitle.style.fontSize = '16px';
            postTitle.style.fontWeight = '700';
            postTitle.style.margin = '0 0 10px 0';
            postTitle.style.color = 'var(--dark1)';
            postTitle.style.lineHeight = '1.4';
            
            const postMeta = document.createElement('div');
            postMeta.style.display = 'flex';
            postMeta.style.justifyContent = 'space-between';
            postMeta.style.fontSize = '12px';
            postMeta.style.color = 'var(--dark2)';
            
            const postDate = document.createElement('span');
            postDate.textContent = post.date;
            
            const postReadTime = document.createElement('span');
            postReadTime.textContent = post.readTime;
            
            postMeta.appendChild(postDate);
            postMeta.appendChild(postReadTime);
            
            postContent.appendChild(postTitle);
            postContent.appendChild(postMeta);
            postCard.appendChild(postContent);
            
            resultsGrid.appendChild(postCard);
        });
        
        resultsList.appendChild(resultsGrid);
    }
    
    resultsContainer.appendChild(resultsList);
    modal.appendChild(resultsContainer);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
    
    // Restore scrolling when modal is closed
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.style.overflow = '';
        }
    });
    
    closeButton.addEventListener('click', function() {
        document.body.style.overflow = '';
    });
}

// Initialize newsletter subscription
function initNewsletter() {
    // Create newsletter form if it doesn't exist
    if (!document.querySelector('.newsletter-form')) {
        const sidebarWidgets = document.querySelector('.sidebar');
        if (sidebarWidgets) {
            const newsletterWidget = document.createElement('div');
            newsletterWidget.className = 'sidebar-widget';
            
            const widgetTitle = document.createElement('h3');
            widgetTitle.className = 'widget-title';
            widgetTitle.textContent = 'Newsletter';
            
            const newsletterForm = document.createElement('form');
            newsletterForm.className = 'newsletter-form';
            
            const emailInput = document.createElement('input');
            emailInput.type = 'email';
            emailInput.className = 'newsletter-input';
            emailInput.placeholder = 'Your email address';
            emailInput.required = true;
            
            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.className = 'newsletter-button';
            submitButton.textContent = 'Subscribe';
            
            newsletterForm.appendChild(emailInput);
            newsletterForm.appendChild(submitButton);
            
            newsletterWidget.appendChild(widgetTitle);
            newsletterWidget.appendChild(newsletterForm);
            
            sidebarWidgets.appendChild(newsletterWidget);
            
            // Add event listener
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = emailInput.value;
                if (validateEmail(email)) {
                    showNotification(`Thanks for subscribing with ${email}!`);
                    emailInput.value = '';
                } else {
                    showNotification('Please enter a valid email address');
                }
            });
        }
    } else {
        // If form already exists, add event listener
        const newsletterForm = document.querySelector('.newsletter-form');
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.querySelector('.newsletter-input').value;
            if (validateEmail(email)) {
                showNotification(`Thanks for subscribing with ${email}!`);
                document.querySelector('.newsletter-input').value = '';
            } else {
                showNotification('Please enter a valid email address');
            }
        });
    }
}

// Email validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary_color)';
    notification.style.color = 'white';
    notification.style.padding = '12px 24px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    notification.style.zIndex = '9999';
    notification.style.transition = 'all 0.5s';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.textContent = message;
    
    // Add notification to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Enhanced "Read More" links
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('Navigating to full article...');
    });
});

// Share buttons functionality
document.querySelectorAll('.share-button').forEach((button, index) => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const pageTitle = document.querySelector('.blog-title').textContent;
        const pageUrl = window.location.href;
        
        // Determine which social platform based on index or content
        let shareUrl;
        if (this.textContent === '𝕏') {
            // Twitter/X sharing
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(pageUrl)}`;
        } else if (this.textContent === 'in') {
            // LinkedIn sharing
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
        } else if (this.textContent === 'f') {
            // Facebook sharing
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
        } else if (this.textContent === '📧') {
            // Email sharing
            shareUrl = `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(`Check out this article: ${pageUrl}`)}`;
        }
        
        // Open share URL in new window
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
            showNotification(`Sharing via ${this.textContent}`);
        }
    });
});

// Load more posts functionality
const loadMoreButton = document.querySelector('.load-more-button');
if (loadMoreButton) {
    loadMoreButton.addEventListener('click', function() {
        // Simulate loading more posts
        showNotification('Loading more articles...');
        
        // In a real implementation, this would fetch more posts from a server
        // For demo purposes, we'll just show a notification
        setTimeout(() => {
            showNotification('No more articles to load');
        }, 2000);
    });
}

// Comment form handling
const commentForm = document.querySelector('.comment-form');
if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const nameInput = document.querySelector('#comment-name');
        const emailInput = document.querySelector('#comment-email');
        const messageInput = document.querySelector('#comment-message');
        
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            showNotification('Please fill in all fields');
            return;
        }
        
        if (!validateEmail(emailInput.value)) {
            showNotification('Please enter a valid email address');
            return;
        }
        
        // In a real implementation, this would submit the comment to a server
        showNotification('Thank you for your comment!');
        
        // Clear form
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });
}

// Dark mode toggle
function initDarkModeToggle() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            
            showNotification(isDarkMode ? 'Dark mode enabled' : 'Light mode enabled');
        });
        
        // Check for saved preference
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
}

// Initialize dark mode toggle
initDarkModeToggle();

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        }
    });
}

// Font size adjustments
const fontSizeControls = document.querySelectorAll('.font-size-control');
if (fontSizeControls.length) {
    fontSizeControls.forEach(control => {
        control.addEventListener('click', function() {
            const action = this.dataset.action;
            const contentBody = document.querySelector('.blog-content');
            
            if (!contentBody) return;
            
            let currentSize = parseInt(window.getComputedStyle(contentBody).fontSize);
            
            if (action === 'increase' && currentSize < 24) {
                contentBody.style.fontSize = (currentSize + 2) + 'px';
                showNotification('Font size increased');
            } else if (action === 'decrease' && currentSize > 12) {
                contentBody.style.fontSize = (currentSize - 2) + 'px';
                showNotification('Font size decreased');
            } else if (action === 'reset') {
                contentBody.style.fontSize = '';
                showNotification('Font size reset');
            }
        });
    });
}