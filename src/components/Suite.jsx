import { visite } from '../pages.js'
import { Lien } from '../routeur.jsx'

const numero = (u) => `U${String(u).padStart(2, '0')}`

// Barre en bas de chaque page, comme un module de 1U dans la baie :
// où on en est dans la visite (un voyant par page), la page d'avant et la suivante.
// L'ordre et les phrases d'accroche viennent de src/pages.js.
export default function Suite({ chemin }) {
  const i = visite.findIndex((p) => p.chemin === chemin)
  if (i === -1) return null
  const avant = visite[i - 1]
  const apres = visite[i + 1]

  return (
    <nav className="suite" aria-label="Suite de la visite">
      <div className="conteneur suite-grille">
        {avant ? (
          <Lien vers={avant.chemin} className="suite-avant">
            <span className="suite-sens">
              <span aria-hidden="true">← </span>Précédent
            </span>
            <span className="suite-titre">{avant.titre}</span>
          </Lien>
        ) : (
          <span className="suite-avant est-vide" aria-hidden="true" />
        )}

        <div className="suite-progression">
          <ol className="suite-voyants" aria-hidden="true">
            {visite.map((p, j) => (
              <li key={p.chemin} className={j < i ? 'est-vu' : j === i ? 'est-ici' : undefined} />
            ))}
          </ol>
          <p>
            Étape {i + 1} sur {visite.length}
          </p>
        </div>

        {apres ? (
          <Lien vers={apres.chemin} className="suite-apres">
            <span className="suite-sens">
              {i === 0 ? 'Commencer la visite' : 'Suite'}
              <span aria-hidden="true"> →</span>
            </span>
            <span className="suite-titre">
              <span className="suite-u" aria-hidden="true">
                {numero(apres.u)}
              </span>
              {apres.titre}
            </span>
            {apres.accroche && <span className="suite-accroche">{apres.accroche}</span>}
          </Lien>
        ) : (
          <Lien vers="/" className="suite-apres">
            <span className="suite-sens">Fin de la visite</span>
            <span className="suite-titre">Revenir à l'accueil</span>
            <span className="suite-accroche">Merci d'avoir parcouru mon portfolio</span>
          </Lien>
        )}
      </div>
    </nav>
  )
}
