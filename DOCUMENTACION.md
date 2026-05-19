# MOVIX STORE - Documentación del Proyecto

¡Bienvenidos al proyecto MOVIX STORE! Este es un sitio web profesional de una página para una tienda de celulares, construido con React, Vite y TypeScript.

## 📋 Tabla de Contenidos
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)
3. [Explicación de Componentes](#explicación-de-componentes)
4. [Explicación de Datos](#explicación-de-datos)
5. [Paleta de Colores](#paleta-de-colores)
6. [Conceptos Clave para Principiantes](#conceptos-clave-para-principiantes)

---

## 🏗️ Estructura del Proyecto

```
src/
├── components/          ← Aquí van los componentes React (piezas reutilizables)
│   ├── Navbar.tsx       ← Barra de navegación
│   ├── Navbar.css       ← Estilos del Navbar
│   ├── Hero.tsx         ← Sección principal con banner
│   ├── Hero.css         ← Estilos del Hero
│   ├── ProductCard.tsx  ← Tarjeta de un producto (reutilizable)
│   ├── ProductCard.css  ← Estilos del ProductCard
│   ├── Catalog.tsx      ← Catálogo con filtros
│   ├── Catalog.css      ← Estilos del Catalog
│   ├── Footer.tsx       ← Pie de página
│   └── Footer.css       ← Estilos del Footer
│
├── data/                ← Datos de la aplicación
│   └── phones.ts        ← Lista de celulares disponibles
│
├── styles/              ← Estilos globales
│   └── global.css       ← Estilos que se aplican a toda la página
│
├── App.tsx              ← Componente principal (combina todos)
├── App.css              ← Estilos de App
├── main.tsx             ← Punto de entrada de React
├── index.css            ← Estilos iniciales
└── index.html           ← HTML principal
```

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. **Instalar dependencias** (primera vez)
```bash
npm install
```

### 2. **Ejecutar servidor de desarrollo** (durante desarrollo)
```bash
npm run dev
```
Luego abre tu navegador en: `http://localhost:5173`

### 3. **Construir para producción**
```bash
npm run build
```

### 4. **Ver vista previa de producción**
```bash
npm run preview
```

---

## 📦 Explicación de Componentes

### 1️⃣ **Navbar (Barra de Navegación)**

**Ubicación:** `src/components/Navbar.tsx`

**¿Qué hace?**
- Aparece en la parte superior de la página
- Contiene el logo "MOVIX" y enlaces de navegación
- Es responsive (se adapta a móviles con un menú hamburguesa)

**¿Cómo funciona?**
```tsx
const [menuOpen, setMenuOpen] = useState(false)
```
- `useState` es un "gancho" (hook) que guarda si el menú está abierto o cerrado
- Cuando se hace click en el botón hamburguesa, el estado cambia
- El menú se abre o se cierra con una animación suave

**Estados:**
- En desktop: muestra el menú siempre visible
- En móvil: muestra un botón hamburguesa, el menú aparece al hacer click

---

### 2️⃣ **Hero (Sección Principal)**

**Ubicación:** `src/components/Hero.tsx`

**¿Qué hace?**
- Es el primer banner grande que ves al entrar a la página
- Contiene un título llamativo, subtítulo y botón de llamada a la acción
- Tiene una imagen de smartphone

**¿Por qué es importante?**
- Es la primera impresión de los visitantes
- Comunica el mensaje principal de la tienda
- Tiene animaciones suaves que captan la atención

**Estructura:**
```
Hero Section
├── Contenido de Texto
│   ├── Título grande
│   ├── Subtítulo descriptivo
│   └── Botón "Explorar Catálogo"
└── Imagen de Smartphone
```

---

### 3️⃣ **ProductCard (Tarjeta de Producto)**

**Ubicación:** `src/components/ProductCard.tsx`

**¿Qué hace?**
- Muestra un celular individual
- Contiene: imagen, nombre, marca, descripción, precio y botón

**¿Por qué es "reutilizable"?**
- El mismo componente se usa para cada uno de los 18 celulares
- Recibe datos diferentes para cada celular (a través de "props")
- Es como una plantilla que se repite

**¿Qué es "props"?**
- Props = propiedades que pasamos a un componente
- En este caso: `phone` (objeto con datos del celular)

**Ejemplo:**
```tsx
<ProductCard phone={phones[0]} />  ← Primer iPhone
<ProductCard phone={phones[1]} />  ← Segundo iPhone
```

**Características:**
- Formatea el precio a moneda colombiana (COP)
- Tiene efectos hover: la tarjeta se eleva y muestra sombra
- La imagen se agranda un poco al pasar el mouse

---

### 4️⃣ **Catalog (Catálogo con Filtros)**

**Ubicación:** `src/components/Catalog.tsx`

**¿Qué hace?**
- Muestra todas las tarjetas de productos en un grid (malla)
- Tiene un filtro por marca (select/dropdown)
- Filtra los productos dinámicamente

**¿Cómo funciona el filtro?**
```tsx
const [selectedBrand, setSelectedBrand] = useState('Todas')
```
- Guarda qué marca está seleccionada
- Cuando cambias el select, se actualiza el estado
- El componente se "re-renderiza" (redibuja) con los productos filtrados

**Lógica del filtro:**
```tsx
const filteredPhones = selectedBrand === 'Todas' 
  ? phones 
  : phones.filter(phone => phone.brand === selectedBrand)
```
- Si seleccionas "Todas": muestra todos los celulares
- Si seleccionas "Apple": solo muestra celulares Apple
- Si seleccionas "Samsung": solo muestra celulares Samsung

**Grid Responsive:**
- Desktop (> 768px): 4 columnas
- Tablet (481-768px): 2-3 columnas  
- Móvil (< 480px): 1 columna

---

### 5️⃣ **Footer (Pie de Página)**

**Ubicación:** `src/components/Footer.tsx`

**¿Qué hace?**
- Aparece al final de la página
- Contiene información de contacto, enlaces y redes sociales
- Muestra el año actual automáticamente

**Secciones:**
1. **Información de MOVIX** - Quiénes somos
2. **Contacto** - Email, teléfono, dirección
3. **Enlaces Rápidos** - Links a secciones de la página
4. **Redes Sociales** - Links a Facebook, Instagram, Twitter, WhatsApp

**Dato interesante:**
```tsx
const currentYear = new Date().getFullYear()
```
- Obtiene el año actual automáticamente
- El copyright siempre mostrará el año correcto

---

## 📊 Explicación de Datos

**Ubicación:** `src/data/phones.ts`

### ¿Qué contiene?
Una lista (array) de 18 celulares con información:
- `id` - Número único del producto
- `name` - Nombre del celular (ej: "iPhone 15 Pro")
- `brand` - Marca (Apple, Samsung, Xiaomi, etc.)
- `price` - Precio en COP (pesos colombianos)
- `image` - URL de la imagen
- `description` - Descripción corta

### Estructura de datos:
```tsx
interface Phone {
  id: number
  name: string
  brand: string
  price: number
  image: string
  description: string
}
```

### Las marcas incluidas:
- 🍎 Apple (3 modelos)
- 📱 Samsung (3 modelos)
- 🟠 Xiaomi (3 modelos)
- 🔴 Motorola (3 modelos)
- 🔵 Google Pixel (3 modelos)
- 🔴 Huawei (3 modelos)

### ¿Cómo agregar un nuevo celular?
1. Abre `src/data/phones.ts`
2. Copia un celular existente
3. Cambia los valores (id, name, brand, price, etc.)
4. Agrega a la lista
5. ¡Listo! El celular aparecerá automáticamente en la página

---

## 🎨 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Azul Oscuro | `#0F172A` | Fondo principal, navbar, footer |
| Azul Brillante | `#2563EB` | Botones, enlaces, acentos |
| Blanco | `#FFFFFF` | Texto principal, fondo de tarjetas |
| Gris Claro | `#E5E7EB` | Bordes, texto secundario |

### Tipografía
- **Fuente:** Poppins
- **Importada desde:** Google Fonts
- **Pesos disponibles:** 300, 400, 500, 600, 700

---

## 📚 Conceptos Clave para Principiantes

### 1. **Componentes React**
Los componentes son como "bloques de construcción" de la página.
```tsx
export function Navbar() {
  return (
    <nav className="navbar">
      {/* contenido aquí */}
    </nav>
  )
}
```
- Cada componente es una función que retorna JSX
- `export` hace que se pueda usar en otros archivos
- Los componentes pueden ser reutilizables

### 2. **JSX**
Es HTML dentro de JavaScript
```tsx
<h1>Hola {nombre}</h1>  ← Puedes usar variables
<button onClick={handleClick}>Clickear</button>
```

### 3. **Estado (useState)**
Guarda información que puede cambiar
```tsx
const [count, setCount] = useState(0)
setCount(count + 1)  ← Actualiza el estado y redibuja el componente
```

### 4. **Props (Propiedades)**
Pasar datos de un componente a otro
```tsx
<ProductCard phone={celular} />
// En ProductCard:
export function ProductCard({ phone }) {
  return <h1>{phone.name}</h1>
}
```

### 5. **CSS Modules vs CSS Normal**
Este proyecto usa **CSS normal** (no CSS Modules)
- Cada componente tiene su propio archivo `.css`
- Los estilos se aplican con `className="nombre"`
- Es más fácil para principiantes

### 6. **Media Queries (Responsive)**
Adapta el diseño a diferentes tamaños de pantalla
```css
@media (max-width: 768px) {
  .navbar-menu {
    position: absolute;
    /* estilos diferentes para móvil */
  }
}
```

### 7. **Array.map() - Renderizar listas**
Crea un componente por cada elemento
```tsx
{phones.map(phone => (
  <ProductCard key={phone.id} phone={phone} />
))}
```
- `map()` itera sobre cada elemento
- `key` es importante para React (debe ser único)

### 8. **Animaciones CSS**
Hacen la página más viva y profesional
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

---

## 🔧 Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 19.2.6 | Framework principal |
| Vite | 8.0.12 | Empaquetador (bundler) |
| TypeScript | ~6.0.2 | Lenguaje tipado (mayor seguridad) |
| CSS3 | - | Estilos y animaciones |
| Node.js | - | Entorno de ejecución |

---

## 📝 Notas Importantes

### ✅ Lo que este proyecto HACE bien:
- Código limpio y fácil de entender
- Comentarios explicando cada sección
- Componentes reutilizables
- Diseño responsive (funciona en móvil)
- Animaciones suaves y profesionales
- Estructura de carpetas clara

### ⚠️ Lo que NO hace (pero puede agregarse después):
- Carrito de compras (agregar productos al carrito)
- Búsqueda de productos
- Detalles completos de cada celular
- Integración con una base de datos real
- Sistema de login/registro
- Pasarela de pagos

---

## 🚀 Próximos Pasos

¿Quieres expandir este proyecto? Aquí hay algunas ideas:

1. **Agregar más celulares** - Edita `src/data/phones.ts`
2. **Cambiar colores** - Actualiza los códigos en los archivos `.css`
3. **Agregar más secciones** - Crea nuevos componentes
4. **Mejorar animaciones** - Agrega más `@keyframes` en CSS
5. **Agregar imágenes reales** - Reemplaza los URLs de imágenes

---

## 💡 Preguntas Frecuentes

### P: ¿Por qué TypeScript?
R: TypeScript ayuda a detectar errores antes de que el código se ejecute.

### P: ¿Puedo cambiar los colores?
R: Sí, encuentra los códigos de color en cada archivo `.css` y cámbialos.

### P: ¿Cómo agrego un celular nuevo?
R: Agrega un objeto nuevo a la lista en `src/data/phones.ts`

### P: ¿Por qué no funciona en mi navegador?
R: Asegúrate de ejecutar `npm run dev` y abre `http://localhost:5173`

### P: ¿Puedo deployar esto online?
R: Sí, después de `npm run build`, sube la carpeta `/dist` a un hosting como Vercel, Netlify o GitHub Pages.

---

## 👨‍💻 Autor
Proyecto creado por tu Senior Frontend Developer

## 📄 Licencia
Este proyecto está libre para usar y modificar.

---

**¡Felicidades! Ahora tienes una página web profesional de una tienda de celulares. 🎉**
