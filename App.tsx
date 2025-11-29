import React, { useState } from 'react';
import SectionTitle from './components/SectionTitle';
import Countdown from './components/Countdown';
import AiBlessing from './components/AiBlessing';
import Envelope from './components/Envelope';

// Icons
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);

const App: React.FC = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  const handleRsvp = () => {
    // Exact link provided
    window.open(`https://api.whatsapp.com/send?phone=+51942264204&text=Hola!,%20confirma%20mi%20asistencia`, '_blank');
  };

  if (!envelopeOpened) {
    return <Envelope onOpen={() => setEnvelopeOpened(true)} />;
  }

  return (
    <div className="min-h-screen font-sans text-stone-600 bg-cream-50 selection:bg-rose-200 animate-fade-in-up">
      
      {/* Hero Section */}
      <header className="relative py-12 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="text-4xl">🕊️</span>
          </div>
          
          <h1 className="font-serif text-3xl md:text-5xl text-stone-700 mb-2 leading-tight">
            Bautizo y 7° Cumpleaños
          </h1>
          <h2 className="font-script text-6xl md:text-8xl text-rose-400 mb-8 drop-shadow-sm p-4">
            Julieta
          </h2>

          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-rose-100">
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-serif italic">
              "Con mucha alegría los invitamos a compartir con nosotros un día muy especial, en el que celebraremos el Bautizo de nuestra querida Julieta y, además, su séptimo cumpleaños. Será un honor contar con su presencia en esta fecha tan importante para nuestra familia."
            </p>
          </div>
        </div>
      </header>

      {/* Godparents */}
      <section className="py-8 bg-white/50">
        <div className="container mx-auto px-4 text-center">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gold-600 mb-3 font-bold">Padrinos</h3>
            <p className="font-serif text-2xl text-stone-700">Dany y Maricarmen</p>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-12 bg-cream-100">
        <div className="container mx-auto px-4">
          <SectionTitle title="Falta Poco" subtitle="14 de Febrero 2026" />
          <Countdown />
        </div>
      </section>

      {/* Details Card */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
            <div className="h-2 bg-gradient-to-r from-rose-200 via-gold-300 to-rose-200"></div>
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
                
                {/* Text Details */}
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-rose-50 p-3 rounded-full text-rose-500">
                            <CalendarIcon />
                        </div>
                        <div>
                            <h4 className="font-serif text-xl text-stone-800 font-bold">Fecha y Hora</h4>
                            <p className="text-gold-600 font-bold text-lg">Sábado, 14 de Febrero 2026</p>
                            <p className="text-stone-500">Hora: 4:00 PM (Por confirmar)</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-rose-50 p-3 rounded-full text-rose-500">
                            <LocationIcon />
                        </div>
                        <div>
                            <h4 className="font-serif text-xl text-stone-800 font-bold">Ubicación</h4>
                            <p className="text-stone-600">Calle los Cerezos 213, Dpto. 502</p>
                            <p className="text-stone-500 text-sm">Urbanización Recaudadores, Distrito de Ate</p>
                        </div>
                    </div>

                    <a 
                      href="https://maps.app.goo.gl/J7yiwczzT8KwJa3s9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-stone-100 hover:bg-stone-200 text-stone-600 py-3 rounded-xl transition-colors font-bold text-sm uppercase tracking-wider"
                    >
                      Ver en Google Maps
                    </a>
                </div>

                {/* Visual Map Placeholder */}
                <div className="relative h-64 md:h-full min-h-[250px] bg-stone-200 rounded-2xl overflow-hidden group">
                     {/* We use an image that looks like a map or the location vibe */}
                     <img 
                        src="https://picsum.photos/seed/map/600/600?grayscale&blur=2" 
                        alt="Mapa Ubicación" 
                        className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 p-4 rounded-full shadow-lg">
                            <div className="text-rose-500 animate-bounce">
                                <LocationIcon />
                            </div>
                        </div>
                     </div>
                     <a 
                        href="https://maps.app.goo.gl/J7yiwczzT8KwJa3s9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label="Abrir mapa"
                     ></a>
                </div>
            </div>
        </div>
      </section>

      {/* Gemini Integration Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <AiBlessing />
        </div>
      </section>

      {/* Footer / RSVP */}
      <footer className="bg-rose-50 pt-12 pb-32 text-center border-t border-rose-100">
        <p className="font-hand text-5xl text-rose-400 mb-6">Julieta</p>
        <p className="text-stone-400 text-sm uppercase tracking-widest px-8">Gracias por ser parte de mi historia</p>
      </footer>

      {/* Floating Action Button for RSVP */}
      <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center px-4">
        <button 
          onClick={handleRsvp}
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 font-bold text-lg"
        >
          <WhatsAppIcon />
          Confirmar Asistencia
        </button>
      </div>

    </div>
  );
};

export default App;