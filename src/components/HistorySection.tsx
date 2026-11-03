import React from 'react';
import { ShieldCheck, Truck, Users, Compass, Wrench, Flame } from 'lucide-react';

export const HistorySection: React.FC = () => {
  return (
    <section id="historia" className="py-16 sm:py-24 bg-zinc-950 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Manifesto & Santiago Origin */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Nuestra Raíz en Santiago de Chile</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Productos reales. <br />
              <span className="text-amber-400">Gente real.</span>
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Chopper Fans Clothes</strong> nació en las calles y rutas de Santiago de Chile como una respuesta honesta al mercado saturado de copias plásticas y réplicas de baja calidad.
              </p>
              <p>
                Somos una tienda independiente de <strong className="text-white font-semibold">ropa estilo chopper para motoristas hombres y mujeres</strong>. <strong className="text-amber-400 font-semibold">No somos taller mecánico ni vendemos joyería:</strong> nos dedicamos exclusivamente a seleccionar <strong className="text-white font-semibold">pieza por pieza</strong> las mejores chaquetas de cuero vacuno legítimo, chalecos con corte club, poleras heavyweight de 240g y gorros trucker con el gramaje que realmente acompaña en ruta.
              </p>
              <p>
                Cada prenda que entra a nuestro stock en Santiago es inspeccionada meticulosamente antes de ser enviada. Si una pieza no cumple con nuestro estándar de rudeza y ergonomía para rodar por la ruta 68 o hacia el sur de Chile, simplemente no se ofrece.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121319] border border-white/5">
                <Wrench className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Curaduría de Indumentaria</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Revisión de costuras, cremalleras y gramajes de cuero y algodón en Santiago.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121319] border border-white/5">
                <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Cultura Chopper Hombre & Mujer</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Prendas con cortes anatómicos para motoristas damas y caballeros.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Key Stats Cards (Anti-Slop Clean Editorial Presentation) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Stat 1: 100% Originales */}
            <div className="p-6 rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Estándar de Calidad
                </span>
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                100%
              </div>
              <p className="text-amber-400 font-semibold text-sm mt-1">
                Originales comprobados
              </p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Selección de piezas genuinas de reventa legal sin réplicas ni imitaciones. Transparencia total sobre materiales y confección.
              </p>
            </div>

            {/* Stat 2: Envíos a todo Chile */}
            <div className="p-6 rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Cobertura Logística
                </span>
                <Truck className="w-5 h-5 text-amber-400" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                Todo Chile
              </div>
              <p className="text-amber-400 font-semibold text-sm mt-1">
                De Arica a Punta Arenas
              </p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Despachos trazables con número de orden vía Starken y Chilexpress, además de entregas seguras coordinadas en la Región Metropolitana.
              </p>
            </div>

            {/* Stat 3: Solo para socios */}
            <div className="p-6 rounded-2xl bg-[#121319] border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Comunidad Privada
                </span>
                <Users className="w-5 h-5 text-amber-400" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                Solo Socios
              </div>
              <p className="text-amber-400 font-semibold text-sm mt-1">
                Acceso exclusivo mediante la app
              </p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Para proteger el stock y brindar precios preferenciales a motociclistas reales, los drops y compras se gestionan exclusivamente en nuestra aplicación.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
