/* un garagiste vous demande de compter le nombre de roues qu'il y a dans son garage.
 Les roues sont toutes montées sur des véhicules de types: monocycle: 1 roue moto: 2 roues voiture: 4 roues limousine: 6 roues
 Ecrivez une fonction countWheels qui prend 4 paramètres, qui correspondent au nombre de chaque véhicules et qui retourne le nombre de roues totales: */

const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
  return nb_monocycle * 1 + nb_moto * 2 + nb_voiture * 4 + nb_limousine * 6
}

console.log(countWheels(10, 20, 7, 2)) // returns 90
console.log(countWheels(2, 3, 4, 5))  // returns 54
console.log(countWheels(0, 70, 12, 8))  // returns 236


// correction
const NB_WHEELS_MONOCYCLE = 1
const NB_WHEELS_CYCLE = 2
const NB_WHEELS_CAR = 4
const NB_WHEELS_LIMO = 6

const countWheels2 = (nb_monocycles, nb_motos, nb_voitures, nb_limousines) => {
  return nb_monocycles * NB_WHEELS_MONOCYCLE + nb_motos * NB_WHEELS_CYCLE + nb_voitures * NB_WHEELS_CAR + nb_limousines * NB_WHEELS_LIMO
}

console.log(countWheels2(10, 20, 7, 2)) // returns 90
console.log(countWheels2(2, 3, 4, 5))  // returns 54
console.log(countWheels2(0, 70, 12, 8))  // returns 236