import React from 'react';
import { ArrowDown, MapPin, Download } from 'lucide-react';

interface HeroProps {
  onOpenAppModal: (source?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppModal }) => {
  return (
    <section id="portada" className="relative overflow-hidden pt-4 sm:pt-6 pb-10 sm:pb-14 bg-[#0b0c10] border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-b from-amber-500/15 via-amber-500/5 to-transparent pointer-events-none blur-3xl opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5">
            
            {/* Main Headline: Set strictly to Vintage Biker (Rye) with Chopper Flame Gradient */}
            <h1 className="font-biker-vintage text-3xl sm:text-5xl lg:text-6xl uppercase text-white leading-[1.08] tracking-wide text-balance drop-shadow-md">
              Ropa auténtica <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
                para tu ruta
              </span>
            </h1>

            {/* Clean Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              Especialistas en indumentaria y vestuario estilo chopper para motoristas hombres y mujeres.
            </p>

            {/* Action Buttons: Descargar + Próximos Eventos */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => onOpenAppModal('hero_primary')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-orange-400 active:bg-amber-600 text-black font-biker-vintage text-lg font-bold tracking-wider uppercase shadow-xl shadow-amber-500/25 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-5 h-5 text-black" />
                <span>Descargar</span>
              </button>

              <a
                href="#eventos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-white/10 transition-colors"
              >
                <span>Próximos Eventos</span>
                <ArrowDown className="w-4 h-4 text-amber-400 ml-1" />
              </a>
            </div>

          </div>

          {/* Right Visual: Prominent Official Brand Logo with Hot Rod Chopper Flames + Instagram & WhatsApp */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            <div className="relative w-full max-w-[430px] rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-zinc-950 via-[#130f0b] to-black shadow-2xl shadow-black p-5 sm:p-6 group flex flex-col items-center overflow-visible">
              
              {/* Chopper Flame Backlight Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-gradient-to-b from-amber-500/20 via-orange-600/25 to-red-600/20 rounded-full blur-2xl pointer-events-none" />

              {/* Flame Badge Container */}
              <div className="relative w-full aspect-square max-w-[340px] flex items-center justify-center">
                
                {/* SVG Chopper Hot-Rod Flame Licks wrapping around the emblem */}
                <svg
                  viewBox="0 0 460 460"
                  className="absolute inset-0 w-full h-full pointer-events-none select-none drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Flame Color Gradients */}
                    <linearGradient id="chopperFireRed" x1="230" y1="440" x2="230" y2="20" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7f1d1d" />
                      <stop offset="30%" stopColor="#dc2626" />
                      <stop offset="65%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>

                    <linearGradient id="chopperFireOrange" x1="230" y1="420" x2="230" y2="40" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#c2410c" />
                      <stop offset="40%" stopColor="#f97316" />
                      <stop offset="80%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#fef08a" />
                    </linearGradient>

                    <linearGradient id="chopperFireYellow" x1="230" y1="390" x2="230" y2="70" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#ea580c" />
                      <stop offset="50%" stopColor="#facc15" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>

                    <radialGradient id="flameBackGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="65%" stopColor="#f59e0b" stopOpacity="0.15" />
                      <stop offset="85%" stopColor="#dc2626" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Radial Halo */}
                  <circle cx="230" cy="230" r="215" fill="url(#flameBackGlow)" />

                  {/* Outer Red Flame Tongues (Deep Layer) */}
                  <g fill="url(#chopperFireRed)" opacity="0.95">
                    {/* Left Outer Flame Wing */}
                    <path d="M120 370 C70 340 35 280 40 215 C45 160 80 120 100 80 C95 125 115 145 120 170 C105 130 135 100 155 70 C145 110 165 135 170 160 C155 105 190 75 210 35 C205 85 220 115 225 140 C200 180 130 250 120 370 Z" />
                    {/* Right Outer Flame Wing */}
                    <path d="M340 370 C390 340 425 280 420 215 C415 160 380 120 360 80 C365 125 345 145 340 170 C355 130 325 100 305 70 C315 110 295 135 290 160 C305 105 270 75 250 35 C255 85 240 115 235 140 C260 180 330 250 340 370 Z" />
                    {/* Bottom Exhaust Fire Bed */}
                    <path d="M110 330 C150 430 310 430 350 330 C330 400 290 445 230 450 C170 445 130 400 110 330 Z" />
                  </g>

                  {/* Middle Orange Hot Flame Tongues (Mid Layer) */}
                  <g fill="url(#chopperFireOrange)">
                    {/* Left Mid Flames */}
                    <path d="M135 345 C95 315 65 265 75 210 C85 165 110 140 125 105 C122 135 140 160 145 185 C140 150 165 125 180 95 C175 130 190 150 195 175 C190 135 215 110 230 75 C225 115 232 140 235 160 C205 200 150 255 135 345 Z" />
                    {/* Right Mid Flames */}
                    <path d="M325 345 C365 315 395 265 385 210 C375 165 350 140 335 105 C338 135 320 160 315 185 C320 150 295 125 280 95 C285 130 270 150 265 175 C270 135 245 110 230 75 C235 115 228 140 225 160 C255 200 310 255 325 345 Z" />
                    {/* Bottom Fire Swirls */}
                    <path d="M140 350 C175 425 285 425 320 350 C295 405 265 428 230 430 C195 428 165 405 140 350 Z" />
                  </g>

                  {/* Inner Yellow Flame Licks & Sparks (Highlight Layer) */}
                  <g fill="url(#chopperFireYellow)" opacity="0.95">
                    {/* Left Inner Tongue */}
                    <path d="M155 310 C125 270 105 230 115 185 C120 155 140 130 150 115 C147 135 160 155 165 175 C165 145 185 130 195 110 C192 135 205 155 210 170 C190 205 165 250 155 310 Z" />
                    {/* Right Inner Tongue */}
                    <path d="M305 310 C335 270 355 230 345 185 C340 155 320 130 310 115 C313 135 300 155 295 175 C295 145 275 130 265 110 C268 135 255 155 250 170 C270 205 295 250 305 310 Z" />
                    {/* Center Top Flame Leap */}
                    <path d="M220 175 C215 145 222 120 230 95 C238 120 245 145 240 175 C235 165 225 165 220 175 Z" />
                    {/* Floating Ember Sparks */}
                    <circle cx="85" cy="90" r="3.5" />
                    <circle cx="150" cy="50" r="2.5" />
                    <circle cx="230" cy="20" r="4" />
                    <circle cx="310" cy="50" r="2.5" />
                    <circle cx="375" cy="90" r="3.5" />
                  </g>
                </svg>

                {/* Central Medallion: Strictly clipped with rounded-full overflow-hidden (NO square corners) */}
                <div className="relative z-10 w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] rounded-full overflow-hidden bg-gradient-to-br from-white via-zinc-100 to-zinc-200 border-4 border-amber-500 shadow-[0_0_35px_rgba(245,158,11,0.5),inset_0_0_15px_rgba(0,0,0,0.15)] p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/assets/aistudio/image_b7226b6d.png"
                    alt="Chopper Fans Clothes - Estilo Sobre Ruedas"
                    className="w-full h-full object-contain filter contrast-125 select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>

              {/* Biker Chopper Plate Banner */}
              <div className="relative z-10 -mt-2 px-4 py-1 rounded-full bg-black/90 border border-amber-500/50 shadow-lg shadow-black flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-400">
                  Estilo Sobre Ruedas · Santiago
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              </div>

              {/* Direct Quick Action Buttons below the Logo: Strictly 'Instagram' and 'Whatsapp' */}
              <div className="w-full mt-4 grid grid-cols-2 gap-3 max-w-[360px] relative z-10">
                <a
                  href="https://instagram.com/chopperfansclothes.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-gradient-to-r from-purple-900/80 to-pink-900/80 hover:from-purple-800 hover:to-pink-800 border border-pink-500/40 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md shadow-pink-900/25 cursor-pointer"
                  aria-label="Instagram"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse shrink-0" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://wa.me/56982341190?text=Hola%20Chopper%20Fans%20Clothes,%20quiero%20información%20sobre%20la%20ropa%20chopper%20en%20Santiago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/90 to-green-900/90 hover:from-emerald-900 hover:to-green-800 border border-emerald-500/40 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md shadow-emerald-900/25 cursor-pointer"
                  aria-label="Whatsapp"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>Whatsapp</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
