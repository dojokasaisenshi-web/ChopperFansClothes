import React, { useState } from 'react';
import { CHOPPER_GARMENTS, ChopperGarment } from '../data/clothing';
import { Shirt, Lock, Smartphone, ShieldCheck, Check, Sparkles, User, Users, ArrowRight } from 'lucide-react';

interface ChopperClothingSectionProps {
  onOpenAppModal: (source?: string, garmentName?: string) => void;
}

export const ChopperClothingSection: React.FC<ChopperClothingSectionProps> = ({ onOpenAppModal }) => {
  const [selectedGender, setSelectedGender] = useState<'all' | 'men' | 'women'>('all');

  const filteredGarments = selectedGender === 'all'
    ? CHOPPER_GARMENTS
    : CHOPPER_GARMENTS.filter(g => g.gender === selectedGender || g.gender === 'unisex');

  return (
    <section id="ropa" className="py-16 sm:py-24 bg-[#0b0c10] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Shirt className="w-3.5 h-3.5 text-amber-400" />
            <span>Colección Chopper Exclusiva · Hombres & Mujeres</span>
          </div>

          <h2 className="font-biker text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Ropa estilo chopper <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              para motoristas
            </span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base mt-3 leading-relaxed">
            Prendas confeccionadas con cueros pesados y algodones de alto gramaje para resistir la carretera. <strong className="text-white font-semibold">Diseños específicos para hombres y mujeres</strong> con cortes ergonómicos para la postura clásica chopper.
          </p>

          {/* Clarity Pill */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-zinc-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Especialistas en vestuario chopper · Sin intermediarios ni servicios de taller</span>
          </div>
        </div>

        {/* Gender Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedGender('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
              selectedGender === 'all'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Toda la Colección ({CHOPPER_GARMENTS.length})</span>
          </button>

          <button
            onClick={() => setSelectedGender('men')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
              selectedGender === 'men'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Línea Hombres</span>
          </button>

          <button
            onClick={() => setSelectedGender('women')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
              selectedGender === 'women'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Línea Mujeres</span>
          </button>
        </div>

        {/* Garments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGarments.map((garment) => (
            <div
              key={garment.id}
              className="flex flex-col rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/40 transition-all duration-300 overflow-hidden shadow-xl shadow-black/60 group"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                <img
                  src={garment.image}
                  alt={garment.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gender Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/85 backdrop-blur-sm border border-white/10 text-zinc-200 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{garment.genderLabel} · {garment.categoryLabel}</span>
                </div>

                {/* App Only status */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-sm border border-amber-500/40 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>Solo en App</span>
                </div>

                {/* Tag pill */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-zinc-300">
                  {garment.tag}
                </div>
              </div>

              {/* Garment Details */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-biker text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    {garment.name}
                  </h3>
                  <p className="text-xs font-mono text-amber-400/90 uppercase tracking-wide">
                    {garment.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                    {garment.description}
                  </p>
                </div>

                {/* Technical specs */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block tracking-wider">
                    Confección & Ergonomía en Ruta:
                  </span>
                  {garment.specs.slice(0, 3).map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Sizes and Fit */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Tallas: {garment.sizes.join(', ')}</span>
                  <span className="text-amber-400/80 text-[11px] font-semibold">{garment.genderLabel}</span>
                </div>

                {/* Action Row */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                      Precio de Socio
                    </span>
                    <span className="text-xs font-bold text-amber-400 font-mono">
                      🔒 Desbloquear en App
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenAppModal('clothing_card', `${garment.name} (${garment.genderLabel})`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-semibold text-xs uppercase tracking-wider transition-all"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Ver en App</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-[#15161e] to-zinc-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-biker text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                ¿Buscas tu talla exacta para salir a la carretera?
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                Nuestro inventario para hombres y mujeres rota constantemente en Santiago. Consulta medidas exactas y disponibilidad directo en la aplicación.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenAppModal('clothing_footer_cta')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider shrink-0 transition-transform hover:scale-105"
          >
            <Smartphone className="w-4 h-4" />
            <span>Acceder a la App para Socios</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
