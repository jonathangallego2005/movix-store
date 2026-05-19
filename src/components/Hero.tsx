// Componente Hero (Sección Principal)
// Este es el primer banner que ven los usuarios

import './Hero.css'
import { scrollToSection } from '../utils/scrollTo'

export function Hero() {
  const goToCatalog = () => {
    scrollToSection('catalogo')
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        {/* CONTENIDO DE TEXTO */}
        <div className="hero-content">
          <h1 className="hero-title">Encuentra tu smartphone ideal</h1>
          <p className="hero-subtitle">
            Descubre los mejores celulares con tecnología de punta a precios competitivos. 
            Marcas premium y presupuesto accesible.
          </p>
          <button type="button" className="hero-button" onClick={goToCatalog}>
            Explorar catálogo
          </button>
        </div>

        {/* IMAGEN DE SMARTPHONE */}
        <div className="hero-image">
          <img 
            src="https://i.blogs.es/393e8f/javier-corso/500_333.jpeg"
            alt="Smartphone profesional"
            width="500"
            height="333"
          />
        </div>
      </div>
    </section>
  )
}
