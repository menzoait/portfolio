import { profil } from '../data.js'

export default function PiedDePage() {
  return (
    <footer className="pied">
      <div className="conteneur">
        <p>
          © {new Date().getFullYear()} {profil.prenom} {profil.nom}. Portfolio réalisé avec React et
          hébergé sur Firebase.
        </p>
      </div>
    </footer>
  )
}
