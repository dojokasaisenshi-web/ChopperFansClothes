import React from 'react';
import { Smartphone, Download, QrCode, Camera } from 'lucide-react';

interface AppCatalogDownloadSectionProps {
  onOpenAppModal: (source?: string) => void;
}

export const AppCatalogDownloadSection: React.FC<AppCatalogDownloadSectionProps> = ({ onOpenAppModal }) => {
  return (
    <section id="descarga-app" className="py-12 sm:py-16 bg-gradient-to-b from-[#0b0c10] via-[#12131a] to-[#0c0d12] border-b border-white/5 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-zinc-950/90 border border-amber-500/30 p-6 sm:p-10 shadow-2xl shadow-black">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: QR Code para Descargar la App (Maqueta interactiva) */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div 
                onClick={() => onOpenAppModal('qr_card_download')}
                className="relative w-full max-w-[280px] rounded-2xl bg-white border-2 border-amber-500 shadow-2xl shadow-amber-500/20 p-5 group cursor-pointer transition-all hover:scale-105 hover:border-amber-400"
                title="Haz clic o escanea para abrir la app"
              >
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-200">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-amber-600" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-900">
                      Código QR
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-[10px] font-mono font-bold text-amber-900 uppercase">
                    Maqueta App
                  </span>
                </div>

                {/* Scannable Vector QR Code with Centered Chopper Badge */}
                <div className="relative aspect-square w-full rounded-xl bg-white flex items-center justify-center p-1.5 border border-zinc-100 shadow-inner">
                  <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="currentColor">
                    <rect x="0" y="0" width="100" height="100" fill="white" />
                    
                    {/* Top-Left Position Detection Pattern */}
                    <rect x="4" y="4" width="28" height="28" fill="black" />
                    <rect x="8" y="8" width="20" height="20" fill="white" />
                    <rect x="12" y="12" width="12" height="12" fill="black" />

                    {/* Top-Right Position Detection Pattern */}
                    <rect x="68" y="4" width="28" height="28" fill="black" />
                    <rect x="72" y="8" width="20" height="20" fill="white" />
                    <rect x="76" y="12" width="12" height="12" fill="black" />

                    {/* Bottom-Left Position Detection Pattern */}
                    <rect x="4" y="68" width="28" height="28" fill="black" />
                    <rect x="8" y="72" width="20" height="20" fill="white" />
                    <rect x="12" y="76" width="12" height="12" fill="black" />

                    {/* Alignment and Timing Tracks */}
                    <rect x="36" y="8" width="4" height="4" fill="black" />
                    <rect x="44" y="8" width="4" height="4" fill="black" />
                    <rect x="52" y="8" width="4" height="4" fill="black" />
                    <rect x="60" y="8" width="4" height="4" fill="black" />
                    <rect x="8" y="36" width="4" height="4" fill="black" />
                    <rect x="8" y="44" width="4" height="4" fill="black" />
                    <rect x="8" y="52" width="4" height="4" fill="black" />
                    <rect x="8" y="60" width="4" height="4" fill="black" />

                    {/* High-density QR Data Matrix Pattern */}
                    <rect x="36" y="16" width="8" height="4" fill="black" />
                    <rect x="48" y="16" width="4" height="4" fill="black" />
                    <rect x="56" y="16" width="8" height="4" fill="black" />
                    <rect x="36" y="24" width="4" height="8" fill="black" />
                    <rect x="44" y="24" width="8" height="4" fill="black" />
                    <rect x="56" y="24" width="4" height="8" fill="black" />

                    <rect x="16" y="36" width="8" height="4" fill="black" />
                    <rect x="28" y="36" width="4" height="8" fill="black" />
                    <rect x="68" y="36" width="8" height="4" fill="black" />
                    <rect x="80" y="36" width="8" height="4" fill="black" />
                    <rect x="92" y="36" width="4" height="8" fill="black" />

                    <rect x="16" y="44" width="4" height="8" fill="black" />
                    <rect x="24" y="48" width="8" height="4" fill="black" />
                    <rect x="68" y="44" width="4" height="8" fill="black" />
                    <rect x="76" y="44" width="12" height="4" fill="black" />
                    <rect x="84" y="52" width="12" height="4" fill="black" />

                    <rect x="16" y="56" width="8" height="4" fill="black" />
                    <rect x="28" y="56" width="4" height="8" fill="black" />
                    <rect x="68" y="56" width="8" height="4" fill="black" />
                    <rect x="80" y="60" width="4" height="8" fill="black" />
                    <rect x="88" y="56" width="8" height="4" fill="black" />

                    <rect x="36" y="68" width="4" height="8" fill="black" />
                    <rect x="44" y="68" width="8" height="4" fill="black" />
                    <rect x="56" y="68" width="8" height="4" fill="black" />
                    <rect x="68" y="68" width="4" height="8" fill="black" />
                    <rect x="76" y="68" width="12" height="4" fill="black" />
                    <rect x="92" y="68" width="4" height="8" fill="black" />

                    <rect x="36" y="80" width="8" height="4" fill="black" />
                    <rect x="48" y="84" width="4" height="8" fill="black" />
                    <rect x="56" y="80" width="8" height="4" fill="black" />
                    <rect x="68" y="80" width="12" height="4" fill="black" />
                    <rect x="84" y="80" width="4" height="8" fill="black" />
                    <rect x="92" y="80" width="4" height="8" fill="black" />

                    <rect x="36" y="92" width="12" height="4" fill="black" />
                    <rect x="52" y="88" width="8" height="8" fill="black" />
                    <rect x="64" y="92" width="8" height="4" fill="black" />
                    <rect x="76" y="88" width="8" height="8" fill="black" />
                    <rect x="88" y="92" width="8" height="4" fill="black" />
                  </svg>

                  {/* Center Chopper Logo Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-amber-500 p-0.5 shadow-md flex items-center justify-center">
                    <img
                      src="/assets/aistudio/image_b7226b6d.png"
                      alt="Chopper Fans Clothes"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Instruction Footer */}
                <div className="mt-3 pt-2 text-center border-t border-zinc-100">
                  <p className="text-[11px] font-semibold text-zinc-800 flex items-center justify-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Apunta con tu celular</span>
                  </p>
                  <span className="text-[10px] font-mono text-zinc-500 block mt-0.5">
                    iOS · Android · Santiago
                  </span>
                </div>
              </div>
            </div>

            {/* Right: App Info & Download Actions */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold block">
                  Aplicación Móvil Oficial
                </span>
                <h2 className="font-biker-vintage text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-wide">
                  Descarga Nuestra App
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base max-w-xl leading-relaxed">
                  Accede al catálogo completo de vestuario chopper para hombres y mujeres directo en tu teléfono. Escanea el código QR con tu smartphone o haz clic en Descargar.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenAppModal('app_download_section_primary')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-biker-vintage text-base font-bold uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all hover:scale-105 cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar</span>
                </button>

                <button
                  onClick={() => onOpenAppModal('app_store_ios')}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.02.63-2.67 1.39-.58.67-1.09 1.74-.96 2.78 1.04.08 2.09-.55 2.71-1.3" />
                  </svg>
                  <span>App Store</span>
                </button>

                <button
                  onClick={() => onOpenAppModal('google_play_android')}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186a1.597 1.597 0 0 1-.61-.958V2.772c0-.368.225-.718.609-.958zm11.242 11.244l2.585 2.585-12.274 7.086 9.689-9.671zm0-2.116L5.162 1.27l12.274 7.087-2.585 2.585zm1.485 1.058l3.969 2.292c.983.568.983 1.488 0 2.056l-3.969 2.292-2.126-2.126 2.126-2.514z" />
                  </svg>
                  <span>Google Play</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
