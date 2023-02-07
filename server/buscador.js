// Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado.

// Para solucionarlo vas a encontrar una función llamada filterByTerm que recibe los siguientes parámetros de entrada:

// array: Un array de strings con palabras
// term: Un string con el término a buscar
// Dentro del cuerpo de la función filterByTerm debes escribir tu solución.

// Ejemplo 1:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"

Ouput:
["ana", "anastasia"]

// Ejemplo 2:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "xyz"

Output:
[]

export function filterByTerm(array, term) {
    const result = array.filter(item => {
        return item.includes(term);
    })
}

export function filterByTerm(array, term) {
    return array
      .filter((word) => {
        return word
          .toLowerCase()
          .includes(term.toLowerCase())
      });
}
  
  