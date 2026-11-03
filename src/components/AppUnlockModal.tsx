import React, { useState } from 'react';
import { X, Smartphone, Check, Copy, ExternalLink, QrCode, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

interface AppUnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  source?: string;
}

export const AppUnlockModal: React.FC<AppUnlockModalProps> = ({
  isOpen,
  onClose,
  productName,
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<'ios' | 'android'>('ios');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const appLink = "https://chopperfansclothes.cl/app/download?ref=socios_chile";

  const handleCopy = () => {
    navigator.clipboard.writeText(appLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadClick = (platform: 'ios' | 'android') => {
    setSelectedPlatform(platform);
    setDownloadSuccess(`Redirigiendo a ${platform === 'ios' ? 'App Store (Apple iOS)' : 'Google Play Store (Android)'}...`);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal card */}
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-[#121319] border border-amber-500/30 shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 pb-4 border-b border-white/10 flex items-start justify-between bg-zinc-950/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black border border-amber-500/40 p-1 flex items-center justify-center">
              <img
                src="/assets/aistudio/image_b7226b6d.png"
                alt="Chopper Fans Clothes"
                className="w-full h-full object-contain filter invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block">
                Acceso Exclusivo Socios
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                Desbloquear Catálogo en App
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6">
          
          {productName && (
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Para ver el precio y stock de <strong className="text-white font-semibold">{productName}</strong>, abre la aplicación.
              </span>
            </div>
          )}

          {/* Platform Download Buttons */}
          <div>
            <label className="text-xs font-mono uppercase text-zinc-400 block mb-3">
              Descarga directa para tu dispositivo
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* iPhone App Store Button */}
              <button
                onClick={() => handleDownloadClick('ios')}
                className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${
                  selectedPlatform === 'ios'
                    ? 'bg-zinc-900 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                    : 'bg-black/60 border-white/10 text-zinc-300 hover:border-white/30'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.02.63-2.67 1.39-.58.67-1.09 1.74-.96 2.78 1.04.08 2.09-.55 2.71-1.3" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 block uppercase font-mono">Disponible en</span>
                  <span className="font-semibold text-sm text-white">Apple App Store</span>
                </div>
              </button>

              {/* Android Google Play Button */}
              <button
                onClick={() => handleDownloadClick('android')}
                className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${
                  selectedPlatform === 'android'
                    ? 'bg-zinc-900 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                    : 'bg-black/60 border-white/10 text-zinc-300 hover:border-white/30'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186a1.597 1.597 0 0 1-.61-.958V2.772c0-.368.225-.718.609-.958zm11.242 11.244l2.585 2.585-12.274 7.086 9.689-9.671zm0-2.116L5.162 1.27l12.274 7.087-2.585 2.585zm1.485 1.058l3.969 2.292c.983.568.983 1.488 0 2.056l-3.969 2.292-2.126-2.126 2.126-2.514z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 block uppercase font-mono">Disponible en</span>
                  <span className="font-semibold text-sm text-white">Google Play</span>
                </div>
              </button>

            </div>
          </div>

          {/* Feedback notification when clicking download button */}
          {downloadSuccess && (
            <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in duration-150">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{downloadSuccess} Abriendo instalador en dispositivo móvil...</span>
            </div>
          )}

          {/* QR Code and Quick Scan Section */}
          <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-24 h-24 p-2 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-md">
              {/* Clean Vector QR Representation */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="0" y="0" width="100" height="100" fill="white" />
                {/* Top-left position marker */}
                <rect x="5" y="5" width="25" height="25" fill="black" />
                <rect x="10" y="10" width="15" height="15" fill="white" />
                <rect x="13" y="13" width="9" height="9" fill="black" />
                {/* Top-right position marker */}
                <rect x="70" y="5" width="25" height="25" fill="black" />
                <rect x="75" y="10" width="15" height="15" fill="white" />
                <rect x="78" y="13" width="9" height="9" fill="black" />
                {/* Bottom-left position marker */}
                <rect x="5" y="70" width="25" height="25" fill="black" />
                <rect x="10" y="75" width="15" height="15" fill="white" />
                <rect x="13" y="78" width="9" height="9" fill="black" />
                {/* Random decorative QR data blocks */}
                <rect x="35" y="10" width="6" height="6" fill="black" />
                <rect x="45" y="15" width="8" height="6" fill="black" />
                <rect x="55" y="8" width="6" height="6" fill="black" />
                <rect x="35" y="25" width="12" height="6" fill="black" />
                <rect x="50" y="30" width="6" height="10" fill="black" />
                <rect x="10" y="35" width="8" height="8" fill="black" />
                <rect x="22" y="45" width="6" height="12" fill="black" />
                <rect x="35" y="42" width="15" height="6" fill="black" />
                <rect x="60" y="38" width="8" height="8" fill="black" />
                <rect x="75" y="35" width="15" height="6" fill="black" />
                <rect x="42" y="55" width="10" height="10" fill="black" />
                <rect x="65" y="52" width="8" height="12" fill="black" />
                <rect x="80" y="55" width="12" height="6" fill="black" />
                <rect x="35" y="72" width="10" height="6" fill="black" />
                <rect x="52" y="75" width="8" height="8" fill="black" />
                <rect x="65" y="70" width="12" height="8" fill="black" />
                <rect x="80" y="78" width="10" height="10" fill="black" />
                <rect x="40" y="88" width="18" height="6" fill="black" />
                <rect x="65" y="88" width="8" height="6" fill="black" />
              </svg>
            </div>
            
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                Escaneo Rápido con tu Cámara
              </span>
              <p className="text-xs text-zinc-300">
                Apunta la cámara de tu smartphone para vincular tu membresía y acceder al inventario en vivo.
              </p>
              <div className="pt-1 flex items-center justify-center sm:justify-start gap-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs border border-white/10 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Enlace copiado' : 'Copiar enlace directo'}</span>
                </button>
              </div>
            </div>
          </div>


          {/* WhatsApp Direct Concierge link for Santiago riders */}
          <div className="p-3.5 rounded-xl bg-[#171822] border border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs text-zinc-300">
                ¿Prefieres consultar por WhatsApp con Chopper Fans Clothes en Santiago?
              </span>
            </div>
            <a
              href="https://wa.me/56982341190?text=Hola%20Chopper%20Fans%20Clothes,%20quiero%20información%20sobre%20la%20ropa%20y%20accesorios"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shrink-0 transition-colors"
            >
              Contactar
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
