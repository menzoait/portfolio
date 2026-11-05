// =====================================================================
//  CONTENU DU PORTFOLIO
//  C'est LE fichier à modifier pour changer les textes du site.
//
//  Pour voir le résultat pendant que tu modifies :  npm run dev
//  Pour mettre en ligne :  npm run build  puis  firebase deploy --only hosting
//
//  Attention aux guillemets : chaque texte est entre "..." et chaque
//  ligne d'un objet se termine par une virgule.
// =====================================================================

export const profil = {
  prenom: "Menzo",
  nom: "Ait Tahar",
  titre: "Étudiant en BTS SIO, option SISR, à l'ENSITECH de Cergy",
  // La grande phrase de la page d'accueil (une ou deux phrases maximum).
  accroche:
    "Je prépare le BTS SIO option SISR en alternance, entre le support informatique des collèges du Val-d'Oise et ma propre infrastructure de test.",
  // Le paragraphe sous la phrase (réécris-le avec tes mots si tu veux).
  presentation:
    "Au Conseil départemental du Val-d'Oise, je prépare et déploie les postes, je configure switchs, imprimantes et iPad, et je traite les tickets des utilisateurs. En formation, je construis sous VirtualBox une infrastructure complète : deux pfSense en haute disponibilité, Active Directory, un site web en HTTPS, la supervision avec Zabbix et la gestion de parc avec GLPI.",
  email: "menzoaittahar@gmail.com",
  // Laisse "" pour masquer un lien. Exemple : "https://www.linkedin.com/in/ton-profil"
  linkedin: "https://www.linkedin.com/in/menzo-ait-tahar/",
  github: "https://github.com/menzoait",
  // CV : place ton fichier PDF dans le dossier public/ puis écris son nom ici,
  // par exemple "/cv-menzo-ait-tahar.pdf". Laisse "" pour masquer le lien.
  cv: "/cv-menzo-ait-tahar.pdf",
  // Tableau de synthèse officiel (fichier fourni par ton école), même principe.
  tableauSynthese: "",
};

// Ta formation (page « Le BTS SIO » et sous-menu Formation).
// Les réalisations de formation sont rangées par année avec le champ "annee"
// (1 par défaut si tu ne le mets pas).
export const formation = {
  diplome: "BTS SIO, Services informatiques aux organisations",
  option: "SISR, solutions d'infrastructure, systèmes et réseaux",
  ecole: "ENSITECH, Cergy",
  rythme: "En alternance",
  presentation:
    "Le BTS SIO se prépare en deux ans. L'option SISR forme à installer, administrer et sécuriser l'infrastructure d'une organisation : postes, serveurs, réseaux et services.",
  annees: [
    { annee: 1, titre: "Année 1", periode: "2026-2027", aVenir: "" },
    { annee: 2, titre: "Année 2", periode: "2027-2028", aVenir: "Réalisations à partir de septembre 2027." },
  ],
};

// « Ce que j'utilise » sur la page Compétences : les outils de tes RP, de ton alternance
// et de ton CV, rangés par famille. Ajoute ou retire des outils librement.
export const outilsMaitrises = [
  { groupe: "Systèmes", icone: "serveur", outils: ["Windows Server", "Active Directory", "Linux", "PowerShell", "VirtualBox"] },
  { groupe: "Réseau et sécurité", icone: "bouclier", outils: ["pfSense", "VLAN", "NAT", "CARP"] },
  { groupe: "Services", icone: "supervision", outils: ["Apache", "Zabbix", "GLPI"] },
  { groupe: "Parc et support", icone: "parc", outils: ["Masterisation", "Jamf School", "ServiceNow"] },
  { groupe: "Web", icone: "code", outils: ["React", "Firebase"] },
];

