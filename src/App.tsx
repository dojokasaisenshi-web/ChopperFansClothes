/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppCatalogDownloadSection } from './components/AppCatalogDownloadSection';
import { ChopperEventsSection } from './components/ChopperEventsSection';
import { Footer } from './components/Footer';
import { AppUnlockModal } from './components/AppUnlockModal';

export default function App() {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<string>('direct');
  const [targetItemName, setTargetItemName] = useState<string | undefined>(undefined);

  const handleOpenAppModal = (source = 'direct', itemName?: string) => {
    setModalSource(source);
    setTargetItemName(itemName);
    setIsAppModalOpen(true);
  };

  const handleCloseAppModal = () => {
    setIsAppModalOpen(false);
    setTargetItemName(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Barra superior de navegación */}
      <Navbar onOpenAppModal={handleOpenAppModal} />

      {/* Experiencia principal: Portada, Icono de descarga de App para Catálogo y Próximos Eventos */}
      <main className="flex-1">
        {/* 1. Portada: Calavera chopper limpia con botones que dicen estrictamente "Instagram" y "Whatsapp" */}
        <Hero onOpenAppModal={handleOpenAppModal} />

        {/* 2. Icono / Módulo de Descarga de App para Catálogo */}
        <AppCatalogDownloadSection onOpenAppModal={handleOpenAppModal} />

        {/* 3. Próximos Eventos & Afiches Chopper con espacio comunitario */}
        <ChopperEventsSection />
      </main>

      {/* Footer con información de Santiago de Chile y aviso de reventa independiente */}
      <Footer onOpenAppModal={handleOpenAppModal} />

      {/* Modal de Descarga de la App (iOS / Android / QR) */}
      <AppUnlockModal
        isOpen={isAppModalOpen}
        onClose={handleCloseAppModal}
        productName={targetItemName}
        source={modalSource}
      />
    </div>
  );
}
