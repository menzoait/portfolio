import { formation } from '../data.js'
import { trouverCompetence } from './outils.js'
import Icone from './Icone.jsx'
import FilAriane from './FilAriane.jsx'
import { realisationsFormation } from './Formation.jsx'

// Page « Formation, année N » : les réalisations professionnelles (RP) de l'année.
// Chaque ligne se déplie au clic pour afficher le détail.
export default function Realisations({ annee = 1 }) {
  const infos = formation.annees.find((a) => a.annee === annee)
  const liste = realisationsFormation(annee)

  return (
    <section className="section" id="realisations">
      <div className="conteneur">
        <FilAriane
          etapes={[{ titre: 'Formation', vers: '/formation' }, { titre: infos?.titre ?? `Année ${annee}` }]}
        />
        <div className="section-tete">
          <h2 className="section-titre">
            Formation, {(infos?.titre ?? `année ${annee}`).toLowerCase()}
          </h2>
          <p className="section-intro">
            {infos?.periode}
            {annee === 1 && " : dans l'ordre où je les ai faites, chaque RP enrichit la même maquette, des premiers serveurs à la supervision."}
          </p>
        </div>

        {liste.length > 0 ? (
          <ul className="realisations flux">
            {liste.map((r) => (
              <Realisation r={r} key={r.code + r.titre} />
            ))}
          </ul>
        ) : (
          <p className="vide">{infos?.aVenir || 'Réalisations à venir.'}</p>
        )}
      </div>
    </section>
  )
}

export function Realisation({ r }) {
  return (
    <li className="realisation">
      <details>
        <summary>
          <span className="realisation-tuile" aria-hidden="true">
            <Icone nom={r.icone} taille={22} />
            <span className="faisceau">
              {r.competences.map((id) => (
                <span key={id} style={{ '--c': trouverCompetence(id)?.couleur }} />
              ))}
            </span>
          </span>
          <span className="realisation-entete">
            <h4 className="realisation-titre">
              {r.code && <span className="realisation-code">{r.code}</span>}
              {r.titre}
            </h4>
            <span className="realisation-date">{r.date}</span>
          </span>
          <span className="chevron" aria-hidden="true" />
        </summary>

        <div className="realisation-detail">
          <p className="realisation-desc">{r.description}</p>

          {r.objectif && (
            <p className="realisation-objectif">
              <strong>Objectif : </strong>
              {r.objectif}
            </p>
          )}

          {r.etapes?.length > 0 && (
            <div className="realisation-etapes">
              <h5>Ce que j'ai fait</h5>
              <ol>
                {r.etapes.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ol>
            </div>
          )}

          <dl className="infos">
            <div>
              <dt>Contexte</dt>
              <dd>{r.contexte}</dd>
            </div>

            {r.machines?.length > 0 && (
              <div>
                <dt>Machines</dt>
                <dd>
                  <ul className="machines">
                    {r.machines.map((m) => (
                      <li key={m.nom}>
                        <span className="machine-nom">{m.nom}</span>
                        <span className="machine-os">{m.systeme}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}

            {r.outils?.length > 0 && (
              <div>
                <dt>Outils</dt>
                <dd>{r.outils.join(', ')}</dd>
              </div>
            )}

            <div>
              <dt>Compétences</dt>
              <dd>
                <ul className="liste-competences">
                  {r.competences.map((id) => {
                    const c = trouverCompetence(id)
                    if (!c) return null
                    return (
                      <li key={id} style={{ '--c': c.couleur }}>
                        <span className="pastille" aria-hidden="true" />
                        {c.intitule}
                      </li>
                    )
                  })}
                </ul>
              </dd>
            </div>
          </dl>

          {r.lien && (
            <a className="realisation-lien" href={r.lien} target="_blank" rel="noreferrer">
              <Icone nom="document" taille={18} />
              Lire le compte rendu
              <span className="realisation-lien-format">PDF</span>
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          )}
        </div>
      </details>
    </li>
  )
}
