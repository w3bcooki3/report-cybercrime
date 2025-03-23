document.addEventListener('DOMContentLoaded', function() {
    // Original script initialization
    const landingContainer = document.getElementById('landingContainer');
    const assessmentContainer = document.getElementById('assessmentContainer');
    const startButton = document.getElementById('startAssessment');
    const progressBar = document.getElementById('progressBar');
    const resultContainer = document.getElementById('resultContainer');
    const finalScoreElement = document.getElementById('finalScore');
    const riskLevelElement = document.getElementById('riskLevel');
    const resultDescriptionElement = document.getElementById('resultDescription');
    const summaryItemsContainer = document.getElementById('summaryItems');
    const savePDFButton = document.getElementById('savePDF');
    const restartButton = document.getElementById('restartAssessment');
    
    // Question containers
    const questionContainers = document.querySelectorAll('.question-container');
    
    // State variables
    let currentQuestion = 1;
    let totalQuestions = questionContainers.length;
    let userResponses = [];
    let totalScore = 0;
    
    // Feedback content
    const feedbackContent = {
        // Feedback content remains the same
        question1: {
            good: {
                title: "Excellent password practice!",
                advice: "Regular password updates significantly reduce your risk of unauthorized access. Consider using a password manager to generate and store complex passwords securely.",
                resources: [
                    {
                        title: "Password Manager Guide",
                        description: "Learn how to use password managers effectively"
                    },
                    {
                        title: "Creating Strong Passwords",
                        description: "Best practices for creating secure passwords"
                    }
                ]
            },
            medium: {
                title: "Room for improvement",
                advice: "Annual password changes are better than nothing, but increasing frequency and using unique passwords for each account would greatly enhance your security.",
                resources: [
                    {
                        title: "Password Security Tips",
                        description: "Simple ways to improve your password security"
                    }
                ]
            },
            bad: {
                title: "High risk practice",
                advice: "Using the same password across accounts creates significant vulnerability. If one account is compromised, all others become vulnerable.",
                resources: [
                    {
                        title: "Password Security Basics",
                        description: "Essential steps to protect your accounts"
                    },
                    {
                        title: "Password Manager Comparison",
                        description: "Find the right password manager for your needs"
                    }
                ]
            }
        },
        question2: {
            good: {
                title: "Excellent email security awareness!",
                advice: "Your cautious approach to suspicious emails significantly reduces your risk of phishing attacks and malware infections.",
                resources: [
                    {
                        title: "Advanced Phishing Detection",
                        description: "Learn to identify sophisticated phishing attempts"
                    }
                ]
            },
            medium: {
                title: "Moderate risk level",
                advice: "Clicking on links even occasionally can expose you to phishing attacks. Always verify the sender through other means before engaging with unexpected emails.",
                resources: [
                    {
                        title: "Email Safety Guide",
                        description: "How to safely handle suspicious emails"
                    }
                ]
            },
            bad: {
                title: "High risk behavior",
                advice: "Clicking on unknown links is one of the most common ways malware is installed and accounts are compromised. This practice significantly increases your cyber risk.",
                resources: [
                    {
                        title: "Phishing 101",
                        description: "Learn to identify and avoid phishing attempts"
                    },
                    {
                        title: "Safe Email Practices",
                        description: "Essential guidelines for email security"
                    }
                ]
            }
        },
        question3: {
            good: {
                title: "Excellent update practices!",
                advice: "Keeping your software updated promptly is one of the most effective security measures you can take.",
                resources: [
                    {
                        title: "Update Automation Guide",
                        description: "How to automate updates across all your devices"
                    }
                ]
            },
            medium: {
                title: "Moderate risk level",
                advice: "Delaying updates leaves you temporarily vulnerable to known security issues that have already been patched.",
                resources: [
                    {
                        title: "Update Scheduling Tips",
                        description: "How to manage updates with minimal disruption"
                    }
                ]
            },
            bad: {
                title: "High risk practice",
                advice: "Ignoring updates leaves your devices vulnerable to known security vulnerabilities that hackers actively exploit.",
                resources: [
                    {
                        title: "Understanding Security Patches",
                        description: "Why updates are crucial for security"
                    },
                    {
                        title: "Update Management Guide",
                        description: "Making updates less disruptive to your workflow"
                    }
                ]
            }
        },
        question4: {
            good: {
                title: "Excellent account security!",
                advice: "Using a password manager and two-factor authentication provides strong protection against unauthorized access.",
                resources: [
                    {
                        title: "Advanced 2FA Methods",
                        description: "Going beyond SMS-based two-factor authentication"
                    }
                ]
            },
            medium: {
                title: "Moderate protection",
                advice: "Consider extending two-factor authentication to all important accounts, not just financial ones.",
                resources: [
                    {
                        title: "2FA Implementation Guide",
                        description: "How to set up two-factor authentication everywhere"
                    }
                ]
            },
            bad: {
                title: "Minimal protection",
                advice: "Passwords alone, especially if reused, provide inadequate protection in today's threat landscape.",
                resources: [
                    {
                        title: "Account Security Basics",
                        description: "Essential steps to protect your online accounts"
                    },
                    {
                        title: "Two-Factor Authentication Guide",
                        description: "How to implement 2FA on your accounts"
                    }
                ]
            }
        },
        question5: {
            good: {
                title: "Excellent Wi-Fi security!",
                advice: "Using a VPN on public Wi-Fi networks effectively protects your data from interception.",
                resources: [
                    {
                        title: "VPN Comparison Guide",
                        description: "Finding the right VPN service for your needs"
                    }
                ]
            },
            medium: {
                title: "Moderate protection",
                advice: "While avoiding sensitive transactions on public Wi-Fi is good practice, consider using a VPN for all public Wi-Fi connections.",
                resources: [
                    {
                        title: "VPN Basics",
                        description: "Introduction to virtual private networks"
                    }
                ]
            },
            bad: {
                title: "High risk behavior",
                advice: "Using public Wi-Fi for sensitive activities creates significant exposure to potential data interception.",
                resources: [
                    {
                        title: "Public Wi-Fi Dangers",
                        description: "Understanding the risks of unsecured networks"
                    },
                    {
                        title: "Mobile Hotspot Guide",
                        description: "Safer alternatives to public Wi-Fi"
                    }
                ]
            }
        }
    };

    // Risk level descriptions
    const riskDescriptions = {
        high: "Your digital security practices have significant vulnerabilities that could be exploited by cyber attacks. Implementing the recommendations below should be a priority to protect your data and accounts.",
        medium: "Your cyber security posture shows some strengths but also has areas that need improvement. The recommendations below will help you strengthen your digital security.",
        low: "Your digital security practices show good awareness of cyber risks. Review the recommendations below to further enhance your protection."
    };
    
    // Event Listeners
    startButton.addEventListener('click', startAssessment);
    savePDFButton.addEventListener('click', generatePDF);
    restartButton.addEventListener('click', restartAssessment);

    // Setup each question's event handlers
    questionContainers.forEach((container, index) => {
        const questionNum = index + 1;
        const options = container.querySelectorAll('.option');
        
        // Option selection
        options.forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from all options
                options.forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked option
                option.classList.add('selected');
                
                // Enable next/submit button
                const actionButton = container.querySelector('.next-button');
                if (actionButton) {
                    actionButton.removeAttribute('disabled');
                }
                
                // Show feedback for the selected option
                showFeedback(questionNum, option.dataset.value);
            });
        });
    });
    
    // Set up navigation buttons (previous and next/submit)
    questionContainers.forEach((container, index) => {
        const questionNum = index + 1;
        const prevButton = container.querySelector('.prev-button');
        const nextButton = container.querySelector('.next-button');
        
        // Previous button
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                if (questionNum > 1) {
                    goToQuestion(questionNum - 1);
                }
            });
        }
        
        // Next/Submit button
        if (nextButton) {
            // Change text for last question
            if (questionNum === totalQuestions) {
                nextButton.textContent = "Submit Assessment";
            }
            
            nextButton.addEventListener('click', () => {
                // Save response
                const selectedOption = container.querySelector('.option.selected');
                if (selectedOption) {
                    userResponses[questionNum - 1] = {
                        question: container.querySelector('.question-text').textContent,
                        answer: selectedOption.textContent.trim(),
                        value: selectedOption.dataset.value,
                        points: parseInt(selectedOption.dataset.points),
                        advice: feedbackContent[`question${questionNum}`][selectedOption.dataset.value].advice
                    };
                    
                    // Update total score
                    calculateScore();
                    
                    // If last question, show results
                    if (questionNum === totalQuestions) {
                        showResults();
                    } else {
                        // Otherwise, show next question
                        goToQuestion(questionNum + 1);
                    }
                }
            });
        }
    });
    
    // Functions
    function startAssessment() {
        landingContainer.style.display = 'none';
        assessmentContainer.style.display = 'block';
        // Reset state
        currentQuestion = 1;
        userResponses = [];
        totalScore = 0;
        goToQuestion(1);
    }
    
    function restartAssessment() {
        resultContainer.style.display = 'none';
        // Show assessment container again
        assessmentContainer.style.display = 'block';
        // Reset state
        currentQuestion = 1;
        userResponses = [];
        totalScore = 0;
        
        // Reset all selected options
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Reset all next buttons
        document.querySelectorAll('.next-button').forEach(button => {
            button.setAttribute('disabled', true);
        });
        
        // Hide all feedback containers
        document.querySelectorAll('.feedback-container').forEach(container => {
            container.innerHTML = '';
            container.style.display = 'none';
        });
        
        goToQuestion(1);
    }
    
    function goToQuestion(questionNum) {
        // Hide all questions
        questionContainers.forEach(container => {
            container.classList.remove('active');
        });
        
        // Show selected question
        document.getElementById(`question${questionNum}`).classList.add('active');
        currentQuestion = questionNum;
        
        // Update progress bar
        updateProgressBar();

        // Scroll to the top of the assessment container
        assessmentContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    function updateProgressBar() {
        const progress = ((currentQuestion - 1) / totalQuestions) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    function showFeedback(questionNum, value) {
        const feedbackContainer = document.getElementById(`feedback${questionNum}`);
        const feedback = feedbackContent[`question${questionNum}`][value];
        
        // Build feedback HTML
        let feedbackHTML = `
            <h4 class="feedback-title">${feedback.title}</h4>
            <p class="feedback-advice">${feedback.advice}</p>
        `;
        
        if (feedback.resources && feedback.resources.length > 0) {
            feedbackHTML += `<div class="resource-cards">`;
            
            feedback.resources.forEach(resource => {
                feedbackHTML += `
                    <div class="resource-card">
                        <h5 class="card-title">${resource.title}</h5>
                        <p class="card-description">${resource.description}</p>
                    </div>
                `;
            });
            
            feedbackHTML += `</div>`;
        }
        
        // Set feedback HTML and show container
        feedbackContainer.innerHTML = feedbackHTML;
        feedbackContainer.className = 'feedback-container';
        feedbackContainer.classList.add(`feedback-${value}`);
        feedbackContainer.style.display = 'block';
    }
    
    function calculateScore() {
        totalScore = userResponses.reduce((total, response) => {
            return total + (response ? response.points : 0);
        }, 0);
    }
    
    function showResults() {
        // Hide questions
        document.querySelectorAll('.question-container').forEach(container => {
            container.classList.remove('active');
        });
        
        // Show result container - changing this from hiding the assessment container
        assessmentContainer.style.display = 'block';
        resultContainer.style.display = 'block';
        
        // Calculate final score as percentage
        const maxPossibleScore = totalQuestions * 2; // 2 points max per question
        const scorePercentage = Math.round((totalScore / maxPossibleScore) * 100);
        
        // Determine risk level
        let riskLevel;
        if (scorePercentage >= 80) {
            riskLevel = "Low";
            riskLevelElement.className = "risk-level risk-low";
            resultDescriptionElement.textContent = riskDescriptions.low;
        } else if (scorePercentage >= 50) {
            riskLevel = "Medium";
            riskLevelElement.className = "risk-level risk-medium";
            resultDescriptionElement.textContent = riskDescriptions.medium;
        } else {
            riskLevel = "High";
            riskLevelElement.className = "risk-level risk-high";
            resultDescriptionElement.textContent = riskDescriptions.high;
        }
        
        // Update result elements
        finalScoreElement.textContent = scorePercentage;
        riskLevelElement.textContent = `Risk Level: ${riskLevel}`;
        
        // Generate summary items
        generateSummary();
        
        // Show result container - already done above
        progressBar.style.width = '100%'; // Complete the progress bar
    }
    
    function generateSummary() {
        let summaryHTML = '';
        
        userResponses.forEach((response, index) => {
            let valueClass;
            switch(response.value) {
                case 'good':
                    valueClass = 'risk-low';
                    break;
                case 'medium':
                    valueClass = 'risk-medium';
                    break;
                case 'bad':
                    valueClass = 'risk-high';
                    break;
            }
            
            summaryHTML += `
                <div class="summary-item">
                    <h4 class="summary-question">${response.question}</h4>
                    <p class="summary-choice ${valueClass}">${response.answer}</p>
                    <p class="summary-advice">${response.advice}</p>
                </div>
            `;
        });
        
        summaryItemsContainer.innerHTML = summaryHTML;
    }
    
    function generatePDF() {
        // Check if html2pdf is available
        if (typeof html2pdf === 'undefined') {
            alert('PDF generation library not loaded. Please include the html2pdf.js library.');
            return;
        }
        
        // Create temporary element for PDF content
        const pdfContent = document.createElement('div');
        pdfContent.className = 'pdf-container';
        
        // Add header
        const header = document.createElement('div');
        header.className = 'pdf-header';
        
        header.innerHTML = `
            <div class="pdf-logo">Cyber Risk Assessment Report</div>
            <div class="pdf-date">Generated on ${new Date().toLocaleDateString()}</div>
        `;
        
        pdfContent.appendChild(header);
        
        // Add score and risk level
        const scoreSection = document.createElement('div');
        scoreSection.className = 'pdf-content';
        
        // Get risk level text
        const riskLevelText = riskLevelElement.textContent;
        const riskClass = riskLevelElement.className.split(' ')[1]; // Get risk-low, risk-medium, or risk-high
        
        scoreSection.innerHTML = `
            <h2>Assessment Results</h2>
            <p><strong>Score:</strong> ${finalScoreElement.textContent}%</p>
            <p><strong>${riskLevelText}</strong></p>
            <p>${resultDescriptionElement.textContent}</p>
        `;
        
        pdfContent.appendChild(scoreSection);
        
        // Add recommendations
        const recommendationsSection = document.createElement('div');
        recommendationsSection.className = 'pdf-content';
        
        recommendationsSection.innerHTML = `
            <h2>Security Recommendations</h2>
        `;
        
        // Add each response and recommendation
        userResponses.forEach((response, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.style.marginBottom = '20px';
            
            itemDiv.innerHTML = `
                <h3>${index + 1}. ${response.question}</h3>
                <p><strong>Your response:</strong> ${response.answer}</p>
                <p><strong>Recommendation:</strong> ${response.advice}</p>
            `;
            
            recommendationsSection.appendChild(itemDiv);
        });
        
        pdfContent.appendChild(recommendationsSection);
        
        // Add footer
        const footer = document.createElement('div');
        footer.className = 'pdf-footer';
        footer.innerHTML = `
            <p>This assessment is provided for informational purposes only.</p>
            <p>For professional cybersecurity consultation, please consult with a certified expert.</p>
        `;
        
        pdfContent.appendChild(footer);
        
        // For fallback without html2pdf
        if (typeof html2pdf === 'undefined') {
            // Create a printable version
            document.body.appendChild(pdfContent);
            window.print();
            document.body.removeChild(pdfContent);
            return;
        }
        
        // Generate PDF if html2pdf is available
        const opt = {
            margin: 10,
            filename: 'cyber_risk_assessment.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Generate PDF
        html2pdf().set(opt).from(pdfContent).save();
    }
});