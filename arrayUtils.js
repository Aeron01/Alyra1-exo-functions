// Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de nombre.

const biggest = (array) => {
  let max = array[0]

  for (let i = 1; i < array.length; i++) {
    let value = array[i]
    max = (value > max) ? value : max
  }

  return max
}

console.log(biggest([99, 100, 101, 1])) // returns 101


const sortAscend = (tab) => {
  tab.sort((a, b) => a - b);

  return console.log(tab)
}


sortAscend([99, 100, 101, 1]) // returns [1, 99, 100, 101]

const makeUnique = (tab1) => {
  const nwtab = [...new Set(tab1)]
  nwtab.sort((a, b) => a - b);
  return console.log(nwtab)
}
makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]) // returns [1, 2, 3, 4, 5, 7]