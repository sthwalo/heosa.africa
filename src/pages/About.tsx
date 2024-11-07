import React from 'react';
import { Linkedin } from 'lucide-react';

interface BoardMember {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedinUrl: string;
}

const About = () => {
  const boardMembers: BoardMember[] = [
    {
      name: "Dr Eric Khumalo",
      role: "Chairperson",
      image: "https://heosa.africa/wp/wp-content/uploads/2024/06/Board-HEO.png",
      description: "Dr. Khumalo is a distinguished medical professional with over 15 years of experience in internal medicine. Currently serving as the Chairperson of the Board at House of Excellence Organisation, He combines exceptional clinical expertise with visionary leadership to advance the mission and values of the organization.",
      linkedinUrl: "https://www.linkedin.com/in/dr-eric-khumalo"
    },
    {
      name: "Ms Sylvia Maseko",
      role: "Founding Director",
      image: "https://heosa.africa/wp/wp-content/uploads/2024/06/4.png",
      description: "Sylvia Maseko is a dynamic entrepreneur and healthcare professional, serving as Chief Operations Officer at Medical Events and Managing Director at Daisy Lee Events. With a background in dietetics and extensive experience in pharmaceutical management across Southern Africa, Sylvia founded the African Health Excellence Awards to honor healthcare leaders and organizations across the continent and global African diaspora.",
      linkedinUrl: "https://www.linkedin.com/in/ms-sylvia-maseko"
    },
    {
      name: "Dr Patrick Maduna",
      role: "Chief of Party",
      image: "https://heosa.africa/wp/wp-content/uploads/2024/06/2-1.png",
      description: "Dr. Maduna is a highly respected retired family physician with over 30 years of dedicated service in family medicine. Currently, serves as the Chief of Party at House of Excellence Organisation. Leveraging a wealth of clinical experience and strategic insight, He plays a pivotal role in guiding the organisation towards its goals and enhancing community health outcomes.",
      linkedinUrl: "https://www.linkedin.com/in/dr-patrick-maduna"
    },
    {
      name: "Ms Sezanele Zondi",
      role: "Media Liaison",
      image: "https://heosa.africa/wp/wp-content/uploads/2024/06/5.png",
      description: "Ms Zondi is the Media Liaison at House of Excellence Organisation. With years of experience in communications and public relations, She expertly manages the organization's media presence, ensuring clear and effective communication of its mission and activities.",
      linkedinUrl: "https://www.linkedin.com/in/sezanele-zondi"
    },
    {
      name: "Rtd Judge President Francis Legodi",
      role: "Legal Advisor",
      image: "https://heosa.africa/wp/wp-content/uploads/2024/06/3-1.png",
      description: "Judge Legodi brings invaluable expertise as a retired judge, offering unparalleled insight and judgment. With a distinguished career on the bench, they provide astute guidance and ensure adherence to legal standards across our operations.",
      linkedinUrl: "https://www.linkedin.com/in/francis-legodi"
    },
    {
      name: "Mr Thobile Shongwe",
      role: "Treasurer",
      image: "https://heosa.africa/wp/wp-content/uploads/2024/06/6.png",
      description: "Thobile Shongwe brings over eleven years of expertise in risk management, auditing, and training. As a pioneering Chief Risk Officer in the public sector, Thobile led strategic risk management initiatives and chaired provincial forums.",
      linkedinUrl: "https://www.linkedin.com/in/thobile-shongwe"
    },
    {
      name: "Mr Valentine Zoza",
      role: "Brand Strategist",
      image: "https://heosa.africa/wp-content/uploads/2024/07/VZ-9-e1719840265990.png",
      description: "Valentine Zoza is an award-winning Afrocentric Content Creator and Brand Strategist. As a Social Entrepreneur, LinkedIn Influencer, Change Maker, Women Empowerment Advocate and Pan-Africanist, he has earned global recognition, including a spot on MIPAD and the UN's Top 100 Most Influential People of African Descent.",
      linkedinUrl: "https://www.linkedin.com/in/valentine-zoza"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-8 text-center">About Us</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-gray-600 mb-6">
              The African Health Excellence Awards is an annual event that recognises and celebrates excellence in the African healthcare sector. It aims to highlight the outstanding achievements and contributions of individuals, organisations, and initiatives that have made a significant impact on healthcare in Africa.
            </p>
            <p className="text-gray-600 mb-6">
              The awards cover various categories such as healthcare leadership, innovation, research, patient care, and community health. By honouring exceptional efforts and innovations, the African Health Excellence Awards aims to inspire and encourage further advancements in healthcare across the continent.
            </p>
            <p className="text-gray-600">
              The African Health Excellence Organisation is a home of healthcare professionals (HCPS) where they are empowered and acknowledged for their good work. In our organisation, we believe that appreciated employees are likely to be more productive, and this is what the health excellence awards aim to achieve.
            </p>
          </div>
        </div>

        {/* Board Members Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#2B2A29] mb-8 text-center">Our Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain bg-gray-50"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#2B2A29]">{member.name}</h3>
                      <p className="text-[#962326]">{member.role}</p>
                    </div>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0077B5] hover:text-[#00669C] transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;