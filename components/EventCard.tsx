import React from 'react';
import { EventLocation } from '../types';

interface EventCardProps {
  location: EventLocation;
  icon: React.ReactNode;
}

const EventCard: React.FC<EventCardProps> = ({ location, icon }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-dusty-200 hover:border-dusty-500 transition-colors duration-300 flex flex-col items-center text-center h-full">
      <div className="text-dusty-500 mb-4 bg-dusty-50 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">{location.type === 'CEREMONY' ? 'Ceremonia' : 'Recepción'}</h3>
      <p className="text-gold-500 font-bold mb-4 font-sans">{location.time}</p>
      <h4 className="text-lg font-semibold text-stone-700 mb-2">{location.name}</h4>
      <p className="text-stone-500 mb-6 flex-grow">{location.address}</p>
      
      <a 
        href={location.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm border border-stone-300 px-6 py-2 rounded-full text-stone-600 hover:bg-stone-50 transition-colors"
      >
        Ver Mapa
      </a>
    </div>
  );
};

export default EventCard;