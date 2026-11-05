# Portfolio de Menzo Ait Tahar (BTS SIO SISR)

Site React (Vite) hébergé sur Firebase Hosting : https://portfolio-1d89d.web.app

## Modifier le contenu

Tous les textes sont dans **`src/data.js`** : profil, réalisations, projets, parcours, veille.
Les commentaires du fichier expliquent quoi remplir.

- Les comptes rendus des RP sont dans `public/docs/` (un PDF par RP, relié par `lien`
  dans `src/data.js`). Avant d'en ajouter un, vérifie qu'aucune capture ne montre de mot de passe.
- Le CV en ligne est `public/cv-menzo-ait-tahar.pdf` (sans téléphone, adresse ni âge).
- Un autre PDF se place aussi dans `public/`, puis on indique son chemin dans
  `src/data.js` (par exemple `"/tableau-de-synthese.pdf"`).
- L'ordre de la visite (menu, numéros U01 à U09, barre « Suite » en bas de chaque page
  et sa phrase d'accroche) se règle dans `src/pages.js`.
- Les styles sont dans `src/index.css` (couleurs, police) et `src/App.css` (mise en page).
- Chaque section du site est un composant dans `src/components/`.

## Commandes (dans l'Invite de commandes, dans ce dossier)

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Aperçu en direct sur http://localhost:5173 pendant que tu modifies |
| `npm run build` | Fabrique la version finale du site dans `dist/` |
| `firebase deploy --only hosting` | Met en ligne le contenu de `dist/` |

Pour publier une nouvelle version : `npm run build` puis `firebase deploy --only hosting`.

## Modifier depuis un autre PC

Le code est sur GitHub : https://github.com/menzoait/portfolio

- **Sans rien installer** : ouvre le dépôt sur github.com et appuie sur la touche `.` (point).
  Un éditeur s'ouvre dans le navigateur : modifie le fichier, puis « Commit ».
- **Avec Node.js et Git** : `git clone https://github.com/menzoait/portfolio.git`, puis
  `npm install` et `npm run dev`.
- **Sur ton PC habituel**, avant de travailler : `git pull` pour récupérer les modifications
  faites ailleurs. Après : `git add .`, `git commit -m "..."` puis `git push`.

La mise en ligne (`npm run build` puis `firebase deploy --only hosting`) se fait depuis un PC
où la Firebase CLI est installée et connectée (`firebase login`).
