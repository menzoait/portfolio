import { outilsMaitrises } from '../data.js'
import { Lien } from '../routeur.jsx'
import Icone from './Icone.jsx'
import PanneauBrassage from './PanneauBrassage.jsx'
import FilAriane from './FilAriane.jsx'

// Page Compétences : le panneau de brassage (bloc 1 du BTS), puis les outils par famille.
export default function Competences() {
  return (
    <section className="section" id="competences">
      <div className="conteneur">
        <FilAriane etapes={[{ titre: 'Compétences' }, { titre: 'Le bilan' }]} />
        <div className="section-tete">
          <h2 className="section-titre">Compétences</h2>
          <p className="section-intro">
            Le bilan de la formation et de l'alternance : un câble branché, la compétence est
            couverte. Détail dans le <Lien vers="/tableau-de-synthese">tableau de synthèse</Lien>.
          </p>
        </div>

        <PanneauBrassage />

        <h3 className="sous-titre">Ce que j'utilise</h3>
        <ul className="outils-groupes">
          {outilsMaitrises.map((g) => (
            <li className="outils-groupe" key={g.groupe}>
              <span className="outils-icone" aria-hidden="true">
                <Icone nom={g.icone} taille={22} />
              </span>
              <h4>{g.groupe}</h4>
              <ul className="outils-liste">
                {g.outils.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
