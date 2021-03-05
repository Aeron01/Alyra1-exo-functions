// correction de l'exo

const forEach = (array, fn) => {
  for (const elem of array) {
    fn(elem)
  }
}

forEach([3, 8, 19, 28, 455], console.log)