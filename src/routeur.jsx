import { useEffect, useState } from 'react'

// Petit routeur maison : chaque onglet a sa propre adresse (/realisations, /contact...)
// sans recharger la page. Firebase renvoie toutes les adresses vers index.html
// (option « single-page app »), donc un lien direct vers /alternance fonctionne aussi.

export function normaliser(chemin) {
  if (chemin.length > 1 && chemin.endsWith('/')) return chemin.slice(0, -1)
  return chemin || '/'
}

export function naviguer(chemin) {
  if (normaliser(chemin) === normaliser(window.location.pathname)) {
    window.scrollTo(0, 0)
    return
  }
  window.history.pushState({}, '', chemin)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

// Renvoie l'adresse de la page affichée, et se met à jour quand elle change
// (clic sur un lien, boutons précédent et suivant du navigateur).
export function useChemin() {
  const [chemin, setChemin] = useState(() => normaliser(window.location.pathname))
  useEffect(() => {
    const mettreAJour = () => setChemin(normaliser(window.location.pathname))
    window.addEventListener('popstate', mettreAJour)
    return () => window.removeEventListener('popstate', mettreAJour)
  }, [])
  return chemin
}

// Lien interne : change de page sans recharger le site.
// Ctrl+clic ou clic molette ouvrent toujours un nouvel onglet normalement.
export function Lien({ vers, children, ...props }) {
  function clic(e) {
    if (e.defaultPrevented || e.button !== 0) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    naviguer(vers)
  }
  return (
    <a href={vers} onClick={clic} {...props}>
      {children}
    </a>
  )
}
