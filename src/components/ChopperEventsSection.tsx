import React, { useState } from 'react';
import { Calendar, MapPin, Clock, MessageSquare, ExternalLink, X, PlusCircle, Share2, Sparkles, Users } from 'lucide-react';
import eventPosterRun from '../assets/images/event_poster_chopper_run_1793665681454.jpg';
import eventPosterNightRide from '../assets/images/event_poster_night_ride_1793665681352.jpg';

interface ChopperEvent {
  id: string;
  title: string;
  badge: string;
  date: string;
  time: string;
  location: string;
  meetingPoint: string;
  description: string;
  posterImage: string;
  organizer: string;
  dressCode: string;
}

export const ChopperEventsSection: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<ChopperEvent | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const events: ChopperEvent[] = [
    {
      id: 'event-01',
      title: 'Rally Chopper Santiago · Cordillera Run',
      badge: 'Encuentro Nacional',
      date: '14 - 16 de Septiembre, 2026',
      time: '10:00 hrs (Salida en caravana)',
      location: 'Santiago - Cajón del Maipo, Chile',
      meetingPoint: 'Punto de partida: Shell Ruta Las Vizcachas',
      description: 'El encuentro anual más grande de motocicletas chopper y custom en la zona central. Ruta cordillerana, música en vivo, exhibición de motos de chasis rígido, stands de comida y hermandad biker.',
      posterImage: eventPosterRun,
      organizer: 'Chopper Brotherhood Chile',
      dressCode: 'Chaquetas de cuero pesado, chalecos con parches y gorros de ruta'
    },
    {
      id: 'event-02',
      title: 'Rodada Nocturna Santiago Chopper Fest',
      badge: 'Rodada Urbana Nocturna',
      date: 'Sábado 19 de Octubre, 2026',
      time: '21:00 hrs concentración · Salida 22:30 hrs',
      location: 'Parque Bustamante a Costanera Norte, Santiago',
      meetingPoint: 'Parque Bustamante (Acceso Plaza Italia)',
      description: 'Una noche de acero y libertad cruzando las principales autopistas iluminadas de Santiago. Cierre con bandas de rock en vivo, stands y convivencia de clubes chopper.',
      posterImage: eventPosterNightRide,
      organizer: 'Comunidad Chopper Santiago',
      dressCode: 'Indumentaria chopper con elementos reflectantes o de cuero negro'
    }
  ];

  return (
    <section id="eventos" className="py-16 sm:py-24 bg-[#0c0d12] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Cartelera de Ruta Oficial</span>
            </div>
            <h2 className="font-biker-vintage text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Próximos Eventos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
                & Encuentros Chopper
              </span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Afiches oficiales de rodadas, rallies y encuentros chopper en Santiago y todo Chile. ¡Viste tu mejor indumentaria y sal a rodar con nosotros!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-amber-400"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Publicar tu Afiche Chopper</span>
            </button>
          </div>
        </div>

        {/* Event Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Event 1 */}
          {events.map((evt) => (
            <div
              key={evt.id}
              className="flex flex-col rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/40 transition-all duration-300 overflow-hidden shadow-2xl shadow-black/70 group"
            >
              {/* Poster Image Container */}
              <div 
                className="relative aspect-[3/4] bg-zinc-950 overflow-hidden cursor-pointer"
                onClick={() => setSelectedPoster(evt)}
              >
                <img
                  src={evt.posterImage}
                  alt={evt.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const fallbackPath = evt.id === 'event-01' 
                      ? '/assets/images/event_poster_chopper_run_1793665681454.jpg' 
                      : '/assets/images/event_poster_night_ride_1793665681352.jpg';
                    if (e.currentTarget.src !== window.location.origin + fallbackPath) {
                      e.currentTarget.src = fallbackPath;
                    }
                  }}
                />
                
                {/* Event Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                  {evt.badge}
                </div>

                {/* Click to expand overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-lg bg-black/85 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-amber-400" />
                    Ver Afiche Completo
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{evt.date}</span>
                  </div>

                  <h3 className="font-biker-vintage text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    {evt.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-zinc-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 pt-1">
                    {evt.description}
                  </p>
                </div>

                {/* Footer of card */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    Organiza: {evt.organizer}
                  </span>
                  <button
                    onClick={() => setSelectedPoster(evt)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-amber-500 hover:text-black text-zinc-300 text-xs font-semibold transition-colors"
                  >
                    <span>Detalles</span>
                  </button>
                </div>

              </div>
            </div>
          ))}

          {/* Submission Card: Espacio para colocar afiches de próximos eventos */}
          <div className="flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-[#14151e] to-black border-2 border-dashed border-amber-500/30 hover:border-amber-400/60 transition-colors shadow-xl">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <PlusCircle className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block font-semibold">
                  Espacio Comunitario
                </span>
                <h3 className="font-biker-vintage text-2xl font-bold uppercase text-white tracking-tight">
                  ¿Tienes un Evento o Rodada Chopper?
                </h3>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                Este espacio está reservado para la hermandad motociclista de Chile. Publicamos gratuitamente afiches de encuentros chopper, rodadas solidarias y festivales custom en nuestra web y aplicación.
              </p>

              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1 text-xs text-zinc-400">
                <p className="font-semibold text-zinc-200">Requisitos para publicar:</p>
                <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                  <li>Afiche con fecha, hora y punto de encuentro</li>
                  <li>Evento orientado a motocicletas chopper o custom</li>
                  <li>Recepción directa vía WhatsApp o formulario</li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-biker-vintage text-base font-bold uppercase tracking-wider transition-transform hover:scale-105 shadow-lg shadow-amber-500/20"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Enviar mi Afiche Ahora</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Poster Lightbox Modal */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative w-full max-w-2xl rounded-2xl bg-[#121319] border border-white/20 shadow-2xl shadow-black overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-950">
              <span className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                Afiche Oficial · {selectedPoster.badge}
              </span>
              <button
                onClick={() => setSelectedPoster(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster image and details */}
            <div className="overflow-y-auto p-6 space-y-5">
              <div className="relative aspect-[3/4] max-h-[460px] mx-auto rounded-xl overflow-hidden bg-black border border-white/10">
                <img
                  src={selectedPoster.posterImage}
                  alt={selectedPoster.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const fallbackPath = selectedPoster.id === 'event-01' 
                      ? '/assets/images/event_poster_chopper_run_1793665681454.jpg' 
                      : '/assets/images/event_poster_night_ride_1793665681352.jpg';
                    if (e.currentTarget.src !== window.location.origin + fallbackPath) {
                      e.currentTarget.src = fallbackPath;
                    }
                  }}
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-biker-vintage text-2xl sm:text-3xl font-bold uppercase text-white">
                  {selectedPoster.title}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-black/40 p-3.5 rounded-xl border border-white/5">
                  <div>
                    <span className="font-mono text-amber-400 block uppercase text-[10px]">Fecha:</span>
                    <span className="text-white font-semibold">{selectedPoster.date}</span>
                  </div>
                  <div>
                    <span className="font-mono text-amber-400 block uppercase text-[10px]">Horario:</span>
                    <span className="text-white font-semibold">{selectedPoster.time}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-mono text-amber-400 block uppercase text-[10px]">Punto de encuentro:</span>
                    <span className="text-white font-semibold">{selectedPoster.meetingPoint}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-mono text-amber-400 block uppercase text-[10px]">Código de vestuario sugerido:</span>
                    <span className="text-zinc-200">{selectedPoster.dressCode}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {selectedPoster.description}
                </p>
              </div>
            </div>

            {/* Action footer */}
            <div className="p-4 border-t border-white/10 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-zinc-400">
                Lleva tu ropa chopper Chopper Fans a la ruta
              </span>
              <a
                href={`https://wa.me/56982341190?text=Hola%20Chopper%20Fans%20Clothes,%20quiero%20confirmar%20mi%20asistencia%20al%20evento%20${encodeURIComponent(selectedPoster.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider text-center"
              >
                Confirmar Asistencia por WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Submit Poster Modal */}
      {isSubmitModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsSubmitModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg rounded-2xl bg-[#121319] border border-amber-500/30 p-6 space-y-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                  Envío de Afiches Chopper
                </span>
                <h3 className="font-biker-vintage text-2xl font-bold uppercase text-white mt-0.5">
                  Publica tu Encuentro
                </h3>
              </div>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              ¿Perteneces a un club chopper o estás organizando una rodada en cualquier región de Chile? Envíanos los datos y afiche para agregarlo a la cartelera web y app:
            </p>

            <div className="space-y-3">
              <a
                href="https://wa.me/56982341190?text=Hola%20Chopper%20Fans%20Clothes,%20quiero%20publicar%20el%20afiche%20de%20nuestro%20evento%20chopper"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar Afiche por WhatsApp (+56 9 8234 1190)</span>
              </a>

              <a
                href="mailto:eventos@chopperfansclothes.cl?subject=Afiche%20de%20Evento%20Chopper"
                className="w-full p-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-mono uppercase flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                <span>O enviar a eventos@chopperfansclothes.cl</span>
              </a>
            </div>

            <p className="text-[11px] text-zinc-500 text-center font-mono">
              Publicación 100% gratuita para la comunidad de dos ruedas en Chile.
            </p>
          </div>
        </div>
      )}

    </section>
  );
};