// Le schéma de ta maquette affiché sur la page d'accueil (repris de tes RP).
export const maquette = {
  wan: "Réseau de la salle",
  pareFeu: [
    { nom: "pf1", role: "pfSense, maître" },
    { nom: "pf2", role: "pfSense, secours" },
  ],
  note: "pf1 et pf2 partagent les passerelles par CARP et se synchronisent sur le réseau SYNC (10.0.0.0/24).",
  zones: [
    {
      nom: "LAN",
      reseau: "192.168.1.0/24",
      machines: [
        { nom: "CLI-WIN-01", role: "Windows 11" },
        { nom: "CLI-UBU-01", role: "Ubuntu" },
        { nom: "SRV-WEB", role: "Apache, HTTPS" },
      ],
    },
    {
      nom: "SERVEURS",
      reseau: "192.168.2.0/24",
      machines: [
        { nom: "SRV-DC1", role: "AD DS, DNS" },
        { nom: "SRV-OUTILS", role: "Zabbix" },
        { nom: "SRV-GLPI", role: "GLPI" },
      ],
    },
  ],
};

// Les six compétences du bloc 1 du BTS SIO.
// "couleur" = la couleur du câble sur le panneau de brassage.
// Ne change pas les "id" : ils sont utilisés dans les réalisations plus bas.
export const competences = [
  {
    id: "patrimoine",
    court: "Patrimoine informatique",
    intitule: "Gérer le patrimoine informatique",
    couleur: "#4f8cf0",
  },
  {
    id: "incidents",
    court: "Incidents et assistance",
    intitule: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    couleur: "#ef5350",
  },
  {
    id: "presence",
    court: "Présence en ligne",
    intitule: "Développer la présence en ligne de l'organisation",
    couleur: "#f0912b",
  },
  {
    id: "projet",
    court: "Mode projet",
    intitule: "Travailler en mode projet",
    couleur: "#2fb36f",
  },
  {
    id: "service",
    court: "Mise à disposition d'un service",
    intitule: "Mettre à disposition des utilisateurs un service informatique",
    couleur: "#9b72f0",
  },
  {
    id: "devpro",
    court: "Développement professionnel",
    intitule: "Organiser son développement professionnel",
    couleur: "#b98458",
  },
];

// Les groupes du tableau de synthèse officiel (épreuve E5).
// Un groupe sans réalisation n'est pas affiché.
export const groupes = [
  { id: "formation", titre: "Réalisations en cours de formation" },
  { id: "pro1", titre: "Réalisations en milieu professionnel, 1re année" },
  { id: "pro2", titre: "Réalisations en milieu professionnel, 2e année" },
];

// Tes réalisations professionnelles (RP), dans l'ordre.
// Pour en ajouter une, copie un bloc { ... }, colle-le à la suite
// (avec une virgule entre les blocs) et modifie-le.
//   code        : "RP12", etc. (laisse "" si ce n'est pas une RP)
//   icone       : l'icône de la ligne (noms disponibles dans src/components/Icone.jsx)
//   cadre       : "formation", "pro1" ou "pro2" (voir les groupes plus haut)
//   date        : au format JJ/MM/AAAA, la même que dans le compte rendu et le
//                 tableau de synthèse (sur plusieurs jours : "19 et 27/10/2026").
//                 Les réalisations s'affichent dans l'ordre des dates.
//   competences : les id des compétences couvertes (voir la liste plus haut)
//   machines    : les machines de la maquette utilisées, avec leur système
//   lien        : le PDF du compte rendu placé dans public/docs/
//                 (ex: "/docs/RP4.pdf"). Laisse "" s'il n'y en a pas.
//
// Les textes résument tes comptes rendus. Les compétences cochées sont une
// proposition : coche les mêmes dans ton tableau de synthèse officiel.
const contexte = "Formation, ENSITECH Cergy";

