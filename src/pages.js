import { alternance } from './data.js'
import Accueil from './components/Accueil.jsx'
import Formation, { realisationsFormation } from './components/Formation.jsx'
import Realisations from './components/Realisations.jsx'
import TableauSynthese from './components/TableauSynthese.jsx'
import Alternance, { AlternanceAnnee, missionsAnnee } from './components/Alternance.jsx'
import Competences from './components/Competences.jsx'
import Certifications from './components/Certifications.jsx'
import Projets from './components/Projets.jsx'
import Parcours from './components/Parcours.jsx'
import Veille from './components/Veille.jsx'
import Contact from './components/Contact.jsx'

const avecAlternance = Boolean(alternance.entreprise)

// Toutes les pages du site, dans l'ordre de la visite :
// qui je suis → ce que j'apprends → ce que je fais sur le terrain → le bilan → le reste.
//   chemin   : l'adresse de la page
//   titre    : le nom affiché dans l'onglet du navigateur et dans la barre « Suite »
//   u        : le numéro du module dans la baie (U01, U02...)
//   accroche : la phrase qui donne envie d'ouvrir la page, dans la barre « Suite »
//   visite   : false pour sortir la page de la visite (par exemple une année encore vide)
//   props    : les réglages passés au composant (par exemple l'année)
export const pages = [
  { chemin: '/', titre: 'Accueil', u: 1, Composant: Accueil, accroche: "Qui je suis, en un coup d'œil" },
  {
    chemin: '/parcours',
    titre: 'Parcours',
    u: 2,
    Composant: Parcours,
    accroche: "D'où je viens : mes études et mes premières expériences",
  },
  {
    chemin: '/formation',
    titre: 'Le BTS SIO',
    u: 3,
    Composant: Formation,
    accroche: "Deux ans de BTS SIO SISR, jusqu'au diplôme",
  },
  {
    chemin: '/formation/annee-1',
    titre: 'Formation, année 1',
    u: 3,
    Composant: Realisations,
    props: { annee: 1 },
    accroche: 'Mes réalisations en formation, une par une',
  },
  {
    chemin: '/formation/annee-2',
    titre: 'Formation, année 2',
    u: 3,
    Composant: Realisations,
    props: { annee: 2 },
    accroche: 'Mes réalisations de deuxième année',
    visite: realisationsFormation(2).length > 0,
  },
  ...(avecAlternance
    ? [
        {
          chemin: '/alternance',
          titre: 'Alternance',
          u: 4,
          Composant: Alternance,
          accroche: `Le terrain : ${alternance.entreprise}`,
        },
        {
          chemin: '/alternance/annee-1',
          titre: 'Alternance, année 1',
          u: 4,
          Composant: AlternanceAnnee,
          props: { annee: 1 },
          accroche: 'Mes missions en entreprise, une par une',
          visite: missionsAnnee(1).length > 0,
        },
        {
          chemin: '/alternance/annee-2',
          titre: 'Alternance, année 2',
          u: 4,
          Composant: AlternanceAnnee,
          props: { annee: 2 },
          accroche: 'Mes missions de deuxième année',
          visite: missionsAnnee(2).length > 0,
        },
      ]
    : []),
  {
    chemin: '/competences',
    titre: 'Compétences',
    u: 5,
    Composant: Competences,
    accroche: "Le bilan : ce que la formation et l'alternance m'ont appris",
  },
  {
    chemin: '/tableau-de-synthese',
    titre: 'Tableau de synthèse',
    u: 5,
    Composant: TableauSynthese,
    accroche: "Le tableau officiel de l'épreuve E5",
  },
  {
    chemin: '/certifications',
    titre: 'Certifications',
    u: 6,
    Composant: Certifications,
    accroche: "Ce que j'ai validé en plus des cours",
  },
  {
    chemin: '/projets',
    titre: 'Projets',
    u: 7,
    Composant: Projets,
    accroche: 'Ce que je construis par moi-même',
  },
  { chemin: '/veille', titre: 'Veille', u: 8, Composant: Veille, accroche: 'Comment je reste à jour' },
  { chemin: '/contact', titre: 'Contact', u: 9, Composant: Contact, accroche: 'On en parle ?' },
]

// L'ordre de la visite : les pages ci-dessus, sans celles qui sont encore vides
export const visite = pages.filter((p) => p.visite !== false)

// Anciennes adresses redirigées vers les nouvelles
export const redirections = {
  '/realisations': '/formation/annee-1',
}

function compte(n, mot) {
  return n ? `${n} ${mot}${n > 1 ? 's' : ''}` : 'À venir'
}

// Le menu latéral (ouvert avec le bouton ☰), dans le même ordre que la visite.
// Un élément avec "liens" devient un groupe ; "meta" s'affiche à droite du lien.
export const menu = [
  { chemin: '/', titre: 'Accueil' },
  { chemin: '/parcours', titre: 'Parcours' },
  {
    titre: 'Formation',
    liens: [
      { chemin: '/formation', titre: 'Le BTS SIO' },
      { chemin: '/formation/annee-1', titre: 'Année 1', meta: compte(realisationsFormation(1).length, 'réalisation') },
      { chemin: '/formation/annee-2', titre: 'Année 2', meta: compte(realisationsFormation(2).length, 'réalisation') },
    ],
  },
  ...(avecAlternance
    ? [
        {
          titre: 'Alternance',
          liens: [
            { chemin: '/alternance', titre: "L'entreprise" },
            { chemin: '/alternance/annee-1', titre: 'Année 1', meta: compte(missionsAnnee(1).length, 'mission') },
            { chemin: '/alternance/annee-2', titre: 'Année 2', meta: compte(missionsAnnee(2).length, 'mission') },
          ],
        },
      ]
    : []),
  {
    titre: 'Compétences',
    liens: [
      { chemin: '/competences', titre: 'Le bilan' },
      { chemin: '/tableau-de-synthese', titre: 'Tableau de synthèse', meta: 'Épreuve E5' },
    ],
  },
  { chemin: '/certifications', titre: 'Certifications' },
  { chemin: '/projets', titre: 'Projets' },
  { chemin: '/veille', titre: 'Veille' },
  { chemin: '/contact', titre: 'Contact' },
]
