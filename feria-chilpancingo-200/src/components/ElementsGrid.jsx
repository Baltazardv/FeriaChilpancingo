import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './ElementsGrid.css';

const culturalElements = [
  {
    id: 1,
    name: "Personaje Histórico",
    image: "/elementos/personaje-historico.png",
    category: "Historia",
    description: "Representación de los próceres y personajes ilustres que han marcado la historia de Chilpancingo desde 1825.",
    fullDescription: "Durante 200 años, la Feria de Chilpancingo ha honrado a los grandes personajes que forjaron nuestra identidad. Desde los héroes de la independencia hasta los visionarios que consolidaron esta tradición, cada edición rinde homenaje a quienes escribieron nuestra historia.",
    facts: [
      "La primera feria se estableció durante el México independiente",
      "Personajes como Vicente Guerrero tienen fuerte presencia en la región",
      "Chilpancingo fue Capital de México brevemente en 1813"
    ]
  },
  {
    id: 2,
    name: "Iglesias Coloniales",
    image: "/elementos/iglesias.png",
    category: "Arquitectura",
    description: "Las majestuosas iglesias coloniales que adornan el paisaje de Chilpancingo, testigos silenciosos de dos siglos de celebraciones.",
    fullDescription: "La arquitectura religiosa de Chilpancingo es un patrimonio invaluable que data de la época colonial. Estas construcciones han sido el escenario de innumerables celebraciones religiosas durante la feria, especialmente durante las festividades de San Mateo.",
    facts: [
      "La Catedral de Santa María de la Asunción es el principal templo",
      "La arquitectura colonial se mezcla con elementos barrocos",
      "Las iglesias son puntos de reunión durante las celebraciones"
    ]
  },
  {
    id: 3,
    name: "Jaguar Tecuani",
    image: "/elementos/jaguar.png",
    category: "Danzas",
    description: "El imponente jaguar de la danza de los Tecuanes, símbolo de fuerza y tradición guerrerense.",
    fullDescription: "La Danza de los Tecuanes es una de las más emblemáticas de Guerrero. Representa la cacería del jaguar (tecuani en náhuatl) y es una tradición prehispánica que se mantiene viva en cada edición de la feria. Los danzantes portan elaboradas máscaras y trajes que representan al felino.",
    facts: [
      "Tecuani significa 'fiera que come gente' en náhuatl",
      "La danza incluye música de viento y percusiones tradicionales",
      "Es Patrimonio Cultural Inmaterial de Guerrero"
    ]
  },
  {
    id: 4,
    name: "Máscaras Tradicionales",
    image: "/elementos/mascaras.png",
    category: "Artesanía",
    description: "Coloridas máscaras artesanales que representan personajes y animales de las danzas tradicionales.",
    fullDescription: "Las máscaras son piezas de arte elaboradas por artesanos locales que han perfeccionado su técnica generación tras generación. Cada máscara cuenta una historia y representa un personaje específico de las diferentes danzas que se presentan durante la feria.",
    facts: [
      "Se elaboran con madera de lináloe y otros materiales locales",
      "Cada máscara puede tardar semanas en completarse",
      "Los colores tienen significados específicos en cada danza"
    ]
  },
  {
    id: 5,
    name: "Escudo de Chilpancingo",
    image: "/elementos/escudo.png",
    category: "Símbolos",
    description: "El escudo oficial de Chilpancingo de los Bravo, símbolo de identidad y orgullo guerrerense.",
    fullDescription: "El escudo de Chilpancingo representa la historia y los valores de la ciudad. Sus elementos hacen referencia a la rica herencia cultural, la valentía de sus habitantes y su papel crucial en la historia de México, especialmente durante la guerra de independencia.",
    facts: [
      "Chilpancingo significa 'lugar de avispas' en náhuatl",
      "La ciudad fue fundada en 1591",
      "Es la capital del estado de Guerrero desde 1851"
    ]
  },
  {
    id: 6,
    name: "Niña con Vestido Tradicional",
    image: "/elementos/nina-vestido.png",
    category: "Tradición",
    description: "Representación de la vestimenta tradicional femenina de Guerrero, símbolo de elegancia y cultura.",
    fullDescription: "El traje típico de Chilpancingo es una obra de arte textil que combina bordados elaborados, colores vibrantes y diseños que narran historias. Las niñas y mujeres lo portan con orgullo durante las festividades, manteniendo viva una tradición centenaria.",
    facts: [
      "Los bordados pueden tardar meses en completarse",
      "Cada región de Guerrero tiene variaciones en el diseño",
      "Los colores representan elementos de la naturaleza local"
    ]
  },
  {
    id: 7,
    name: "Flores de Nochebuena",
    image: "/elementos/nochebuenas.png",
    category: "Naturaleza",
    description: "La flor de nochebuena, elemento característico de las celebraciones navideñas de la feria.",
    fullDescription: "La nochebuena o flor de pascua es originaria de México y tiene un papel protagónico en las celebraciones de la feria durante la temporada navideña. Su color rojo intenso adorna altares, procesiones y espacios públicos, llenando de color las festividades.",
    facts: [
      "La nochebuena es originaria de México",
      "Fue popularizada internacionalmente por Joel Poinsett",
      "En náhuatl se llama Cuetlaxochitl"
    ]
  },
  {
    id: 8,
    name: "Puente Rojo Campamocha",
    image: "/elementos/puente-rojo.png",
    category: "Arquitectura",
    description: "El icónico puente Campamocha, símbolo arquitectónico de Chilpancingo moderno.",
    fullDescription: "El Puente Campamocha es uno de los símbolos más reconocibles de Chilpancingo. Esta estructura moderna se ha convertido en punto de referencia y lugar de encuentro, representando el progreso y la modernidad que convive con la tradición centenaria de la feria.",
    facts: [
      "Es uno de los puntos más fotografiados de la ciudad",
      "Conecta importantes zonas de Chilpancingo",
      "Durante la feria se ilumina con colores especiales"
    ]
  },
  {
    id: 9,
    name: "Piñatas Artesanales",
    image: "/elementos/pinatas.png",
    category: "Artesanía",
    description: "Coloridas piñatas tradicionales, elemento infaltable en las celebraciones mexicanas.",
    fullDescription: "Las piñatas son parte esencial de las festividades mexicanas y tienen un papel especial durante la feria. Los artesanos locales crean diseños tradicionales y modernos que alegran las celebraciones familiares durante toda la temporada festiva.",
    facts: [
      "La piñata tradicional tiene 7 picos que representan los pecados capitales",
      "Se elaboran con papel maché y cartón",
      "Durante la feria se realizan concursos de piñatas artesanales"
    ]
  },
  {
    id: 10,
    name: "Cempasúchil",
    image: "/elementos/cempasuchil.png",
    category: "Naturaleza",
    description: "La flor de cempasúchil, símbolo de Día de Muertos y tradición prehispánica.",
    fullDescription: "El cempasúchil o flor de muertos es fundamental en las tradiciones mexicanas. Durante la feria, especialmente en las festividades que coinciden con Día de Muertos, esta flor naranja brillante cubre altares y caminos, conectando a los vivos con sus ancestros.",
    facts: [
      "Su nombre viene del náhuatl 'cempoalxochitl' que significa veinte flores",
      "Se usa para guiar a las almas durante Día de Muertos",
      "Es originaria de México y cultivada desde época prehispánica"
    ]
  },
  {
    id: 11,
    name: "Número 200",
    image: "/elementos/200-anios.png",
    category: "Bicentenario",
    description: "Celebración especial del Bicentenario: 200 años de historia, tradición y cultura ininterrumpida.",
    fullDescription: "Esta edición marca un hito histórico sin precedentes. Dos siglos de celebraciones ininterrumpidas hacen de la Feria de Chilpancingo una de las más antiguas y tradicionales de México. Desde 1825 hasta 2025, generaciones enteras han crecido con esta tradición que define la identidad de Chilpancingo.",
    facts: [
      "200 años de celebraciones ininterrumpidas desde 1825",
      "Una de las ferias más antiguas de México",
      "Ha sobrevivido a revoluciones, cambios políticos y pandemias"
    ]
  },
  {
    id: 12,
    name: "Tlacololeros",
    image: "/elementos/tlacololeros.png",
    category: "Danzas",
    description: "La emblemática Danza de los Tlacololeros, Patrimonio Cultural Inmaterial de la Humanidad.",
    fullDescription: "La Danza de los Tlacololeros es única de Guerrero y fue declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO. Representa el ciclo agrícola y la lucha del hombre con la naturaleza. Los danzantes portan máscaras elaboradas y chicotes, creando un espectáculo visual y sonoro impresionante.",
    facts: [
      "Reconocida por UNESCO como Patrimonio de la Humanidad",
      "Originaria de la región de la Costa Chica y Montaña de Guerrero",
      "Los chicotes crean un sonido característico al golpear el suelo"
    ]
  }
];

