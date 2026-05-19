// Función simple para ir a una sección al hacer clic en un botón
// Ejemplo: scrollToSection('catalogo')

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Lee ?marca=Apple de la URL (después del #catalogo)
export function getBrandFromUrl(): string | null {
  const hash = window.location.hash
  const queryStart = hash.indexOf('?')
  if (queryStart === -1) return null

  const params = new URLSearchParams(hash.slice(queryStart + 1))
  return params.get('marca')
}
