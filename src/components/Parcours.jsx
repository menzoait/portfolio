import { experiences, formations } from '../data.js'
import Icone from './Icone.jsx'

// Une frise : période, intitulé et lieu (les descriptions restent dans data.js)
function Frise({ titre, icone, etapes }) {
  if (etapes.length === 0) return null
  return (
    <div className="frise">
      <h3 className="frise-titre">
        <span className="outils-icone" aria-hidden="true">
          <Icone nom={icone} taille={20} />
        </span>
        {titre}
      </h3>
      <ol className="parcours">
        {etapes.map((etape) => (
          <li className="etape" key={etape.titre + etape.periode}>
            <p className="etape-periode">{etape.periode}</p>
            <h4>{etape.titre}</h4>
            <p className="etape-lieu">{etape.lieu}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Parcours() {
  return (
    <section className="section" id="parcours">
      <div className="conteneur">
        <div className="section-tete">
          <h2 className="section-titre">Parcours</h2>
          <p className="section-intro">Mes études et mes expériences, du lycée à l'alternance.</p>
        </div>

        <div className="frises">
          <Frise titre="Formation" icone="ecole" etapes={formations} />
          <Frise titre="Expérience" icone="entreprise" etapes={experiences} />
        </div>
      </div>
    </section>
  )
}