const ElementsGrid = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', ...new Set(culturalElements.map(el => el.category))];

  const filteredElements = filter === 'Todos' 
    ? culturalElements 
    : culturalElements.filter(el => el.category === filter);

  return (
    <section className="elements-section" id="elementos">
      <div className="container">
        <motion.div
          className="elements-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Elementos <span className="highlight-text">Culturales</span>
          </h2>
          <p className="section-description">
            Descubre los símbolos, tradiciones y expresiones culturales que hacen única a nuestra feria
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          className="filters-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid de elementos */}
        <motion.div
          className="elements-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredElements.map((element, index) => (
            <motion.div
              key={element.id}
              className="element-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedElement(element)}
            >
              <div className="element-image-container">
                <img src={element.image} alt={element.name} className="element-image" />
              </div>
              <div className="element-info">
                <span className="element-category">{element.category}</span>
                <h3 className="element-name">{element.name}</h3>
                <p className="element-description">{element.description}</p>
                <button className="learn-more-btn">Conoce más →</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal de detalles */}
      <AnimatePresence>
        {selectedElement && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedElement(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedElement(null)}>
                <X size={24} />
              </button>

              <div className="modal-header">
                <div className="modal-image-container">
                  <img src={selectedElement.image} alt={selectedElement.name} />
                </div>
                <div className="modal-title-section">
                  <span className="modal-category">{selectedElement.category}</span>
                  <h2 className="modal-title">{selectedElement.name}</h2>
                </div>
              </div>

              <div className="modal-body">
                <p className="modal-full-description">{selectedElement.fullDescription}</p>
                
                <div className="modal-facts">
                  <h3>Datos Interesantes</h3>
                  <ul>
                    {selectedElement.facts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ElementsGrid;
