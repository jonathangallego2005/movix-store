// Componente principal App
// Aquí se combinan todos los componentes

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Catalog } from './components/Catalog'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      {/* Navbar: Barra de navegación */}
      <Navbar />

      {/* Main: Contenido principal */}
      <main>
        {/* Hero: Sección principal con banner */}
        <Hero />

        {/* Catalog: Catálogo de productos con filtro */}
        <Catalog />
      </main>

      {/* Footer: Pie de página */}
      <Footer />
    </>
  )
}

export default App
