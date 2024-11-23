import { useState } from 'react';
import { Phone, Mail, Share2, AlertCircle } from 'lucide-react';

interface Finalist {
  id: string;
  name: string;
  category: string;
  image: string;
  voteCode: string;
}

const FinalistsVote = () => {
  const [selectedFinalist, setSelectedFinalist] = useState<Finalist | null>(null);
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);

  const finalists: Finalist[] = [
    { id: 'hi1', name: 'Espaco Relive LDA-Mozambique', category: 'Health Institution of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/46-scaled.jpg', voteCode: 'HI01' },
    { id: 'hi2', name: 'Foundation for Alcohol Related Research', category: 'Health Institution of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/47.jpg', voteCode: 'HI02' },
    { id: 'hi3', name: 'Sister Jenny Burn Foundation', category: 'Health Institution of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/48.jpg', voteCode: 'HI03' },
    { id: 'hi4', name: 'Boitekanelo College', category: 'Health Institution of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/50-scaled.jpg', voteCode: 'HI04' },
    { id: 'mt1', name: 'Ms Edith Mhlongo', category: 'Multi-Talented HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/13.jpg', voteCode: 'MT01' },
    { id: 'mt2', name: 'Ms Masegafane Bapela', category: 'Multi-Talented HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/14.jpg', voteCode: 'MT02' },
    { id: 'mt3', name: 'Ms Mariska Kruger', category: 'Multi-Talented HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/15.jpg', voteCode: 'MT03' },
    { id: 'mt4', name: 'Mr Sibusiso Mthembu(SbuNoah)', category: 'Multi-Talented HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/49.jpg', voteCode: 'MT04' },
    { id: 'cb1', name: 'Dr Unben Pillay', category: 'HCP Community Builder of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/42.jpg', voteCode: 'CB01' },
    { id: 'cb2', name: 'Daniella Carvalheiro', category: 'HCP Community Builder of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/43.jpg', voteCode: 'CB02' },
    { id: 'cb3', name: 'Ms Maria Britz', category: 'HCP Community Builder of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/44.jpg', voteCode: 'CB03' },
    { id: 'cb4', name: 'Ms Bulelani Mkhize', category: 'HCP Community Builder of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/45.jpg', voteCode: 'CB04' },
    { id: 'ed1', name: 'Dr Precious Serero', category: 'HCP Educator of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/38-scaled.jpg', voteCode: 'ED01' },
    { id: 'ed2', name: 'Dr Bonolo Mashishi', category: 'HCP Educator of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/39.jpg', voteCode: 'ED02' },
    { id: 'ed3', name: 'Mr Lindokuhle Mokoena', category: 'HCP Educator of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/40.jpg', voteCode: 'ED03' },
    { id: 'ed4', name: 'Dr Gugu Nhleko Tembe', category: 'HCP Educator of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/41.jpg', voteCode: 'ED04' },
    { id: 'me1', name: 'Dr Ashlin Rampul', category: 'HCP Mentor of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/34.jpg', voteCode: 'ME01' },
    { id: 'me2', name: 'Dr Bongile Mabilane', category: 'HCP Mentor of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/35.jpg', voteCode: 'ME02' },
    { id: 'me3', name: 'Dr Nokuzola Mokoena', category: 'HCP Mentor of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/36.jpg', voteCode: 'ME03' },
    { id: 'me4', name: 'Dr Lola Chuma', category: 'HCP Mentor of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/37.jpg', voteCode: 'ME04' },
    { id: 'rs1', name: 'Dr Damien Bronkhorst', category: 'Rising Star HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/31.jpg', voteCode: 'RS01' },
    { id: 'rs2', name: 'Dr Mutshidzi Mulondo', category: 'Rising Star HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/29.jpg', voteCode: 'RS02' },
    { id: 'rs3', name: 'Dr Taz Emeran Thomas', category: 'Rising Star HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/30.jpg', voteCode: 'RS03' },
    { id: 'rs4', name: 'Dr Thozama Siyotula', category: 'Rising Star HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/32.jpg', voteCode: 'RS04' },
    { id: 'rs5', name: 'Dr Ruhann Botha', category: 'Rising Star HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/33.jpg', voteCode: 'RS05' },
    { id: 'mp1', name: 'Ms Casendra Malinga', category: 'HCP Media Personality of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/25.jpg', voteCode: 'MP01' },
    { id: 'mp2', name: 'Dr Kwanele Zibane', category: 'HCP Media Personality of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/26.jpg', voteCode: 'MP02' },
    { id: 'mp3', name: 'Ms Busisiwe Ndlovu', category: 'HCP Media Personality of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/27.jpg', voteCode: 'MP03' },
    { id: 'mp4', name: 'Ms Moloko Mehlape', category: 'HCP Media Personality of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/28.jpg', voteCode: 'MP04' },
    { id: 'hr1', name: 'Prof Phumulani Mavis Mulaudzi', category: 'Health Researcher of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/21.jpg', voteCode: 'HR01' },
    { id: 'hr2', name: 'Dr Borna Nyaoke-Anoke', category: 'Health Researcher of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/22-scaled.jpg', voteCode: 'HR02' },
    { id: 'hr3', name: 'Prof Indiran Govender', category: 'Health Researcher of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/23.jpg', voteCode: 'HR03' },
    { id: 'cd1', name: 'Dr Itani Dikgale', category: 'HCP Charity Driver of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/17.jpg', voteCode: 'CD01' },
    { id: 'cd2', name: 'Dr Bruce Lelala', category: 'HCP Charity Driver of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/18.jpg', voteCode: 'CD02' },
    { id: 'cd3', name: 'Mrs Tshidi Sithole Mabila', category: 'HCP Charity Driver of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/19.jpg', voteCode: 'CD03' },
    { id: 'cd4', name: 'Haniefa Bi Allee', category: 'HCP Charity Driver of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/20.jpg', voteCode: 'CD04' },
    { id: 'hl1', name: 'Dr Putswana Senoamadi', category: 'Health Care Leader of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/9.jpg', voteCode: 'HL01' },
    { id: 'hl2', name: 'Prof Steven Matshidze', category: 'Health Care Leader of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/10.jpg', voteCode: 'HL02' },
    { id: 'hl3', name: 'Thembisile Matsinhe', category: 'Health Care Leader of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/12.jpg', voteCode: 'HL03' },
    { id: 'hl4', name: 'Dr Stanley Aruyaru', category: 'Health Care Leader of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/11-scaled.jpg', voteCode: 'HL04' },
    { id: 'ew1', name: 'Mr Sifiso Mkhatshwa', category: 'Employee Wellness HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/5.jpg', voteCode: 'EW01' },
    { id: 'ew2', name: 'Ms Nokuthula Kakaza', category: 'Employee Wellness HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/8.jpg', voteCode: 'EW02' },
    { id: 'ew3', name: 'Dr Chinasa Amadi', category: 'Employee Wellness HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/6-scaled.jpg', voteCode: 'EW03' },
    { id: 'ew4', name: 'Ms Nomsa Mokoena', category: 'Employee Wellness HCP of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/7.jpg', voteCode: 'EW04' },
    { id: 'dh1', name: 'Dr Idara Umoette', category: 'Digital Health Innovator of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/1-scaled.jpg', voteCode: 'DH01' },
    { id: 'dh2', name: 'Clementine Phale', category: 'Digital Health Innovator of the Year', image: 'https://heosa.africa/wp-content/uploads/2024/10/2.jpg', voteCode: 'DH02' },
  ];

  const categories = Object.values(
    finalists.reduce((acc, finalist) => {
      if (!acc[finalist.category]) {
        acc[finalist.category] = {
          title: finalist.category,
          finalists: []
        };
      }
      acc[finalist.category].finalists.push(finalist);
      return acc;
    }, {} as Record<string, { title: string; finalists: Finalist[] }>));

  const handleVote = (finalist: Finalist) => {
    setSelectedFinalist(finalist);
    setIsVoteModalOpen(true);
  };

  const VoteModal = () => {
    if (!selectedFinalist) return null;

    const votingMethods = [
      {
        title: 'SMS Voting',
        icon: <Phone className="h-6 w-6" />,
        description: `SMS ${selectedFinalist.voteCode} to 33225`,
        action: () => window.location.href = `sms:33225?body=${selectedFinalist.voteCode}`
      },
      {
        title: 'Email Voting',
        icon: <Mail className="h-6 w-6" />,
        description: 'Vote via email',
        action: () => window.location.href = `mailto:?subject=Vote for ${selectedFinalist.name}&body=I vote for ${selectedFinalist.name} in the ${selectedFinalist.category} category.`
      },
      {
        title: 'Share',
        icon: <Share2 className="h-6 w-6" />,
        description: 'Share with friends',
        action: () => {
          if (navigator.share) {
            navigator.share({
              title: 'Vote for ' + selectedFinalist.name,
              text: `Vote for ${selectedFinalist.name} in the African Health Excellence Awards! SMS ${selectedFinalist.voteCode} to 33225`,
              url: window.location.href
            });
          }
        }
      }
    ];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Vote for {selectedFinalist.name}</h2>
          <div className="flex gap-4">
            {votingMethods.map((method, index) => (
              <button key={index} onClick={method.action} className="flex items-center gap-2 bg-[#A7864B] text-white px-4 py-2 rounded hover:bg-red-500">
                {method.icon}
                <span>{method.title}</span>
              </button>
            ))}
          </div>
          <button onClick={() => setIsVoteModalOpen(false)} className="mt-4 text-red-500">Close</button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#A7864B]">Finalist Voting</h1>
          <img src="https://heosa.africa/wp-content/uploads/2024/10/Collage.jpg" alt="Heading" className="w-full h-auto rounded-lg mt-8" />
        </div>
        <div className="flex items-center bg-yellow-100 p-4 rounded-lg mb-4">
          <AlertCircle className="h-6 w-6 text-yellow-500 mr-2" />
          <span className="text-yellow-700">Please ensure your vote is correct before submitting!</span>
        </div>
        <div className="space-y-12">
          {categories.map(category => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#A7864B] mb-4">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {category.finalists.map(finalist => (
                  <div key={finalist.id} className="bg-gray-100 p-4 rounded-lg text-center">
                    <img src={finalist.image} alt={finalist.name} className="w-full h-48 object-cover rounded-lg" />
                    <p className="mt-4 text-lg font-medium text-gray-700">{finalist.name}</p>
                    <button onClick={() => handleVote(finalist)} className="mt-4 bg-[#A7864B] text-white px-4 py-2 rounded hover:bg-red-500">
                      Vote Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isVoteModalOpen && <VoteModal />}
    </div>
  );
};

export default FinalistsVote;