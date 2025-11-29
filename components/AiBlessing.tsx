import React, { useState } from 'react';
import { generateBlessing } from '../services/geminiService';
import { BlessingState } from '../types';

const AiBlessing: React.FC = () => {
  const [state, setState] = useState<BlessingState>({
    text: "",
    isLoading: false,
    error: null,
    hasGenerated: false,
  });

  const handleGenerate = async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const text = await generateBlessing("Julieta");
      setState({
        text,
        isLoading: false,
        error: null,
        hasGenerated: true,
      });
    } catch (err) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: "No pudimos generar el mensaje. Intenta de nuevo.",
      }));
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto my-12 border border-dusty-100 text-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50"></div>
      
      <h3 className="text-2xl font-script text-dusty-500 mb-4">Un Mensaje del Cielo</h3>
      <p className="text-stone-600 mb-6 font-sans">
        Descubre una bendición especial generada por IA dedicada a Julieta en este día tan sagrado.
      </p>

      <div className="min-h-[120px] flex items-center justify-center mb-6">
        {state.isLoading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dusty-500"></div>
            <span className="text-sm text-stone-400 italic">Inspirándose...</span>
          </div>
        ) : state.text ? (
          <blockquote className="animate-fade-in-up">
            <p className="text-xl md:text-2xl font-serif italic text-stone-700 leading-relaxed">
              "{state.text}"
            </p>
          </blockquote>
        ) : (
          <div className="text-stone-400 text-sm border border-dashed border-stone-300 rounded-lg p-6 w-full">
            Pulsa el botón para revelar una bendición única.
          </div>
        )}
      </div>

      {state.error && <p className="text-red-400 text-sm mb-4">{state.error}</p>}

      <button
        onClick={handleGenerate}
        disabled={state.isLoading}
        className="bg-dusty-300 hover:bg-dusty-500 text-white font-sans uppercase tracking-widest text-xs py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.hasGenerated ? 'Generar Otra Bendición' : 'Ver Bendición'}
      </button>
    </div>
  );
};

export default AiBlessing;