import { useState } from 'react'
import { alternance, credly, profil } from '../data.js'
import Icone from './Icone.jsx'

// Le dernier morceau d'une adresse de profil (ex : « menzoait » pour github.com/menzoait)
function identifiant(url) {
  try {
    return new URL(url).pathname.split('/').filter(Boolean).at(-1) ?? ''
  } catch {
    return ''
  }
}

// Page Contact : l'e-mail mis en avant (écrire ou copier l'adresse),
// puis un panneau avec un « port » par profil en ligne.
export default function Contact() {
  const [copie, setCopie] = useState(false)
  const finAlternance = alternance.periode?.match(/(\d{4})\s*$/)?.[1]

  const profils = [
    profil.linkedin && { href: profil.linkedin, nom: 'LinkedIn', icone: 'profil' },
    profil.github && { href: profil.github, nom: 'GitHub', icone: 'code' },
    credly && { href: credly, nom: 'Credly', icone: 'badge', detail: 'Mes badges vérifiés' },
    profil.cv && { href: profil.cv, nom: 'CV', icone: 'diplome', detail: 'Version PDF' },
  ].filter(Boolean)

  async function copierAdresse() {
    try {
      await navigator.clipboard.writeText(profil.email)
      setCopie(true)
      setTimeout(() => setCopie(false), 2500)
    } catch {
      window.location.href = `mailto:${profil.email}`
    }
  }

  return (
    <section className="section" id="contact">
      <div className="conteneur">
        <div className="section-tete">
          <h2 className="section-titre">Contact</h2>
        </div>

        <div className="contact-grille">
          <div className="contact-principal">
            <p className="contact-accroche">
              Une question sur mon parcours, mes réalisations ou mon alternance ?
            </p>
            <p className="contact-sous">Le plus simple : m'écrire un e-mail.</p>

            <div className="contact-mail">
              <span className="flux-noeud" aria-hidden="true">
                <Icone nom="mail" taille={24} />
              </span>
              <a className="contact-adresse" href={`mailto:${profil.email}`}>
                {/* Si l'adresse doit passer à la ligne, elle se coupe après le @ */}
                {profil.email.split('@')[0]}@<wbr />
                {profil.email.split('@')[1]}
              </a>
            </div>

            <div className="contact-actions">
              <a className="bouton bouton-principal bouton-icone" href={`mailto:${profil.email}`}>
                <Icone nom="mail" taille={18} />
                Écrire un e-mail
              </a>
              <button
                type="button"
                className={copie ? 'bouton bouton-icone est-copie' : 'bouton bouton-icone'}
                onClick={copierAdresse}
              >
                <Icone nom={copie ? 'valide' : 'copier'} taille={18} />
                {copie ? 'Adresse copiée' : "Copier l'adresse"}
              </button>
              <span className="sr-only" aria-live="polite">
                {copie ? 'Adresse e-mail copiée' : ''}
              </span>
            </div>

            <ul className="pastilles-infos contact-infos">
              <li>
                <Icone nom="lieu" taille={18} />
                Val-d'Oise (95)
              </li>
              {alternance.entreprise && (
                <li>
                  <Icone nom="entreprise" taille={18} />
                  En alternance{finAlternance && ` jusqu'en ${finAlternance}`}
                </li>
              )}
            </ul>
          </div>

          {profils.length > 0 && (
            <div className="contact-panneau">
              <p className="contact-panneau-titre">Me retrouver en ligne</p>
              <ul>
                {profils.map((p) => (
                  <li key={p.nom}>
                    <a className="contact-port" href={p.href} target="_blank" rel="noreferrer">
                      <span className="contact-port-icone" aria-hidden="true">
                        <Icone nom={p.icone} taille={20} />
                      </span>
                      <span className="contact-port-texte">
                        <strong>{p.nom}</strong>
                        <small>{p.detail ?? identifiant(p.href)}</small>
                      </span>
                      <span className="contact-port-led" aria-hidden="true" />
                      <span className="contact-port-fleche" aria-hidden="true">
                        ↗
                      </span>
                      <span className="sr-only"> (nouvel onglet)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
