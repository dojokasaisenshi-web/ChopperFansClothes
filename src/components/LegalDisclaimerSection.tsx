import React from 'react';
import { Scale, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export const LegalDisclaimerSection: React.FC = () => {
  return (
    <section id="legal" className="py-16 bg-[#0b0c10] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#101117] border border-white/10 relative overflow-hidden">
          
          {/* Subtle accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500/20" />

          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            
            {/* Header info */}
            <div className="lg:w-1/3 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-white/10 text-amber-400 text-xs font-mono uppercase tracking-wider">
                <Scale className="w-3.5 h-3.5" />
                <span>Transparencia Jurídica & Comercial</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                Disclaimer Legal Reforzado
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Declaración expresa sobre legitimidad, modelo de reventa independiente y derechos de propiedad industrial.
              </p>
            </div>

            {/* Detailed 4 Points */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-zinc-300">
              
              {/* Point 1: Autenticidad Garantizada */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>1. Autenticidad de Productos</span>
                </div>
                <p className="leading-relaxed text-zinc-400">
                  Todas las piezas comercializadas por Chopper Fans Clothes son 100% auténticas y originales. Cada artículo ha sido examinado físicamente en Santiago verificando la calidad de sus materiales, herrajes, costuras y acabados genuinos.
                </p>
              </div>

              {/* Point 2: Reventa Independiente */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>2. Modelo de Reventa</span>
                </div>
                <p className="leading-relaxed text-zinc-400">
                  Chopper Fans Clothes opera estrictamente bajo la modalidad de reventa comercial independiente y lícita. Adquirimos inventario legalmente a través de canales autorizados y colecciones genuinas para ponerlas a disposición de nuestra comunidad.
                </p>
              </div>

              {/* Point 3: No Afiliación Oficial */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>3. No Afiliación ni Tienda Oficial</span>
                </div>
                <p className="leading-relaxed text-zinc-400">
                  Chopper Fans Clothes no es tienda oficial, concesionario, representante ni agente autorizado de Harley-Davidson Inc., ni de ninguna otra marca registrada. No existe patrocinio, vínculo asociativo ni afiliación corporativa directa con dichos fabricantes.
                </p>
              </div>

              {/* Point 4: Reconocimiento de Titularidad */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>4. Titularidad de Marcas</span>
                </div>
                <p className="leading-relaxed text-zinc-400">
                  Todas las marcas comerciales, logotipos, nombres comerciales e imágenes de marca citadas pertenecen exclusiva e indiscutiblemente a sus respectivos titulares y propietarios registrados. Su mención es puramente informativa y descriptiva de los productos genuinos objeto de reventa.
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Santiago Jurisdiction Note */}
          <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 font-mono gap-2">
            <span>Operación radicada en Santiago de Chile · Ley N° 19.496 de Protección de los Derechos de los Consumidores</span>
            <span className="text-amber-500">Chopper Fans Clothes · Estilo Sobre Ruedas</span>
          </div>

        </div>

      </div>
    </section>
  );
};
