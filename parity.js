// Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est impair, sinon la fonction retournera false.

const isOdd = (nb) => {
  return nb % 2 !== 0
}

// Ajouter au fichier précédent une fonction isEven qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est pair, sinon la fonction retournera false.
// la fonction isEven devra absolument utiliser la fonction isOdd pour effectuer sa vérification de parité.

const isEven = (nb) => {
  return !isOdd(nb)
}

console.log(isOdd(12))  // false attendue
console.log(isEven(12)) // true attendue