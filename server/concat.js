const food = ['pizza', 'spaguetti'];

const beverages = ['soda', 'wine'];

const newOne = food;

for (let index = 0; index < beverages.length; index++) {
    const element = beverages[index];
    newOne.push(element);
}


const rta = food.concat(beverages);
const rta2 = [...food, ...beverages];

// Si estas trabajando con un arrays de Objs igual una forma de copiar cada elemento sin la referencia podría ser:

const newArray = myArray.map(a => ({...a}));