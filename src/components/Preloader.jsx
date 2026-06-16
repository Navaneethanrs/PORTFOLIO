import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('counting'); // 'counting' | 'reveal' | 'done'

  useEffect(() => {
    // Count from 0 to 100
    const totalDuration = 2500; // ms
    const interval = 20; // ms per tick
    const steps = totalDuration / interval;
    const increment = 100 / steps;
    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(counter);
        // Start reveal animation after count hits 100
        setTimeout(() => setPhase('reveal'), 300);
        // Notify parent that preloader is done
        setTimeout(() => {
          setPhase('done');
          onComplete?.();
        }, 1300);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(counter);
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F5EBDD] transition-all duration-700 ease-in-out ${
        phase === 'reveal' ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Logo / Name */}
      <div className="mb-16 flex flex-col items-center gap-2">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-none">
          Navaneethan
        </h1>
        <p className="text-xs font-bold tracking-[0.35em] text-black/40 uppercase">
          Portfolio
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-48 md:w-64 h-[2px] bg-black/10 rounded-full overflow-hidden relative">
        <div
          className="h-full bg-black rounded-full transition-all duration-75 ease-linear"
          style={{ width: `${count}%` }}
        />
      </div>

      {/* Counter */}
      <div className="mt-6 text-black/40 text-sm font-bold tracking-widest tabular-nums">
        {String(count).padStart(3, '0')}
      </div>

    </div>
  );
};

export default Preloader;
