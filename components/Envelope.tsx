import React, { useState } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    // Wait for animation to finish before unmounting/hiding in parent
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-rose-50 overflow-hidden transition-opacity duration-1000 ${isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
      
      {/* Floating Polaroids */}
      <div className={`absolute top-[10%] left-[10%] rotate-[-12deg] w-32 md:w-48 bg-white p-2 pb-8 shadow-xl transition-transform duration-1000 ${isOpening ? '-translate-y-full opacity-0' : 'animate-float'}`}>
        <img src="https://picsum.photos/300/300?random=10" alt="Julieta 1" className="w-full h-auto filter grayscale-[30%]" />
      </div>
      <div className={`absolute bottom-[15%] right-[10%] rotate-[8deg] w-36 md:w-52 bg-white p-2 pb-8 shadow-xl transition-transform duration-1000 delay-100 ${isOpening ? 'translate-y-full opacity-0' : 'animate-float-delayed'}`}>
        <img src="https://picsum.photos/300/300?random=11" alt="Julieta 2" className="w-full h-auto filter grayscale-[30%]" />
      </div>
      <div className={`hidden md:block absolute top-[20%] right-[20%] rotate-[5deg] w-28 bg-white p-2 pb-6 shadow-xl transition-transform duration-1000 delay-200 ${isOpening ? '-translate-y-full opacity-0' : 'animate-wiggle'}`}>
        <img src="https://picsum.photos/300/300?random=12" alt="Julieta 3" className="w-full h-auto filter grayscale-[30%]" />
      </div>

      <div className="relative cursor-pointer perspective-1000 group" onClick={handleOpen}>
        <div className={`relative w-[300px] h-[200px] bg-rose-200 shadow-2xl rounded-b-xl flex items-end justify-center z-10 transition-transform duration-500 ${isOpening ? 'translate-y-[200px]' : 'hover:scale-105'}`}>
            <div className="mb-8 text-center">
                <p className="font-script text-3xl text-rose-500 drop-shadow-sm">Para Ti</p>
                <div className="w-8 h-8 bg-gold-400 rounded-full mx-auto mt-2 shadow-inner border border-gold-300 flex items-center justify-center">
                    <span className="text-white text-xs">♥</span>
                </div>
            </div>
            {/* Texture/Shine on envelope */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-300/20 to-transparent pointer-events-none rounded-b-xl"></div>
        </div>

        {/* Flap */}
        <div className={`absolute top-0 left-0 w-full h-0 border-l-[150px] border-r-[150px] border-t-[100px] border-l-transparent border-r-transparent border-t-rose-300 rounded-t-xl origin-top transition-all duration-700 ease-in-out z-20 ${isOpening ? 'rotate-x-180 z-0' : ''}`}></div>
        
        {/* Card Inside (Peeking) */}
        <div className={`absolute top-2 left-4 right-4 h-[180px] bg-white rounded-lg shadow-sm border border-gold-200 transition-all duration-700 z-0 ${isOpening ? '-translate-y-[150px] scale-110' : ''}`}>
            <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                 <p className="font-serif text-rose-400 text-sm uppercase tracking-widest">Julieta</p>
                 <p className="font-hand text-2xl text-stone-400 mt-2">Bautizo & Cumpleaños</p>
            </div>
        </div>
      </div>
      
      <p className={`mt-12 text-stone-500 font-sans tracking-widest uppercase text-xs animate-pulse transition-opacity ${isOpening ? 'opacity-0' : 'opacity-100'}`}>Toca el sobre para abrir</p>
    </div>
  );
};

export default Envelope;