export const realisations = [
  {
    code: "RP1",
    titre: "Préparation des postes clients",
    icone: "ecran",
    cadre: "formation",
    contexte,
    date: "12/10/2026",
    description:
      "Installation de deux postes d'administration sous VirtualBox, un Windows 11 et un Ubuntu Desktop, qui servent toute l'année à piloter les serveurs. Tests de connectivité, serveur SSH sur Ubuntu piloté depuis Windows, outils d'administration (RSAT, Remmina) et instantané de référence.",
    competences: ["service", "devpro"],
    machines: [
      { nom: "CLI-WIN-01", systeme: "Windows 11" },
      { nom: "CLI-UBU-01", systeme: "Ubuntu Desktop" },
    ],
    outils: ["VirtualBox", "SSH", "RSAT", "Remmina"],
    lien: "/docs/rp01-postes-clients.pdf",
  },
  {
    code: "RP2",
    titre: "Création des serveurs Debian 13 et Windows Server 2019",
    icone: "serveur",
    cadre: "formation",
    contexte,
    date: "07/09/2026",
    description:
      "Création et dimensionnement de deux serveurs sous VirtualBox : Debian 13 installé depuis l'image netinst (5 Go de RAM, 2 processeurs, 25 Gio) et Windows Server 2019 avec interface graphique (6 Go, 3 processeurs, 50 Gio). Chacun est sauvegardé par un instantané avant l'ajout des services.",
    competences: ["service", "devpro"],
    machines: [
      { nom: "Debian 13", systeme: "Debian 13" },
      { nom: "SRV-WINDOWS", systeme: "Windows Server 2019" },
    ],
    outils: ["VirtualBox", "Disques VDI dynamiques", "Instantanés"],
    lien: "/docs/rp02-serveurs.pdf",
  },
  {
    // Complète la description et les machines utilisées.
    code: "RP3",
    titre: "Commandes Bash et PowerShell",
    icone: "invite",
    cadre: "formation",
    contexte,
    date: "14/09/2026",
    description:
      "Administration des serveurs en ligne de commande : Bash sous Linux et PowerShell sous Windows.",
    competences: ["service", "devpro"],
    machines: [],
    outils: ["Bash", "PowerShell"],
    lien: "",
  },
  {
    code: "RP4",
    titre: "Pare-feu pfSense : adressage IP, DHCP et filtrage",
    icone: "bouclier",
    cadre: "formation",
    contexte,
    date: "05/10/2026",
    description:
      "Installation de pfSense 2.6.0 entre le réseau physique (WAN) et un réseau interne 192.168.1.0/24 (LAN) dont il est la passerelle. Activation du serveur DHCP et vérification des baux sur les clients, puis analyse des règles de filtrage avec un test de blocage du ping (ICMP).",
    competences: ["service", "patrimoine"],
    machines: [
      { nom: "pfSense", systeme: "pfSense 2.6.0" },
      { nom: "CLI-WIN-01", systeme: "Windows 11" },
      { nom: "SRV-DEBIAN", systeme: "Debian 13" },
    ],
    outils: ["pfSense", "DHCP", "Réseaux internes VirtualBox"],
    lien: "/docs/rp04-pfsense-dhcp-filtrage.pdf",
  },
  {
    code: "RP5",
    titre: "Segmentation du réseau et filtrage",
    icone: "reseau",
    cadre: "formation",
    contexte,
    date: "05/10/2026",
    description:
      "Création d'une zone SERVEURS (192.168.2.0/24) sur une troisième interface de pfSense pour isoler les serveurs du LAN. Règles de filtrage (ping et SSH depuis le LAN, accès Internet, blocage vers le LAN), test de l'ordre de lecture des règles et journalisation des connexions bloquées.",
    competences: ["patrimoine", "service"],
    machines: [
      { nom: "pfSense", systeme: "pfSense 2.6.0" },
      { nom: "SRV-DEBIAN", systeme: "Debian 13" },
      { nom: "CLI-WIN-01", systeme: "Windows 11" },
    ],
    outils: ["pfSense", "SSH", "Journaux du pare-feu"],
    lien: "/docs/rp05-segmentation-filtrage.pdf",
  },
  {
    code: "RP6",
    titre: "Serveur web, base de données et HTTPS",
    icone: "globe",
    cadre: "formation",
    contexte,
    date: "19/10/2026",
    description:
      "Site intranet sur Debian 13 : Apache et PHP affichent les données d'une base MariaDB, avec un compte en lecture seule et une base fermée au réseau. Le site est chiffré en HTTPS grâce à un certificat signé par l'autorité de certification interne créée dans pfSense.",
    competences: ["service", "patrimoine"],
    machines: [
      { nom: "SRV-DEBIAN", systeme: "Debian 13" },
      { nom: "pfSense", systeme: "pfSense 2.6.0" },
      { nom: "CLI-WIN-01", systeme: "Windows 11" },
    ],
    outils: ["Apache", "PHP", "MariaDB", "OpenSSL", "Autorité de certification pfSense"],
    lien: "/docs/rp06-web-bdd-https.pdf",
  },
  {
    code: "RP7",
    titre: "Publication du site par NAT",
    icone: "partage",
    cadre: "formation",
    contexte,
    date: "19/10/2026",
    description:
      "Publication du site HTTPS vers le réseau de la salle, et de lui seul : redirection du port 443 sur pfSense vers le serveur Apache, règle de pare-feu associée et journalisation de chaque visite. SSH et MariaDB restent fermés depuis l'extérieur.",
    competences: ["presence", "service", "patrimoine"],
    machines: [
      { nom: "pfSense", systeme: "pfSense 2.6.0" },
      { nom: "SRV-WEB", systeme: "Debian 13" },
    ],
    outils: ["pfSense", "NAT", "Redirection de port"],
    lien: "/docs/rp07-publication-nat.pdf",
  },
  {
    code: "RP8",
    titre: "Active Directory, DNS et GPO",
    icone: "annuaire",
    cadre: "formation",
    contexte,
    date: "12/10/2026",
    description:
      "Promotion de Windows Server 2019 en contrôleur du domaine tp.lan avec DNS intégré, et jonction d'un poste client au domaine. Création des OU, des utilisateurs et des groupes, puis déploiement de deux GPO (fond d'écran, blocage du Panneau de configuration) vérifiées avec gpresult.",
    competences: ["patrimoine", "service"],
    machines: [
      { nom: "SRV-DC1", systeme: "Windows Server 2019" },
      { nom: "Client Windows", systeme: "joint au domaine" },
    ],
    outils: ["AD DS", "DNS", "GPO", "pfSense"],
    lien: "/docs/rp08-active-directory.pdf",
  },
  {
    code: "RP9",
    titre: "Redondance du pare-feu avec CARP",
    icone: "redondance",
    cadre: "formation",
    contexte,
    date: "19/10/2026",
    description:
      "Ajout d'un second pfSense : les deux pare-feu partagent les adresses virtuelles CARP du LAN et de la zone SERVEURS, et restent synchronisés par pfsync et XMLRPC sur un réseau dédié. Au test de bascule, pf2 reprend le trafic dès que pf1 tombe.",
    competences: ["patrimoine", "service"],
    machines: [
      { nom: "pf1", systeme: "pfSense 2.6.0" },
      { nom: "pf2", systeme: "pfSense 2.6.0" },
    ],
    outils: ["CARP", "pfsync", "XMLRPC"],
    lien: "/docs/rp09-redondance-carp.pdf",
  },
  {
    code: "RP10",
    titre: "Supervision avec Zabbix",
    icone: "supervision",
    cadre: "formation",
    contexte,
    date: "19 et 27/10/2026",
    description:
      "Serveur Zabbix installé sur SRV-OUTILS : il surveille le serveur web et le contrôleur de domaine par agent, et les deux pfSense en SNMP. Un déclencheur alerte dès que le site web ne répond plus, puis se résout seul au retour du service.",
    competences: ["patrimoine", "incidents"],
    machines: [
      { nom: "SRV-OUTILS", systeme: "Debian 13" },
      { nom: "SRV-WEB", systeme: "Debian 13" },
      { nom: "SRV-DC1", systeme: "Windows Server 2019" },
      { nom: "pf1 et pf2", systeme: "pfSense 2.6.0" },
    ],
    outils: ["Zabbix", "Agent Zabbix", "SNMP"],
    lien: "/docs/rp10-supervision-zabbix.pdf",
  },
  {
    code: "RP11",
    titre: "Gestion de parc avec GLPI",
    icone: "parc",
    cadre: "formation",
    contexte,
    date: "27/10/2026",
    description:
      "GLPI 11 installé et sécurisé sur SRV-GLPI, dans la zone SERVEURS, avec sa propre base de données. L'agent GLPI inventorie les machines sans saisie, et chaque demande d'assistance devient un ticket suivi jusqu'à sa clôture.",
    competences: ["patrimoine", "incidents"],
    machines: [
      { nom: "SRV-GLPI", systeme: "Debian 13" },
      { nom: "CLI-WIN-01", systeme: "Windows 11" },
      { nom: "SRV-DEBIAN", systeme: "Debian 13" },
    ],
    outils: ["GLPI", "Agent GLPI", "Apache", "MariaDB"],
    lien: "/docs/rp11-gestion-parc-glpi.pdf",
  },
  {
    code: "",
    titre: "Création de mon portfolio en React",
    icone: "code",
    cadre: "formation",
    contexte: "Projet personnel",
    date: "03/11/2026",
    description:
      "Conception de ce site avec React et Vite, puis mise en ligne sur Firebase Hosting, mené comme un petit projet : besoin, étapes, tests et livraison.",
    objectif:
      "Présenter mes réalisations et mon alternance sur un site en ligne, demandé par l'école pour l'épreuve E5.",
    etapes: [
      "Préparation de l'environnement : Node.js, npm et Firebase CLI",
      "Création du projet Vite et premier déploiement sur Firebase",
      "Rédaction du contenu à partir de mes comptes rendus, de mon CV et du tableau de synthèse",
      "Navigation en plusieurs pages et design « baie serveur »",
      "Tests sur ordinateur et sur téléphone, puis mise en ligne",
    ],
    competences: ["presence", "projet", "devpro"],
    machines: [],
    outils: ["React", "Vite", "Firebase Hosting"],
    lien: "",
  },
  // ----- Missions en entreprise, 1re année (Conseil départemental du Val-d'Oise) -----
  //   objectif : le but de la mission
  //   etapes   : ce que tu as fait, dans l'ordre
  {
    code: "",
    titre: "Préparation des postes : BIOS/UEFI et masterisation",
    icone: "puce",
    cadre: "pro1",
    contexte: "En entreprise, Conseil départemental du Val-d'Oise",
    date: "10/09/2026",
    description:
      "Des postes neufs livrés prêts à servir : micrologiciel réglé, puis une même image système installée sur chacun.",
    objectif:
      "Que chaque poste reparte avec la même configuration, sans tout refaire à la main à chaque fois.",
    etapes: [
      "Réglage du BIOS/UEFI : démarrage en UEFI, ordre de démarrage, boot réseau",
      "Montage d'un poste modèle avec le système, les mises à jour et les logiciels",
      "Capture de ce poste en image de référence (le master)",
      "Installation de l'image sur les nouveaux postes",
      "Nommage, mise en réseau et contrôle de chaque poste",
      "Livraison à l'utilisateur",
    ],
    competences: ["patrimoine", "service"],
    machines: [],
    outils: ["BIOS/UEFI", "Windows"],
    lien: "",
  },
  {
    code: "",
    titre: "Mise en service d'un switch",
    icone: "reseau",
    cadre: "pro1",
    contexte: "En entreprise, Conseil départemental du Val-d'Oise",
    date: "11/09/2026",
    description:
      "Un switch ajouté au réseau : accès d'administration, ports et VLAN réglés selon les besoins.",
    objectif:
      "Brancher le nouvel équipement sans couper le réseau, et garder sa configuration en sauvegarde.",
    etapes: [
      "Accès au switch par le port console ou par son interface web",
      "Nom, adresse IP d'administration et accès protégé",
      "Affectation des ports et création des VLAN",
      "Contrôle des liaisons et des postes branchés",
      "Enregistrement de la configuration",
    ],
    competences: ["patrimoine", "service"],
    machines: [],
    outils: ["Switch administrable", "VLAN"],
    lien: "",
  },
  {
    code: "",
    titre: "Installation d'une imprimante réseau",
    icone: "imprimante",
    cadre: "pro1",
    contexte: "En entreprise, Conseil départemental du Val-d'Oise",
    date: "25/09/2026",
    description:
      "Une imprimante partagée sur le réseau, utilisable depuis les postes du service.",
    objectif:
      "Que les postes concernés trouvent toujours l'imprimante, grâce à une adresse IP stable.",
    etapes: [
      "Branchement au réseau avec une adresse IP fixe ou réservée",
      "Paramétrage depuis la page d'administration de l'imprimante",
      "Pilote installé et imprimante ajoutée sur les postes",
      "Impression de test et validation avec les utilisateurs",
    ],
    competences: ["patrimoine", "service"],
    machines: [],
    outils: ["Imprimante réseau", "TCP/IP"],
    lien: "",
  },
  {
    code: "",
    titre: "Traitement des tickets d'assistance",
    icone: "ticket",
    cadre: "pro1",
    contexte: "En entreprise, Conseil départemental du Val-d'Oise",
    date: "Depuis 09/2026",
    description:
      "Les demandes et les pannes signalées par les utilisateurs, suivies de l'ouverture du ticket à sa clôture.",
    objectif: "Dépanner rapidement et laisser une trace écrite de chaque intervention.",
    etapes: [
      "Lecture de la demande reçue",
      "Tri : demande ou incident, urgence, priorité",
      "Recherche de la cause, à distance ou sur place",
      "Correction, ou escalade vers la bonne équipe",
      "Retour à l'utilisateur et clôture du ticket avec la solution",
    ],
    competences: ["incidents", "service"],
    machines: [],
    outils: [],
    lien: "",
  },
  {
    code: "",
    titre: "Gestion des iPad avec Jamf School",
    icone: "tablette",
    cadre: "pro1",
    contexte: "En entreprise, Conseil départemental du Val-d'Oise",
    date: "Depuis 09/2026",
    description:
      "Une flotte d'iPad pilotée depuis la console Jamf School : inscription, réglages et applications envoyés à distance.",
    objectif: "Des iPad identiques et prêts à l'emploi, sans les configurer un par un.",
    etapes: [
      "Enrôlement des iPad dans Jamf School",
      "Profils de configuration : Wi-Fi, restrictions, réglages",
      "Envoi des applications sur les appareils",
      "Classement des iPad en groupes selon leur usage",
      "Contrôle sur les appareils et mises à jour à distance",
    ],
    competences: ["patrimoine", "service"],
    machines: [],
    outils: ["Jamf School", "iPadOS", "MDM"],
    lien: "",
  },
];

