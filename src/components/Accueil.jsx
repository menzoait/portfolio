import { alternance, credly, profil } from '../data.js'
import Maquette from './Maquette.jsx'
import { Lien } from '../routeur.jsx'

export default function Accueil() {
  const liens = [
    profil.linkedin && { href: profil.linkedin, texte: 'LinkedIn' },
    credly && { href: credly, texte: 'Badges Credly' },
    profil.github && { href: profil.github, texte: 'GitHub' },
    profil.cv && { href: profil.cv, texte: 'CV en PDF' },
  ].filter(Boolean)

  return (
    <section className="accueil" id="accueil">
      <div className="conteneur">
        <div className="accueil-grille">
          <div>
            <h1 className="accueil-nom">
              {profil.prenom} {profil.nom}
            </h1>
            <p className="accueil-accroche">{profil.accroche}</p>

            {alternance.entreprise && (
              <p className="statut">
                <span className="maq-led" aria-hidden="true" />
                En alternance : {alternance.entreprise}
              </p>
            )}

            {/* Le début de la visite guidée (l'ordre des pages est dans src/pages.js) */}
            <Lien vers="/parcours" className="bouton bouton-principal accueil-visite">
              Commencer la visite <span aria-hidden="true">→</span>
            </Lien>

            <ul className="accueil-liens">
              {liens.map((l) => (
                <li key={l.texte}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.texte}
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Maquette />
        </div>
      </div>
    </section>
  )
}
