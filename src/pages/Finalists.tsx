import { useState } from 'react';
import { Phone, Mail, Share2, X } from 'lucide-react';

interface Finalist {
  id: string;
  name: string;
  category: string;
  image: string;
  voteCode: string;
}

const Finalists = () => {
  const [selectedFinalist, setSelectedFinalist] = useState<Finalist | null>(null);
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);

  const finalists: Finalist[] = [
    { id: 'hi1', name: 'Espaco Relive LDA-Mozambique', category: 'Health Institution of the Year', image: '', voteCode: 'HI01' },
    { id: 'hi2', name: 'Foundation for Alcohol Related Research', category: 'Health Institution of the Year', image: '', voteCode: 'HI02' },
    { id: 'hi3', name: 'Sister Jenny Burn Foundation', category: 'Health Institution of the Year', image: '', voteCode: 'HI03' },
    { id: 'hi4', name: 'Boitekanelo College', category: 'Health Institution of the Year', image: '', voteCode: 'HI04' },
    { id: 'mt1', name: 'Ms Edith Mhlongo', category: 'Multi-Talented HCP of the Year', image: '', voteCode: 'MT01' },
    { id: 'mt2', name: 'Ms Masegafane Bapela', category: 'Multi-Talented HCP of the Year', image: '', voteCode: 'MT02' },
    { id: 'mt3', name: 'Ms Mariska Kruger', category: 'Multi-Talented HCP of the Year', image: '', voteCode: 'MT03' },
    { id: 'mt4', name: 'Mr Sibusiso Mthembu(SbuNoah)', category: 'Multi-Talented HCP of the Year', image: '', voteCode: 'MT04' },
    { id: 'cb1', name: 'Dr Unben Pillay', category: 'HCP Community Builder of the Year', image: '', voteCode: 'CB01' },
    { id: 'cb2', name: 'Daniella Carvalheiro', category: 'HCP Community Builder of the Year', image: '', voteCode: 'CB02' },
    { id: 'cb3', name: 'Ms Maria Britz', category: 'HCP Community Builder of the Year', image: '', voteCode: 'CB03' },
    { id: 'cb4', name: 'Ms Bulelani Mkhize', category: 'HCP Community Builder of the Year', image: '', voteCode: 'CB04' },
    { id: 'ed1', name: 'Dr Precious Serero', category: 'HCP Educator of the Year', image: '/images/finalists/Precious.jpeg', voteCode: 'ED01' },
    { id: 'ed2', name: 'Dr Bonolo Mashishi', category: 'HCP Educator of the Year', image: '/images/finalists/Bonolo.jpeg', voteCode: 'ED02' },
    { id: 'ed3', name: 'Mr Lindokuhle Mokoena', category: 'HCP Educator of the Year', image: '/images/finalists/Lindo.jpeg', voteCode: 'ED03' },
    { id: 'ed4', name: 'Dr Gugu Nhleko Tembe', category: 'HCP Educator of the Year', image: '/images/finalists/Gugu.jpeg', voteCode: 'ED04' },
    { id: 'me1', name: 'Dr Ashlin Rampul', category: 'HCP Mentor of the Year', image: '/images/finalists/Ashlin.jpeg', voteCode: 'ME01' },
    { id: 'me2', name: 'Dr Bongile Mabilane', category: 'HCP Mentor of the Year', image: '/images/finalists/Bongile.jpeg', voteCode: 'ME02' },
    { id: 'me3', name: 'Dr Nokuzola Mokoena', category: 'HCP Mentor of the Year', image: '/images/finalists/Nokuzol.jpeg', voteCode: 'ME03' },
    { id: 'me4', name: 'Dr Lola Chuma', category: 'HCP Mentor of the Year', image: '/images/finalists/Lola.jpeg', voteCode: 'ME04' },
    { id: 'rs1', name: 'Dr Damien Bronkhorst', category: 'Rising Star HCP of the Year', image: '/images/finalists/Damien.jpeg', voteCode: 'RS01' },
    { id: 'rs2', name: 'Dr Mutshidzi Mulondo', category: 'Rising Star HCP of the Year', image: '/images/finalists/Mutshidzi.jpeg', voteCode: 'RS02' },
    { id: 'rs3', name: 'Dr Taz Emeran Thomas', category: 'Rising Star HCP of the Year', image: '/images/finalists/Taz.jpeg', voteCode: 'RS03' },
    { id: 'rs4', name: 'Dr Thozama Siyotula', category: 'Rising Star HCP of the Year', image: '/images/finalists/Thozam.jpeg', voteCode: 'RS04' },
    { id: 'rs5', name: 'Dr Ruhann Botha', category: 'Rising Star HCP of the Year', image: '/images/finalists/Ruhann.jpeg', voteCode: 'RS05' },
    { id: 'mp1', name: 'Ms Casendra Malinga', category: 'HCP Media Personality of the Year', image: '', voteCode: 'MP01' },
    { id: 'mp2', name: 'Dr Kwanele Zibane', category: 'HCP Media Personality of the Year', image: '/images/finalists/Kwanele.jpeg', voteCode: 'MP02' },
    { id: 'mp3', name: 'Ms Busisiwe Ndlovu', category: 'HCP Media Personality of the Year', image: '/images/finalists/Busi.jpeg', voteCode: 'MP03' },
    { id: 'mp4', name: 'Ms Moloko Mehlape', category: 'HCP Media Personality of the Year', image: '/images/finalists/Moloko.jpeg', voteCode: 'MP04' },
    { id: 'hr1', name: 'Prof Phumulani Mavis Mulaudzi', category: 'Health Researcher of the Year', image: '', voteCode: 'HR01' },
    { id: 'hr2', name: 'Dr Borna Nyaoke-Anoke', category: 'Health Researcher of the Year', image: '', voteCode: 'HR02' },
    { id: 'hr3', name: 'Prof Indiran Govender', category: 'Health Researcher of the Year', image: '', voteCode: 'HR03' },
    { id: 'cd1', name: 'Dr Itani Dikgale', category: 'HCP Charity Driver of the Year', image: '/images/finalists/Itani.jpeg', voteCode: 'CD01' },
    { id: 'cd2', name: 'Dr Bruce Lelala', category: 'HCP Charity Driver of the Year', image: '/images/finalists/Bruce.jpeg', voteCode: 'CD02' },
    { id: 'cd3', name: 'Mrs Tshidi Sithole Mabila', category: 'HCP Charity Driver of the Year', image: '/images/finalists/tshidi.jpeg', voteCode: 'CD03' },
    { id: 'cd4', name: 'Haniefa Bi Allee', category: 'HCP Charity Driver of the Year', image: '/images/finalists/Hannifea.jpeg', voteCode: 'CD04' },
    { id: 'hl1', name: 'Dr Putswana Senoamadi', category: 'Health Care Leader of the Year', image: '/images/finalists/Putsu.jpeg', voteCode: 'HL01' },
    { id: 'hl2', name: 'Prof Steven Matshidze', category: 'Health Care Leader of the Year', image: '/images/finalists/Steven.jpeg', voteCode: 'HL02' },
    { id: 'hl3', name: 'Thembisile Matsinhe', category: 'Health Care Leader of the Year', image: '/images/finalists/Thembisile.jpeg', voteCode: 'HL03' },
    { id: 'hl4', name: 'Dr Stanley Aruyaru', category: 'Health Care Leader of the Year', image: '/images/finalists/Stanley.jpeg', voteCode: 'HL04' },
    { id: 'ew1', name: 'Mr Sifiso Mkhatshwa', category: 'Employee Wellness HCP of the Year', image: '/images/finalists/Sifiso.jpeg', voteCode: 'EW01' },
    { id: 'ew2', name: 'Ms Nokuthula Kakaza', category: 'Employee Wellness HCP of the Year', image: '/images/finalists/Nokuthula.jpeg', voteCode: 'EW02' },
    { id: 'ew3', name: 'Dr Chinasa Amadi', category: 'Employee Wellness HCP of the Year', image: '/images/finalists/Chinasa.jpeg', voteCode: 'EW03' },
    { id: 'ew4', name: 'Ms Nomsa Mokoena', category: 'Employee Wellness HCP of the Year', image: '/images/finalists/Nomsa.jpeg', voteCode: 'EW04' },
    { id: 'dh1', name: 'Dr Idara Umoette', category: 'Digital Health Innovator of the Year', image: '/images/finalists/Idara.jpeg', voteCode: 'DH01' },
    { id: 'dh2', name: 'Clementine Phale', category: 'Digital Health Innovator of the Year', image: '/images/finalists/Phale.jpeg', voteCode: 'DH02' },
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
        action: () => window.location.href = `mailto:vote@heosa.africa?subject=Vote for ${selectedFinalist.name}&body=I would like to vote for ${selectedFinalist.name} (${selectedFinalist.voteCode})`
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
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-[#2B2A29]">Vote for {selectedFinalist.name}</h3>
            <button
              onClick={() => setIsVoteModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            {votingMethods.map((method, index) => (
              <button
                key={index}
                onClick={method.action}
                className="w-full flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#962326] hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 text-[#962326]">
                  {method.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-[#2B2A29]">{method.title}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">2024 Finalists</h1>
          <p className="text-lg text-gray-600">Vote for your favorite healthcare professionals and institutions</p>
        </div>

        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold text-[#2B2A29] mb-8">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.finalists.map((finalist) => (
                <div
                  key={finalist.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-square">
                    <img
                      src={finalist.image}
                      alt={finalist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#2B2A29] mb-4">{finalist.name}</h3>
                    <button
                      onClick={() => handleVote(finalist)}
                      className="w-full py-2 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors"
                    >
                      Vote Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isVoteModalOpen && <VoteModal />}
    </div>
  );
};

export default Finalists;