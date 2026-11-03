import React, { useState } from 'react';
import { Menu, X, Download, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenAppModal: (source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          
          {/* Zone 1: Brand Wordmark & Official Logo */}
          <a href="#portada" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white border-2 border-amber-500/80 p-0.5 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:border-amber-400 group-hover:scale-105 transition-all">
              <img
                src="/assets/aistudio/image_b7226b6d.png"
                alt="Chopper Fans Clothes Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white uppercase group-hover:text-amber-400 transition-colors whitespace-nowrap">
                Chopper Fans Clothes
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono -mt-0.5">
                Estilo Sobre Ruedas · Santiago
              </span>
            </div>
          </a>

          {/* Zone 2: Clean Nav Links for Portada and Próximos Eventos */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#portada" className="hover:text-amber-400 transition-colors whitespace-nowrap">
              Portada
            </a>
            <a href="#eventos" className="hover:text-amber-400 transition-colors whitespace-nowrap flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Próximos Eventos</span>
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action: Botón Descargar */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenAppModal('navbar')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-semibold text-xs tracking-wider uppercase shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] whitespace-nowrap cursor-pointer"
            >
              <Download className="w-4 h-4 text-black" />
              <span>Descargar</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0f1015] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-zinc-300">
            <a
              href="#portada"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-amber-400"
            >
              Portada
            </a>
            <a
              href="#eventos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-amber-400 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Próximos Eventos Choppers</span>
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppModal('mobile_nav');
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-amber-500 text-black font-semibold text-xs tracking-wider uppercase shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
