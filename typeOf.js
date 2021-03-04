/* Ecrire une fonction typeOf qui prend comme paramètre une variable, et qui retourne une string qui sera le nom du type de cette variable passée en paramètre.
Vous devrez utiliser l'opérateur typeof pour cela */

const tostring = (name) => {
  return `nom du type de variable : ${name}`
}

const names = ['Vador', 1, tostring, console]
for (let i = 0; i < names.length; ++i) {
  console.log(tostring(typeof (names[i])))
}


// correction

const typeOf = (myVar) => {
  return typeof myVar
}

console.log(typeOf(1)) // output (résultat attendu): number
console.log(typeof ([1, 2, 3])) // output (résultat attendu): object