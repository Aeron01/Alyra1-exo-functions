/* En vous inspirant de la fonction showStars vue en cours, Ecrire une fonction pyramid qui prend 3 paramètres:

le nombre d'éléments qui sera la base de la pyramide
un boolean pour vérifier si la pyramide sera générée à l'envers ou à l'endroit
une string(un caractère) qui sera le motif à afficher contrairement à l'exemple du cours qui affiche par défaut le caractère *. */


const Pyrmd = (nbBase, reverse, caract) => {
  let str = ''
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      str += caract.repeat(i)
      if (i !== nbBase) {
        str += '\n'
      }
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      str += caract.repeat(i)
      if (i !== 1) {
        str += '\n'
      }
    }
  }
  return str
}


let stri = Pyrmd(16, false, '#')
console.log(stri)
