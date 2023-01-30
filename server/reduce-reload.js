const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj
}, {})

console.log(rta);

// output 

// {
//     1: 1,
//     3: 2,
//     2: 1
// }

// Ahora has un algoritmo en el cual te muestre por rangos cuantos numeros hay
// Es decir 1-5 cuantos hay? -  6-8 cuantos hay? - 9 - 10 cuantos hay?

const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
const result = arr.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5']++
  } else if (item <= 8) {
    obj['6-8']++
  } else {
    obj['9-10']++
  }
  return obj
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0
})

console.log(result)