// Tes certifications (badges Credly de Cisco Networking Academy).
//   badge   : l'image officielle du badge sur Credly
//   secours : une copie locale (public/badges/) affichée si Credly ne répond pas
//   lien    : la page publique du badge sur Credly, pour « Vérifier la certification »
export const credly = "https://www.credly.com/users/menzo-aittahar";

export const certifications = [
  {
    titre: "Introduction à l'IA moderne",
    original: "Introduction to Modern AI",
    statut: "Obtenue",
    date: "26/10/2026",
    organisme: "Cisco Networking Academy",
    description:
      "Utilisation des fonctions d'IA d'applications courantes (photo, traduction, chatbots), techniques de prompt et fonctionnement des modèles d'IA.",
    badge: "https://images.credly.com/size/340x340/images/e2d12302-10f9-40d4-8ff1-066a7008b61d/blob",
    secours: "/badges/introduction-ia-moderne.png",
    lien: "https://www.credly.com/badges/672606f2-5d8f-46b8-85c8-5127d7687d87",
  },
  {
    titre: "Notions de base des systèmes d'exploitation",
    original: "Operating Systems Basics",
    statut: "Obtenue",
    date: "23/09/2026",
    organisme: "Cisco Networking Academy",
    description:
      "Rôle et fonctionnement des systèmes d'exploitation (Windows, Linux, iOS, Android), sécurité de base des systèmes et configuration réseau des appareils mobiles.",
    badge: "https://images.credly.com/size/340x340/images/dcdf1a3c-2594-4f4c-a33a-050b4bca58b5/image.png",
    secours: "/badges/operating-systems-basics.png",
    lien: "https://www.credly.com/badges/f5d456af-18d5-41d2-8234-4070009324ad",
  },
  {
    titre: "Parcours technicien réseau",
    original: "Network Technician Career Path",
    statut: "Obtenue",
    date: "06/03/2026",
    organisme: "Cisco Networking Academy",
    description:
      "Fondamentaux des réseaux, câblage, adressage et services réseau, configuration de base des équipements Cisco, dépannage et support des postes, des réseaux et des utilisateurs.",
    badge: "https://images.credly.com/size/340x340/images/978f88dc-c247-4093-9d39-6efac3651297/image.png",
    secours: "/badges/network-technician-career-path.png",
    lien: "https://www.credly.com/badges/b512d41b-967e-471d-8381-48612dd41157",
  },
  {
    titre: "Introduction à la cybersécurité",
    original: "Introduction to Cybersecurity",
    statut: "Obtenue",
    date: "05/12/2025",
    organisme: "Cisco Networking Academy",
    description:
      "Les enjeux des cybermenaces pour les organisations, les vulnérabilités, la détection des menaces et la défense, et la protection des données.",
    badge: "https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    secours: "/badges/introduction-cybersecurite.png",
    lien: "https://www.credly.com/badges/28d88b55-2eba-4d8a-a19f-f6d62a9456c6",
  },
];

