// Componente Hero (Sección Principal)
// Este es el primer banner que ven los usuarios

import './Hero.css'

export function Hero() {
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
          <button className="hero-button">
            Explorar Catálogo
          </button>
        </div>

        {/* IMAGEN DE SMARTPHONE */}
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=600&fit=crop" 
            alt="Smartphone profesional"
          />
        </div>
      </div>
    </section>
  )
}
