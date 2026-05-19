// Componente Navbar (Barra de Navegación)
// Este componente muestra el logo y el menú de navegación

import { useState } from 'react'
import './Navbar.css'

export function Navbar() {
  // Estado para controlar si el menú está abierto en móvil
  const [menuOpen, setMenuOpen] = useState(false)

  // Función para alternar el menú (abrir/cerrar)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Función para cerrar el menú cuando se hace click en un enlace
  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="navbar-logo">
          <img src="/logo-mivix.png" alt="Logo de MOVIX STORE" />
          <h1>MOVIX STORE</h1>
        </div>

        {/* BOTÓN HAMBURGUESA (solo aparece en móvil) */}
        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
        </button>

        {/* MENÚ DE NAVEGACIÓN */}
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="#inicio" onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#catalogo" onClick={closeMenu}>
              Catálogo
            </a>
          </li>
          <li>
            <a href="#marcas" onClick={closeMenu}>
              Marcas
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={closeMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
