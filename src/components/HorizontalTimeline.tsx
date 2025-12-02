import { CheckCircle, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  link?: string;
}

interface HorizontalTimelineProps {
  data: TimelineItem[];
  title?: string;
}

const HorizontalTimeline = ({ data, title }: HorizontalTimelineProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'active':
        return <Clock className="h-5 w-5 text-blue-600 animate-pulse" />;
      case 'upcoming':
        return <Calendar className="h-5 w-5 text-gray-400" />;
      default:
        return <Calendar className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600';
      case 'active':
        return 'bg-blue-600';
      case 'upcoming':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      {title && (
        <h2 className="text-2xl font-bold text-center text-[#2B2A29] mb-8">
          {title}
        </h2>
      )}
      
      <div className="max-w-7xl mx-auto">
        {/* Desktop/Tablet Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200">
              <div 
                className="h-full bg-gradient-to-r from-green-600 via-blue-600 to-gray-300 transition-all duration-500"
                style={{ 
                  width: `${(data.filter(item => item.status === 'completed').length / data.length) * 100}%` 
                }}
              />
            </div>

            {/* Timeline Items */}
            <div className="relative grid gap-4" style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}>
              {data.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  {/* Icon/Dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full ${getStatusColor(item.status)} flex items-center justify-center bg-opacity-20 border-4 ${getStatusColor(item.status)} border-opacity-100`}>
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Content */}
                  <div className="mt-4 text-center max-w-[180px]">
                    <div className="text-xs font-semibold text-gray-500 mb-1">
                      {item.date}
                    </div>
                    {item.link ? (
                      <Link 
                        to={item.link}
                        className="text-sm font-bold text-[#2B2A29] hover:text-[#962326] transition-colors"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <h3 className="text-sm font-bold text-[#2B2A29]">
                        {item.title}
                      </h3>
                    )}
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200">
              <div 
                className="w-full bg-gradient-to-b from-green-600 via-blue-600 to-gray-300 transition-all duration-500"
                style={{ 
                  height: `${(data.filter(item => item.status === 'completed').length / data.length) * 100}%` 
                }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {data.map((item) => (
                <div key={item.id} className="relative flex items-start gap-4">
                  {/* Icon/Dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full ${getStatusColor(item.status)} flex items-center justify-center bg-opacity-20 border-4 ${getStatusColor(item.status)} border-opacity-100 flex-shrink-0`}>
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                    <div className="text-xs font-semibold text-gray-500 mb-1">
                      {item.date}
                    </div>
                    {item.link ? (
                      <Link 
                        to={item.link}
                        className="text-base font-bold text-[#2B2A29] hover:text-[#962326] transition-colors"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <h3 className="text-base font-bold text-[#2B2A29]">
                        {item.title}
                      </h3>
                    )}
                    <p className="text-sm text-gray-600 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
