import { competences, groupes, profil, realisations } from '../data.js'
import FilAriane from './FilAriane.jsx'
import { parDate } from './outils.js'

// Page « Tableau de synthèse » : même structure que le tableau officiel de l'épreuve E5.
export default function TableauSynthese() {
  const groupesRemplis = groupes
    .map((g) => ({ ...g, liste: parDate(realisations.filter((r) => r.cadre === g.id)) }))
    .filter((g) => g.liste.length > 0)

  return (
    <section className="section" id="tableau-de-synthese">
      <div className="conteneur">
        <FilAriane
          etapes={[{ titre: 'Compétences', vers: '/competences' }, { titre: 'Tableau de synthèse' }]}
        />
        <div className="section-tete">
          <h2 className="section-titre">Tableau de synthèse</h2>
          <p className="section-intro">
            Mes réalisations en formation et en entreprise, et les compétences du bloc 1 que
            chacune couvre.
          </p>
        </div>

        <div
          className="tableau-defile"
          role="region"
          aria-label="Tableau de synthèse des compétences"
          tabIndex={0}
        >
          <table className="tableau">
            <thead>
              <tr>
                <th scope="col">Réalisation</th>
                <th scope="col" className="col-periode">
                  Période
                </th>
                {competences.map((c, i) => (
                  <th
                    scope="col"
                    key={c.id}
                    className="col-comp"
                    style={{ '--c': c.couleur }}
                    title={c.intitule}
                  >
                    <span className="col-num">{i + 1}</span>
                    {c.court}
                  </th>
                ))}
              </tr>
            </thead>
            {groupesRemplis.map((g) => (
              <tbody key={g.id}>
                <tr className="ligne-groupe">
                  <th scope="colgroup" colSpan={competences.length + 2}>
                    {g.titre}
                  </th>
                </tr>
                {g.liste.map((r) => (
                  <tr key={r.code + r.titre}>
                    <th scope="row">
                      {r.code && <span className="realisation-code">{r.code}</span>}
                      {r.titre}
                    </th>
                    <td className="col-periode">{r.date}</td>
                    {competences.map((c) => (
                      <td key={c.id}>
                        {r.competences.includes(c.id) ? (
                          <span className="coche" style={{ '--c': c.couleur }}>
                            <span className="sr-only">Oui</span>
                          </span>
                        ) : (
                          <span className="sr-only">Non</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>

        {profil.tableauSynthese && (
          <a className="bouton bouton-espace" href={profil.tableauSynthese} download>
            Télécharger le tableau de synthèse officiel
          </a>
        )}
      </div>
    </section>
  )
}
