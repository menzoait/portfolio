import { profil, projets } from '../data.js'
import Icone from './Icone.jsx'

// L'adresse sans « https:// » ni barre finale, comme dans une barre d'adresse
function adresseCourte(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

// Page Projets : chaque projet est présenté comme une petite fenêtre de navigateur.
export default function Projets() {
  if (projets.length === 0) return null

  return (
    <section className="section" id="projets">
      <div className="conteneur">
        <div className="section-tete">
          <h2 className="section-titre">Projets</h2>
          <p className="section-intro">
            En dehors des cours : mes projets web, versionnés avec Git et publiés sur GitHub Pages.
          </p>
        </div>

        <ul className="projets">
          {projets.map((p) => (
            <li className={p.sisr ? 'projet est-sisr' : 'projet'} key={p.titre}>
              <div className="projet-barre" aria-hidden="true">
                <span className="projet-points">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="projet-adresse">{adresseCourte(p.site)}</span>
              </div>

              <div className="projet-apercu" aria-hidden="true">
                <Icone nom={p.icone} taille={44} />
                {p.sisr && <span className="projet-etiquette">Lien avec SISR</span>}
              </div>

              <div className="projet-corps">
                <h3>{p.titre}</h3>
                <p>{p.description}</p>
                <ul className="projet-technos" aria-label="Technologies">
                  {p.technos.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="projet-actions">
                  <a className="bouton bouton-principal" href={p.site} target="_blank" rel="noreferrer">
                    Voir le site <span aria-hidden="true">↗</span>
                    <span className="sr-only"> {p.titre} (nouvel onglet)</span>
                  </a>
                  <a className="bouton" href={p.code} target="_blank" rel="noreferrer">
                    Code <span aria-hidden="true">↗</span>
                    <span className="sr-only"> de {p.titre} sur GitHub (nouvel onglet)</span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {profil.github && (
          <p className="projets-plus">
            <a href={profil.github} target="_blank" rel="noreferrer">
              Tous mes dépôts sur GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
