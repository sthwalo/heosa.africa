export interface Winner {
  id: string;
  name: string;
  category: string;
  image: string;
  year: string;
  description?: string;
}

export const winnersData: Winner[] = [
  // 2024 Winners
  { 
    id: 'hl1_2024',
    name: 'Dr. Putswana Senoamadi',
    category: 'Healthcare Leader of the Year',
    image: '/images/winners/24/Healthcare Leader.jpg',
    year: '2024',
    description: 'Outstanding leadership in healthcare administration'
  },
  { 
    id: 'mp1_2024',
    name: 'Ms Moloko Mehlape',
    category: 'Media Personality of the Year',
    image: '/images/winners/24/Media Personality of the year.jpg',
    year: '2024',
    description: 'Exceptional media representation in healthcare'
  },
  { 
    id: 'me1_2024',
    name: 'Dr Ashlin Rampul',
    category: 'Mentor of the Year',
    image: '/images/winners/24/Mentor of the year.jpg',
    year: '2024',
    description: 'Dedicated mentorship in healthcare professionals'
  },
  { 
    id: 'ew1_2024',
    name: 'Mr Sifiso Mkhatshwa',
    category: 'Employee Wellness HCP of the Year',
    image: '/images/winners/24/Employee Wellness HCP of the year.jpg',
    year: '2024',
    description: 'Exemplary compassion in patient care'
  },
  { 
    id: 'hr1_2024',
    name: 'Dr Borna Nyaoke-Anoke',
    category: 'Health Researcher of the Year',
    image: '/images/winners/24/Health Researcher of the year.jpg',
    year: '2024',
    description: 'Outstanding contributions to healthcare research'
  },
  { 
    id: 'hi1_2024',
    name: 'Foundation for Alcohol Related Research',
    category: 'Health Institution of the Year',
    image: '/images/winners/24/Health Institution of the year.jpg',
    year: '2024',
    description: 'Recognized for outstanding contributions to healthcare literature'
  },
  { 
    id: 'mt1_2024',
    name: 'Mr Sibusiso Mthembu(SbuNoah)',
    category: 'Multi-Talented HCP of the Year',
    image: '/images/winners/24/Multi-Talented HCP of the year.jpg',
    year: '2024',
    description: 'Versatility and excellence in multiple healthcare domains'
  },
  { 
    id: 'rs1_2024',
    name: 'Dr. Thozama Siyotula',
    category: 'Rising Star HCP of the Year',
    image: '/images/winners/24/Rising Star HCP of the year.jpg',
    year: '2024',
    description: 'Outstanding performance as a young healthcare professional'
  },
  { 
    id: 'cb1_2024',
    name: 'Ms Bulelani Mkhize',
    category: 'HCP Community Builder of the Year',
    image: '/images/winners/24/HCP_Community Builder of the year.jpg',
    year: '2024',
    description: 'Excellent community service and health promotion projects'
  },
  { 
    id: 'ed1_2024',
    name: 'Dr. Gugu Nhleko Tembe',
    category: 'HCP Educator of the Year',
    image: '/images/winners/24/HCP_Educator of the year.jpg',
    year: '2024',
    description: 'Innovative approaches to healthcare education'
  },
  { 
    id: 'cd1_2024',
    name: 'Mrs Tshidi Sithole-Mabila',
    category: 'HCP Charity Driver of the Year',
    image: '/images/winners/24/HCP_Charity Driver of the year.jpg',
    year: '2024',
    description: 'Outstanding contributions to healthcare charity initiatives'
  },
  { 
    id: 'dh1_2024',
    name: 'Ms Clementine Phale',
    category: 'Digital Health Innovator of the Year',
    image: '/images/winners/24/Digital Health Innovator of the year.jpg',
    year: '2024',
    description: 'Innovative use of digital technology to improve healthcare'
  },

  // 2023 Winners
  {
    id: 'au1_2023',
    name: 'Ms. Pamela Sedibe',
    category: 'HCP Author of the Year',
    image: '/images/winners/23/Pamela.jpg',
    year: '2023',
    description: 'Recognized for outstanding contributions to healthcare literature'
  },
  {
    id: 'mp1_2023',
    name: 'Mr. Christopher Zungu',
    category: 'Medi Personality of the Year',
    image: '/images/winners/23/Zungu.jpg',
    year: '2023',
    description: 'Exceptional media representation in healthcare'
  },
  {
    id: 'ed1_2023',
    name: 'Dr. Thandeka Ngcobo',
    category: 'Media HCP Educator of the Year',
    image: '/images/winners/23/Ngcobo.jpg',
    year: '2023',
    description: 'Innovative approaches to healthcare education'
  },
  {
    id: 'me1_2023',
    name: 'Ms. Thembeka Buleni',
    category: 'Mentor of the Year',
    image: '/images/winners/23/Buleni.jpg',
    year: '2023',
    description: 'Dedicated mentorship in healthcare professionals'
  },
  {
    id: 'cp1_2023',
    name: 'Ms. Noxolo Singwane',
    category: 'Most Compassionate HCP',
    image: '/images/winners/23/Singwane.jpg',
    year: '2023',
    description: 'Exemplary compassion in patient care'
  },
  {
    id: 'mv1_2023',
    name: 'Ms. Noxolo Singwane',
    category: 'Most Voted HCP',
    image: '/images/winners/23/Singwane.jpg',
    year: '2023',
    description: 'Recognized by peers for outstanding service'
  },
  {
    id: 'hl1_2023',
    name: 'Ms. Tshidi Sithole-Mabila',
    category: 'Healthcare Leader',
    image: '/images/winners/23/Ms-Tshidi-Sithole-Mabila.jpg',
    year: '2023',
    description: 'Outstanding leadership in healthcare administration'
  },
  {
    id: 'mt1_2023',
    name: 'Dr. Khanyisile Mashele & Dr. Ziyanda Vundhla',
    category: 'Multi-Talented HCP',
    image: '/images/winners/23/Dr-Khanyisile-Dr-Ziyanda.jpg',
    year: '2023',
    description: 'Outstanding achievements across multiple healthcare disciplines'
  }
];
