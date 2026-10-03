/**
 * Ernest Chianumba Foundation - Approved Information
 * Source: Foundation legal documents and Master Brief
 * 
 * IMPORTANT: Do not modify this information without authorization
 * All data is sourced from official Foundation documents
 */

export const foundationInfo = {
  name: 'Ernest Chianumba Foundation',
  tagline: 'Guided by love, cared for with grace, building lives.',
  
  legal: {
    registrationNumber: '9529787',
    dateOfIncorporation: '8 May 2026',
    tin: '2622431083319',
    status: 'Incorporated in Nigeria as a corporate body',
  },
  
  contact: {
    address: {
      street: '47 Gbemisola Adenubi Street',
      area: 'Ago Palace, Okota',
      state: 'Lagos State',
      country: 'Nigeria',
      full: '47 Gbemisola Adenubi Street, Ago Palace, Okota, Lagos State, Nigeria',
    },
    phone: [
      '+234 703 297 3392',
      '+234 816 389 7240',
      '+234 816 016 4938',
    ],
    email: 'info@ernestchianumbafoundation.org',
    website: 'www.ernestchianumbafoundation.org',
  },
  
  mission: {
    text: "The Foundation's mission is to extend God's love to people who are overlooked, underserved, or forgotten by providing practical care, education, and support that restore dignity and build hope, starting in Nigeria.",
  },
  
  vision: {
    text: "The Foundation's vision is a Nigeria where vulnerable individuals are not abandoned to circumstance but are supported with care, guided with wisdom, and empowered to live meaningful lives. It also envisions communities where love is expressed through action and people can thrive.",
  },
  
  values: [
    {
      name: 'Love in Action',
      description: 'Love should be expressed through practical action rather than words alone.',
    },
    {
      name: 'Compassion Without Condescension',
      description: 'People should be treated with dignity and respect rather than pity or humiliation.',
    },
    {
      name: 'Stewardship and Integrity',
      description: 'Resources, relationships, and responsibilities should be handled transparently and responsibly.',
    },
    {
      name: 'Faith Rooted, Arms Wide',
      description: 'The Foundation is rooted in faith while remaining welcoming and inclusive.',
    },
    {
      name: 'Sustainability Over Spectacle',
      description: 'The Foundation prioritizes meaningful, sustainable support rather than short-lived displays of charity.',
    },
  ],
  
  programmes: [
    {
      id: 'education',
      name: 'Education & Development',
      tagline: 'Give potential room to grow.',
      description: 'Supporting educational and personal development opportunities through scholarships, educational support, mentorship, skills and vocational training, and development opportunities for children and young people.',
      activities: [
        'Scholarships',
        'Educational support',
        'Mentorship',
        'Skills and vocational training',
        'Faith/values-based education',
        'Development opportunities',
      ],
    },
    {
      id: 'care',
      name: 'Care & Support',
      tagline: 'Help people access the care they need.',
      description: 'Focusing on practical care and wellbeing through medical care sponsorship, direct payment to relevant professionals, and structured support for people facing identified needs.',
      activities: [
        'Medical care sponsorship',
        'Direct payment to professionals/providers',
        'Partnerships with clinics and doctors',
        'Counseling services',
        'Structured support programs',
      ],
    },
    {
      id: 'community',
      name: 'Love in Action',
      tagline: 'Meet real needs in real communities.',
      description: 'Focusing on practical community support through community outreach, emergency assistance, counseling, guidance, and practical responses to identified needs.',
      activities: [
        'Community outreach',
        'Emergency assistance',
        'Counseling and guidance',
        'Practical need responses',
      ],
    },
  ],
  
  abbasHaven: {
    name: "Abba's Haven",
    tagline: 'The Haven is wherever love meets need.',
    concept: 'Abba\'s Haven is not a physical location, but the experience of being held in care, guided with wisdom, and supported with grace. Every person served, partnership, and initiative can be part of this experience.',
    description: 'A flagship initiative representing the experience of care rather than a physical building. It begins programmatically through partnerships, sponsored services, community support, and practical care.',
  },
  
  governance: {
    structure: 'Nonprofit charitable foundation',
    type: 'Not for profit and non-political',
    trustees: [
      {
        name: 'Ernest Chianumba',
        role: 'Chairman',
      },
      {
        name: 'Sandra Ezejiugo',
        role: 'Secretary',
      },
      {
        name: 'Emmanuel Udoh',
        role: 'Trustee',
      },
      {
        name: 'Mfon Akpan',
        role: 'Trustee',
      },
    ],
  },
  
  bankDetails: {
    bank: 'Zenith Bank',
    // Note: Actual account details should be added when provided
  },
} as const;

// Type exports for TypeScript usage
export type Programme = typeof foundationInfo.programmes[number];
export type CoreValue = typeof foundationInfo.values[number];
export type Trustee = typeof foundationInfo.governance.trustees[number];
