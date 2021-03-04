// Ajouter au fichier précédent une fonction isEven qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est pair, sinon la fonction retournera false.
// la fonction isEven devra absolument utiliser la fonction isOdd pour effectuer sa vérification de parité.

const isOdd = (nb) => {
  if (nb % 2 === 0) {
    return false
  } else {
    return true
  }

}
const isEven = (nb) => {
  if (isOdd(false)) {
    return true
  } else {
    return false
  }
}

let nb = 12
console.log(isEven(nb))