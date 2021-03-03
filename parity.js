// Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est impair, sinon la fonction retournera false.

const isOdd = (nb) => {
  return (nb % 2 === 0) ? false : true;
}
let nb = 13
console.log(isOdd(nb))