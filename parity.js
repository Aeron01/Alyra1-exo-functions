// Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est impair, sinon la fonction retournera false.

const isOdd = (nb) => {
  nb = (nb % 2 === 0) ? false : true;
  return `This number is odd ? ${nb}`
}
let nb = 12
console.log(isOdd(nb))