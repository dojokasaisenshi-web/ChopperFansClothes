import React from 'react';
import { ShieldCheck, Scale, Truck, Check } from 'lucide-react';

export const TrustBand: React.FC = () => {
  return (
    <section id="confianza" className="relative bg-zinc-950 border-b border-white/10 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section label */}
        <div className="text-center mb-6">
          <p className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
            Estándar de Operación & Compromiso con el Motociclista
          </p>
        </div>

        {/* 3 Trust Seals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Seal 1: 100% Originales */}
          <div className="relative group p-6 rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/40 transition-all shadow-lg shadow-black/40">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                    100% Originales
                  </h3>
                  <span className="inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    Certificado
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Cero copias ni imitaciones. Cada chaqueta, chaleco, polera y prenda es examinada físicamente en Santiago para garantizar autenticidad de materiales, cueros pesados y confección.
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Inspección textil y de cueros</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seal 2: Reventa Transparente (No afiliada a las marcas) */}
          <div className="relative group p-6 rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/40 transition-all shadow-lg shadow-black/40">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                <Scale className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                    Reventa Transparente
                  </h3>
                  <span className="inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    Independiente
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Operamos como tienda independiente de indumentaria chopper en Chile sin afiliación oficial a las marcas de fábrica. Precios transparentes y exclusivos para socios.
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Sin intermediarios ocultos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seal 3: Envíos a todo Chile */}
          <div className="relative group p-6 rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/40 transition-all shadow-lg shadow-black/40">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                <Truck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                    Envíos a todo Chile
                  </h3>
                  <span className="inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    Arica a Punta Arenas
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Despachos rápidos y asegurados con número de seguimiento vía Starken, Chilexpress y CorreosChile. Entregas coordinadas directas en Santiago.
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Embalaje rígido antiroces</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
