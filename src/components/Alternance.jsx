import { alternance, formation, realisations } from '../data.js'
import Icone from './Icone.jsx'
import { Lien } from '../routeur.jsx'
import FilAriane from './FilAriane.jsx'
import { Realisation } from './Realisations.jsx'

// Les missions d'une année : les réalisations dont le "cadre" vaut "pro1" ou "pro2".
export function missionsAnnee(annee) {
  const infos = alternance.annees[annee - 1]
  return infos ? realisations.filter((r) => r.cadre === infos.cadre) : []
}

// Page « Alternance » : l'entreprise et le poste, puis un accès à chaque année.
export default function Alternance() {
  if (!alternance.entreprise) return null

  return (
    <section className="section" id="alternance">
      <div className="conteneur">
        <FilAriane etapes={[{ titre: 'Alternance' }, { titre: "L'entreprise" }]} />
        <div className="section-tete">
          <h2 className="section-titre">Alternance</h2>
          <p className="section-intro">Entre l'école et le terrain, deux ans pour apprendre le métier.</p>
        </div>

        {/* Le flux de l'alternance : l'école et l'entreprise, reliées par un câble */}
        <div className="flux-alternance">
          <div className="flux-pole">
            <span className="flux-noeud" aria-hidden="true">
              <Icone nom="ecole" taille={24} />
            </span>
            <strong>{formation.ecole.split(',')[0]}</strong>
            <span>BTS SIO SISR</span>
          </div>

          <div className="flux-liaison" aria-hidden="true">
            <span className="flux-cable">
              <span className="flux-paquet" />
            </span>
          </div>

          <div className="flux-pole est-entreprise">
            <span className="flux-noeud" aria-hidden="true">
              <Icone nom="entreprise" taille={24} />
            </span>
            <strong>{alternance.entreprise}</strong>
            <span>{alternance.poste}</span>
          </div>
        </div>
        <p className="flux-legende">
          {alternance.periode && <>Alternance {alternance.periode}</>}
          {alternance.rythme && <>, {alternance.rythme}</>}
        </p>

        {/* Où je travaille : la direction, le service et le poste */}
        <div className="fiche fiche-entreprise">
          <h3 className="fiche-titre">
            <span className="outils-icone" aria-hidden="true">
              <Icone nom="entreprise" taille={20} />
            </span>
            Mon service
          </h3>
          {alternance.presentation && <p className="fiche-texte">{alternance.presentation}</p>}
          <dl className="infos">
            {[
              ['Direction', alternance.direction],
              ['Service', alternance.service],
              ['Lieu', alternance.lieu],
              ['Poste', alternance.poste],
              ['Mon rôle', alternance.role],
            ]
              .filter(([, valeur]) => valeur)
              .map(([titre, valeur]) => (
                <div key={titre}>
                  <dt>{titre}</dt>
                  <dd>{valeur}</dd>
                </div>
              ))}
          </dl>
        </div>

        <ul className="cartes-liens">
          {alternance.annees.map((a, i) => {
            const n = missionsAnnee(i + 1).length
            return (
              <li key={a.cadre}>
                <Lien vers={`/alternance/annee-${i + 1}`} className="carte-lien">
                  <span className="carte-lien-titre">{a.titre}</span>
                  <span className="carte-lien-detail">{a.periode}</span>
                  <span className={n ? 'carte-lien-compte' : 'carte-lien-compte est-vide'}>
                    {n ? `${n} mission${n > 1 ? 's' : ''}` : 'À venir'}
                  </span>
                </Lien>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

// Page « Alternance, année N » : la liste des missions, chacune dépliable.
export function AlternanceAnnee({ annee = 1 }) {
  const infos = alternance.annees[annee - 1]
  const missions = missionsAnnee(annee)

  return (
    <section className="section" id={`alternance-annee-${annee}`}>
      <div className="conteneur">
        <FilAriane
          etapes={[
            { titre: 'Alternance', vers: '/alternance' },
            { titre: infos?.titre ?? `Année ${annee}` },
          ]}
        />
        <div className="section-tete">
          <h2 className="section-titre">
            Alternance, {(infos?.titre ?? `année ${annee}`).toLowerCase()}
          </h2>
          <p className="section-intro">
            {infos?.periode && <>Ce que je fais sur le terrain, en {infos.periode}.</>}
          </p>
        </div>

        {missions.length > 0 ? (
          <ul className="realisations flux">
            {missions.map((r) => (
              <Realisation r={r} key={r.titre} />
            ))}
          </ul>
        ) : (
          <p className="vide">{infos?.aVenir || 'Missions à venir.'}</p>
        )}
      </div>
    </section>
  )
}
