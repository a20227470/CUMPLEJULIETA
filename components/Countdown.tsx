import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  // Date: Feb 14, 2026
  const targetDate = new Date('2026-02-14T10:00:00'); 

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      días: 0,
      horas: 0,
      min: 0,
      seg: 0
    };

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        seg: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center gap-3 md:gap-8 my-8 text-stone-600">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center bg-white p-3 md:p-4 rounded-xl shadow-sm border border-rose-100 min-w-[70px] md:min-w-[90px]">
          <span className="text-xl md:text-3xl font-serif font-bold text-rose-400">
            {(value as number) < 10 ? `0${value}` : value}
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-wider text-stone-400 mt-1">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;