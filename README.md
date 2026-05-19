# Movix Store

Página web one-page para la tienda de celulares **Movix** (Colombia).

## Tecnologías

- React 19
- Vite 8
- TypeScript

## Cómo ejecutar en tu computador

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente `http://localhost:5173`).

## Cómo publicar en Vercel

1. Sube el proyecto a GitHub.
2. Entra en [vercel.com](https://vercel.com) e inicia sesión.
3. **Add New Project** → importa tu repositorio.
4. Vercel detecta Vite automáticamente:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clic en **Deploy**.

## Estructura del proyecto

```
src/
  components/   → Navbar, Hero, Brands, Catalog, ProductCard, Footer
  data/         → phones.ts (lista de celulares)
  styles/       → global.css
  utils/        → scrollTo.ts (navegación suave)
  App.tsx       → une todos los componentes
```

## Scripts útiles

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Compila para producción  |
| `npm run preview` | Prueba la build local |
