export interface ChopperGarment {
  id: string;
  name: string;
  gender: 'men' | 'women' | 'unisex';
  genderLabel: string;
  category: 'chaquetas' | 'chalecos' | 'poleras' | 'gorros';
  categoryLabel: string;
  subtitle: string;
  image: string;
  tag: string;
  material: string;
  specs: string[];
  description: string;
  sizes: string[];
  riderFit: string;
}

export const CHOPPER_GARMENTS: ChopperGarment[] = [
  // --- LÍNEA HOMBRES ---
  {
    id: 'chopper-men-jkt-01',
    name: 'Chaqueta Chopper Heavy Cowhide Patina Vintage',
    gender: 'men',
    genderLabel: 'Hombre',
    category: 'chaquetas',
    categoryLabel: 'Chaqueta de Cuero',
    subtitle: 'Cuero vacuno genuino de 1.4 mm con forro térmico desmontable y cremalleras de bronce',
    image: '/assets/images/product_biker_jacket_1793651396074.jpg',
    tag: 'Cuero Pesado 1.4mm',
    material: 'Cuero vacuno legítimo de 1.4 mm curtido al aceite pesado',
    specs: [
      'Corte de espalda extendida para postura con mandos avanzados',
      'Cremalleras metálicas YKK heavy-duty con tiradores de cuero',
      'Fuelle dorsal de acción libre para elevar brazos con ape hangers',
      'Bolsillo interior oculto para celular y documentos de ruta'
    ],
    description: 'Confeccionada con el grosor exacto para bloquear el viento cordillerano y proteger en carretera. Su pátina vintage se enriquece con cada kilómetro bajo el sol y la lluvia.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    riderFit: 'Calce chopper holgado en hombros con ajuste ceñido en cintura'
  },
  {
    id: 'chopper-men-vest-01',
    name: 'Chaleco Chopper Club Cut Leather Vest',
    gender: 'men',
    genderLabel: 'Hombre',
    category: 'chalecos',
    categoryLabel: 'Chaleco Biker',
    subtitle: 'Cuero vacuno de alto impacto con broches de presión ocultos y cuello club',
    image: '/assets/images/product_men_chopper_vest_1793665393376.jpg',
    tag: 'Club Cut Original',
    material: 'Cuero vacuno de 1.3 mm con forro interior de satén reforzado',
    specs: [
      'Doble sistema de cierre: cremallera central metálica y botones snap ocultos',
      'Panel trasero despejado de una sola pieza listo para parches de hermandad',
      'Bolsillos frontales dobles en pecho con solapa de broche seguro',
      'Bolsillos laterales con forro polar para calentamiento rápido de manos'
    ],
    description: 'La pieza esencial de la indumentaria chopper masculina. Pensado para usarse sobre poleras en verano o sobre chaquetas en invierno con máxima comodidad.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    riderFit: 'Corte recto americano para libre movimiento del torso'
  },
  {
    id: 'chopper-men-tee-01',
    name: 'Polera Speed & Soul Motor Co. Heavyweight',
    gender: 'men',
    genderLabel: 'Hombre',
    category: 'poleras',
    categoryLabel: 'Polera Heavyweight',
    subtitle: 'Algodón peinado 240 GSM con estampado descargado al agua y tacto cero plástico',
    image: '/assets/images/product_biker_tee_1793651410962.jpg',
    tag: 'Algodón 240 GSM',
    material: '100% Algodón peinado de alto gramaje pre-encogido',
    specs: [
      'Cuello acanalado de 1 pulgada que no pierde tensión tras lavados',
      'Corte tubular sin costuras laterales que evita roces con el chaleco',
      'Tinta al agua que respira y no genera sudoración en ruta',
      'Lavado a la piedra que brinda un tono carbón desgastado auténtico'
    ],
    description: 'Polera de gramaje pesado desarrollada para soportar el castigo de la carretera sin deformarse, manteniendo un tacto suave y respirable.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    riderFit: 'Calce estándar relajado con caída pesada'
  },

  // --- LÍNEA MUJERES ---
  {
    id: 'chopper-women-jkt-01',
    name: 'Chaqueta Chopper Custom Leather Tailored Women',
    gender: 'women',
    genderLabel: 'Mujer',
    category: 'chaquetas',
    categoryLabel: 'Chaqueta de Cuero',
    subtitle: 'Cuero vacuno legítimo con corte anatómico entallado y cremallera cruzada de bronce',
    image: '/assets/images/product_women_chopper_jacket_1793665392483.jpg',
    tag: 'Corte Anatómico Femenino',
    material: 'Cuero vacuno flor de 1.2 mm suave, flexible y resistente a la abrasión',
    specs: [
      'Corte entallado diseñado para la anatomía femenina en posición de manejo',
      'Fuelles flexibles en omóplatos para alcanzar manillares altos sin tirantez',
      'Cinturón de ajuste inferior con hebilla de bronce envejecido',
      'Puños con cremalleras expansibles para guantes de caña media'
    ],
    description: 'Diseñada específicamente para motociclistas mujeres apasionadas del estilo chopper. Combina la máxima protección del cuero legítimo con un entalle estilizado y movilidad completa en curvas y ruta.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    riderFit: 'Calce ergonómico entallado con ajuste en cintura y hombro elástico'
  },
  {
    id: 'chopper-women-tee-01',
    name: 'Polera Legendary Ride Chopper Wings Women',
    gender: 'women',
    genderLabel: 'Mujer',
    category: 'poleras',
    categoryLabel: 'Polera Heavyweight',
    subtitle: 'Algodón denso lavado vintage con gráfica retro de alas chopper y cuello redondo reforzado',
    image: '/assets/images/product_women_chopper_tee_1793665392923.jpg',
    tag: 'Edición Vintage Rider',
    material: '100% Algodón peinado de 220 GSM con tratamiento siliconado suave',
    specs: [
      'Corte relajado femenino con caída equilibrada y mangas de ajuste cómodo',
      'Serigrafía tradicional al agua que no se agrieta ni pierde color',
      'Refuerzo de cinta de hombro a hombro para mayor durabilidad',
      'Resistente al estiramiento por el viento en carretera'
    ],
    description: 'Prenda pensada para mujeres motoristas que buscan estilo rebelde sin sacrificar resistencia ni comodidad. Luce la gráfica chopper con un tono lavado a la piedra muy auténtico.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    riderFit: 'Corte rider femenino con largo ideal para no levantarse en marcha'
  },

  // --- LÍNEA UNISEX RUTA ---
  {
    id: 'chopper-unisex-hat-01',
    name: 'Gorro Trucker Iron Horse Chopper Club',
    gender: 'unisex',
    genderLabel: 'Unisex',
    category: 'gorros',
    categoryLabel: 'Gorro Trucker',
    subtitle: 'Malla rígida respirable de alta tensión y parche bordado con alas y motor',
    image: '/assets/images/product_trucker_hat_1793651395901.jpg',
    tag: 'Estructura Antideformación',
    material: 'Algodón peinado y malla rígida de nylon de alta densidad',
    specs: [
      'Visera precurvada con 6 costuras de hilo reforzado',
      'Cierre trasero snapback regulable para cualquier diámetro de cabeza',
      'Banda interior antisudor para detenciones bajo el sol',
      'Parche bordado en alta densidad que no se deshilacha'
    ],
    description: 'El clásico gorro trucker de hermandad chopper, ideal tanto para hombres como para mujeres en paradas de carretera y encuentros de ruta.',
    sizes: ['Ajustable (Snapback)'],
    riderFit: 'Ajuste universal unisex de perfil medio'
  }
];
