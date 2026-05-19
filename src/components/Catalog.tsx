// Componente Catalog (Catálogo de Productos)
// Muestra todos los celulares en un grid con filtro por marca

import { useEffect, useState } from 'react'
import { phones } from '../data/phones'
import { ProductCard } from './ProductCard'
import { getBrandFromUrl } from '../utils/scrollTo'
import './Catalog.css'

export function Catalog() {
  // Estado para guardar la marca seleccionada
  const [selectedBrand, setSelectedBrand] = useState<string>('Todas')

  // Si vienes desde "Marcas" con #catalogo?marca=Samsung, aplicamos el filtro
  useEffect(() => {
    const applyBrandFromUrl = () => {
      const marca = getBrandFromUrl()
      if (marca && phones.some((p) => p.brand === marca)) {
        setSelectedBrand(marca)
      }
    }

    applyBrandFromUrl()
    window.addEventListener('hashchange', applyBrandFromUrl)
    return () => window.removeEventListener('hashchange', applyBrandFromUrl)
  }, [])

  // Array de todas las marcas (sin repetidas)
  const brands = ['Todas', ...new Set(phones.map(phone => phone.brand))]

  // Filtrar celulares según la marca seleccionada
  const filteredPhones = selectedBrand === 'Todas' 
    ? phones 
    : phones.filter(phone => phone.brand === selectedBrand)

  return (
    <section id="catalogo" className="catalog">
      <div className="catalog-container">
        {/* TÍTULO */}
        <div className="catalog-header">
          <h2>Nuestro Catálogo</h2>
          <p>Descubre los mejores modelos de las marcas más prestigiosas</p>
        </div>

        {/* FILTRO POR MARCA */}
        <div className="catalog-filter">
          <label htmlFor="brand-select">Filtrar por marca:</label>
          <select 
            id="brand-select"
            className="brand-select"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className="products-grid">
          {filteredPhones.length > 0 ? (
            filteredPhones.map(phone => (
              <ProductCard key={phone.id} phone={phone} />
            ))
          ) : (
            <p className="no-products">No hay productos disponibles</p>
          )}
        </div>

        {/* CONTADOR DE PRODUCTOS */}
        <div className="catalog-footer">
          <p>Mostrando {filteredPhones.length} de {phones.length} productos</p>
        </div>
      </div>
    </section>
  )
}
