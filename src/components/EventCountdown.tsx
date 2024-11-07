import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface CountdownProps {
  targetDate: string;
  eventName: string;
}

const EventCountdown = ({ targetDate, eventName }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-5 w-5 text-[#962326]" />
        <h3 className="text-xl font-semibold text-[#2B2A29]">{eventName}</h3>
      </div>
      <div className="flex gap-4 justify-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="bg-[#962326] text-white rounded-lg p-3 min-w-[60px]">
              <span className="text-2xl font-bold">{value}</span>
            </div>
            <p className="text-sm mt-1 text-gray-600 capitalize">{unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCountdown;