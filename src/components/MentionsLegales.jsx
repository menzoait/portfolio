import { credly, profil } from '../data.js'

// Mentions légales du portfolio (loi n° 2004-575 du 21 juin 2004, dite LCEN, et RGPD).
// Pense à mettre à jour la date en bas si tu modifies cette page.
const miseAJour = '5 novembre 2026'
const depot = 'https://github.com/menzoait/portfolio'

function Lien({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  )
}

export default function MentionsLegales() {
  const nom = `${profil.prenom} ${profil.nom.toUpperCase()}`

  return (
    <section className="section" id="mentions-legales">
      <div className="conteneur mentions">
        <div className="section-tete">
          <h2 className="section-titre">Mentions légales</h2>
          <p className="section-intro">
            Qui publie ce site, qui l'héberge, et ce qu'il fait (ou ne fait pas) de vos données.
          </p>
        </div>

        <h3>Éditeur du site</h3>
        <dl className="infos">
          <div>
            <dt>Éditeur</dt>
            <dd>{nom}, étudiant en BTS SIO option SISR, à titre personnel</dd>
          </div>
          <div>
            <dt>Directeur de la publication</dt>
            <dd>{nom}</dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>
              <a href={`mailto:${profil.email}`}>{profil.email}</a>
            </dd>
          </div>
        </dl>

        <h3>Hébergement</h3>
        <dl className="infos">
          <div>
            <dt>Hébergeur</dt>
            <dd>
              Firebase Hosting, service de Google LLC
              <br />
              1600 Amphitheatre Parkway, Mountain View, CA 94043, États-Unis
              <br />
              Téléphone : +1 650-253-0000 · <Lien href="https://firebase.google.com">firebase.google.com</Lien>
            </dd>
          </div>
        </dl>

        <h3>Données personnelles</h3>
        <p>
          Ce site ne contient ni formulaire, ni compte, ni cookie, ni outil de mesure d'audience. Il ne
          collecte donc aucune donnée personnelle de lui-même.
        </p>
        <ul>
          <li>
            <strong>Hébergement :</strong> comme tout hébergeur, Firebase peut enregistrer des journaux
            techniques (adresse IP, date, page demandée) pour faire fonctionner et sécuriser le service.
          </li>
          <li>
            <strong>Services tiers :</strong> la police d'écriture vient de Google Fonts et les images
            des badges viennent de Credly. Votre navigateur se connecte à leurs serveurs, qui reçoivent
            donc votre adresse IP.
          </li>
          <li>
            <strong>Si vous m'écrivez :</strong> votre adresse e-mail et votre message ne servent qu'à
            vous répondre. Ils ne sont ni partagés, ni réutilisés.
          </li>
        </ul>
        <p>
          Conformément au règlement général sur la protection des données (RGPD), vous pouvez demander
          l'accès à vos données, leur correction ou leur suppression en écrivant à{' '}
          <a href={`mailto:${profil.email}`}>{profil.email}</a>. Vous pouvez aussi adresser une
          réclamation à la <Lien href="https://www.cnil.fr">CNIL</Lien>.
        </p>

        <h3>Propriété intellectuelle</h3>
        <p>
          Les textes, comptes rendus, schémas et le design de ce site sont la propriété de {nom}, sauf
          mention contraire. Toute reproduction sans autorisation est interdite.
        </p>
        <p>
          Les badges de certification appartiennent à Cisco et sont vérifiables sur{' '}
          {credly ? <Lien href={credly}>Credly</Lien> : 'Credly'}. Les noms de produits et de marques
          cités (Cisco, Microsoft, Apple, Jamf, pfSense, Zabbix, GLPI…) appartiennent à leurs
          propriétaires respectifs. La police Archivo est distribuée sous licence SIL Open Font
          License.
        </p>

        <h3>Liens externes</h3>
        <p>
          Ce site renvoie vers d'autres sites (LinkedIn, GitHub, Credly…). Je ne suis pas responsable de
          leur contenu ni de leur façon de traiter vos données.
        </p>

        <h3>Réalisation</h3>
        <p>
          Site conçu et développé par {nom} avec React et Vite, hébergé sur Firebase Hosting. Le code
          source est disponible sur <Lien href={depot}>GitHub</Lien>.
        </p>

        <p className="mentions-date">Dernière mise à jour : {miseAJour}</p>
      </div>
    </section>
  )
}
