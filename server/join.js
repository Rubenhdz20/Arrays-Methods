const elements = ['aire', 'agua', 'fuego'];

let rta = '';
const sep = '--';
for (let index = 0; elements < array.length; index++) {
    const element = array[index];
    rta = rta + element + sep;
}

const rta2 = elements.join('--');

const words = 'Manipulacion de arrays';

const newWords = words.split(' ');

console.log(newWords);

// Otro ejemplo muy común del método join en el ejercicio del palíndromo (Básicamente una palabra que se escribe igual de derecha a izquierda y viceversa

const word = 'Arepera'
    
const palindrome = (word) => {
    // Lo que hace dividir, voltear y luego unirlo con el join...
    return word.split('').reverse().join('').toLocaleLowerCase()
};
    
console.log(palindrome(word))
    