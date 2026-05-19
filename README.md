# MOVIX STORE ⌚ 📱

Una página web profesional y moderna para una tienda de celulares, construida con **React**, **Vite** y **TypeScript**.

## 🎯 Características Principales

✨ **Diseño Moderno y Responsive**
- Se adapta perfectamente a cualquier dispositivo (móvil, tablet, desktop)
- Interfaz profesional con animaciones suaves
- Navbar sticky con menú hamburguesa responsivo

🛍️ **Catálogo Dinámico**
- 18 celulares de 6 marcas diferentes
- Filtro por marca en tiempo real
- Tarjetas de productos con efectos hover
- Precios en pesos colombianos (COP)

🎨 **Paleta de Colores Profesional**
- Azul oscuro (#0F172A) - Base
- Azul brillante (#2563EB) - Acentos
- Blanco (#FFFFFF) - Fondo limpio
- Gris claro (#E5E7EB) - Bordes

📍 **Secciones**
1. **Navbar** - Navegación y logo
2. **Hero Section** - Banner principal llamativo
3. **Catalog** - Productos con filtros
4. **Footer** - Contacto e información

## 🚀 Inicio Rápido

### 1. Clonar o descargar el proyecto
```bash
git clone https://github.com/jonathangalego2005/movix-store.git
cd movix-store
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173`

### 4. Construir para producción
```bash
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── Catalog.tsx
│   ├── Footer.tsx
│   └── *.css            # Estilos de cada componente
├── data/
│   └── phones.ts        # Datos de celulares
├── styles/
│   └── global.css       # Estilos globales
├── App.tsx              # Componente principal
└── main.tsx             # Punto de entrada
```

## 💻 Stack Tecnológico

- **React 19.2.6** - Framework principal
- **Vite 8.0.12** - Bundler rápido
- **TypeScript 6.0** - Lenguaje tipado
- **CSS3** - Estilos y animaciones
- **Poppins Font** - Tipografía moderna

## 🎨 Personalización

### Cambiar Colores
Edita los archivos CSS en cada componente y reemplaza los códigos de color:
```css
#0F172A ← Azul oscuro
#2563EB ← Azul brillante
#FFFFFF ← Blanco
#E5E7EB ← Gris claro
```

### Agregar Productos
Abre `src/data/phones.ts` y agrega un nuevo objeto al array:
```tsx
{
  id: 19,
  name: "Nuevo Celular",
  brand: "Marca",
  price: 999000,
  image: "url-de-imagen",
  description: "Descripción"
}
```

### Cambiar Información de Contacto
En `src/components/Footer.tsx`, actualiza:
- Email
- Teléfono
- Dirección
- Enlaces a redes sociales

## 📊 Marcas Disponibles

- 🍎 Apple (iPhone 15 Pro, iPhone 15, iPhone 14)
- 📱 Samsung (Galaxy S24 Ultra, S24, A54)
- 🟠 Xiaomi (14 Ultra, 14, Redmi Note 13)
- 🔴 Motorola (Edge 50 Ultra, Edge 50, G54)
- 🔵 Google Pixel (8 Pro, 8, 7a)
- 🔴 Huawei (P60 Pro, P60, nova 12)

## 📱 Responsive Design

| Dispositivo | Ancho | Estado |
|-------------|-------|--------|
| Móvil | < 480px | ✅ Optimizado |
| Tablet | 481px - 768px | ✅ Optimizado |
| Desktop | > 769px | ✅ Optimizado |

## ✨ Características Técnicas

### Componentes Reutilizables
- `ProductCard` - Se usa para cada celular del catálogo
- Recibe datos a través de props
- Mantiene código limpio y mantenible

### Estado Dinámico (React Hooks)
- `useState` para el menú hamburguesa
- `useState` para el filtro de marcas
- Filtrado en tiempo real de productos

### Animaciones CSS
- Slide-in en Hero section
- Hover effects en botones y tarjetas
- Transiciones suaves en todos los elementos
- Animación del menú hamburguesa

## 🔧 Comandos Disponibles

```bash
npm run dev        # Inicia servidor de desarrollo
npm run build      # Construye para producción
npm run preview    # Vista previa de producción
npm run lint       # Verifica código con ESLint
```

## 📚 Documentación Completa

Para una explicación detallada de cada componente, concepto y cómo ampliar el proyecto, consulta el archivo:
👉 **[DOCUMENTACION.md](DOCUMENTACION.md)**

## 🌐 Deploy

### Opción 1: Vercel (Recomendado)
1. Sube el proyecto a GitHub
2. Conecta con Vercel
3. ¡Automáticamente se despliega!

### Opción 2: Netlify
1. Ejecuta `npm run build`
2. Sube la carpeta `/dist` a Netlify

### Opción 3: GitHub Pages
```bash
npm run build
# Sube los archivos de /dist a un repositorio de GitHub Pages
```

## 🐛 Troubleshooting

### El servidor no inicia
```bash
npm install          # Instala todas las dependencias
npm run dev          # Intenta de nuevo
```

### Errores de compilación
```bash
npm run build        # Verifica si hay errores de TypeScript
```

### Puerto 5173 ocupado
```bash
npm run dev -- --port 3000  # Usa otro puerto
```

## 📝 Notas para Principiantes

Este proyecto está diseñado para ser **fácil de entender**:

- ✅ Código limpio con comentarios explicativos
- ✅ Estructura de carpetas lógica
- ✅ Componentes simples y reutilizables
- ✅ Sin patrones avanzados complicados
- ✅ Cada archivo tiene un propósito claro

## 🎓 Aprendizajes Clave

- Componentes React funcionales
- Hooks (useState)
- Props y comunicación entre componentes
- CSS Responsive Design
- Mobile-First approach
- Array methods (.map(), .filter())
- Imports y exports en módulos

## 👨‍💼 Autor

Desarrollado por **Senior Frontend Developer** con 30 años de experiencia.

## 📄 Licencia

Este proyecto está disponible bajo licencia MIT. Úsalo libremente en tus proyectos personales o educativos.

---

**¿Te gustaría ampliar este proyecto?** 
- Agrega un carrito de compras
- Integra una base de datos real
- Agrega un sistema de búsqueda
- Crea páginas de detalle de productos

**¡Felicidades por tener tu tienda online! 🎉**


```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
