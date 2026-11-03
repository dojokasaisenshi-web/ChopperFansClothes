import React from 'react';
import { Compass, ShieldCheck, Wind, Flame, CheckCircle2, Smartphone } from 'lucide-react';

interface ChopperErgonomicsSectionProps {
  onOpenAppModal: (source?: string) => void;
}

export const ChopperErgonomicsSection: React.FC<ChopperErgonomicsSectionProps> = ({ onOpenAppModal }) => {
  return (
    <section id="ergonomia" className="py-16 sm:py-24 bg-[#0d0e14] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Confección Especializada de Ruta</span>
          </div>

          <h2 className="font-biker text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Diseñada para la postura <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              auténtica chopper
            </span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base mt-3 leading-relaxed">
            Manejar una chopper exige una confección radicalmente diferente a la ropa urbana común. Conoce los 4 principios de corte y resistencia que aplicamos en cada prenda para hombres y mujeres.
          </p>
        </div>

        {/* 4 Ergonomic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1: Ape Hangers & Fuelles */}
          <div className="p-6 rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="font-biker text-xl font-bold uppercase text-white">
                Brazos Elevados (Ape Hangers)
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Nuestras chaquetas integran fuelles dorsales y mangas con longitud extra para que no se recojan ni tiren de la espalda al sujetar manillares altos.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Libertad total de movimiento</span>
            </div>
          </div>

          {/* Pillar 2: Espalda Extendida */}
          <div className="p-6 rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-biker text-xl font-bold uppercase text-white">
                Espalda Extendida (Rider Cut)
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Con estriberas adelantadas y asientos bajos, el corte trasero cubre los riñones evitando que el viento helado penetre durante viajes de larga distancia.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Protección lumbar contra el frío</span>
            </div>
          </div>

          {/* Pillar 3: Calce Anatómico Hombre / Mujer */}
          <div className="p-6 rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-biker text-xl font-bold uppercase text-white">
                Corte Dama & Caballero
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Patronaje independiente para mujeres (entalle anatómico, ajuste en cintura y hombro elástico) y para hombres (caída recta pesada y hombros amplios).
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Ajuste perfecto sin bultos</span>
            </div>
          </div>

          {/* Pillar 4: Blindaje Contra Viento a 120 km/h */}
          <div className="p-6 rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-biker text-xl font-bold uppercase text-white">
                Cuero Vacuno 1.2 a 1.4 mm
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Pieles naturales con densidad probada contra abrasión y solapamiento frontal con cremalleras metálicas YKK que impiden el paso de corrientes de aire.
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Barrera térmica de carretera</span>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenAppModal('ergonomia_section')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/30 font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            <Smartphone className="w-4 h-4 text-amber-400" />
            <span>Consultar Disponibilidad de Tallas en App</span>
          </button>
        </div>

      </div>
    </section>
  );
};
