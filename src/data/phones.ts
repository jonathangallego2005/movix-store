// DATOS DE LOS CELULARES
// Este archivo contiene un array con todos los productos
// Cada producto tiene: id, name, brand, price, image, description

export interface Phone {
  id: number
  name: string
  brand: string
  price: number
  image: string
  description: string
}

export const phones: Phone[] = [
  // IPHONE (Apple)
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 1299000,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=300&h=300&fit=crop",
    description: "El smartphone más avanzado de Apple con pantalla Super Retina XDR"
  },
  {
    id: 2,
    name: "iPhone 15",
    brand: "Apple",
    price: 899000,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=300&h=300&fit=crop",
    description: "Potencia y elegancia en un diseño compacto"
  },
  {
    id: 3,
    name: "iPhone 14",
    brand: "Apple",
    price: 699000,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=300&h=300&fit=crop",
    description: "Performance excepcional con chip A15 Bionic"
  },

  // SAMSUNG
  {
    id: 4,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1199000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf373f991?w=300&h=300&fit=crop",
    description: "La máxima expresión de tecnología Samsung"
  },
  {
    id: 5,
    name: "Galaxy S24",
    brand: "Samsung",
    price: 849000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf373f991?w=300&h=300&fit=crop",
    description: "Pantalla AMOLED de 120Hz con cámara revolucionaria"
  },
  {
    id: 6,
    name: "Galaxy A54",
    brand: "Samsung",
    price: 449000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf373f991?w=300&h=300&fit=crop",
    description: "Excelente relación precio-rendimiento"
  },

  // XIAOMI
  {
    id: 7,
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: 599000,
    image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=300&h=300&fit=crop",
    description: "Fotografía profesional en tu bolsillo"
  },
  {
    id: 8,
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 449000,
    image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=300&h=300&fit=crop",
    description: "Procesador Snapdragon 8 Gen 3"
  },
  {
    id: 9,
    name: "Xiaomi Redmi Note 13",
    brand: "Xiaomi",
    price: 249000,
    image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=300&h=300&fit=crop",
    description: "Batería de 5000mAh con carga rápida"
  },

  // MOTOROLA
  {
    id: 10,
    name: "Motorola Edge 50 Ultra",
    brand: "Motorola",
    price: 899000,
    image: "https://images.unsplash.com/photo-1598291209844-6b0b8b04ce9a?w=300&h=300&fit=crop",
    description: "Edge + pantalla OLED curvada de 144Hz"
  },
  {
    id: 11,
    name: "Motorola Edge 50",
    brand: "Motorola",
    price: 599000,
    image: "https://images.unsplash.com/photo-1598291209844-6b0b8b04ce9a?w=300&h=300&fit=crop",
    description: "Diseño premium con cámara Hasselblad"
  },
  {
    id: 12,
    name: "Motorola G54",
    brand: "Motorola",
    price: 349000,
    image: "https://images.unsplash.com/photo-1598291209844-6b0b8b04ce9a?w=300&h=300&fit=crop",
    description: "Pantalla AMOLED y batería de larga duración"
  },

  // GOOGLE PIXEL
  {
    id: 13,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 999000,
    image: "https://images.unsplash.com/photo-1574585616712-d67d3c3f8d93?w=300&h=300&fit=crop",
    description: "IA y fotografía en el nivel máximo"
  },
  {
    id: 14,
    name: "Google Pixel 8",
    brand: "Google",
    price: 749000,
    image: "https://images.unsplash.com/photo-1574585616712-d67d3c3f8d93?w=300&h=300&fit=crop",
    description: "La cámara computacional de Google"
  },
  {
    id: 15,
    name: "Google Pixel 7a",
    brand: "Google",
    price: 449000,
    image: "https://images.unsplash.com/photo-1574585616712-d67d3c3f8d93?w=300&h=300&fit=crop",
    description: "Calidad Pixel a precio accesible"
  },

  // HUAWEI
  {
    id: 16,
    name: "Huawei P60 Pro",
    brand: "Huawei",
    price: 799000,
    image: "https://images.unsplash.com/photo-1511295054353-5c3b10a89f81?w=300&h=300&fit=crop",
    description: "Cámara LEICA y tecnología HarmonyOS"
  },
  {
    id: 17,
    name: "Huawei P60",
    brand: "Huawei",
    price: 599000,
    image: "https://images.unsplash.com/photo-1511295054353-5c3b10a89f81?w=300&h=300&fit=crop",
    description: "Fotografía profesional en el bolsillo"
  },
  {
    id: 18,
    name: "Huawei nova 12",
    brand: "Huawei",
    price: 399000,
    image: "https://images.unsplash.com/photo-1511295054353-5c3b10a89f81?w=300&h=300&fit=crop",
    description: "Diseño elegante y rendimiento confiable"
  }
]
