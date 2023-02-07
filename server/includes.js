const pets = ['cat', 'pet', 'bat'];

let includeInArray = false;
for (let index = 0; pets < array.length; index++) {
    const element = pets[index];
    if(element === 'dog') {
        includeInArray = true;
        break;
    }
}

pets.includes('dog');