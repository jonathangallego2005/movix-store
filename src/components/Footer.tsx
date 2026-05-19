// Componente Footer (Pie de Página)
// Muestra información de contacto y redes sociales

import './Footer.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="footer">
      <div className="footer-container">
        {/* INFORMACIÓN DE LA TIENDA */}
        <div className="footer-section">
          <h3>MOVIX</h3>
          <p>
            Tu tienda de confianza para los mejores celulares. Contamos con atención 
            personalizada y garantía en todos nuestros productos.
          </p>
        </div>

        {/* CONTACTO */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>
            <strong>Email:</strong> info@movix.com.co
          </p>
          <p>
            <strong>Teléfono:</strong> +57 1 234 5678
          </p>
          <p>
            <strong>Dirección:</strong> Bogotá, Colombia
          </p>
        </div>

        {/* ENLACES RÁPIDOS */}
        <div className="footer-section">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#marcas">Marcas</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="#facebook" className="social-link">Facebook</a>
            <a href="#instagram" className="social-link">Instagram</a>
            <a href="#twitter" className="social-link">Twitter</a>
            <a href="#whatsapp" className="social-link">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* DERECHOS DE AUTOR */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} MOVIX. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
