import { competences } from '../data.js'
import { compterRealisations, texteNombre } from './outils.js'

// Panneau de brassage : un port par compétence du bloc 1.
// Un câble est branché quand au moins une réalisation couvre la compétence.
export default function PanneauBrassage() {
  return (
    <div className="brassage">
      <div className="panneau" aria-hidden="true">
        <span className="vis" />
        {competences.map((c, i) => (
          <div
            key={c.id}
            className={compterRealisations(c.id) > 0 ? 'port est-branche' : 'port'}
            style={{ '--c': c.couleur, '--i': i }}
          >
            <span className="port-tete">
              {i + 1}
              <span className="port-led" />
            </span>
            <span className="port-cadre">
              <span className="port-trou">
                <span className="port-fiche" />
              </span>
            </span>
          </div>
        ))}
        <span className="vis" />
      </div>

      <ul className="legende">
        {competences.map((c, i) => {
          const n = compterRealisations(c.id)
          return (
            <li
              key={c.id}
              className={n > 0 ? 'est-branche' : undefined}
              style={{ '--c': c.couleur, '--i': i }}
              title={c.intitule}
            >
              <span className="legende-pastille" aria-hidden="true" />
              <span className="legende-nom">
                <span className="legende-num">{i + 1}. </span>
                {c.court}
              </span>
              <span className="legende-compte">{texteNombre(n)}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
