import { veille } from '../data.js'
import Icone from './Icone.jsx'

// Page Veille : la démarche en flux, puis le sujet et les articles.
export default function Veille() {
  return (
    <section className="section" id="veille">
      <div className="conteneur">
        <div className="section-tete">
          <h2 className="section-titre">Veille technologique</h2>
          <p className="section-intro">{veille.sujet}</p>
          {veille.description && <p className="veille-desc">{veille.description}</p>}
        </div>

        {veille.demarche?.length > 0 && (
          <ol className="flux-etapes">
            {veille.demarche.map((e) => (
              <li key={e.titre}>
                <span className="flux-noeud" aria-hidden="true">
                  <Icone nom={e.icone} taille={22} />
                </span>
                <strong>{e.titre}</strong>
                <span>{e.detail}</span>
              </li>
            ))}
          </ol>
        )}

        {veille.articles.length > 0 && (
          <div className="veille-bloc">
            <h3>Derniers articles</h3>
            <ul className="articles">
              {veille.articles.map((a) => (
                <li key={a.url || a.titre}>
                  <p className="article-meta">
                    <span>{a.date}</span>
                    <span>{a.source}</span>
                  </p>
                  <h4>
                    {a.url ? (
                      <a href={a.url} target="_blank" rel="noreferrer">
                        {a.titre}
                      </a>
                    ) : (
                      a.titre
                    )}
                  </h4>
                  {a.resume && <p className="article-resume">{a.resume}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {veille.sources.length > 0 && (
          <div className="veille-bloc">
            <h3>Mes sources</h3>
            <ul className="veille-sources">
              {veille.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.nom}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
