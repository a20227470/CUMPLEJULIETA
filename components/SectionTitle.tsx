import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8 animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-serif text-stone-700 mb-2">{title}</h2>
      {subtitle && (
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1px] w-8 bg-gold-400"></span>
          <p className="text-stone-500 font-sans tracking-widest uppercase text-xs">{subtitle}</p>
          <span className="h-[1px] w-8 bg-gold-400"></span>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;