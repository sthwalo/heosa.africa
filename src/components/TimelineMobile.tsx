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

interface TimelineMobileProps {
  data: TimelineItem[];
  title?: string;
}

const TimelineMobile = ({ data, title = "Timeline" }: TimelineMobileProps) => {
  return (
    <div className="py-8 px-4 md:hidden">
      <h3 className="text-2xl font-semibold text-[#2B2A29] mb-8 text-center">{title}</h3>
      <div className="space-y-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-start gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`p-2 rounded-full ${
                item.status === 'completed' ? 'bg-[#962326]' : 
                item.status === 'active' ? 'bg-[#A7864B]' : 'bg-gray-200'
              }`}
            >
              {item.status === 'completed' ? (
                <Check className="h-5 w-5 text-white" />
              ) : (
                <Clock className="h-5 w-5 text-white" />
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <p className="font-medium text-gray-900">{item.phase}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
              {item.cta && (
                <Link
                  to={item.cta.link}
                  className="inline-block mt-2 px-4 py-2 bg-[#962326] text-white rounded-md hover:bg-[#A7864B] transition-colors text-sm"
                >
                  {item.cta.text}
                </Link>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineMobile;
