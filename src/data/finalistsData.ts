export interface Finalist {
  id: string;
  name: string;
  category: string;
  image: string;
  voteCode?: string;
  year?: string;
}

// 2024 Finalists (moved to past)
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

  // 2025 Finalists
  // Health Institution of the Year
  { id: 'AHEA 025', name: 'Hibiscus Cato Ridge Hospital', category: 'Health Institution of the Year', image: '/images/2025 Finalists/Hibicus.png', voteCode: 'AHEA 025', year: '2025' },
  { id: 'AHEA 023', name: 'Victoria Mxenge Hospital', category: 'Health Institution of the Year', image: '/images/2025 Finalists/Victoria Mxenge Hospital.png', voteCode: 'AHEA 023', year: '2025' },
  { id: 'AHEA 027', name: 'Mhamia Foundation', category: 'Health Institution of the Year', image: '/images/2025 Finalists/Mhamia Foundation.png', voteCode: 'AHEA 027', year: '2025' },
  { id: 'AHEA 024', name: 'Hlokomela', category: 'Health Institution of the Year', image: '/images/2025 Finalists/Hlokomela.png', voteCode: 'AHEA 024', year: '2025' },
  { id: 'AHEA 026', name: 'White River Recovery Centre', category: 'Health Institution of the Year', image: '/images/2025 Finalists/White River Recovery Centre.png', voteCode: 'AHEA 026', year: '2025' },
  // Multi-Talented HCP of the Year
  { id: 'AHEA 011', name: 'David Orgen', category: 'Multi-Talented HCP of the Year', image: '/images/2025 Finalists/Dr David Orgen.png', voteCode: 'AHEA 011', year: '2025' },
  { id: 'AHEA 012', name: 'Rishalan Govender', category: 'Multi-Talented HCP of the Year', image: '/images/2025 Finalists/Dr Rishalan Govender.png', voteCode: 'AHEA 012', year: '2025' },
  { id: 'AHEA 013', name: 'Busani Mazombwe', category: 'Multi-Talented HCP of the Year', image: '/images/2025 Finalists/Ms Busani Mazombwe.png', voteCode: 'AHEA 013', year: '2025' },
  // HCP Community Builder of the Year
  { id: 'AHEA 020', name: 'Tapfumanei Mashe', category: 'HCP Community Builder of the Year', image: '/images/2025 Finalists/Dr Tapfumanei Mashe CB.png', voteCode: 'AHEA 020', year: '2025' },
  { id: 'AHEA 021', name: 'Christine Du Preez', category: 'HCP Community Builder of the Year', image: '/images/2025 Finalists/Ms Christine Du Preez.png', voteCode: 'AHEA 021', year: '2025' },
  { id: 'AHEA 022', name: 'Ayanda Mthembu', category: 'HCP Community Builder of the Year', image: '/images/2025 Finalists/Dr Ayanda Mthembu.png', voteCode: 'AHEA 022', year: '2025' },
  // HCP Educator of the Year
  { id: 'AHEA 049', name: 'Mikateko Ndhambi', category: 'HCP Educator of the Year', image: '/images/2025 Finalists/Prof Mikateko Ndhambi.png', voteCode: 'AHEA 049', year: '2025' },
  { id: 'AHEA 048', name: 'Nontokozo Mbatha', category: 'HCP Educator of the Year', image: '/images/2025 Finalists/Dr Ntokozo Mbatha.png', voteCode: 'AHEA 048', year: '2025' },
  // HCP Mentor of the Year
  { id: 'AHEA 014', name: 'Thembeka Buleni', category: 'HCP Mentor of the Year', image: '/images/2025 Finalists/Dr Thembeka Buleni.png', voteCode: 'AHEA 014', year: '2025' },
  { id: 'AHEA 016', name: 'Conny Kwaso', category: 'HCP Mentor of the Year', image: '/images/2025 Finalists/Ms Conny Kwaso.png', voteCode: 'AHEA 016', year: '2025' },
  { id: 'AHEA 015', name: 'Maurine Musie', category: 'HCP Mentor of the Year', image: '/images/2025 Finalists/Dr Maurine Musie.png', voteCode: 'AHEA 015', year: '2025' },
  // Rising Star HCP of the Year
  { id: 'AHEA 004', name: 'Moratwe Masima', category: 'Rising Star HCP of the Year', image: '/images/2025 Finalists/Dr Moratwe Masima.png', voteCode: 'AHEA 004', year: '2025' },
  { id: 'AHEA 001', name: 'Bonginkosi Mafuze', category: 'Rising Star HCP of the Year', image: '/images/2025 Finalists/Dr Bonginkosi Mafuze.png', voteCode: 'AHEA 001', year: '2025' },
  { id: 'AHEA 005', name: 'Puseletso Manyaka', category: 'Rising Star HCP of the Year', image: '/images/2025 Finalists/Mrs P Lesofe.png', voteCode: 'AHEA 005', year: '2025' },
  { id: 'AHEA 002', name: 'Bawinile Hadebe', category: 'Rising Star HCP of the Year', image: '/images/2025 Finalists/Dr Bawinile Hadebe.png', voteCode: 'AHEA 002', year: '2025' },
  { id: 'AHEA 003', name: 'Kunda Phiri', category: 'Rising Star HCP of the Year', image: '/images/2025 Finalists/Dr Kunda Phiri.png', voteCode: 'AHEA 003', year: '2025' },
  // HCP Media Personality of the Year
  { id: 'AHEA 051', name: 'Tholinhlanhla Dlamini', category: 'HCP Media Personality of the Year', image: '/images/2025 Finalists/Mrs Tholinhlanhla Dlamini.png', voteCode: 'AHEA 051', year: '2025' },
  { id: 'AHEA 053', name: 'Katlego Mogapi', category: 'HCP Media Personality of the Year', image: '/images/2025 Finalists/Ms Katlego Mogapi.png', voteCode: 'AHEA 053', year: '2025' },
  { id: 'AHEA 052', name: 'Portia Mazabane', category: 'HCP Media Personality of the Year', image: '/images/2025 Finalists/Dr Portia Mazabane.png', voteCode: 'AHEA 052', year: '2025' },
  // Health Researcher of the Year
  { id: 'AHEA 044', name: 'Pragashnie Govender', category: 'Health Researcher of the Year', image: '/images/2025 Finalists/Prof Pragashnie Govender.png', voteCode: 'AHEA 044', year: '2025' },
  { id: 'AHEA 045', name: 'Allen Matubu', category: 'Health Researcher of the Year', image: '/images/2025 Finalists/Dr Allen Matubu.png', voteCode: 'AHEA 045', year: '2025' },
  { id: 'AHEA 047', name: 'Collins Timire', category: 'Health Researcher of the Year', image: '/images/2025 Finalists/Dr Collins Timire.png', voteCode: 'AHEA 047', year: '2025' },
  { id: 'AHEA 046', name: 'Nokukhanya Thembane', category: 'Health Researcher of the Year', image: '/images/2025 Finalists/Dr Nokukhanya Thembane.png', voteCode: 'AHEA 046', year: '2025' },
  { id: 'AHEA 043', name: 'Sipho Mhlongo', category: 'Health Researcher of the Year', image: '/images/2025 Finalists/Dr Tapfumanei Mashe.png', voteCode: 'AHEA 043', year: '2025' },
  // HCP Charity Driver of the Year
  { id: 'AHEA 019', name: 'Hilda Nkonde', category: 'HCP Charity Driver of the Year', image: '/images/2025 Finalists/Dr Hilda Nkonde.png', voteCode: 'AHEA 019', year: '2025' },
  { id: 'AHEA 018', name: 'Tracy Mmako', category: 'HCP Charity Driver of the Year', image: '/images/2025 Finalists/Dr Tracy Mmako.png', voteCode: 'AHEA 018', year: '2025' },
  { id: 'AHEA 017', name: 'Maila Boitumelo', category: 'HCP Charity Driver of the Year', image: '/images/2025 Finalists/Ms Maila Boitumelo.png', voteCode: 'AHEA 017', year: '2025' },
  // Health Care Leader of the Year
  { id: 'AHEA 006', name: 'Sadna Balton', category: 'Health Care Leader of the Year', image: '/images/2025 Finalists/Dr Sadna Balton.png', voteCode: 'AHEA 006', year: '2025' },
  { id: 'AHEA 008', name: 'Sibongiseni Dlomo', category: 'Health Care Leader of the Year', image: '/images/2025 Finalists/Dr Sibongiseni Dhlomo.png', voteCode: 'AHEA 008', year: '2025' },
  { id: 'AHEA 010', name: 'Thembi Baloyi', category: 'Health Care Leader of the Year', image: '/images/2025 Finalists/Dr Thembi Baloyi.png', voteCode: 'AHEA 010', year: '2025' },
  { id: 'AHEA 007', name: 'Nombuso Mathe', category: 'Health Care Leader of the Year', image: '/images/2025 Finalists/Dr Nombuso Mathe.png', voteCode: 'AHEA 007', year: '2025' },
  { id: 'AHEA 009', name: 'Percy Mashige', category: 'Health Care Leader of the Year', image: '/images/2025 Finalists/Prof Percy Mashige.png', voteCode: 'AHEA 009', year: '2025' },
  // Employee Wellness HCP of the Year
  { id: 'AHEA 040', name: 'Felicia Goosen', category: 'Employee Wellness HCP of the Year', image: '/images/2025 Finalists/Ms Felicia Goosen.png', voteCode: 'AHEA 040', year: '2025' },
  { id: 'AHEA 041', name: 'Nokuthula Kakaza', category: 'Employee Wellness HCP of the Year', image: '/images/2025 Finalists/Ms Nokuthula Kakaza.png', voteCode: 'AHEA 041', year: '2025' },
  { id: 'AHEA 042', name: 'Nokuthula Thusini', category: 'Employee Wellness HCP of the Year', image: '/images/2025 Finalists/Ms Nokuthula Thusini.png', voteCode: 'AHEA 042', year: '2025' },
  // Digital Health Innovator of the Year  
  { id: 'AHEA 035', name: 'Chanel Retief', category: 'Digital Health Innovator of the Year', image: '/images/2025 Finalists/Ms Chanel Retief.png', voteCode: 'AHEA 035', year: '2025' },
  // HCP Authors of the Year
  { id: 'AHEA 029', name: 'Zodwa Dlamini', category: 'HCP Author of the Year', image: '/images/2025 Finalists/Prof Zodwa Dlamini.png', voteCode: 'AHEA 029', year: '2025' },
  { id: 'AHEA 030', name: 'Samukelisiwe Ngcobo', category: 'HCP Author of the Year', image: '/images/2025 Finalists/Dr Samukelisiwe Ngcobo.png', voteCode: 'AHEA 030', year: '2025' },
  { id: 'AHEA 028', name: 'Thandeka Mdlalo', category: 'HCP Author of the Year', image: '/images/2025 Finalists/Dr Thandeka Mdlalo.png', voteCode: 'AHEA 028', year: '2025' },
  // Health Entrepreneur of the Year
  { id: 'AHEA 032', name: 'Gift Gwawawa', category: 'Health Entrepreneur of the Year', image: '/images/2025 Finalists/Gift Gawawa.png', voteCode: 'AHEA 032', year: '2025' },
  { id: 'AHEA 033', name: 'Kim Jerry Bot', category: 'Health Entrepreneur of the Year', image: '/images/2025 Finalists/Mr Kim Jerry Bot.png', voteCode: 'AHEA 033', year: '2025' },
  { id: 'AHEA 031', name: 'Prudence Buthelezi', category: 'Health Entrepreneur of the Year', image: '/images/2025 Finalists/Dr Prudence Buthelezi.png', voteCode: 'AHEA 031', year: '2025' },
  // Remarkable HCP Living with a Disability
  { id: 'AHEA 037', name: 'Mary Muchekeza', category: 'Remarkable HCP Living with a Disability', image: '/images/2025 Finalists/Dr Mary Muchekeza.png', voteCode: 'AHEA 037', year: '2025' },
  { id: 'AHEA 038', name: 'Morokolo Silas Sathekge', category: 'Remarkable HCP Living with a Disability', image: '/images/2025 Finalists/Dr Morokolo Silas.png', voteCode: 'AHEA 038', year: '2025' },
  { id: 'AHEA 039', name: 'Prisca Mhino', category: 'Remarkable HCP Living with a Disability', image: '/images/2025 Finalists/Ms Prisca Mhino.png', voteCode: 'AHEA 039', year: '2025' },
];

