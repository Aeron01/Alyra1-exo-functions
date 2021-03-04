// Ecrire une fonction convertMiToKm qui fait la conversion d'une distance exprimée en Milles, en Kilomètres. 1 Mille est à égal à 1.60934 Kilomètres.

const convertMiToKm = (nb) => {
  return `{${nb} Milles est égale à ${1.60934 * nb} Km.`
}

console.log(convertMiToKm(5))