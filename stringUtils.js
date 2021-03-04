// Ecrire une fonction reverseStr qui prend en paramètre une string et qui retourne cette string inversé.Si le paramètre passé est 'Hello!' la fonction devra retourné '!olleH'

const reverseStr = (str) => {
  return str.split('').reverse().join('');
}
const isPalindrome = (str) => {
  if (reverseStr(str) === str) {
    return true
  } else
    return false
}


console.log(reverseStr("? ediS kraD eht fo rewop eht etatsrevo t'noD"))
console.log(isPalindrome('ellelle'))