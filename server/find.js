const numbers = [3, 4, 5, 6, 1, 3, 6];

// let rta = undefined
// for (let index = 0; numbers < array.length; index++) {
//     const element = numbers[index];
//     if(element === 30) {
//         rta = element;
//         break;
//     }
// }

const rta2 = numbers.find(item => item === 6)
console.log('rta', rta2);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const rta3 = products.find(item => item.id === '🌭');
console.log(rta3);
  