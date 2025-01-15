//import React from 'react';
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
      image: "/images/Board/1.png",
      description: "Dr. Khumalo is a distinguished medical professional with over 15 years of experience in internal medicine. Currently serving as the Chairperson of the Board at House of Excellence Organisation, He combines exceptional clinical expertise with visionary leadership to advance the mission and values of the organization.",
      linkedinUrl: "https://www.linkedin.com/in/dr-eric-khumalo"
    },
    {
      name: "Ms Sylvia Maseko",
      role: "Chief Executive Officer",
      image: "/images/Board/4.png",
      description: "Sylvia Maseko is a dedicated professional serving as the Secretary for the African Health Excellence Organisation. With a strong background in healthcare administration and organizational management, Sylvia plays a crucial role in facilitating the smooth operations of the organization. Her passion for enhancing healthcare standards across Africa drives her commitment to supporting healthcare professionals and advocating for excellence in the industry. Sylvia’s exceptional communication skills and attention to detail ensure that the organization’s initiatives are effectively implemented, fostering collaboration and innovation within the healthcare community. Through her work, she aims to contribute significantly to the advancement of healthcare excellence across the continent.",
      linkedinUrl: "https://www.linkedin.com/in/sylviamaseko"
    },
    {
      name: "Dr Patrick Maduna",
      role: "Chief of Party",
      image: "/images/Board/2.png",
      description: "Dr. Maduna is a highly respected retired family physician with over 30 years of dedicated service in family medicine. Currently, serves as the Chief of Party at House of Excellence Organisation. Leveraging a wealth of clinical experience and strategic insight, He plays a pivotal role in guiding the organisation towards its goals and enhancing community health outcomes.",
      linkedinUrl: "https://www.linkedin.com/in/patrick-maduna-64234312"
    },
    {
      name: "Rtd Judge President Francis Legodi",
      role: "Legal Advisor",
      image: "/images/Board/3.png",
      description: "Judge Legodi our legal advisor brings invaluable expertise as a retired judge, offering unparalleled insight and judgment. With a distinguished career on the bench, they provide astute guidance and ensure adherence to legal standards across our operations. Their deep understanding of law and commitment to justice enrich our decision-making processes, reinforcing our dedication to integrity and compliance.",
      linkedinUrl: "https://www.linkedin.com/in/francis-legodi-7b4b5b1b"
    },
    {
      name: "Ms Sezanele Zondi",
      role: "Media Liaison",
      image: "/images/Board/5.png",
      description: "Ms Zondi is the Media Liaison at House of Excellence Organisation. With years of experience in communications and public relations, She expertly manages the organization's media presence, ensuring clear and effective communication of its mission and activities. Her role involves liaising with media outlets, crafting press releases, and coordinating public outreach efforts to enhance the organization's visibility and engagement with the community.",
      linkedinUrl: "https://www.linkedin.com/in/sezanele-zondi-mba-0728595a"
    },
    {
      name: "Mr Thobile Shongwe",
      role: "Treasurer",
      image: "/images/Board/6.png",
      description: "Thobile Shongwe brings over eleven years of expertise in risk management, auditing, and training. As a pioneering Chief Risk Officer in the public sector, Thobile led strategic risk management initiatives and chaired provincial forums. With a background in senior management at the Department of Agriculture, Thobile drove programmatic success and implemented effective risk mitigation strategies, including fraud prevention. Passionate about innovation and strategic planning, Thobile excels in optimizing systems to achieve organizational goals.",
      linkedinUrl: "https://www.linkedin.com/in/thobile-shongwe-82681b64"
    },
    {
      name: "Mr Valentine Zoza",
      role: "Brand Strategist",
      image: "/images/Board/Zoza.png",
      description: "Valentine Zoza isn’t just a name, it’s a force for positive change across Africa and its diaspora. This award-winning Afrocentric Content Creator and Brand Strategist wears many hats – Social Entrepreneur, Linkedin Influencer, Change Maker, Women Empowerment Advocate and Pan-Africanist at heart. He is the Founder of Women Power Africa, Remarkable Africans and Zoza Communications. His unwavering dedication to empowering Africans and showcasing the continent’s potential has earned him global recognition, including a spot on MIPAD and the UN’s “Top 100 (Under 40) Most Influential People of African Descent.”",
      linkedinUrl: "https://www.linkedin.com/in/valentinezoza"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/Cover.jpeg"
            alt="About Us background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering healthcare excellence and innovation across Africa
            </p>
          </div>
        </div>
      </div>

      <section className="our-story px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          The African Health Excellence Awards is an annual event that recognises and celebrates excellence in the African healthcare sector. It aims to highlight the outstanding achievements and contributions of individuals, organisations, and initiatives that have made a significant impact on healthcare in Africa. The awards cover various categories such as healthcare leadership, innovation, research, patient care, and community health. By honouring exceptional efforts and innovations, the African Health Excellence Awards aims to inspire and encourage further advancements in healthcare across the continent. The African Health Excellence Organisation is a home of healthcare professionals (HCPS) where they are empowered and acknowledged for their good work in our organisation we believe that appreciated employees are likely to be more productive and this is what the health excellence awards aim to achieve.
        </p>
      </section>
      <section className="vision-mission px-8 py-12 bg-white">
  <h2 className="text-3xl font-bold text-center mb-8">Vision & Mission</h2>
  
  <div className="max-w-4xl mx-auto space-y-8">
    {/* Vision Section */}
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-[#2B2A29] mb-4">Our Vision</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        AHEO envisions a future where every Healthcare Professional in Africa provides high-quality healthcare services to improve health outcomes.
      </p>
    </div>

    {/* Mission Section */}
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-[#2B2A29] mb-4">Our Mission</h3>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        AHEO is dedicated to promoting excellence in healthcare across Africa through:
      </p>
      
      {/* Mission Pillars */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Capacity Building', 'Advocacy', 'Recognition', 'Collaboration'].map((pillar) => (
          <div key={pillar} className="p-4 bg-gray-50 rounded-lg">
            <p className="font-medium text-[#962326]">{pillar}</p>
          </div>
        ))}
      </div>

      {/* Mission Goal */}
      <p className="text-lg text-gray-700 leading-relaxed mt-6">
        AHEO aims to enhance healthcare systems, empower healthcare professionals, and improve health outcomes for all Africans.
      </p>
    </div>
  </div>
</section>
      <section className="board-members px-8 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Board Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2B2A29] mb-2">{member.name}</h3>
                <p className="text-[#962326] mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:text-[#00669C] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;