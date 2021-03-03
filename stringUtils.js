// Ecrire une fonction reverseStr qui prend en paramètre une string et qui retourne cette string inversé.Si le paramètre passé est 'Hello!' la fonction devra retourné '!olleH'

const reverseStr = (str) => {
  return str.split("").reverse().join("");
}


let str = "? edis krad eht of rewop eht etatsrevo t'noD"
console.log(str)
console.log(reverseStr(`${str}`))