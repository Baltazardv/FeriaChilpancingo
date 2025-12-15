import { motion } from 'framer-motion';
import './PosterSection.css';

const PosterSection = () => {
  return (
    <section className="poster-section" id="poster">
      <div className="container">
        <motion.div
          className="poster-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            200 Años de <span className="highlight-text">Historia y Tradición</span>
          </h2>
          <p className="section-description">
            Celebramos dos siglos de cultura, tradición y alegría en la Feria más emblemática de Guerrero
          </p>
        </motion.div>

        <motion.div
          className="poster-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="poster-frame">
            <img 
              src="/POSTER_DE_LA_FERIA_PROP_2_Mesa_de_trabajo_1.jpg" 
              alt="Poster Oficial - 200 Años de la Feria de Chilpancingo" 
              className="poster-image"
            />
            
            {/* Decoración de esquinas */}
            <div className="corner-decoration corner-top-left"></div>
            <div className="corner-decoration corner-top-right"></div>
            <div className="corner-decoration corner-bottom-left"></div>
            <div className="corner-decoration corner-bottom-right"></div>
          </div>

          <motion.div
            className="poster-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="info-card">
              <div className="info-icon">🎭</div>
              <h3>Edición Bicentenaria</h3>
              <p>Dos siglos de tradición ininterrumpida desde 1825</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎉</div>
              <h3>San Mateo, Navidad y Año Nuevo</h3>
              <p>Celebraciones que unen a Chilpancingo todo el año</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🏛️</div>
              <h3>Patrimonio Cultural</h3>
              <p>Danzas, gastronomía y tradiciones de Guerrero</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="poster-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button 
            className="explore-button"
            onClick={() => document.getElementById('elementos').scrollIntoView({ behavior: 'smooth' })}
          >
            Descubre Nuestros Elementos Culturales
          </button>
        </motion.div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="floating-elements">
        <motion.div
          className="float-element float-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎪
        </motion.div>
        <motion.div
          className="float-element float-2"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🎨
        </motion.div>
        <motion.div
          className="float-element float-3"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🎵
        </motion.div>
      </div>
    </section>
  );
};

export default PosterSection;
