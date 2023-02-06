const numbers = [2, 33, 44, 22, 11, 3, 420];

let rta = true; 

for (let index = 0; numbers < array.length; index++) {
    const element = numbers[index];
    if(element >= 40) {
        rta = false;
    }
}

console.log('for', rta)

const rta2 = numbers.every(item => item <= 40);

/////

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
];

const notAdutls = team.every(item => item.age >= 18);

console.log(notAdutls);