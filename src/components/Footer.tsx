import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, Truck, Download, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenAppModal: (source?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppModal }) => {
  return (
    <footer className="bg-black border-t border-white/10 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-amber-500/40 p-1 flex items-center justify-center">
                <img
                  src="/assets/aistudio/image_b7226b6d.png"
                  alt="Chopper Fans Clothes Logo"
                  className="w-full h-full object-contain filter invert contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight">
                  Chopper Fans Clothes
                </h3>
                <p className="text-xs font-mono text-amber-400 uppercase tracking-widest -mt-1">
                  Estilo Sobre Ruedas · Santiago
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Tienda independiente en Santiago de Chile especializada en indumentaria estilo chopper para motoristas. Catálogo exclusivo disponible en nuestra aplicación móvil.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-300 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Santiago, Chile
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                Envíos Nacionales
              </span>
            </div>
          </div>

          {/* Quick Navigation (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#portada" className="hover:text-amber-400 transition-colors">
                  Portada Oficial
                </a>
              </li>
              <li>
                <a href="#descarga-app" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-400/90 font-medium">
                  <Download className="w-3.5 h-3.5" />
                  <span>Descarga de App para Catálogo</span>
                </a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Próximos Eventos & Afiches Chopper</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/chopperfansclothes.cl" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                  Instagram Oficial
                </a>
              </li>
              <li>
                <a href="https://wa.me/56982341190" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Oficial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & App Action (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Contacto & Red de Ruta
            </h4>
            <p className="text-xs text-zinc-400">
              ¿Dudas sobre eventos chopper o el catálogo en la aplicación? Escríbenos directamente:
            </p>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>WhatsApp: +56 9 8234 1190</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>contacto@chopperfansclothes.cl</span>
              </div>
            </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenAppModal('footer')}
                  className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer shadow-md shadow-amber-500/20"
                >
                  Descargar
                </button>
              </div>
          </div>

        </div>

        {/* Chilean Logistics Strip */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Envíos protegidos a todo Chile con Starken, Chilexpress y CorreosChile</span>
          </div>
          <div className="font-mono text-[11px] text-zinc-400">
            Atención & Despachos Santiago: Lun - Sáb 10:00 a 19:00 hrs
          </div>
        </div>

        {/* Legal Sub-footer */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-400 font-mono gap-3">
          <p>
            © {new Date().getFullYear()} Chopper Fans Clothes · Estilo Sobre Ruedas.
          </p>
          <p className="text-zinc-500 text-center md:text-right">
            Reventa independiente en Santiago de Chile. Marcas registradas pertenecen a sus respectivos titulares.
          </p>
        </div>

      </div>
    </footer>
  );
};
