import { Lien } from '../routeur.jsx'

// Petit chemin au-dessus du titre : « Formation / Année 1 ».
// "etapes" : [{ titre, vers }] ; la dernière étape est la page affichée (sans lien).
export default function FilAriane({ etapes }) {
  return (
    <nav className="fil" aria-label="Fil d'Ariane">
      <ol>
        {etapes.map((e, i) => (
          <li key={e.titre}>
            {i === etapes.length - 1 ? (
              <span aria-current="page">{e.titre}</span>
            ) : e.vers ? (
              <Lien vers={e.vers}>{e.titre}</Lien>
            ) : (
              <span>{e.titre}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
