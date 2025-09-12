import React from 'react';

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: string;
  status: string;
}

interface HomeTimelineItem {
  date: string;
  phase: string;
  status: string;
  description?: string;
  cta: {
    text: string;
    link: string;
  };
}

interface TimelineProps {
  data?: TimelineEvent[] | HomeTimelineItem[];
  title?: string;
}

// Default timeline data that matches your Key Dates cards
const defaultTimelineData: TimelineEvent[] = [
  {
    id: 1,
    title: "Open for nominations",
    date: "January 1 - May 31, 2025",
    description: "Nominations open for all award categories",
    icon: "⏰",
    status: "closed"
  },
  {
    id: 2,
    title: "Finalists Announcement",
    date: "September 6, 2025",
    description: "Top finalists in each category will be announced", 
    icon: "⏰",
    status: "closed"
  },
  {
    id: 3,
    title: "Winners Announcement", 
    date: "November 15, 2025",
    description: "Winners will be announced at our awards ceremony",
    icon: "⏰", 
    status: "upcoming"
  }
];

const Timeline: React.FC<TimelineProps> = ({ data = defaultTimelineData, title = "Key Dates" }) => {
  // Check if data is HomeTimelineItem[] or TimelineEvent[]
  const isHomeData = data.length > 0 && 'phase' in data[0];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2A29] mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with important milestones for the African Health Excellence Awards 2025
          </p>
        </div>
        
        {/* Card Layout - keeping your original design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {isHomeData ? (
            // Render HomeTimelineItem data
            (data as HomeTimelineItem[]).map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 ${
                  item.status === 'closed' 
                    ? 'bg-gray-300 text-gray-600' 
                    : item.status === 'completed'
                    ? 'bg-[#A7864B]/20 text-[#A7864B]'
                    : 'bg-gray-200 text-gray-800'
                }`}>
                  {item.status === 'closed' ? '✓' : item.status === 'completed' ? '✅' : '⏰'}
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-semibold mb-3 ${
                  item.status === 'closed' 
                    ? 'text-gray-600' 
                    : item.status === 'completed'
                    ? 'text-[#A7864B]'
                    : 'text-[#2B2A29]'
                }`}>
                  {item.phase}
                </h3>
                <p className={`font-medium mb-4 ${
                  item.status === 'closed' 
                    ? 'text-gray-500' 
                    : item.status === 'completed'
                    ? 'text-[#962326]'
                    : 'text-[#962326]'
                }`}>
                  {item.date}
                </p>
                
                {/* Action Button */}
                {item.status === 'closed' ? (
                  <button 
                    className="bg-gray-400 text-white px-6 py-2 rounded-md cursor-not-allowed"
                    disabled
                  >
                    {item.cta.text}
                  </button>
                ) : (
                  <a 
                    href={item.cta.link}
                    className={`inline-block px-6 py-2 rounded-md transition-colors text-white ${
                      item.status === 'completed'
                        ? 'bg-[#A7864B] hover:bg-[#962326]'
                        : 'bg-[#962326] hover:bg-[#A7864B]'
                    }`}
                  >
                    {item.cta.text}
                  </a>
                )}
              </div>
            ))
          ) : (
            // Render TimelineEvent data
            (data as TimelineEvent[]).map((event: TimelineEvent) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg p-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {event.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-[#2B2A29] mb-3">
                  {event.title}
                </h3>
                <p className="text-[#962326] font-medium mb-4">
                  {event.date}
                </p>
                
                {/* Action Buttons - matching your original design */}
                {event.id === 1 && (
                  <button className="bg-[#962326] text-white px-6 py-2 rounded-md hover:bg-[#A7864B] transition-colors">
                    View Categories & Nominate
                  </button>
                )}
                {event.id === 2 && (
                  <button className="bg-[#962326] text-white px-6 py-2 rounded-md hover:bg-[#A7864B] transition-colors">
                    View Finalists
                  </button>
                )}
                {event.id === 3 && (
                  <button className="bg-[#962326] text-white px-6 py-2 rounded-md hover:bg-[#A7864B] transition-colors">
                    View Winners
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;