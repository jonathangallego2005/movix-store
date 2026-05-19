# 📝 GUÍA RÁPIDA DE REFERENCIA - MOVIX STORE

## ⚡ Comandos Más Usados

```bash
npm run dev          # Inicia servidor (http://localhost:5173)
npm run build        # Compila para producción
npm run preview      # Ve cómo se vería en producción
npm run lint         # Verifica errores de código
```

## 🎯 Tareas Comunes

### Agregar un nuevo celular
1. Abre: `src/data/phones.ts`
2. Copia un celular existente
3. Cambia: `id`, `name`, `brand`, `price`, `image`, `description`
4. ¡Listo! Aparece automáticamente en la página

### Cambiar un color
1. Busca en los archivos `.css` el código de color
   - `#0F172A` = Azul oscuro principal
   - `#2563EB` = Azul brillante (botones)
   - `#FFFFFF` = Blanco
   - `#E5E7EB` = Gris claro
2. Reemplaza con tu color favorito

### Cambiar email de contacto
1. Abre: `src/components/Footer.tsx`
2. Busca: `info@movix.com.co`
3. Reemplaza con tu email

### Cambiar logo
1. Abre: `src/components/Navbar.tsx`
2. Busca: `<h1>MOVIX</h1>`
3. Reemplaza con tu nombre de tienda

## 📁 Dónde Está Cada Cosa

| Qué necesitas cambiar | Dónde está |
|----------------------|-----------|
| Productos/celulares | `src/data/phones.ts` |
| Diseño Navbar | `src/components/Navbar.tsx` |
| Banner principal | `src/components/Hero.tsx` |
| Tarjetas de productos | `src/components/ProductCard.tsx` |
| Grid y filtros | `src/components/Catalog.tsx` |
| Pie de página | `src/components/Footer.tsx` |
| Colores generales | `src/styles/global.css` |
| Colores específicos | `src/components/[Componente].css` |

## 🔴 🔵 Paleta de Colores

```
Azul Oscuro      #0F172A  ← Fondo principal, navbar, footer
Azul Brillante   #2563EB  ← Botones, enlaces, acentos
Blanco           #FFFFFF  ← Texto principal, fondos limpios
Gris Claro       #E5E7EB  ← Bordes, texto secundario
```

## 📐 Responsividad

```css
Móvil pequeño:  < 480px
Tablet:         481px - 768px
Desktop:        > 769px
```

Cada componente se adapta automáticamente.

## 🔍 Estructura de Componentes

```
App.tsx (principal)
├── Navbar (barra superior)
├── Main
│   ├── Hero (banner principal)
│   └── Catalog (productos + filtro)
└── Footer (pie de página)
```

## 💾 Guardando Cambios en Git

```bash
git add .                    # Prepara todos los cambios
git commit -m "tu mensaje"  # Guarda con descripción
git push                     # Sube a GitHub
```

## 🐛 Errores Comunes

| Error | Solución |
|-------|----------|
| "Cannot find module" | Verifica el import está correcto |
| "Port 5173 already in use" | `npm run dev -- --port 3000` |
| Cambios no se ven | Recarga el navegador (Ctrl+F5) |
| El build falla | Ejecuta `npm install` primero |

## 📱 Tamaños de Pantalla para Probar

- **Móvil:** 375px (iPhone)
- **Tablet:** 768px (iPad)
- **Desktop:** 1200px+ (computadora)

Usa F12 en el navegador para cambiar tamaño.

## 🎨 Cambiar Tipo de Letra

La fuente actual es **Poppins**. Para cambiar:
1. Abre: `src/styles/global.css`
2. Busca: `@import url('https://fonts.googleapis.com/...')`
3. Reemplaza con otra fuente de Google Fonts
4. Cambia: `font-family: 'Poppins'` por el nuevo nombre

## 📦 Exportar para Publicar

```bash
npm run build
# Esto crea una carpeta "/dist" con todos los archivos listos
# Sube esta carpeta a tu hosting
```

## ✨ Animaciones Principales

- **Navbar**: Menú hamburguesa con rotación
- **Hero**: Textos y botón se deslizan
- **ProductCard**: Efecto hover (se eleva)
- **Transiciones**: Suaves en 0.3s

## 🔧 Estructura TypeScript

```tsx
// Importar componente
import { Navbar } from './components/Navbar'

// Usar componente
<Navbar />

// Importar datos
import { phones } from './data/phones'
```

## 📊 Datos de un Celular

```tsx
{
  id: 1,                              // Número único
  name: "iPhone 15 Pro",              // Nombre del modelo
  brand: "Apple",                     // Marca
  price: 1299000,                     // Precio en COP
  image: "https://...",               // URL de imagen
  description: "Descripción corta"    // Descripción
}
```

## 🚀 Checklist Antes de Publicar

- [ ] Ejecuté `npm run build` sin errores
- [ ] Probé en móvil, tablet y desktop
- [ ] Los colores se ven bien
- [ ] Los precios están actualizados
- [ ] El email de contacto es correcto
- [ ] Las imágenes cargan bien
- [ ] Sin errores en consola (F12)

## 🌐 Opciones para Publicar

1. **Vercel** (recomendado) - Conecta GitHub y listo
2. **Netlify** - Sube `/dist` y listo
3. **GitHub Pages** - Sube `/dist` a una rama
4. **Hosting web cualquiera** - Sube `/dist` por FTP

## 📞 Archivos para Entender Mejor

| Archivo | Cuándo leerlo |
|---------|---------------|
| `README.md` | Resumen del proyecto |
| `DOCUMENTACION.md` | Explicación detallada |
| `INSTRUCCIONES_FINALES.md` | Pasos siguientes |
| Este archivo | Cuando necesitas referencia rápida |

## 💡 Tips Profesionales

- Siempre usa `npm run dev` mientras desarrollas
- Haz commits pequeños y frecuentes
- Actualiza README si haces cambios grandes
- Comenta el código confuso
- Usa nombres descriptivos para variables
- Prueba en móvil frecuentemente

---

**¿Necesitas algo más?** Consulta `DOCUMENTACION.md` para explicaciones detalladas.