// Ton alternance. Tant que "entreprise" est vide, la rubrique n'est pas affichée.
export const alternance = {
  entreprise: "Conseil départemental du Val-d'Oise",
  lieu: "Cergy",
  poste: "Technicien systèmes et réseaux en alternance",
  direction: "Direction de l'Éducation et des Collèges",
  service: "Développement et Stratégie Numérique",
  periode: "2026 – 2028",
  rythme: "", // ex: "2 jours en formation, 3 jours en entreprise" (laisse "" pour masquer)
  presentation: "Le Département est notamment chargé des collèges du Val-d'Oise.",
  // Ton quotidien en 2 ou 3 phrases (ce que fait ton service, ce que tu gères, avec qui).
  // Laisse "" pour masquer la ligne « Mon rôle » sur la page Alternance.
  role: "",
  // Les missions de chaque année sont les réalisations dont le "cadre" vaut "pro1" ou "pro2".
  annees: [
    { cadre: "pro1", titre: "Année 1", periode: "2026-2027", aVenir: "" },
    { cadre: "pro2", titre: "Année 2", periode: "2027-2028", aVenir: "Missions à partir de septembre 2027." },
  ],
};

// Ton parcours (repris de ton CV), du plus récent au plus ancien.
// "description" peut rester vide : "".
export const formations = [
  {
    periode: "Septembre 2026 – 2028",
    titre: "BTS SIO, option SISR",
    lieu: "ENSITECH, Cergy",
    description: "Administration Windows et Linux, sécurité réseau, virtualisation et cybersécurité.",
  },
  {
    periode: "Juillet 2025",
    titre: "Baccalauréat général, spécialités mathématiques et SVT",
    lieu: "Lycée de l'Hautil, Jouy-le-Moutier",
    description: "",
  },
  {
    periode: "Cours en ligne",
    titre: "Cours CCNA (réseaux Cisco)",
    lieu: "Cisco Networking Academy",
    description: "",
  },
];

