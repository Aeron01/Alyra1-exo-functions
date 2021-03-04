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

/* let str = "hello"
console.log(str)*/    // ligne 13 et 14 serve à la vérification
console.log(reverseStr('hello!'))
console.log(isPalindrome('elle'))