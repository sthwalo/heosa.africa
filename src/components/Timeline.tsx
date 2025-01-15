import { Check, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface TimelineItem {
  date: string;
  phase: string;
  status: string;
  cta?: {
    text: string;
    link: string;
  };
}

interface TimelineProps {
  data: TimelineItem[];
  title?: string;
}

const Timeline = ({ data, title = "Timeline" }: TimelineProps) => {
  return (
    <div className="py-12 px-4 overflow-hidden">
      <h3 className="text-2xl font-semibold text-[#2B2A29] mb-12 text-center">{title}</h3>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2" />
        
        <div className="relative flex justify-between items-center gap-4">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`p-3 rounded-full border-4 border-white ${
                      item.status === 'completed' ? 'bg-[#962326]' : 
                      item.status === 'active' ? 'bg-[#A7864B]' : 'bg-gray-200'
                    }`}
                  >
                    {item.status === 'completed' ? (
                      <Check className="h-6 w-6 text-white" />
                    ) : (
                      <Clock className="h-6 w-6 text-white" />
                    )}
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                  className="mt-4 text-center"
                >
                  <h4 className="font-semibold text-lg text-[#2B2A29] mb-2">
                    {item.phase}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    {item.date}
                  </p>
                  {item.cta && (
                    <Link
                      to={item.cta.link}
                      className="inline-block mt-4 px-4 py-2 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors text-sm"
                    >
                      {item.cta.text}
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;