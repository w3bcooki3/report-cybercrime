const questions = [
    {
      id: 1,
      text: "How often do you update your passwords?",
      options: [
        {
          text: "I use the same password forever",
          isGoodPractice: false,
          feedback: "Using the same password for long periods increases security risks",
          recommendation: "Change passwords every 3-6 months and use a password manager",
          examples: [
            {
              title: "Dropbox Data Breach (2012)",
              description: "68 million user credentials were exposed due to password reuse. The breach wasn't discovered until 2016.",
              source: "Dropbox Security Advisory",
              link: "https://www.zdnet.com/article/dropbox-forcing-password-resets-after-leak-of-68-million-accounts/"
            },
            {
              title: "LinkedIn Data Breach",
              description: "165 million user accounts were compromised due to weak password hashing and password reuse.",
              source: "LinkedIn Security Update",
              link: "https://www.wired.com/story/linkedin-data-breach-password-reset/"
            }
          ]
        },
        {
          text: "Every 3-6 months",
          isGoodPractice: true,
          feedback: "Great practice! Regular password updates help maintain security",
          recommendation: "Consider using a password manager to make this even easier",
          examples: [
            {
              title: "Password Manager Best Practices",
              description: "Learn how to effectively use password managers for better security.",
              source: "NIST Guidelines",
              link: "https://www.nist.gov/blogs/cybersecurity-insights/password-management-recommendations-nist-special-publication-800-63b"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      text: "How do you handle two-factor authentication (2FA)?",
      options: [
        {
          text: "I enable it whenever possible",
          isGoodPractice: true,
          feedback: "Excellent! 2FA significantly improves account security",
          recommendation: "Consider using an authenticator app instead of SMS for even better security",
          examples: [
            {
              title: "2FA Success Story: Google",
              description: "Google reported zero successful phishing attacks after implementing hardware 2FA for employees.",
              source: "Google Security Blog",
              link: "https://security.googleblog.com/2019/05/new-research-how-effective-is-basic-account.html"
            }
          ]
        },
        {
          text: "I find it annoying and avoid it",
          isGoodPractice: false,
          feedback: "2FA is crucial for protecting your accounts",
          recommendation: "Start with enabling 2FA on your most important accounts like email and banking",
          examples: [
            {
              title: "Twitter VIP Account Hack (2020)",
              description: "High-profile Twitter accounts were compromised due to lack of 2FA, resulting in a Bitcoin scam.",
              source: "Twitter Security Report",
              link: "https://blog.twitter.com/en_us/topics/company/2020/an-update-on-our-security-incident"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      text: "What's your approach to public Wi-Fi?",
      options: [
        {
          text: "I connect to any free Wi-Fi",
          isGoodPractice: false,
          feedback: "Public Wi-Fi networks can be dangerous without protection",
          recommendation: "Use a VPN when connecting to public Wi-Fi networks",
          examples: [
            {
              title: "Starbucks Wi-Fi Attack (2017)",
              description: "Customers' data was exposed through fake Wi-Fi networks mimicking Starbucks' free Wi-Fi.",
              source: "Cybersecurity Report",
              link: "https://www.kaspersky.com/blog/secure-public-wifi/21741/"
            }
          ]
        },
        {
          text: "I use a VPN or avoid sensitive activities",
          isGoodPractice: true,
          feedback: "Smart choice! Protecting your data on public networks is essential",
          recommendation: "Keep your VPN software updated and enabled by default",
          examples: [
            {
              title: "VPN Security Guide",
              description: "Learn how to choose and use VPNs effectively for public Wi-Fi security.",
              source: "EFF Security Guide",
              link: "https://ssd.eff.org/en/module/choosing-vpn-thats-right-you"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "How do you handle software updates?",
      options: [
        {
          text: "I update immediately when available",
          isGoodPractice: true,
          feedback: "Perfect! Staying updated is crucial for security",
          recommendation: "Consider enabling automatic updates where possible",
          examples: [
            {
              title: "Automatic Update Success",
              description: "Microsoft reports 95% reduction in security incidents for auto-updated systems.",
              source: "Microsoft Security Intelligence Report",
              link: "https://www.microsoft.com/security/blog/2019/10/29/microsoft-security-intelligence-report-volume-24-is-now-available/"
            }
          ]
        },
        {
          text: "I postpone them indefinitely",
          isGoodPractice: false,
          feedback: "Postponing updates leaves your system vulnerable",
          recommendation: "Schedule regular times to check and install updates",
          examples: [
            {
              title: "WannaCry Ransomware Attack (2017)",
              description: "Over 200,000 computers were infected due to delayed security updates.",
              source: "NHS Digital Report",
              link: "https://www.ncsc.gov.uk/news/investigation-wannacry-cyber-attack"
            }
          ]
        }
      ]
    },
    {
      id: 5,
      text: "How do you back up your data?",
      options: [
        {
          text: "I don't backup my data",
          isGoodPractice: false,
          feedback: "Not backing up data puts you at risk of losing everything",
          recommendation: "Start with cloud backup services or external drives for important files",
          examples: [
            {
              title: "Hollywood Hospital Ransomware (2016)",
              description: "Hospital paid $17,000 in ransom due to lack of proper backups.",
              source: "Healthcare IT News",
              link: "https://www.healthcareitnews.com/news/hollywood-presbyterian-medical-center-confirms-ransomware-attack-17k-ransom"
            }
          ]
        },
        {
          text: "Regular backups to multiple locations",
          isGoodPractice: true,
          feedback: "Excellent! Multiple backups provide the best protection",
          recommendation: "Consider encrypting your backups for additional security",
          examples: [
            {
              title: "3-2-1 Backup Strategy Guide",
              description: "Learn about the industry-standard backup strategy for maximum protection.",
              source: "US-CERT Guidelines",
              link: "https://www.cisa.gov/news-events/alerts/2021/09/14/protect-against-ransomware"
            }
          ]
        }
      ]
    }
  ];