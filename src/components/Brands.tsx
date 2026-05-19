// Sección Marcas: muestra las marcas que vendemos en Movix
// Al hacer clic, lleva al catálogo con el filtro de esa marca

import './Brands.css'

const brandList = [
  { name: 'Apple', icon: '🍎' },
  { name: 'Samsung', icon: '📱' },
  { name: 'Xiaomi', icon: '⚡' },
  { name: 'Motorola', icon: 'Ⓜ️' },
  { name: 'Google', icon: '🔍' },
  { name: 'Huawei', icon: '🌐' },
]

export function Brands() {
  const getCatalogLink = (brand: string) => `#catalogo?marca=${encodeURIComponent(brand)}`

  return (
    <section id="marcas" className="brands">
      <div className="brands-container">
        <div className="brands-header">
          <h2>Marcas que confías</h2>
          <p>
            Trabajamos con las marcas líderes del mercado colombiano. Elige una
            para ver sus modelos en el catálogo.
          </p>
        </div>

        <div className="brands-grid">
          {brandList.map((brand) => (
            <a
              key={brand.name}
              href={getCatalogLink(brand.name)}
              className="brand-card"
            >
              <span className="brand-icon" aria-hidden="true">
                {brand.icon}
              </span>
              <span className="brand-name">{brand.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
