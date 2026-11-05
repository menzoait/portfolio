import { useEffect, useRef, useState } from 'react'
import { credly, profil } from '../data.js'
import { menu, pages } from '../pages.js'
import { Lien } from '../routeur.jsx'

// Le numéro de module d'une page (U01, U02...), comme dans la baie
function numero(chemin) {
  const u = pages.find((p) => p.chemin === chemin)?.u
  return u ? `U${String(u).padStart(2, '0')}` : ''
}

// En-tête : le bouton ☰ et le nom en haut, la page affichée à droite.
// Le bouton ouvre le menu sur le côté gauche (une fenêtre <dialog>) :
// on le ferme avec la croix, la touche Échap, un clic à côté ou en choisissant une page.
export default function Entete({ cheminActif }) {
  const [ouvert, setOuvert] = useState(false)
  const tiroir = useRef(null)
  const pageActive = pages.find((p) => p.chemin === cheminActif)

  // Ouvrir ou fermer la fenêtre selon l'état, et bloquer le défilement derrière
  useEffect(() => {
    const fenetre = tiroir.current
    if (!fenetre) return
    if (ouvert && !fenetre.open) fenetre.showModal()
    if (!ouvert && fenetre.open) fenetre.close()
    document.documentElement.classList.toggle('tiroir-ouvert', ouvert)
  }, [ouvert])

  // Changer de page (même avec le bouton Retour du navigateur) referme le menu
  useEffect(() => {
    tiroir.current?.close()
  }, [cheminActif])

  // Un clic sur un lien du menu ou à côté du menu le referme
  function clicDansTiroir(e) {
    if (e.target === e.currentTarget || e.target.closest('a')) {
      tiroir.current?.close()
    }
  }

  const externes = [
    profil.linkedin && { href: profil.linkedin, texte: 'LinkedIn' },
    profil.github && { href: profil.github, texte: 'GitHub' },
    credly && { href: credly, texte: 'Credly' },
    profil.cv && { href: profil.cv, texte: 'CV' },
  ].filter(Boolean)

  return (
    <header className="entete">
      <div className="conteneur entete-ligne">
        <button
          type="button"
          className="burger"
          aria-expanded={ouvert}
          aria-controls="tiroir"
          onClick={() => setOuvert(true)}
        >
          <span className="burger-barres" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="sr-only">Ouvrir le menu</span>
        </button>

        <Lien vers="/" className="marque" aria-current={cheminActif === '/' ? 'page' : undefined}>
          {profil.prenom} {profil.nom}
        </Lien>

        {pageActive && pageActive.chemin !== '/' && (
          <p className="entete-position">
            <span className="entete-u">{numero(pageActive.chemin)}</span>
            {pageActive.titre}
          </p>
        )}
      </div>

      <dialog
        id="tiroir"
        ref={tiroir}
        className="tiroir"
        aria-label="Menu du portfolio"
        onClose={() => setOuvert(false)}
        onClick={clicDansTiroir}
      >
        <div className="tiroir-contenu">
          <div className="tiroir-tete">
            <p className="tiroir-titre">Menu</p>
            <button
              type="button"
              className="tiroir-fermer"
              onClick={() => tiroir.current?.close()}
              aria-label="Fermer le menu"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav aria-label="Pages du portfolio">
            <ul className="tiroir-liste">
              {menu.map((item) =>
                item.liens ? (
                  <li key={item.titre} className="tiroir-groupe">
                    <p className="tiroir-groupe-titre">
                      <span className="tiroir-u">{numero(item.liens[0].chemin)}</span>
                      {item.titre}
                    </p>
                    <ul>
                      {item.liens.map((l) => (
                        <li key={l.chemin}>
                          <Lien
                            vers={l.chemin}
                            className="tiroir-lien est-sous"
                            aria-current={cheminActif === l.chemin ? 'page' : undefined}
                          >
                            <span>{l.titre}</span>
                            {l.meta && <span className="nav-meta">{l.meta}</span>}
                          </Lien>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.chemin}>
                    <Lien
                      vers={item.chemin}
                      className="tiroir-lien"
                      aria-current={cheminActif === item.chemin ? 'page' : undefined}
                    >
                      <span>
                        <span className="tiroir-u">{numero(item.chemin)}</span>
                        {item.titre}
                      </span>
                    </Lien>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {externes.length > 0 && (
            <ul className="tiroir-externes">
              {externes.map((l) => (
                <li key={l.texte}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.texte} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </dialog>
    </header>
  )
}
