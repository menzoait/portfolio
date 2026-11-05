import { profil } from '../data.js'
import { Lien } from '../routeur.jsx'

export default function PiedDePage() {
  return (
    <footer className="pied">
      <div className="conteneur">
        <p>
          © {new Date().getFullYear()} {profil.prenom} {profil.nom}. Portfolio réalisé avec React et
          hébergé sur Firebase ·{' '}
          <Lien vers="/mentions-legales">Mentions légales</Lien>
        </p>
      </div>
    </footer>
  )
}
