/**
 * Award Categories Data
 * Comprehensive definitions for all African Health Excellence Awards categories
 */

export interface AwardCategory {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  qualificationCriteria: string[];
  scoreMetrics: string[];
  requiredDocuments: string[];
  icon: string;
  isVoted: boolean;
  isHonorary?: boolean;
}

export const SCORE_METRICS = [
  'Impact & Contribution',
  'Innovation & Creativity',
  'Professional Excellence',
  'Evidence & Documentation',
  'Community Engagement'
] as const;

export const REQUIRED_DOCUMENTS = [
  'Copy of professional registration (e.g., HPCSA, SAPC, SANC)',
  'CV or institutional profile',
  'Reviews from patients',
  'Motivation letter (maximum 2 pages)',
  'Portfolio of evidence (photos, reports, letters, media links)',
  'Reference letters (minimum 2)',
  'Proof of achievements (certificates, publications, awards)',
  'For institutions: compliance and accreditation documents',
  'For entrepreneurs: business registration and proof of operations'
] as const;

export const AWARD_CATEGORIES: AwardCategory[] = [
  {
    id: 'health-institution-year',
    title: 'Health Institution of the Year',
    shortTitle: 'HEALTH INSTITUTION OF THE YEAR',
    description: 'This award celebrates healthcare institutions that excel in patient care, operational effectiveness, and pioneering healthcare delivery models.',
    qualificationCriteria: [
      'Institutions must be accredited and demonstrate a proven record in service quality, innovative patient care, and evidence-based operational excellence.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      doc.includes('institutional profile') ||
      doc.includes('compliance and accreditation') ||
      doc.includes('CV or institutional profile') ||
      doc.includes('Portfolio of evidence') ||
      doc.includes('Reference letters') ||
      doc.includes('Proof of achievements')
    ),
    icon: 'Building2',
    isVoted: true
  },
  {
    id: 'rising-star-hcp-year',
    title: 'Rising Star HCP of the Year',
    shortTitle: 'HEALTH CARE RISING STAR OF THE YEAR',
    description: 'Awarded to healthcare professionals under the age of 40 who have recently entered their discipline (≤5 years in practice) and are already demonstrating exceptional talent, leadership, and innovation.',
    qualificationCriteria: [
      'Nominees should have notable early career achievements and receive strong recommendations from peers or mentors.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Star',
    isVoted: true
  },
  {
    id: 'multitalented-hcp-year',
    title: 'Multitalented HCP of the Year',
    shortTitle: 'MULTI-TALENTED HCP OF THE YEAR',
    description: 'This prestigious award recognises healthcare professionals displaying exceptional versatility and expertise across multiple fields, both within and outside healthcare.',
    qualificationCriteria: [
      'Nominees must show excellence in more than one professional capability (e.g., artistry, sports) and have contributed to diverse healthcare sectors or industries.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Star',
    isVoted: true
  },
  {
    id: 'hcp-mentor-year',
    title: 'HCP Mentor of the Year',
    shortTitle: 'HCP MENTOR OF THE YEAR',
    description: 'The Mentor of the Year award honours individuals who have made a significant impact on the professional development and success of their mentees.',
    qualificationCriteria: [
      'Candidates should have a proven track record in mentoring, supported by testimonials demonstrating measurable mentee growth.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Users',
    isVoted: true
  },
  {
    id: 'hcp-charity-driver-year',
    title: 'HCP Charity Driver of the Year',
    shortTitle: 'HCP CHARITY DRIVER OF THE YEAR',
    description: 'This award is given to a healthcare professional who has selflessly contributed to charitable health initiatives, volunteering time and resources for the benefit of underserved communities.',
    qualificationCriteria: [
      'Nominees must demonstrate active involvement and a proven positive impact within these communities.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Heart',
    isVoted: true
  },
  {
    id: 'hcp-community-builder-year',
    title: 'HCP Community Builder of the Year',
    shortTitle: 'HCP COMMUNITY BUILDER OF THE YEAR',
    description: 'Recognising professionals who advance community development through their foundation or NPO.',
    qualificationCriteria: [
      'This award celebrates commitment to innovation, creativity, and giving back to vulnerable groups, supported by tangible outcomes and community impact.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Globe',
    isVoted: true
  },
  {
    id: 'healthcare-leader-year',
    title: 'Healthcare Leader of the Year',
    shortTitle: 'HEALTH CARE LEADER OF THE YEAR',
    description: 'Awarded to individuals demonstrating exceptional leadership in healthcare management, administration, and organisational development.',
    qualificationCriteria: [
      'Nominees should have led successful healthcare programmes and shown leadership at either an institutional or national level.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Trophy',
    isVoted: true
  },
  {
    id: 'hcp-media-personality-year',
    title: 'HCP Media Personality of the Year',
    shortTitle: 'HCP MEDIA PERSONALITY OF THE YEAR',
    description: 'This honour is bestowed upon a healthcare professional who has made a significant impact in the media, inspiring both the public and professionals.',
    qualificationCriteria: [
      'Candidates must demonstrate ethical and accurate health communication, a verified media presence, and exceptional engagement skills.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Radio',
    isVoted: true
  },
  {
    id: 'hcp-educator-year',
    title: 'HCP Educator of the Year',
    shortTitle: 'HCP EDUCATOR OF THE YEAR',
    description: 'Recognising healthcare professionals who have made significant contributions to health education using various media platforms, such as podcasts, radio, print, social media, and events.',
    qualificationCriteria: [
      'Nominees should demonstrate excellence in training or teaching and verified curriculum contributions.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Brain',
    isVoted: true
  },
  {
    id: 'health-researcher-year',
    title: 'Health Researcher of the Year',
    shortTitle: 'HEALTH RESEARCHER OF THE YEAR',
    description: 'This award acknowledges outstanding contributions to healthcare research, including clinical trials, medical studies, and innovative methodologies.',
    qualificationCriteria: [
      'Nominees must have published research within the last three years and provide evidence of scientific contribution and impact.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Search',
    isVoted: true
  },
  {
    id: 'employee-wellness-hcp-year',
    title: 'Employee Wellness HCP of the Year',
    shortTitle: 'EMPLOYEE WELLNESS HCP OF THE YEAR',
    description: 'Awarded to healthcare professionals who champion workplace wellness programmes, promoting health and well-being among healthcare workers.',
    qualificationCriteria: [
      'Nominees should demonstrate leadership and provide evidence of measurable outcomes from their initiatives.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'UserPlus',
    isVoted: true
  },
  {
    id: 'remarkable-hcp-disability',
    title: 'Remarkable HCP Living with a Disability',
    shortTitle: 'HEALTHCARE PROFESSIONAL LIVING WITH A DISABILITY',
    description: 'This category honours healthcare professionals who excel in their fields despite living with disabilities. The award recognises resilience, dedication, professional excellence, and evidence of overcoming barriers to make a positive impact.',
    qualificationCriteria: [],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Accessibility',
    isVoted: true
  },
  {
    id: 'digital-health-innovator-year',
    title: 'Digital Health Innovator of the Year',
    shortTitle: 'DIGITAL HEALTH INNOVATOR OF THE YEAR',
    description: 'This award recognises breakthrough innovations in healthcare delivery, treatment methods, or medical technology.',
    qualificationCriteria: [
      'Nominees must demonstrate contributions to digital health solutions and present a prototype or evidence of implemented innovation.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Laptop',
    isVoted: true
  },
  {
    id: 'health-entrepreneur-year',
    title: 'Health Entrepreneur of the Year',
    shortTitle: 'HEALTH ENTREPRENEUR OF THE YEAR',
    description: 'Awarded to individuals who have launched sustainable health-focused business ventures, showing demonstrated growth and tangible benefits to the community.',
    qualificationCriteria: [
      'Sustainable health focused business venture.',
      'Demonstrated growth and community benefit.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      doc.includes('business registration') ||
      doc.includes('proof of operations') ||
      doc.includes('CV or institutional profile') ||
      doc.includes('Portfolio of evidence') ||
      doc.includes('Reference letters') ||
      doc.includes('Proof of achievements')
    ),
    icon: 'Briefcase',
    isVoted: true
  },
  {
    id: 'hcp-author-year',
    title: 'HCP Author of the Year',
    shortTitle: 'HCP AUTHOR OF THE YEAR',
    description: 'Given to those who have made significant contributions to healthcare literature, including academic papers, textbooks, research articles, opinion pieces, or books.',
    qualificationCriteria: [
      'Nominees must have published work and verifiable contributions to health education.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'BookOpen',
    isVoted: true
  },
  {
    id: 'most-voted-hcp-year',
    title: 'Most Voted HCP of the Year',
    shortTitle: 'MOST VOTED HCP OF THE YEAR',
    description: 'This category highlights public influence and reputation.',
    qualificationCriteria: [
      'Finalists must have active engagement with community health initiatives, no disciplinary actions in the past three years, and the most votes from the public.'
    ],
    scoreMetrics: [...SCORE_METRICS],
    requiredDocuments: REQUIRED_DOCUMENTS.filter(doc =>
      !doc.includes('institutional') &&
      !doc.includes('entrepreneurs') &&
      !doc.includes('compliance and accreditation')
    ),
    icon: 'Trophy',
    isVoted: true
  }
];

// Helper functions
export const getVotedCategories = () => AWARD_CATEGORIES.filter(cat => cat.isVoted);
export const getHonoraryCategories = () => AWARD_CATEGORIES.filter(cat => cat.isHonorary);
export const getCategoryById = (id: string) => AWARD_CATEGORIES.find(cat => cat.id === id);
export const getCategoryByTitle = (title: string) => AWARD_CATEGORIES.find(cat =>
  cat.title.toLowerCase() === title.toLowerCase() ||
  cat.shortTitle.toLowerCase() === title.toLowerCase()
);