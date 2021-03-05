// correction de l'exo (bizzare, marche pas)

const isEven = (number) => {
  return number % 2 === 0 ? true : false
}

const filter = (func, array) => {
  const filteredTab = []
  for (const elem of array) {
    if (func(elem)) {
      filteredTab.push(elem)
    }
  }
}


let number = [12, 1, 43, 3, 8, 9, 22, 6, 19, 88, 76]


//let newTab = number.filter(isEven)
//console.log(newTab)