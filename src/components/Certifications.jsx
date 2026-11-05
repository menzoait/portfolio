import { certifications, credly } from '../data.js'

// Si l'image Credly ne charge pas, on affiche la copie locale du badge
function utiliserSecours(evenement, secours) {
  const img = evenement.currentTarget
  if (secours && !img.src.endsWith(secours)) img.src = secours
}

// Mur de badges : le badge en grand, son nom, sa date et le lien de vérification.
// Les descriptions restent dans data.js (et sur la page Credly du badge).
export default function Certifications() {
  if (certifications.length === 0) return null

  return (
    <section className="section" id="certifications">
      <div className="conteneur">
        <div className="section-tete">
          <h2 className="section-titre">Certifications</h2>
          <p className="section-intro">
            En plus des cours : mes badges vérifiés Cisco Networking Academy.{' '}
            {credly && (
              <a href={credly} target="_blank" rel="noreferrer">
                Tous mes badges sur Credly <span aria-hidden="true">↗</span>
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            )}
          </p>
        </div>

        <ul className="mur-badges">
          {certifications.map((c) => {
            const verification = c.lien || c.certificat
            return (
              <li className="badge-carte" key={c.titre}>
                <span className="badge-tuile">
                  <img
                    src={c.badge}
                    alt={`Badge ${c.original}`}
                    width="120"
                    height="120"
                    loading="lazy"
                    onError={(e) => utiliserSecours(e, c.secours)}
                  />
                </span>
                <span className={c.statut === 'Obtenue' ? 'badge-statut' : 'badge-statut est-autre'}>
                  {c.statut}
                </span>
                <h3>{c.titre}</h3>
                {c.date && <p className="badge-date">{c.date}</p>}
                {verification && (
                  <a className="badge-lien" href={verification} target="_blank" rel="noreferrer">
                    Vérifier <span aria-hidden="true">↗</span>
                    <span className="sr-only"> la certification {c.titre} (nouvel onglet)</span>
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
