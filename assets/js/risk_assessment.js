document.addEventListener('DOMContentLoaded', () => {
    const landingContainer = document.getElementById('landingContainer');
    const assessmentContainer = document.getElementById('assessmentContainer');
    const resultContainer = document.getElementById('resultContainer');
    const startButton = document.getElementById('startAssessment');
    const restartButton = document.getElementById('restartAssessment');
    const savePDFButton = document.getElementById('savePDF');
    const progressBar = document.getElementById('progressBar');
    const finalScoreElement = document.getElementById('finalScore');
    const riskLevelElement = document.getElementById('riskLevel');
    const resultDescriptionElement = document.getElementById('resultDescription');
    const summaryItemsContainer = document.getElementById('summaryItems');
    const questionContainers = document.querySelectorAll('.question-container');
    const progressContainer = document.getElementsByClassName('progress-container')[0];

    let currentQuestion = 1;
    let userResponses = [];
    let totalScore = 0;

    const feedbackContent = {
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

    const riskDescriptions = {
        high: "Your digital security practices have significant vulnerabilities that could be exploited by cyber attacks. Implementing the recommendations below should be a priority to protect your data and accounts.",
        medium: "Your cyber security posture shows some strengths but also has areas that need improvement. The recommendations below will help you strengthen your digital security.",
        low: "Your digital security practices show good awareness of cyber risks. Review the recommendations below to further enhance your protection."
    };

    // Function to show a question
    const showQuestion = (questionNum) => {
        questionContainers.forEach(container => container.classList.remove('active'));
        document.getElementById(`question${questionNum}`).classList.add('active');
        currentQuestion = questionNum;
        updateProgressBar();
        progressContainer.style.display = 'block';
        const assessmentContainerTop = assessmentContainer.offsetTop;
        const progressContainerHeight = progressContainer.offsetHeight;
        window.scrollTo({ top: assessmentContainerTop - progressContainerHeight - 20, behavior: 'smooth' });
    };

    // Function to update progress bar
    const updateProgressBar = () => {
        const progress = ((currentQuestion - 1) / questionContainers.length) * 100;
        progressBar.style.width = `${progress}%`;
    };

    // Function to show feedback
    const showFeedback = (questionNum, value) => {
        const feedbackContainer = document.getElementById(`feedback${questionNum}`);
        const feedback = feedbackContent[`question${questionNum}`][value];
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
        feedbackContainer.innerHTML = feedbackHTML;
        feedbackContainer.className = `feedback-container feedback-${value}`;
        feedbackContainer.style.display = 'block';
    };

    // Function to calculate score
    const calculateScore = () => {
        totalScore = userResponses.reduce((total, response) => total + (response ? response.points : 0), 0);
    };

    // Function to show results
    const showResults = () => {
        questionContainers.forEach(container => container.classList.remove('active'));
        assessmentContainer.style.display = 'block';
        resultContainer.style.display = 'block';
        const scorePercentage = Math.round((totalScore / (questionContainers.length * 2)) * 100);
        let riskLevel;
        if (scorePercentage >= 80) { riskLevel = "Low"; riskLevelElement.className = "risk-level risk-low"; resultDescriptionElement.textContent = riskDescriptions.low; }
        else if (scorePercentage >= 50) { riskLevel = "Medium"; riskLevelElement.className = "risk-level risk-medium"; resultDescriptionElement.textContent = riskDescriptions.medium; }
        else { riskLevel = "High"; riskLevelElement.className = "risk-level risk-high"; resultDescriptionElement.textContent = riskDescriptions.high; }
        finalScoreElement.textContent = scorePercentage;
        riskLevelElement.textContent = `Risk Level: ${riskLevel}`;
        generateSummary();
        progressBar.style.width = '100%';
        setTimeout(() => resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    };

    // Function to generate summary
    const generateSummary = () => {
        let summaryHTML = '';
        userResponses.forEach(response => {
            const valueClass = response.value === 'good' ? 'risk-low' : response.value === 'medium' ? 'risk-medium' : 'risk-high';
            summaryHTML += `
                <div class="summary-item">
                    <h4 class="summary-question">${response.question}</h4>
                    <p class="summary-choice ${valueClass}">${response.answer}</p>
                    <p class="summary-advice">${response.advice}</p>
                </div>
            `;
        });
        summaryItemsContainer.innerHTML = summaryHTML;
    };

    // Function for generating PDF
    const generatePDF = () => {
        if (typeof html2pdf === 'undefined') { alert('PDF library not loaded.'); return; }
        const pdfContent = document.createElement('div');
        pdfContent.className = 'pdf-container';
        pdfContent.innerHTML = `
            <div class="pdf-header">
                <div class="pdf-logo">Cyber Risk Assessment Report</div>
                <div class="pdf-date">Generated on ${new Date().toLocaleDateString()}</div>
            </div>
            <div class="pdf-content">
                <p>Your score: ${finalScoreElement.textContent}</p>
                <p>Risk level: ${riskLevelElement.textContent}</p>
                ${summaryItemsContainer.innerHTML}
            </div>
        `;
        html2pdf().from(pdfContent).save('cyber-risk-assessment.pdf');
    };

    // Event listeners
    startButton.addEventListener('click', () => { landingContainer.style.display = 'none'; assessmentContainer.style.display = 'block'; showQuestion(1); });
    restartButton.addEventListener('click', () => { resultContainer.style.display = 'none'; assessmentContainer.style.display = 'block'; questionContainers.forEach(q => q.classList.remove('active')); questionContainers[0].classList.add('active'); userResponses = []; totalScore = 0; showQuestion(1); });
    savePDFButton.addEventListener('click', generatePDF);

    // Question option selection and navigation
    questionContainers.forEach((container, index) => {
        const questionNum = index + 1;
        container.addEventListener('click', (event) => {
            if (event.target.classList.contains('option')) {
                const options = container.querySelectorAll('.option');
                options.forEach(opt => opt.classList.remove('selected'));
                event.target.classList.add('selected');
                showFeedback(questionNum, event.target.dataset.value);
                container.querySelector('.next-button').removeAttribute('disabled');
            }
            if (event.target.classList.contains('next-button') && !event.target.disabled) {
                const selectedOption = container.querySelector('.option.selected');
                userResponses[questionNum - 1] = { question: container.querySelector('.question-text').textContent, answer: selectedOption.textContent.trim(), value: selectedOption.dataset.value, points: parseInt(selectedOption.dataset.points), advice: feedbackContent[`question${questionNum}`][selectedOption.dataset.value].advice };
                calculateScore();
                if (questionNum === questionContainers.length) showResults(); else showQuestion(questionNum + 1);
            }
            if (event.target.classList.contains('prev-button')) {
                showQuestion(questionNum - 1);
            }
        });
    });
});
