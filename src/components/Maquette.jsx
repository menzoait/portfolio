import { maquette } from '../data.js'

// Schéma de la maquette : WAN, pare-feu en CARP, puis les zones LAN et SERVEURS.
export default function Maquette() {
  const [pf1, pf2] = maquette.pareFeu

  return (
    <figure className="maquette">
      <figcaption className="maquette-titre">Ma maquette d'infrastructure</figcaption>

      <div className="maq-wan">
        <strong>WAN</strong> {maquette.wan}
      </div>
      <span className="maq-vertical" aria-hidden="true" />

      <div className="maq-pare-feu">
        <Noeud machine={pf1} sombre />
        <span className="maq-trait" aria-hidden="true" />
        <span className="maq-carp">CARP</span>
        <span className="maq-trait" aria-hidden="true" />
        <Noeud machine={pf2} sombre />
      </div>
      <span className="maq-vertical" aria-hidden="true" />
      <span className="maq-fourche" aria-hidden="true" />

      <div className="maq-zones">
        {maquette.zones.map((zone) => (
          <div className="maq-zone" key={zone.nom}>
            <p className="maq-zone-nom">
              <strong>{zone.nom}</strong> <span>{zone.reseau}</span>
            </p>
            <ul>
              {zone.machines.map((m) => (
                <li key={m.nom}>
                  <Noeud machine={m} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="maquette-note">{maquette.note}</p>
    </figure>
  )
}

function Noeud({ machine, sombre }) {
  return (
    <span className={sombre ? 'maq-noeud maq-noeud-sombre' : 'maq-noeud'}>
      <span className="maq-led" aria-hidden="true" />
      <span className="maq-noeud-texte">
        <strong>{machine.nom}</strong>
        <small>{machine.role}</small>
      </span>
    </span>
  )
}
