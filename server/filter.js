const words = ['apple', 'orange', 'pinaple'];

// const newArray = [];
// for (let index = 0; index < words.length; index++) {
//     const item  = words[index];
//     if (item.length >= 6) {
//         newArray.push(item)
//     }
// }

const response = words.filter(item => item.length >= 6);

console.log('original', words);
console.log('newone', response);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
]

const deliveredOnes = orders.filter(item => item.delivered && item.total >= 100);

console.log(deliveredOnes);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Nico'));