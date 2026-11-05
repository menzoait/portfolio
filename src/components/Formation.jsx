import { alternance, formation, realisations } from '../data.js'
import { parDate } from './outils.js'
import { Lien } from '../routeur.jsx'
import FilAriane from './FilAriane.jsx'
import Icone from './Icone.jsx'

// Les réalisations de formation d'une année (annee vaut 1 par défaut), par date
export function realisationsFormation(annee) {
  return parDate(realisations.filter((r) => r.cadre === 'formation' && (r.annee ?? 1) === annee))
}

// Page « Le BTS SIO » : le parcours en flux (année 1, année 2, diplôme).
export default function Formation() {
  const finDiplome = formation.annees.at(-1)?.periode.split('-').at(-1)

  return (
    <section className="section" id="formation">
      <div className="conteneur">
        <FilAriane etapes={[{ titre: 'Formation' }, { titre: 'Le BTS SIO' }]} />
        <div className="section-tete">
          <h2 className="section-titre">Le BTS SIO</h2>
          <p className="section-intro">Deux ans pour apprendre à monter et sécuriser une infrastructure.</p>
        </div>

        <ul className="pastilles-infos">
          <li>
            <Icone nom="ecole" taille={18} />
            {formation.ecole}
          </li>
          <li>
            <Icone nom="reseau" taille={18} />
            Option SISR
          </li>
          {alternance.entreprise && (
            <li>
              <Icone nom="entreprise" taille={18} />
              En alternance
            </li>
          )}
        </ul>

        <ol className="flux-annees">
          {formation.annees.map((a, i) => {
            const n = realisationsFormation(a.annee).length
            const etat = n ? (i === 0 ? 'en-cours' : 'fait') : 'a-venir'
            return (
              <li key={a.annee} className={`flux-etape est-${etat}`}>
                <Lien vers={`/formation/annee-${a.annee}`}>
                  <span className="flux-noeud" aria-hidden="true">
                    <Icone nom={n ? 'serveur' : 'virtualisation'} taille={22} />
                  </span>
                  <span className="flux-titre">{a.titre}</span>
                  <span className="flux-detail">{a.periode}</span>
                  <span className="flux-etat">
                    {n ? `${n} réalisation${n > 1 ? 's' : ''}` : 'À venir'}
                  </span>
                </Lien>
              </li>
            )
          })}
          <li className="flux-etape est-a-venir">
            <div>
              <span className="flux-noeud" aria-hidden="true">
                <Icone nom="diplome" taille={22} />
              </span>
              <span className="flux-titre">Diplôme</span>
              <span className="flux-detail">BTS SIO SISR{finDiplome && `, ${finDiplome}`}</span>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
