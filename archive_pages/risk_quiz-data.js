// Quiz questions data
const cybersecQuizQuestions = [
  {
    question: "How often do you update your devices and software?",
    options: [
      "I ignore update notifications",
      "I update when it's convenient, usually every few months",
      "I update within a week of receiving notifications",
      "I have automatic updates enabled for all my devices and software"
    ],
    correctAnswerIndex: 3,
    explanation: "Automatic updates are crucial for security as they patch vulnerabilities that hackers can exploit. Delaying updates leaves your devices exposed to known security risks.",
    resources: [
      {
        title: "Why Software Updates Are Important for Cybersecurity",
        url: "https://www.cisa.gov/news-events/news/understanding-patches-and-software-updates"
      },
      {
        title: "How to Set Up Automatic Updates on Different Devices",
        url: "https://staysafeonline.org/resources/update-your-software/"
      }
    ]
  },
  {
    question: "What is your approach to creating and managing passwords?",
    options: [
      "I use the same password for most accounts",
      "I have a few different passwords that I rotate between accounts",
      "I create unique passwords for important accounts only",
      "I use a password manager to create and store unique passwords for each account"
    ],
    correctAnswerIndex: 3,
    explanation: "Using a password manager to generate and store unique, complex passwords for each account is the best practice. Password reuse is dangerous because if one account is compromised, all your accounts using that password become vulnerable.",
    resources: [
      {
        title: "The Dangers of Password Reuse",
        url: "https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/password-managers"
      },
      {
        title: "How Password Managers Work and Why You Should Use One",
        url: "https://www.consumer.ftc.gov/blog/2020/05/password-managers-pros-and-cons"
      }
    ]
  },
  {
    question: "How do you verify the legitimacy of emails requesting sensitive information?",
    options: [
      "I trust emails that look professional and include company logos",
      "I click on links to see if the website looks legitimate",
      "I respond if the email appears urgent or threatens account closure",
      "I never click links in emails requesting sensitive information and verify through official channels"
    ],
    correctAnswerIndex: 3,
    explanation: "Phishing emails often mimic legitimate companies. Always verify requests through official channels (like calling the company directly or visiting their website by typing the URL) rather than clicking links in emails.",
    resources: [
      {
        title: "How to Recognize and Avoid Phishing Scams",
        url: "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/phishing"
      },
      {
        title: "Real-World Examples of Sophisticated Phishing Attacks",
        url: "https://www.phishing.org/phishing-examples"
      }
    ]
  },
  {
    question: "What is your approach to public Wi-Fi networks?",
    options: [
      "I regularly use public Wi-Fi for all online activities including banking",
      "I use public Wi-Fi but avoid financial transactions",
      "I only use public Wi-Fi when I have no other option",
      "I use a VPN when connecting to public Wi-Fi networks"
    ],
    correctAnswerIndex: 3,
    explanation: "Public Wi-Fi networks are often unsecured, making it easy for attackers to intercept your data. Using a VPN (Virtual Private Network) encrypts your connection, protecting your information from potential eavesdroppers.",
    resources: [
      {
        title: "The Risks of Using Public Wi-Fi",
        url: "https://www.fcc.gov/consumers/guides/how-protect-yourself-online"
      },
      {
        title: "How VPNs Protect Your Privacy on Public Networks",
        url: "https://www.consumer.ftc.gov/articles/0031-protecting-your-identity"
      }
    ]
  },
  {
    question: "How do you back up your important data?",
    options: [
      "I don't back up my data",
      "I occasionally copy important files to an external drive",
      "I back up to a cloud service but not regularly",
      "I use automated backups to multiple locations (cloud and local)"
    ],
    correctAnswerIndex: 3,
    explanation: "Regular, automated backups to multiple locations provide the best protection against data loss from ransomware, hardware failure, or other disasters. The 3-2-1 backup strategy (3 copies, 2 different media types, 1 off-site) is recommended.",
    resources: [
      {
        title: "Why Backups Are Your Best Defense Against Ransomware",
        url: "https://www.cisa.gov/sites/default/files/publications/CISA_MS-ISAC_Ransomware%20Guide_S508C.pdf"
      },
      {
        title: "How to Implement the 3-2-1 Backup Strategy",
        url: "https://www.ready.gov/cybersecurity"
      }
    ]
  },
  {
    question: "How do you secure your home Wi-Fi network?",
    options: [
      "I use the default settings and password that came with my router",
      "I changed the network name but kept the default password",
      "I changed the password but use WEP encryption",
      "I use WPA3 encryption, a strong unique password, and regularly update router firmware"
    ],
    correctAnswerIndex: 3,
    explanation: "Securing your home network is essential as it's the gateway to all your connected devices. WPA3 is the strongest encryption standard, and regular firmware updates patch security vulnerabilities in your router.",
    resources: [
      {
        title: "Securing Your Home Wi-Fi Network",
        url: "https://www.fcc.gov/consumers/guides/how-secure-your-wireless-network"
      },
      {
        title: "Why Router Security Matters for Your Overall Cybersecurity",
        url: "https://www.cisa.gov/sites/default/files/publications/Securing_the_Internet_of_Things_Infographic_S508C.pdf"
      }
    ]
  },
  {
    question: "How do you approach multi-factor authentication (MFA)?",
    options: [
      "I avoid it because it's inconvenient",
      "I only use it when a service forces me to",
      "I use it for financial accounts only",
      "I enable MFA on all accounts that offer it"
    ],
    correctAnswerIndex: 3,
    explanation: "Multi-factor authentication adds a crucial layer of security by requiring something you know (password) and something you have (like your phone). Even if your password is compromised, attackers still can't access your account without the second factor.",
    resources: [
      {
        title: "How MFA Stops 99.9% of Account Hacks",
        url: "https://www.microsoft.com/en-us/security/blog/2019/08/20/one-simple-action-you-can-take-to-prevent-99-9-percent-of-account-attacks/"
      },
      {
        title: "Different Types of MFA and Their Security Levels",
        url: "https://www.nist.gov/blogs/cybersecurity-insights/back-basics-multi-factor-authentication"
      }
    ]
  },
  {
    question: "What is your approach to social media privacy?",
    options: [
      "My profiles are public and I share personal details freely",
      "I accept all friend/connection requests to grow my network",
      "I use default privacy settings on most platforms",
      "I regularly review privacy settings and limit the personal information I share"
    ],
    correctAnswerIndex: 3,
    explanation: "Information shared on social media can be used for social engineering attacks, identity theft, and targeted phishing. Regularly reviewing privacy settings and being selective about what you share helps protect your personal information.",
    resources: [
      {
        title: "How Cybercriminals Use Social Media Information",
        url: "https://www.consumer.ftc.gov/articles/0033-social-networking-sites-and-privacy"
      },
      {
        title: "Social Media Privacy Checkup Guide",
        url: "https://staysafeonline.org/resources/social-media-privacy-settings/"
      }
    ]
  },
  {
    question: "How do you dispose of old devices (computers, phones, etc.)?",
    options: [
      "I throw them in the regular trash",
      "I sell or donate them without wiping data",
      "I delete some files before disposing of them",
      "I perform a factory reset or use secure data wiping software before disposal"
    ],
    correctAnswerIndex: 3,
    explanation: "Old devices contain a wealth of personal information. Simply deleting files doesn't remove the data from the storage medium. Proper data wiping or physical destruction of storage is necessary to prevent data recovery.",
    resources: [
      {
        title: "Why Deleted Files Can Still Be Recovered",
        url: "https://www.consumer.ftc.gov/articles/0010-disposing-your-mobile-device"
      },
      {
        title: "How to Securely Wipe Different Types of Devices",
        url: "https://www.nist.gov/blogs/cybersecurity-insights/properly-disposing-your-electronic-devices"
      }
    ]
  },
  {
    question: "How do you verify the security of apps before installing them?",
    options: [
      "I install any app that looks useful",
      "I check the app's rating and reviews",
      "I only install from official app stores",
      "I research the developer, check permissions, and only install from official sources"
    ],
    correctAnswerIndex: 3,
    explanation: "Malicious apps can steal data or install malware. Verifying the developer's reputation, checking what permissions the app requests, and only installing from official app stores significantly reduces the risk of installing malicious software.",
    resources: [
      {
        title: "How to Spot Dangerous Apps",
        url: "https://www.consumer.ftc.gov/articles/0018-understanding-mobile-apps"
      },
      {
        title: "App Permissions: What They Mean for Your Privacy",
        url: "https://www.ncsc.gov.uk/guidance/secure-your-devices-and-data"
      }
    ]
  }
];