export const experiences = [
  {
    periode: "Depuis septembre 2026",
    titre: "Technicien systèmes et réseaux en alternance",
    lieu: "Conseil départemental du Val-d'Oise, Cergy",
    description:
      "Service Développement et Stratégie Numérique, Direction de l'Éducation et des Collèges.",
  },
  {
    periode: "Depuis janvier 2026",
    titre: "Hôte de caisse",
    lieu: "Leclerc, Conflans-Sainte-Honorine",
    description:
      "Accueil et assistance des clients, encaissements et résolution rapide des anomalies de prix ou de paiement.",
  },
  {
    periode: "Septembre – décembre 2025",
    titre: "Support informatique (DTI)",
    lieu: "Manpower, La Défense",
    description:
      "Déploiement d'une application interne, gestion des comptes utilisateurs, exploitation de données Excel pour le helpdesk et résolution d'incidents sur ServiceNow et Microsoft Teams.",
  },
  {
    periode: "Juillet 2024 et juillet 2025",
    titre: "Agent polyvalent (CDD d'été)",
    lieu: "École d'ingénieurs en bio-industrie (EBI), Cergy",
    description:
      "Archivage et numérisation des dossiers étudiants, maintenance de la connexion Wi-Fi des chambres et inventaire des produits chimiques.",
  },
];

