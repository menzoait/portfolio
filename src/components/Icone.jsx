// Icônes simples dessinées en SVG (trait de la couleur du texte).
// Liste des noms disponibles : voir l'objet « formes » ci-dessous.
// Pour en ajouter une : un nouveau nom et ses formes ci-dessous.
const formes = {
  serveur: (
    <>
      <rect x="3" y="3.5" width="18" height="7" rx="2" />
      <rect x="3" y="13.5" width="18" height="7" rx="2" />
      <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="1" fill="currentColor" stroke="none" />
      <path d="M11 7h6M11 17h6" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8h18" />
      <path d="M7 12l3 2.5L7 17" />
      <path d="M12.5 17H17" />
    </>
  ),
  annuaire: (
    <>
      <rect x="9" y="3" width="6" height="5" rx="1" />
      <rect x="2.5" y="16" width="6" height="5" rx="1" />
      <rect x="15.5" y="16" width="6" height="5" rx="1" />
      <path d="M12 8v4M5.5 16v-4h13v4" />
    </>
  ),
  bouclier: (
    <>
      <path d="M12 3l7 3v5.5c0 4.4-2.9 8-7 9.5-4.1-1.5-7-5.1-7-9.5V6z" />
      <path d="M12 3v18" />
    </>
  ),
  reseau: (
    <>
      <rect x="2" y="8" width="20" height="8" rx="2" />
      <rect x="5" y="11" width="2.6" height="2" rx="0.4" />
      <rect x="9.2" y="11" width="2.6" height="2" rx="0.4" />
      <rect x="13.4" y="11" width="2.6" height="2" rx="0.4" />
      <circle cx="18.6" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <path d="M6.3 16v4M10.5 16v4M14.7 16v4" />
    </>
  ),
  virtualisation: (
    <>
      <path d="M12 3l9 4.5-9 4.5-9-4.5z" />
      <path d="M3 12l9 4.5 9-4.5" />
      <path d="M3 16.5L12 21l9-4.5" />
    </>
  ),
  supervision: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M5.5 11.5h3l2-4 3 7 2-3h3" />
      <path d="M9 21h6M12 17v4" />
    </>
  ),
  parc: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
      <path d="M9 12l2 2 4-4" />
      <path d="M9 17.5h6" />
    </>
  ),
  invite: (
    <>
      <path d="M4 6l6 6-6 6" />
      <path d="M12 18h8" />
    </>
  ),
  tablette: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2.2" />
      <path d="M11 18.5h2" />
    </>
  ),
  cadenas: (
    <>
      <rect x="5" y="10.5" width="14" height="10.5" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <path d="M12 14.5v2.5" />
    </>
  ),
  ecran: (
    <>
      <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
      <path d="M8.5 20.5h7M12 16.5v4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z" />
    </>
  ),
  partage: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8M13 8.5l3.5 3.5-3.5 3.5" />
    </>
  ),
  redondance: (
    <>
      <rect x="2.5" y="4" width="8" height="6" rx="1.5" />
      <rect x="13.5" y="4" width="8" height="6" rx="1.5" />
      <path d="M6.5 10v3.5h11V10M12 13.5V17" />
      <rect x="8" y="17" width="8" height="4" rx="1.2" />
    </>
  ),
  puce: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.8" />
      <path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
    </>
  ),
  imprimante: (
    <>
      <path d="M7 8V3.5h10V8" />
      <rect x="3" y="8" width="18" height="8.5" rx="2" />
      <rect x="7" y="14" width="10" height="6.5" rx="1" />
      <circle cx="17.5" cy="11.2" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  ticket: (
    <>
      <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5V10a2 2 0 0 0 0 4v2.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5V14a2 2 0 0 0 0-4z" />
      <path d="M9 6v12" strokeDasharray="1.6 1.8" />
      <path d="M12.5 10.5h5M12.5 13.5h3.5" />
    </>
  ),
  code: (
    <>
      <path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5" />
      <path d="M13.5 4.5l-3 15" />
    </>
  ),
  ecole: (
    <>
      <path d="M2.5 9L12 4.5 21.5 9 12 13.5z" />
      <path d="M6.5 11v5c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3v-5" />
      <path d="M21.5 9v5.5" />
    </>
  ),
  entreprise: (
    <>
      <path d="M3.5 21V6.5L12 3l8.5 3.5V21" />
      <path d="M2 21h20" />
      <path d="M7.5 9h2M7.5 12.5h2M7.5 16h2M14.5 9h2M14.5 12.5h2M14.5 16h2" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M9.5 9l1.8 1.8L14.8 7.3" />
      <path d="M8.5 14l-1.5 7 5-2.5 5 2.5-1.5-7" />
    </>
  ),
  recherche: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5l5 5" />
    </>
  ),
  filtre: (
    <>
      <path d="M3.5 4.5h17l-6.5 8v6l-4 2v-8z" />
    </>
  ),
  analyse: (
    <>
      <path d="M3.5 20.5h17" />
      <rect x="5" y="12" width="3" height="6" rx="0.6" />
      <rect x="10.5" y="7" width="3" height="11" rx="0.6" />
      <rect x="16" y="3.5" width="3" height="14.5" rx="0.6" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </>
  ),
  profil: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20.5c1.2-3.8 4.3-5.5 8-5.5s6.8 1.7 8 5.5" />
    </>
  ),
  diplome: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M7 8h10M7 11.5h6" />
      <circle cx="16.5" cy="15.5" r="2.5" />
      <path d="M15.2 17.7l-.7 3.3 2-1 2 1-.7-3.3" />
    </>
  ),
  copier: (
    <>
      <rect x="8" y="8" width="12.5" height="12.5" rx="2" />
      <path d="M16 8V5.5A2 2 0 0 0 14 3.5H5.5a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2H8" />
    </>
  ),
  valide: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.3l2.7 2.7L16.2 9.5" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 16.5h4" />
    </>
  ),
  calcul: (
    <>
      <rect x="4.5" y="2.5" width="15" height="19" rx="2" />
      <rect x="7.5" y="5.5" width="9" height="4" rx="0.8" />
      <path d="M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17.5h.01M12 17.5h.01M16 17.5h.01" strokeWidth="2.6" />
    </>
  ),
  cintre: (
    <>
      <path d="M10 6a2 2 0 1 1 2 2v2" />
      <path d="M12 10l-8.5 6.2c-.8.6-.4 1.8.6 1.8h15.8c1 0 1.4-1.2.6-1.8z" />
    </>
  ),
  trophee: (
    <>
      <path d="M8 4h8v5.5a4 4 0 0 1-8 0z" />
      <path d="M8 6H5.5a2.5 2.5 0 0 0 2.6 4M16 6h2.5a2.5 2.5 0 0 1-2.6 4" />
      <path d="M12 13.5v3.5M8.5 20.5h7M10 17h4" />
    </>
  ),
  lieu: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
}

export default function Icone({ nom, taille = 28 }) {
  return (
    <svg
      width={taille}
      height={taille}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {formes[nom] ?? formes.serveur}
    </svg>
  )
}
