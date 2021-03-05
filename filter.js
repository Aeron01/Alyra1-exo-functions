// correction de l'exo

const isEven = (numbers) => {
  return numbers % 2 === 0 ? true : false
}

const filter = (func, array) => {
  const filteredTab = []
  for (const elem of array) {
    if (func(elem)) {
      filteredTab.push(elem)
    }
  }
  return filteredTab
}


number = [12, 1, 43, 3, 8, 9, 22, 6, 19, 88, 76]

console.log(filter(isEven, number))

//let newTab = number.filter(isEven)
//console.log(newTab)