// Tes projets web (dépôt GitHub tp-git-bts-sio, publiés avec GitHub Pages).
//   sisr  : true pour mettre en avant un projet lié à ton option
//   site  : l'adresse du site en ligne ; code : le dossier sur GitHub
const depot = "https://github.com/menzoait/tp-git-bts-sio/tree/main";
const pagesGithub = "https://menzoait.github.io/tp-git-bts-sio";

export const projets = [
  {
    titre: "Calculateur de sous-réseaux IPv4",
    icone: "calcul",
    sisr: true,
    description:
      "Une adresse IP et un préfixe suffisent : le site donne le réseau, le broadcast, la plage d'hôtes, le masque et la vue binaire des 32 bits.",
    technos: ["HTML", "CSS", "JavaScript"],
    site: `${pagesGithub}/calculateur-sous-reseaux/`,
    code: `${depot}/calculateur-sous-reseaux`,
  },
  {
    titre: "Dressing du matin",
    icone: "cintre",
    description:
      "Une garde-robe qui propose trois tenues chaque matin selon la météo, montrées sur un mannequin 3D.",
    technos: ["JavaScript", "WebGL", "API météo"],
    site: `${pagesGithub}/dressing-du-matin/`,
    code: `${depot}/dressing-du-matin`,
  },
  {
    titre: "Ligue des champions 2026-27",
    icone: "trophee",
    description:
      "Site non officiel de la phase de ligue : scores en direct, classement et fiches des clubs, mis à jour toutes les 30 secondes.",
    technos: ["JavaScript", "API publique"],
    site: `${pagesGithub}/ldc-2026-27/`,
    code: `${depot}/ldc-2026-27`,
  },
];

