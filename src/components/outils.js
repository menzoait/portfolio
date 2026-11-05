import { competences, realisations } from '../data.js'

// Nombre de réalisations qui couvrent une compétence
export function compterRealisations(idCompetence) {
  return realisations.filter((r) => r.competences.includes(idCompetence)).length
}

export function texteNombre(n) {
  if (n === 0) return 'Aucune réalisation'
  if (n === 1) return '1 réalisation'
  return `${n} réalisations`
}

// Valeur de tri d'une date « JJ/MM/AAAA » (ou « 19 et 27/10/2026 » : le premier jour compte)
function valeurDate(texte = '') {
  const m = texte.match(/^(\d{1,2})\D.*?(\d{2})\/(\d{4})$/) ?? texte.match(/^(\d{1,2})\/(\d{2})\/(\d{4})$/)
  return m ? Number(m[3]) * 10000 + Number(m[2]) * 100 + Number(m[1]) : Infinity
}

// Les réalisations dans l'ordre chronologique (à date égale, l'ordre de data.js)
export function parDate(liste) {
  return [...liste].sort((a, b) => valeurDate(a.date) - valeurDate(b.date))
}

export function trouverCompetence(id) {
  return competences.find((c) => c.id === id)
}
