import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Fuegos artificiales animados */}
      <div className="fireworks-container">
        <motion.div 
          className="firework firework-1"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <motion.div 
          className="firework firework-2"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            delay: 0.5,
          }}
        />
        <motion.div 
          className="firework firework-3"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            delay: 1,
          }}
        />
        <motion.div 
          className="firework firework-4"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            delay: 1.5,
          }}
        />
      </div>

      {/* Logos institucionales */}
      <motion.div 
        className="institutional-logos"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="logos-container">
          <img src="/logos/tecnologico.png" alt="Tecnológico de Chilpancingo" className="logo" />
          <img src="/logos/feria.png" alt="Feria de Chilpancingo" className="logo" />
          <img src="/logos/renace.png" alt="Unidos Chilpancingo Renace" className="logo" />
        </div>
      </motion.div>

      {/* Contenido principal del hero */}
      <div className="hero-content">
        <motion.div
          className="year-badge"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="year-start">1825</span>
          <span className="year-separator">—</span>
          <span className="year-end">2025</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Feria de <span className="title-highlight">Chilpancingo</span>
        </motion.h1>

        <motion.div
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <span className="subtitle-item">San Mateo</span>
          <span className="subtitle-separator">•</span>
          <span className="subtitle-item">Navidad</span>
          <span className="subtitle-separator">•</span>
          <span className="subtitle-item">Año Nuevo</span>
        </motion.div>

        <motion.div
          className="edition-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          EDICIÓN <span className="edition-number">200</span> AÑOS
        </motion.div>

        <motion.div
          className="hero-slogan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          Historia y Tradición
        </motion.div>

        <motion.button
          className="cta-button"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('elementos').scrollIntoView({ behavior: 'smooth' })}
        >
          Explora 200 Años de Tradición
        </motion.button>
      </div>

      {/* Iglesias y elementos decorativos - similar a imagen 1 */}
      <div className="hero-bottom-decoration">
        <div className="churches-skyline">
          {/* Aquí van las imágenes de las iglesias */}
          <img src="/elementos/iglesias-left.png" alt="Iglesias" className="churches churches-left" />
          <img src="/elementos/iglesias-right.png" alt="Iglesias" className="churches churches-right" />
        </div>
        
        <div className="characters-group">
          <img src="/elementos/personaje-historico.png" alt="Personaje histórico" className="character character-1" />
          <img src="/elementos/escudo.png" alt="Escudo Chilpancingo" className="character character-2" />
          <img src="/elementos/nina-vestido.png" alt="Niña tradicional" className="character character-3" />
          <img src="/elementos/jaguar.png" alt="Jaguar" className="character character-4" />
          <img src="/elementos/mascara-roja.png" alt="Máscara" className="character character-5" />
        </div>

        <div className="bottom-logos">
          <img src="/logos/gobierno-chilpancingo.png" alt="Gobierno de Chilpancingo" className="bottom-logo" />
          <img src="/logos/consejo-consultivo.png" alt="Consejo Consultivo" className="bottom-logo" />
          <img src="/logos/unidos-renace.png" alt="Unidos Chilpancingo Renace" className="bottom-logo" />
        </div>
      </div>

      {/* Ola blanca inferior */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 600,80 900,40 L1200,20 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
