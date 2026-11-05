import { useEffect, useRef } from 'react'
import Entete from './components/Entete.jsx'
import PiedDePage from './components/PiedDePage.jsx'
import Suite from './components/Suite.jsx'
import { pages, redirections } from './pages.js'
import { Lien, useChemin } from './routeur.jsx'
import { profil } from './data.js'
import './App.css'

const nomSite = `${profil.prenom} ${profil.nom}`

// La page est une baie serveur : deux rails de fixation, et la page affichée
// est un module vissé dedans, numéroté selon sa place dans la visite (U01, U02...).
// Sous chaque page, la barre « Suite » mène à la page suivante de la visite.
export default function App() {
  const cheminDemande = useChemin()
  const chemin = redirections[cheminDemande] ?? cheminDemande
  const page = pages.find((p) => p.chemin === chemin)
  const zone = useRef(null)
  const premierAffichage = useRef(true)

  useEffect(() => {
    if (chemin !== cheminDemande) window.history.replaceState({}, '', chemin)

    document.title = !page
      ? `Page introuvable – ${nomSite}`
      : page.chemin === '/'
        ? `${nomSite} – Portfolio BTS SIO SISR`
        : `${page.titre} – ${nomSite}`

    // À chaque changement de page : retour en haut, et le lecteur d'écran
    // annonce la nouvelle page (sauf au tout premier affichage).
    if (premierAffichage.current) {
      premierAffichage.current = false
      return
    }
    window.scrollTo(0, 0)
    zone.current?.focus({ preventScroll: true })
  }, [chemin, cheminDemande, page])

  return (
    <>
      <a className="lien-evitement" href="#contenu">
        Aller au contenu
      </a>
      <Entete cheminActif={chemin} />
      <div className="baie">
        <span className="rail" aria-hidden="true" />
        <main
          id="contenu"
          ref={zone}
          tabIndex={-1}
          style={{ counterReset: `u ${page ? page.u - 1 : 0}` }}
        >
          {page ? <page.Composant key={page.chemin} {...page.props} /> : <Introuvable />}
          {page && <Suite key={`suite-${page.chemin}`} chemin={page.chemin} />}
        </main>
        <span className="rail" aria-hidden="true" />
      </div>
      <PiedDePage />
    </>
  )
}

function Introuvable() {
  return (
    <section className="section">
      <div className="conteneur">
        <div className="section-tete">
          <h2 className="section-titre">Page introuvable</h2>
          <p className="section-intro">Cette adresse ne correspond à aucune page du portfolio.</p>
        </div>
        <Lien vers="/" className="bouton bouton-principal">
          Revenir à l'accueil
        </Lien>
      </div>
    </section>
  )
}
