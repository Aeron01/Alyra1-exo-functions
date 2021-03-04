// Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est impair, sinon la fonction retournera false.

const isOdd = (nb) => {
  nb = (nb % 2 !== 0) //? false : true;
  return `Is this number odd ? ${nb}`
}
let nb = 13
console.log(isOdd(nb))


// correction

const isOdd1 = (nb1) => {
  // nb = ()   ? false : true;
  return nb1 % 2 !== 0
}

const isEven = (nb1) => {
  return !isOdd1(nb1)
}
let nb1 = 12
console.log(isOdd1(nb1))  // false attendue
console.log(isEven(nb1)) // true attendue