import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="footer-title">Feria de Chilpancingo</h3>
              <p className="footer-description">
                200 años de historia, tradición y cultura. Celebrando San Mateo, Navidad y Año Nuevo desde 1825.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="footer-subtitle">Enlaces Rápidos</h4>
              <ul className="footer-links">
                <li><a href="#poster">Historia</a></li>
                <li><a href="#elementos">Elementos Culturales</a></li>
                <li><a href="#programacion">Programación</a></li>
                <li><a href="#galeria">Galería</a></li>
              </ul>
            </motion.div>

            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="footer-subtitle">Festividades</h4>
              <ul className="footer-links">
                <li>San Mateo - Septiembre</li>
                <li>Navidad - Diciembre</li>
                <li>Año Nuevo - Enero</li>
                <li>Eventos Culturales</li>
              </ul>
            </motion.div>

            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="footer-subtitle">Contacto</h4>
              <ul className="footer-contact">
                <li>
                  <MapPin size={18} />
                  <span>Chilpancingo de los Bravo, Guerrero</span>
                </li>
                <li>
                  <Phone size={18} />
                  <span>+52 747 XXX XXXX</span>
                </li>
                <li>
                  <Mail size={18} />
                  <span>info@feriachilpancingo.gob.mx</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Feria de Chilpancingo. 200 Años de Historia y Tradición.
            </p>
            <div className="footer-logos">
              <img src="/logos/gobierno-chilpancingo.png" alt="Gobierno" className="footer-logo" />
              <img src="/logos/consejo-consultivo.png" alt="Consejo" className="footer-logo" />
              <img src="/logos/unidos-renace.png" alt="Unidos Renace" className="footer-logo" />
            </div>
          </div>
        </div>
      </div>

      {/* Decoración */}
      <div className="footer-decoration">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,0 L0,60 Q300,100 600,60 T1200,60 L1200,0 Z" fill="rgba(212, 175, 55, 0.1)" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