// Ta veille technologique.
//   sources  : { nom: "Le Monde Informatique", url: "https://www.lemondeinformatique.fr" }
//   articles : { date: "3 novembre 2026", titre: "...", source: "...", url: "https://...", resume: "..." }
export const veille = {
  // Les étapes de ta démarche de veille, affichées en flux (icônes : voir Icone.jsx)
  demarche: [
    { titre: "Rechercher", detail: "Blogs Jamf, Microsoft et Apple, alertes", icone: "recherche" },
    { titre: "Trier", detail: "Sources officielles et récentes d'abord", icone: "filtre" },
    { titre: "Analyser", detail: "Ce que ça change pour les iPad que je gère", icone: "analyse" },
    { titre: "Partager", detail: "Un résumé par article, ici", icone: "partage" },
  ],
  sujet: "La gestion des appareils mobiles (MDM)",
  description:
    "Gérer à distance une flotte d'iPad et de postes : inscription, réglages, applications, mises à jour et sécurité. Je pratique ce sujet chaque jour en alternance avec Jamf School.",
  sources: [
    { nom: "Blog Jamf", url: "https://www.jamf.com/fr/blog/" },
    { nom: "Nouveautés Microsoft Intune", url: "https://learn.microsoft.com/fr-fr/intune/intune-service/fundamentals/whats-new" },
    { nom: "Guide de déploiement Apple", url: "https://support.apple.com/fr-fr/guide/deployment/welcome/web" },
    { nom: "HTMD Blog (Anoop C Nair)", url: "https://www.anoopcnair.com/" },
  ],
  // Les plus récents en premier. Relis chaque résumé et reformule-le avec tes mots.
  articles: [
    {
      date: "9 octobre 2026",
      titre: "État de l'union – Éducation : JNUC 2026",
      source: "Blog Jamf",
      url: "https://www.jamf.com/fr/blog/etat-de-lunion-education-jnuc-2026/",
      resume:
        "Jamf School se rapproche de l'annuaire : l'iPad d'un élève se configure tout seul selon sa classe, avec connexion par QR code et une liste d'étapes pour finir l'installation. Les « blueprints » appliquent les réglages directement sur l'appareil.",
    },
    {
      date: "8 juin 2026",
      titre: "WWDC 2026 : ce qui change pour les administrateurs MDM Apple",
      source: "ManageEngine",
      url: "https://www.manageengine.com/mobile-device-management/articles/wwdc-2026-apple-admins-mdm-changes.html",
      resume:
        "Avec iPadOS 27, le MDM pourra lire l'état du matériel (caméra, biométrie), récupérer des journaux de diagnostic et déclarer les autorisations des applications. Apple pousse aussi à convertir les anciens profils en gestion déclarative.",
    },
    {
      date: "10 mars 2026",
      titre: "Apple abandonne les anciennes commandes MDM de mise à jour",
      source: "HTMD Blog",
      url: "https://www.anoopcnair.com/apple-deprecates-legacy-mdm-updates-as-intune/",
      resume:
        "Depuis iOS, iPadOS et macOS 26, les anciennes commandes MDM de mise à jour sont dépréciées. Intune marque ses anciennes stratégies comme obsolètes : il faut passer les mises à jour en gestion déclarative (DDM).",
    },
  ],
};
