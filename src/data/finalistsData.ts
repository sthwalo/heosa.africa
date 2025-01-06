export interface Finalist {
  id: string;
  name: string;
  category: string;
  image: string;
  voteCode?: string;
  year?: string;
}

export const finalistsData: Finalist[] = [
  { id: 'hi1', name: 'Espaco Relive LDA-Mozambique', category: 'Health Institution of the Year', image: '/images/finalists/Espaco.jpeg', voteCode: 'HI01', year: '2024' },
  { id: 'hi2', name: 'Foundation for Alcohol Related Research', category: 'Health Institution of the Year', image: '/images/finalists/FFARR.jpeg', voteCode: 'HI02', year: '2024' },
  { id: 'hi3', name: 'Sister Jenny Burn Foundation', category: 'Health Institution of the Year', image: '/images/finalists/Sister J.jpeg', voteCode: 'HI03', year: '2024' },
  { id: 'hi4', name: 'Boitekanelo College', category: 'Health Institution of the Year', image: '/images/finalists/Boitekanelo.jpeg', voteCode: 'HI04', year: '2024' },
  { id: 'mt1', name: 'Ms Edith Mhlongo', category: 'Multi-Talented HCP of the Year', image: '/images/finalists/Edith.jpeg', voteCode: 'MT01', year: '2024' },
  { id: 'mt2', name: 'Ms Masegafane Bapela', category: 'Multi-Talented HCP of the Year', image: '/images/finalists/Mase.jpeg', voteCode: 'MT02', year: '2024' },
  { id: 'mt3', name: 'Ms Mariska Kruger', category: 'Multi-Talented HCP of the Year', image: '/images/finalists/Mariska.jpeg', voteCode: 'MT03', year: '2024' },
  { id: 'mt4', name: 'Mr Sibusiso Mthembu(SbuNoah)', category: 'Multi-Talented HCP of the Year', image: '/images/finalists/SbuNoah.jpeg', voteCode: 'MT04', year: '2024' },
  { id: 'cb1', name: 'Dr Unben Pillay', category: 'HCP Community Builder of the Year', image: '/images/finalists/Unben.jpeg', voteCode: 'CB01', year: '2024' },
  { id: 'cb2', name: 'Daniella Carvalheiro', category: 'HCP Community Builder of the Year', image: '/images/finalists/Daniella.jpeg', voteCode: 'CB02', year: '2024' },
  { id: 'cb3', name: 'Ms Maria Britz', category: 'HCP Community Builder of the Year', image: '/images/finalists/Maria.jpeg', voteCode: 'CB03', year: '2024' },
  { id: 'cb4', name: 'Ms Bulelani Mkhize', category: 'HCP Community Builder of the Year', image: '/images/finalists/Bulelani.jpeg', voteCode: 'CB04', year: '2024' },
  { id: 'ed1', name: 'Dr Precious Serero', category: 'HCP Educator of the Year', image: '/images/finalists/Precious.jpeg', voteCode: 'ED01', year: '2024' },
  { id: 'ed2', name: 'Dr Bonolo Mashishi', category: 'HCP Educator of the Year', image: '/images/finalists/Bonolo.jpeg', voteCode: 'ED02', year: '2024' },
  { id: 'ed3', name: 'Mr Lindokuhle Mokoena', category: 'HCP Educator of the Year', image: '/images/finalists/Lindo.jpeg', voteCode: 'ED03', year: '2024' },
  { id: 'ed4', name: 'Dr Gugu Nhleko Tembe', category: 'HCP Educator of the Year', image: '/images/finalists/Gugu.jpeg', voteCode: 'ED04', year: '2024' },
  { id: 'me1', name: 'Dr Ashlin Rampul', category: 'HCP Mentor of the Year', image: '/images/finalists/Ashlin.jpeg', voteCode: 'ME01', year: '2024' },
  { id: 'me2', name: 'Dr Bongile Mabilane', category: 'HCP Mentor of the Year', image: '/images/finalists/Bongile.jpeg', voteCode: 'ME02', year: '2024' },
  { id: 'me3', name: 'Dr Nokuzola Mokoena', category: 'HCP Mentor of the Year', image: '/images/finalists/Nokuzol.jpeg', voteCode: 'ME03', year: '2024' },
  { id: 'me4', name: 'Dr Lola Chuma', category: 'HCP Mentor of the Year', image: '/images/finalists/Lola.jpeg', voteCode: 'ME04', year: '2024' },
  { id: 'rs1', name: 'Dr Damien Bronkhorst', category: 'Rising Star HCP of the Year', image: '/images/finalists/Damien.jpeg', voteCode: 'RS01', year: '2024' },
  { id: 'rs2', name: 'Dr Mutshidzi Mulondo', category: 'Rising Star HCP of the Year', image: '/images/finalists/Mutshidzi.jpeg', voteCode: 'RS02', year: '2024' },
  { id: 'rs3', name: 'Dr Taz Emeran Thomas', category: 'Rising Star HCP of the Year', image: '/images/finalists/Taz.jpeg', voteCode: 'RS03', year: '2024' },
  { id: 'rs4', name: 'Dr Thozama Siyotula', category: 'Rising Star HCP of the Year', image: '/images/finalists/Thozam.jpeg', voteCode: 'RS04', year: '2024' },
  { id: 'rs5', name: 'Dr Ruhann Botha', category: 'Rising Star HCP of the Year', image: '/images/finalists/Ruhann.jpeg', voteCode: 'RS05', year: '2024' },
  { id: 'mp2', name: 'Dr Kwanele Zibane', category: 'HCP Media Personality of the Year', image: '/images/finalists/Kwanele.jpeg', voteCode: 'MP02', year: '2024' },
  { id: 'mp3', name: 'Ms Busisiwe Ndlovu', category: 'HCP Media Personality of the Year', image: '/images/finalists/Busi.jpeg', voteCode: 'MP03', year: '2024' },
  { id: 'mp4', name: 'Ms Moloko Mehlape', category: 'HCP Media Personality of the Year', image: '/images/finalists/Moloko.jpeg', voteCode: 'MP04', year: '2024' },
  { id: 'hr1', name: 'Prof Fhumulani Mavis Mulaudzi', category: 'Health Researcher of the Year', image: '/images/finalists/Fhumu.jpeg', voteCode: 'HR01', year: '2024' },
  { id: 'hr2', name: 'Dr Borna Nyaoke-Anoke', category: 'Health Researcher of the Year', image: '/images/finalists/Borna.jpeg', voteCode: 'HR02', year: '2024' },
  { id: 'hr3', name: 'Prof Indiran Govender', category: 'Health Researcher of the Year', image: '/images/finalists/Indiran.jpeg', voteCode: 'HR03', year: '2024' },
  { id: 'cd1', name: 'Dr Itani Dikgale', category: 'HCP Charity Driver of the Year', image: '/images/finalists/Itani.jpeg', voteCode: 'CD01', year: '2024' },
  { id: 'cd2', name: 'Dr Bruce Lelala', category: 'HCP Charity Driver of the Year', image: '/images/finalists/Bruce.jpeg', voteCode: 'CD02', year: '2024' },
  { id: 'cd3', name: 'Mrs Tshidi Sithole Mabila', category: 'HCP Charity Driver of the Year', image: '/images/finalists/tshidi.jpeg', voteCode: 'CD03', year: '2024' },
  { id: 'cd4', name: 'Haniefa Bi Allee', category: 'HCP Charity Driver of the Year', image: '/images/finalists/Hannifea.jpeg', voteCode: 'CD04', year: '2024' },
  { id: 'hl1', name: 'Dr Putswana Senoamadi', category: 'Health Care Leader of the Year', image: '/images/finalists/Putsu.jpeg', voteCode: 'HL01', year: '2024' },
  { id: 'hl2', name: 'Prof Steven Matshidze', category: 'Health Care Leader of the Year', image: '/images/finalists/Steven.jpeg', voteCode: 'HL02', year: '2024' },
  { id: 'hl3', name: 'Thembisile Matsinhe', category: 'Health Care Leader of the Year', image: '/images/finalists/Thembisile.jpeg', voteCode: 'HL03', year: '2024' },
  { id: 'hl4', name: 'Dr Stanley Aruyaru', category: 'Health Care Leader of the Year', image: '/images/finalists/Stanley.jpeg', voteCode: 'HL04', year: '2024' },
  { id: 'ew1', name: 'Mr Sifiso Mkhatshwa', category: 'Employee Wellness HCP of the Year', image: '/images/finalists/Sifiso.jpeg', voteCode: 'EW01', year: '2024' },
  { id: 'ew2', name: 'Ms Nokuthula Kakaza', category: 'Employee Wellness HCP of the Year', image: '/images/finalists/Nokuthula.jpeg', voteCode: 'EW02', year: '2024' },
  { id: 'ew3', name: 'Dr Chinasa Amadi', category: 'Employee Wellness HCP of the Year', image: '/images/finalists/Chinasa.jpeg', voteCode: 'EW03', year: '2024' },
  { id: 'ew4', name: 'Ms Nomsa Mokoena', category: 'Employee Wellness HCP of the Year', image: '/images/finalists/Nomsa.jpeg', voteCode: 'EW04', year: '2024' },
  { id: 'dh1', name: 'Dr Idara Umoette', category: 'Digital Health Innovator of the Year', image: '/images/finalists/Idara.jpeg', voteCode: 'DH01', year: '2024' },
  { id: 'dh2', name: 'Clementine Phale', category: 'Digital Health Innovator of the Year', image: '/images/finalists/Phale.jpeg', voteCode: 'DH02', year: '2024' },
];
