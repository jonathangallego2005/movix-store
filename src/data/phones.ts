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
    image: "https://co.nixblix.com/cdn/shop/files/27439196537008-iphone_15_pro_max_blue_titanium_pdp_image_position-1__coes.jpg?v=1753466314",
    description: "El smartphone más avanzado de Apple con pantalla Super Retina XDR"
  },
  {
    id: 2,
    name: "iPhone 15",
    brand: "Apple",
    price: 899000,
    image: "https://co.tiendasishop.com/cdn/shop/files/IMG-10935051_b67beb9e-6d64-4a98-b398-c0299496beb9.jpg?v=1723513454&width=823",
    description: "Potencia y elegancia en un diseño compacto"
  },
  {
    id: 3,
    name: "iPhone 14",
    brand: "Apple",
    price: 699000,
    image: "https://itechcolombia.co/wp-content/uploads/2022/10/iphone-14-starlight-1__55760.png",
    description: "Performance excepcional con chip A15 Bionic"
  },

  // SAMSUNG
  {
    id: 4,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1199000,
    image: "https://media.falabella.com/falabellaCO/129888020_05/w=1500,h=1500,fit=cover",
    description: "La máxima expresión de tecnología Samsung"
  },
  {
    id: 5,
    name: "Galaxy S24",
    brand: "Samsung",
    price: 849000,
    image: "https://www.smartgadgets.com.co/cdn/shop/files/392.jpg?v=1734210965",
    description: "Pantalla AMOLED de 120Hz con cámara revolucionaria"
  },
  {
    id: 6,
    name: "Galaxy A54",
    brand: "Samsung",
    price: 449000,
    image: "https://www.clevercel.co/cdn/shop/files/Portadas_SamsungA54_513d3597-89f2-4b82-b398-c7c4a3ca0475.webp?v=1757093044&width=1214",
    description: "Excelente relación precio-rendimiento"
  },

  // XIAOMI
  {
    id: 7,
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: 599000,
    image: "https://http2.mlstatic.com/D_NQ_NP_796789-MLA99489710004_112025-O.webp",
    description: "Fotografía profesional en tu bolsillo"
  },
  {
    id: 8,
    name: "Xiaomi 14",
    brand: "Xiaomi",
    price: 449000,
    image: "https://http2.mlstatic.com/D_Q_NP_695708-MLA99523955560_122025-O.webp",
    description: "Procesador Snapdragon 8 Gen 3"
  },
  {
    id: 9,
    name: "Xiaomi Redmi Note 13",
    brand: "Xiaomi",
    price: 249000,
    image: "https://http2.mlstatic.com/D_NQ_NP_748621-MLA76569863127_052024-O.webp",
    description: "Batería de 5000mAh con carga rápida"
  },

  // MOTOROLA
  {
    id: 10,
    name: "Motorola Edge 50 Ultra",
    brand: "Motorola",
    price: 899000,
    image: "https://exitocol.vtexassets.com/arquivos/ids/32517753/Celular-MOTOROLA-Edge-50-Fusion-256GB-256-GB-8-GB-RAM-Azul-3557513_e.jpg?v=639065286099170000",
    description: "Edge + pantalla OLED curvada de 144Hz"
  },
  {
    id: 11,
    name: "Motorola Edge 50",
    brand: "Motorola",
    price: 599000,
    image: "https://exitocol.vtexassets.com/arquivos/ids/32517753/Celular-MOTOROLA-Edge-50-Fusion-256GB-256-GB-8-GB-RAM-Azul-3557513_e.jpg?v=639065286099170000",
    description: "Diseño premium con cámara Hasselblad"
  },
  {
    id: 12,
    name: "Motorola G54",
    brand: "Motorola",
    price: 349000,
    image: "https://exitocol.vteximg.com.br/arquivos/ids/32515370/Moto-G54-256GB-Verde-MOTOROLA-G54-256-gb-256-GB-8-GB-RAM-Verde-3500233_f.jpg?v=639065272536230000",
    description: "Pantalla AMOLED y batería de larga duración"
  },

  // GOOGLE PIXEL
  {
    id: 13,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 999000,
    image: "https://http2.mlstatic.com/D_NQ_NP_844251-MLA100008246217_122025-O.webp",
    description: "IA y fotografía en el nivel máximo"
  },
  {
    id: 14,
    name: "Google Pixel 8",
    brand: "Google",
    price: 749000,
    image: "https://http2.mlstatic.com/D_NQ_NP_898497-MLA96414764110_102025-O.webp",
    description: "La cámara computacional de Google"
  },
  {
    id: 15,
    name: "Google Pixel 7a",
    brand: "Google",
    price: 449000,
    image: "https://http2.mlstatic.com/D_NQ_NP_640892-MLA99985861347_112025-O.webp",
    description: "Calidad Pixel a precio accesible"
  },

  // HUAWEI
  {
    id: 16,
    name: "Huawei P60 Pro",
    brand: "Huawei",
    price: 799000,
    image: "https://hsi.com.co/wp-content/uploads/2023/12/Imagen-Huawei-P60-Pro-Negro.jpg",
    description: "Cámara LEICA y tecnología HarmonyOS"
  },
  {
    id: 17,
    name: "Huawei P60",
    brand: "Huawei",
    price: 599000,
    image: "https://cdn.smart-gsm.com/img/picture/huawei-p60.jpg",
    description: "Fotografía profesional en el bolsillo"
  },
  {
    id: 18,
    name: "Huawei nova 12",
    brand: "Huawei",
    price: 399000,
    image: "https://img01.huaweifile.com/sg/ms/co/pms/uomcdn/CO_HW_B2C/pms/202403/gbom/6942103117626/800_800_59223899463EE99C766D4785762B51B4mp.png",
    description: "Diseño elegante y rendimiento confiable"
  }
]
