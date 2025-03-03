// Define the phishing examples data
const phishingExamples = [
  {
    id: '1',
    type: 'email',
    title: 'Fake PayPal Payment Notification',
    description: 'This phishing email impersonates PayPal and claims that there was a suspicious transaction on your account. It urges you to click a link to "secure your account" which leads to a fake login page.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'June 15, 2025',
    reportedBy: 'Alex Johnson',
    riskLevel: 'High',
    riskDescription: 'This phishing attempt uses urgency and fear to trick users into providing their PayPal credentials, which can lead to financial loss.',
    target: 'PayPal users',
    technique: 'The attacker uses social engineering by creating a sense of urgency about account security, combined with a professional-looking but fake PayPal email template.',
    annotations: [
      {
        title: 'Suspicious Sender Address',
        description: 'The email appears to be from "PayPal Service" but the actual email address is paypal-service@mail-secure365.com, which is not an official PayPal domain.',
        position: { top: 5, left: 5, width: 90, height: 10 }
      },
      {
        title: 'Urgent Language',
        description: 'The email uses urgent language like "Immediate action required" and "account limitation" to pressure you into acting quickly without thinking.',
        position: { top: 20, left: 10, width: 80, height: 15 }
      },
      {
        title: 'Suspicious Link',
        description: 'The "Secure My Account" button doesn\'t link to paypal.com but instead to a phishing site designed to steal your credentials.',
        position: { top: 60, left: 30, width: 40, height: 10 }
      },
      {
        title: 'Generic Greeting',
        description: 'The email uses "Dear Customer" instead of your actual name, which PayPal would typically use in official communications.',
        position: { top: 15, left: 10, width: 40, height: 5 }
      }
    ]
  },
  {
    id: '2',
    type: 'sms',
    title: 'Fake Bank SMS Alert',
    description: 'This SMS message claims to be from a bank alerting you about suspicious activity on your account. It includes a shortened URL that leads to a phishing site designed to steal your banking credentials.',
    imageUrl: 'https://images.unsplash.com/photo-1611174340587-7cf0596c8962?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'May 28, 2025',
    reportedBy: 'Maria Garcia',
    riskLevel: 'High',
    riskDescription: 'This SMS phishing (smishing) attempt can lead to banking credential theft and financial loss.',
    target: 'Banking customers',
    technique: 'The attacker uses a common bank alert format with urgent language about account security, combined with a shortened URL to hide the actual destination.',
    annotations: [
      {
        title: 'Unknown Sender',
        description: 'The message comes from a random phone number, not from your bank\'s official short code.',
        position: { top: 5, left: 5, width: 90, height: 10 }
      },
      {
        title: 'Shortened URL',
        description: 'The message contains a shortened URL (bit.ly link) which hides the actual destination. Banks typically don\'t use URL shorteners in official communications.',
        position: { top: 50, left: 20, width: 60, height: 10 }
      },
      {
        title: 'Vague Information',
        description: 'The message doesn\'t include specific details about the supposed suspicious activity, which legitimate bank alerts would typically provide.',
        position: { top: 25, left: 10, width: 80, height: 20 }
      }
    ]
  },
  {
    id: '3',
    type: 'email',
    title: 'COVID-19 Vaccine Appointment Scam',
    description: 'This phishing email claims to be from a health department offering COVID-19 vaccine appointments. It asks for personal information and payment details to "secure your spot" for vaccination.',
    imageUrl: 'https://images.unsplash.com/photo-1618961734760-466979ce35b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'April 10, 2025',
    reportedBy: 'James Wilson',
    riskLevel: 'High',
    riskDescription: 'This phishing attempt exploits public health concerns to steal personal and financial information.',
    target: 'General public concerned about COVID-19',
    technique: 'The attacker exploits fear and urgency around vaccine availability, using official-looking health department branding to appear legitimate.',
    annotations: [
      {
        title: 'Fake Health Department Logo',
        description: 'The email uses a slightly modified version of an official health department logo to appear legitimate.',
        position: { top: 5, left: 5, width: 30, height: 15 }
      },
      {
        title: 'Request for Payment',
        description: 'Legitimate COVID-19 vaccines are provided free of charge in most countries. Any request for payment is a red flag.',
        position: { top: 60, left: 10, width: 80, height: 15 }
      },
      {
        title: 'Excessive Personal Information',
        description: 'The form asks for unnecessary personal information including Social Security Number and driver\'s license, which wouldn\'t be required for a vaccine appointment.',
        position: { top: 40, left: 20, width: 60, height: 20 }
      },
      {
        title: 'Poor Grammar and Spelling',
        description: 'The email contains several grammatical errors and misspellings that wouldn\'t appear in official health department communications.',
        position: { top: 25, left: 15, width: 70, height: 10 }
      }
    ]
  },
  {
    id: '4',
    type: 'sms',
    title: 'Package Delivery Notification Scam',
    description: 'This SMS claims to be from a delivery service about a package that couldn\'t be delivered. It asks you to click a link to reschedule delivery, which leads to a phishing site.',
    imageUrl: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'July 3, 2025',
    reportedBy: 'David Chen',
    riskLevel: 'Medium',
    riskDescription: 'This smishing attempt can lead to personal information theft and potentially malware installation.',
    target: 'Online shoppers',
    technique: 'The attacker exploits the common experience of receiving package delivery notifications, using a fake delivery issue to create urgency.',
    annotations: [
      {
        title: 'Vague Sender',
        description: 'The message is from "Delivery Service" without specifying which company (UPS, FedEx, etc.), which legitimate delivery notifications would include.',
        position: { top: 5, left: 5, width: 90, height: 10 }
      },
      {
        title: 'No Tracking Number',
        description: 'The message doesn\'t include a specific tracking number, which legitimate delivery notifications would provide.',
        position: { top: 20, left: 10, width: 80, height: 15 }
      },
      {
        title: 'Suspicious Link',
        description: 'The link doesn\'t lead to an official delivery service website but to a phishing page designed to collect personal information.',
        position: { top: 50, left: 20, width: 60, height: 10 }
      }
    ]
  },
  {
    id: '5',
    type: 'email',
    title: 'Fake Microsoft 365 Password Expiration',
    description: 'This phishing email impersonates Microsoft and claims that your Office 365 password is about to expire. It provides a link to "update your password" which leads to a credential harvesting site.',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'August 12, 2025',
    reportedBy: 'Sarah Thompson',
    riskLevel: 'High',
    riskDescription: 'This phishing attempt targets corporate credentials which can lead to business email compromise and data breaches.',
    target: 'Microsoft 365 users',
    technique: 'The attacker creates a convincing Microsoft-branded email about a common IT issue (password expiration) to trick users into providing their credentials.',
    annotations: [
      {
        title: 'Mismatched Sender',
        description: 'While the display name shows "Microsoft 365 Team," the actual email address is from a non-Microsoft domain.',
        position: { top: 5, left: 5, width: 90, height: 10 }
      },
      {
        title: 'Suspicious URL',
        description: 'Hovering over the "Update Password" button reveals a non-Microsoft URL that would take you to a phishing site.',
        position: { top: 60, left: 30, width: 40, height: 10 }
      },
      {
        title: 'Urgent Timeframe',
        description: 'The email claims your password will expire in 24 hours, creating unnecessary urgency. Most organizations give more notice for password changes.',
        position: { top: 30, left: 10, width: 80, height: 15 }
      },
      {
        title: 'Inconsistent Branding',
        description: 'The Microsoft logo and colors are slightly off from the official branding, and the email layout doesn\'t match Microsoft\'s standard templates.',
        position: { top: 10, left: 10, width: 80, height: 15 }
      }
    ]
  },
  {
    id: '6',
    type: 'sms',
    title: 'Fake Bank Account Suspension Alert',
    description: 'This SMS claims your bank account has been suspended due to suspicious activity and provides a phone number to call immediately. The number connects to scammers who will ask for your banking details.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: 'September 5, 2025',
    reportedBy: 'Robert Jackson',
    riskLevel: 'High',
    riskDescription: 'This vishing (voice phishing) attempt can lead to banking credential theft and financial loss.',
    target: 'Banking customers',
    technique: 'The attacker uses SMS to initiate contact and then switches to phone to personally social engineer victims into providing sensitive information.',
    annotations: [
      {
        title: 'Unknown Sender',
        description: 'The message comes from a random phone number, not your bank\'s official short code or phone number.',
        position: { top: 5, left: 5, width: 90, height: 10 }
      },
      {
        title: 'Suspicious Phone Number',
        description: 'The provided callback number is not an official bank customer service number. Always call the number on the back of your bank card instead.',
        position: { top: 50, left: 20, width: 60, height: 15 }
      },
      {
        title: 'Vague Bank Name',
        description: 'The message refers to "your bank" generically without naming a specific institution, which legitimate bank messages would include.',
        position: { top: 20, left: 10, width: 80, height: 10 }
      }
    ]
  }
];