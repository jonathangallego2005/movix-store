// Componente ProductCard (Tarjeta de Producto)
// Este componente es reutilizable: lo usamos para cada celular

import type { Phone } from '../data/phones'
import './ProductCard.css'

// Las "props" son valores que pasamos al componente
interface ProductCardProps {
  phone: Phone // Un objeto con los datos del celular
}

export function ProductCard({ phone }: ProductCardProps) {
  // Función para formatear el precio a moneda colombiana
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="product-card">
      {/* IMAGEN DEL CELULAR */}
      <div className="product-image">
        <img src={phone.image} alt={phone.name} />
        {/* BADGE DE MARCA */}
        <span className="product-badge">{phone.brand}</span>
      </div>

      {/* INFORMACIÓN DEL CELULAR */}
      <div className="product-info">
        <h3 className="product-name">{phone.name}</h3>
        <p className="product-description">{phone.description}</p>
        
        {/* PRECIO */}
        <div className="product-price">
          {formatPrice(phone.price)}
        </div>

        {/* BOTÓN */}
        <button className="product-button">Ver más detalles</button>
      </div>
    </div>
  )
}
